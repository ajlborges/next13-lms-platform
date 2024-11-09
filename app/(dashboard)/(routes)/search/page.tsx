import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";

import { Categories } from "./_components/categories";
import axios from 'axios';

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

// TODO
const fetchUserData = async (email="chikeegonu@gmail.com", password="kidazda20") => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/account/token/', {
      email,
      password,
    });
    return response.data.userId;
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error if any
  }
};

const SearchPage = async ({
  searchParams
}: SearchPageProps) => {
  const userId = await fetchUserData();

  if (!userId) {
    return redirect("/search");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories
          items={categories}
        />
        <CoursesList items={courses} />
      </div>
    </>
   );
}
 
export default SearchPage;