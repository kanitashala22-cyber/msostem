import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Play } from "lucide-react";
import ProgressBar from "./progress-bar";
import type { Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
  progress?: number;
}

export default function CourseCard({ course, progress = 0 }: CourseCardProps) {
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
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
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
            <span className="text-sm">{course.lessonsCount} lessons</span>
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
            >
              {course.id === "course-3" ? "Coming Soon" : "Continue"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
