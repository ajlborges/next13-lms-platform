"use client";

import { useEffect, useState } from "react";
import AccountProfile from "../components/profile/account-profile";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";
import { fetchUserData } from "@/app/(dashboard)/(routes)/(root)/page";

export const NavbarRoutes = () => {
  const [userIdK, setUserIdK] = useState<string | null>(null);

  // Fetch user data on mount
  useEffect(() => {
    const getUserData = async () => {
      const user = await fetchUserData();
      const {UserId} = user
      setUserIdK(user); // Update the state with the fetched user data
    };

    getUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  const pathname = usePathname();

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
        ) : userIdK && isTeacher(userIdK) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Create Course
            </Button>
          </Link>
        ) : null}
        <AccountProfile />
      </div>
    </>
  );
};
