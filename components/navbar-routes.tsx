"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/learn";

  // Add console logs for debugging
  console.log("userId:", userId);
  console.log("isTeacher(userId):", isTeacher(userId));
  console.log("isTeacherPage:", isTeacherPage);
  console.log("isCoursePage:", isCoursePage);
  console.log("isSearchPage:", isSearchPage);

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-8 ml-auto mx-2">
        {(isTeacherPage || isCoursePage) && (
          <Link href="/">
            <Button size="sm" variant="ghost">
              Exit
            </Button>
          </Link>
        )}
        {isTeacher(userId) && (
          <Link href="/teacher/courses">
            <Button size="sm" variant="secondary" style={{ display: 'block', color: 'red' }}>
              Create a course
            </Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
