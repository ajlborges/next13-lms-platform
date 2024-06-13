import WaitlistFormSection from "@/components/sections/waitlist-form-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Warteliste",
  description: "Warteliste",
};

export default function Page() {
  return <WaitlistFormSection />;
}