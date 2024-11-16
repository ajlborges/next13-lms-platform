import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { fetchUserData } from "@/app/(dashboard)/(routes)/(root)/page";

// Initialize Mux client with credentials
const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
);

// DELETE method: Delete a course and its associated Mux assets (if any)
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;

  // Ensure courseId is provided
  if (!courseId) {
    return new NextResponse("Course ID is required", { status: 400 });
  }

  try {
    // Fetch user data (ensure the user is logged in)
    const { userId } = await fetchUserData();

    // Ensure the user is authorized
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch the course data, including associated chapters and Mux video data
    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId: userId, // Ensure the course belongs to the authenticated user
      },
      include: {
        chapters: {
          include: {
            muxData: true, // Include Mux asset data for each chapter
          },
        },
      },
    });

    // If the course doesn't exist or doesn't belong to the user, return 404
    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    // Delete Mux assets for each chapter if they exist
    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        try {
          // Delete the Mux video asset
          await Video.Assets.del(chapter.muxData.assetId);
        } catch (muxError) {
          console.error(`[MUX_ASSET_DELETE_ERROR] Failed to delete asset for chapter ${chapter.id}:`, muxError);
        }
      }
    }

    // Delete the course from the database
    const deletedCourse = await db.course.delete({
      where: { id: courseId },
    });

    // Return the deleted course as a response
    return NextResponse.json(deletedCourse);

  } catch (error) {
    console.error("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// PATCH method: Update course details
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;

  // Ensure courseId is provided
  if (!courseId) {
    return new NextResponse("Course ID is required", { status: 400 });
  }

  try {
    // Fetch user data (ensure the user is logged in)
    const { userId } = await fetchUserData();

    // Ensure the user is authorized
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Get the data to update from the request body
    const values = await req.json();

    // Update the course in the database
    const updatedCourse = await db.course.update({
      where: {
        id: courseId,
        userId: userId, // Ensure the course belongs to the authenticated user
      },
      data: {
        ...values, // Spread the incoming data into the update
      },
    });

    // Return the updated course as a response
    return NextResponse.json(updatedCourse);

  } catch (error) {
    console.error("[COURSE_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
