import Mux from "@mux/mux-node";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Ensure Mux environment variables are set
const muxTokenId = process.env.MUX_TOKEN_ID;
const muxTokenSecret = process.env.MUX_TOKEN_SECRET;

if (!muxTokenId || !muxTokenSecret) {
  console.error("[Mux] Missing Mux environment variables.");
  throw new Error("MUX_TOKEN_ID and MUX_TOKEN_SECRET must be defined.");
}

const { Video } = new Mux(muxTokenId, muxTokenSecret);

// DELETE handler
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    // Check for user authentication
    const { userId } = auth();
    if (!userId) {
      console.log("Unauthorized access: userId is missing.");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    console.log(`Deleting chapter: ${params.chapterId} from course: ${params.courseId}`);
    
    // Verify if the user owns the course
    const ownCourse = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!ownCourse) {
      console.log("Unauthorized access: user does not own the course.");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find the chapter to delete
    const chapter = await db.chapter.findUnique({
      where: { id: params.chapterId, courseId: params.courseId },
    });

    if (!chapter) {
      console.log(`Chapter not found: ${params.chapterId}`);
      return new NextResponse("Not Found", { status: 404 });
    }

    // Delete the Mux asset if videoUrl exists
    if (chapter.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: { chapterId: params.chapterId },
      });

      if (existingMuxData) {
        console.log(`Deleting Mux asset with ID: ${existingMuxData.assetId}`);
        await Video.Assets.del(existingMuxData.assetId);
        await db.muxData.delete({
          where: { id: existingMuxData.id },
        });
      }
    }

    // Delete the chapter from the database
    const deletedChapter = await db.chapter.delete({
      where: { id: params.chapterId },
    });

    // Check if there are other published chapters in the course
    const publishedChaptersInCourse = await db.chapter.findMany({
      where: { courseId: params.courseId, isPublished: true },
    });

    if (publishedChaptersInCourse.length === 0) {
      await db.course.update({
        where: { id: params.courseId },
        data: { isPublished: false },
      });
    }

    console.log(`Chapter ${params.chapterId} successfully deleted.`);
    return NextResponse.json(deletedChapter);
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("[DELETE_ERROR] Error:", error.message, error.stack);
    } else {
      // Handle unexpected error types
      console.error("[DELETE_ERROR] Unexpected error:", error);
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// PATCH handler
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    // Check for user authentication
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();

    if (!userId) {
      console.log("Unauthorized access: userId is missing.");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    console.log(`Updating chapter: ${params.chapterId} in course: ${params.courseId}`);
    
    // Verify if the user owns the course
    const ownCourse = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!ownCourse) {
      console.log("Unauthorized access: user does not own the course.");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Update chapter data
    const updatedChapter = await db.chapter.update({
      where: { id: params.chapterId, courseId: params.courseId },
      data: { ...values, isPublished },
    });

    // Handle video URL change and Mux asset update
    if (values.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: { chapterId: params.chapterId },
      });

      if (existingMuxData) {
        console.log(`Deleting old Mux asset with ID: ${existingMuxData.assetId}`);
        await Video.Assets.del(existingMuxData.assetId);
        await db.muxData.delete({ where: { id: existingMuxData.id } });
      }

      console.log(`Creating new Mux asset for video: ${values.videoUrl}`);
      const asset = await Video.Assets.create({
        input: values.videoUrl,
        playback_policy: "public",
        test: false,
      });

      await db.muxData.create({
        data: {
          chapterId: params.chapterId,
          assetId: asset.id,
          playbackId: asset.playback_ids?.[0]?.id,
        },
      });
    }

    console.log(`Chapter ${params.chapterId} successfully updated.`);
    return NextResponse.json(updatedChapter);
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("[PATCH_ERROR] Error:", error.message, error.stack);
    } else {
      // Handle unexpected error types
      console.error("[PATCH_ERROR] Unexpected error:", error);
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}
