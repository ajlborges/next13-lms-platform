import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";
import { CourseProgress } from "@/components/course-progress";
import { FaStar } from 'react-icons/fa';

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
};

// TODO: To update to be stored in db Schema enabling users to vote
const Rating = ({ score, reviews }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
    },
    score: {
      fontWeight: 'bold',
      marginRight: '0.2rem',
    },
    reviewCount: {
      color: '#666',
    },
    star: {
      color: 'gold',
      marginRight: '0.2rem',
    },
  };

  // Function to generate a random rating score
  function getRandomRating() {
      return (Math.random() * (5 - 1) + 1).toFixed(1); // Random score between 1.0 and 5.0
  }

  // Function to generate a realistic number of reviews
  function getRandomReviewCount() {
      const minReviews = 100;   // Minimum realistic review count
      const maxReviews = 50000; // Maximum realistic review count
      return Math.floor(Math.random() * (maxReviews - minReviews + 1)) + minReviews;
  }

  // Function to generate and display random rating and review count
  function displayRandomRating() {
      const score = getRandomRating();
      return score
  }

  function displayRandomReview() {
      const reviews = getRandomReviewCount();
      return reviews
  }

  function formatReviewCount(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k'; // Format to 'x.xk' if 1000 or more
    }
    return count.toString(); // Return as a string if less than 1000
}

  return (
    <div style={styles.container}>
      <FaStar style={styles.star} aria-label="Rating star" />
      <span style={styles.score}>{displayRandomRating()}</span>
      <span style={styles.reviewCount}>({formatReviewCount(displayRandomReview())} reviews)</span>
    </div>
  );
};

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">
            {category}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {/* TODO: Remove random generator logic if all chapters are updated in DB. This was just speed up the process */}
                {chaptersLength === 1 ? Math.floor(Math.random() * 9) + 12 : chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>

              <Rating score={4.6} reviews={38000} />
            </div>
          </div>
          {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? "success" : "default"}
              size="sm"
              value={progress}
            />
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}