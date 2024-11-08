"use client";

import AccountProfile from "../components/profile/account-profile";
import { UserButton, useAuth } from "@clerk/nextjs"; //TODO: Introduce External Authentication Login
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";
import { useState } from 'react';
import axios from 'axios';

const signIn = async (email, password) => {
  try {
    const res = await axios.post('http://127.0.0.1:8000/account/token/', {
      email,
      password,
    });
    return res.data;  // Return the response data
  } catch (err) {
    console.error('Login failed', err);  // Handle errors
    return null;  // Return null or you can handle error differently
  }
};

// Usage example
async function signInUser() {
  try {
    const response = await signIn("chikeegonu@gmail.com", "kidazda20");
    return response.userId;  // Return the userId
  } catch (err) {
    return `Error: ${err}`;  // Return the error message
  }
}

// You can now call signInUser and await its result elsewhere
// For example:

signInUser().then(userId => {console.log('...', userId)});

export const NavbarRoutes = () => {
  // const { userId } = useAuth();

  const userId = signInUser().then(userId => {console.log('...', userId)});
  const pathname = usePathname();

  // const isStudentPage = pathname?.startsWith("/student");
  // const isAnonymousPage = pathname?.startsWith("/");
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
        <UserButton
          afterSignOutUrl="/search"
        />
        <AccountProfile />
      </div>
    </>
  )
}