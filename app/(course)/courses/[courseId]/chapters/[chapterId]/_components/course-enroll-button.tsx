"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button, buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <Button
    //   onClick={onClick}
    //   disabled={isLoading}
    //   size="sm"
    //   className="w-full md:w-auto"
    // >
    //   Enroll for {formatPrice(price)}
    // </Button>
    <Link
      href="https://1985609f-7839-4819-8840-2d38548e4ea5.ma.bw-cloud-instance.org/dhbw-login"
      className={cn(
        buttonVariants({
          variant: "default",
          size: "sm",
        }),
        "w-full md:w-auto bg-blue-500",
      )}
    >
      Launch Notebook
    </Link>
  );
};
