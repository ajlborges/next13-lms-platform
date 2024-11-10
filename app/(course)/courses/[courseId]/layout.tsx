// import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import { getProgress } from "@/actions/get-progress";

// import { CourseSidebar } from "./_components/course-sidebar";
// import { CourseNavbar } from "./_components/course-navbar";
// import { fetchUserData } from "@/app/(dashboard)/(routes)/(root)/page";

// const CourseLayout = async ({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: { courseId: string };
// }) => {
//   const { userId } = fetchUserData();
//   console.log('layout', userId)

//   if (!userId) {
//     return redirect("/search")
//   }

//   const course = await db.course.findUnique({
//     where: {
//       id: params.courseId,
//     },
//     include: {
//       chapters: {
//         where: {
//           isPublished: true,
//         },
//         include: {
//           userProgress: {
//             where: {
//               userId,
//             }
//           }
//         },
//         orderBy: {
//           position: "asc"
//         }
//       },
//     },
//   });

//   if (!course) {
//     return redirect("/search");
//   }

//   const progressCount = await getProgress(userId, course.id);

//   return (
//     <div className="h-full">
//       <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
//         <CourseNavbar
//           course={course}
//           progressCount={progressCount}
//         />
//       </div>
//       <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
//         <CourseSidebar
//           course={course}
//           progressCount={progressCount}
//         />
//       </div>
//       <main className="md:pl-80 pt-[80px] h-full">
//         {children}
//       </main>
//     </div>
//   )
// }

// export default CourseLayout

import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import { fetchUserData } from "@/app/(dashboard)/(routes)/(root)/page";

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  // Await the result of fetchUserData to get the actual user data
  const userData = await fetchUserData();
  const { userId } = userData;

  console.log('layout', userId);

  if (!userId) {
    return redirect("/search");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/search");
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default CourseLayout;
