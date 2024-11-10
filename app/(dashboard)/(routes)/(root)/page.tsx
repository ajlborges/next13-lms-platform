import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";
import { InfoCard } from "./_components/info-card";
import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.BACKEND_API_URL}`,
});

export const fetchUserData = async (email="chikeegonu@gmail.com", password="kidazda20") => {
  try {
    const response = await api.post('/account/token/', {
      email,
      password,
    });
    console.log('app/(dashboard)/(routes)/(root)/page.tsx', response.data.userId)
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error if any
  }
};

export default async function Dashboard() {
  const {userId} = await fetchUserData();

  if (!userId) {
    return redirect("/search");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
       />
       <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
       />
      </div>
      <CoursesList
        items={[...coursesInProgress, ...completedCourses]}
      />
    </div>
  )
}
