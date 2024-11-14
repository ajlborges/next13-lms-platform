"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";
import { fetchUserData } from "@/app/(dashboard)/(routes)/(root)/page";
import AccountProfile from "./profile/account-profile";

export const NavbarRoutes = () => {
  const userId = `${process.env.NEXT_PUBLIC_TEACHER_ID}`;
  const pathname = usePathname();
  console.log('components/navbar-routes.tsx', userId)

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/search">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Create Course
            </Button>
          </Link>
        ) : null}
        <AccountProfile />
      </div>
    </>
  )
}