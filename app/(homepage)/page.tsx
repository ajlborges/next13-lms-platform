import HeroSection from "@/components/sections/hero-section";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Databrix",
  description: "Databrix",
};

export default function Page() {
  const { userId } = auth();

  if (userId) {
    return redirect("/dashboard");
  }
  return <HeroSection />;
}
