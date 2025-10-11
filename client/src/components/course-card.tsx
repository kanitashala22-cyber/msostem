import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Play } from "lucide-react";
import ProgressBar from "./progress-bar";
import type { Course } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";

interface CourseCardProps {
  course: Course;
  progress?: number;
}

export default function CourseCard({ course, progress = 0 }: CourseCardProps) {
  const { t } = useLanguage();
  
  // Get translated content with proper type assertion
  const courseContent = (t.courseContent as any)[course.id];
  const displayTitle = courseContent?.title || course.title;
  const displayDescription = courseContent?.description || course.description;
  
  // Parse and translate duration
  const durationParts = course.duration.split(' ');
  const durationNumber = durationParts[0];
  const durationUnit = durationParts[1];
  const translatedDuration = `${durationNumber} ${durationUnit === 'weeks' ? t.home.courses.weeks : durationUnit}`;
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
      <img
        src={course.imageUrl || ""}
        alt={course.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              course.level === "beginner"
                ? "bg-primary bg-opacity-10 text-primary"
                : course.level === "intermediate"
                  ? "bg-secondary bg-opacity-10 text-secondary"
                  : "bg-accent bg-opacity-10 text-accent"
            }`}
          >
            {t.common[course.level as keyof typeof t.common] || course.level}
          </span>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{translatedDuration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{displayTitle}</h3>
        <p className="text-gray-600 mb-4">{displayDescription}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{t.course.progress}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <ProgressBar
              progress={progress}
              className={`h-2 rounded-full ${
                course.level === "beginner"
                  ? "bg-primary"
                  : course.level === "intermediate"
                    ? "bg-secondary"
                    : "bg-accent"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Play className="w-4 h-4 mr-2" />
            <span className="text-sm">{course.lessonsCount} {t.home.courses.lessons}</span>
          </div>
          <Link href={`/course/${course.id}`}>
            <Button
              className={`${
                course.level === "beginner"
                  ? "bg-primary hover:bg-primary/90"
                  : course.level === "intermediate"
                    ? "bg-secondary hover:bg-secondary/90"
                    : "bg-accent hover:bg-accent/90"
              } text-white`}
              data-testid={`button-continue-${course.id}`}
            >
              {t.home.courses.continue}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
