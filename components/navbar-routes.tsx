"use client";

import { useEffect, useState } from "react";
import AccountProfile from "../components/profile/account-profile";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";
import axios from 'axios';

// Helper function to fetch user data
const fetchUserData = async (email = "chikeegonu@gmail.com", password = "kidazda20") => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/account/token/', {
      email,
      password,
    });
    return response.data.userId;
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error if any
    return null;
  }
};

export const NavbarRoutes = () => {
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch user data on mount
  useEffect(() => {
    const getUserData = async () => {
      const user = await fetchUserData();
      setUserId(user); // Update the state with the fetched user data
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
        ) : userId && isTeacher(userId) ? (
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
