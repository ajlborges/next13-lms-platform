// import { isTeacher } from "@/lib/teacher";
// import { redirect } from "next/navigation";
// import {fetchUserData} from "../(root)/page";

// const TeacherLayout = ({
//   children
// }: {
//   children: React.ReactNode;
// }) => {
//   const {userId} = fetchUserData();

//   if (!isTeacher(userId)) {
//     return redirect("/search");
//   }

//   return <>{children}</>
// }
 
// export default TeacherLayout;

import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { fetchUserData } from "../(root)/page";

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  // Await the result of fetchUserData to get the resolved user data
  const userData = await fetchUserData();

  // Destructure userId from the fetched data
  const { userId } = userData;

  if (!isTeacher(userId)) {
    // Redirect if the user is not a teacher
    return redirect("/search");
  }

  // Render children if the user is a teacher
  return <>{children}</>;
};

export default TeacherLayout;
