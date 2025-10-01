import Navbar from "@/components/navbar";
import CourseCard from "@/components/course-card";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";
import type { Course } from "@shared/schema";
import { CourseSidebar } from "@/components/CourseSidebar";
import { LessonContent } from "@/components/LessonContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { lessonsData } from "@/data/lessons";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Course() {
  const [activeLesson, setActiveLesson] = useState(lessonsData[0].id);

  const lessons = lessonsData.map(l => ({
    id: l.id,
    title: l.title,
    category: l.category,
  }));

  const currentLesson = lessonsData.find(l => l.id === activeLesson) || lessonsData[0];

  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <CourseSidebar 
          lessons={lessons}
          activeLesson={activeLesson}
          onLessonChange={setActiveLesson}
        />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-50">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-y-auto bg-background">
            <LessonContent lesson={currentLesson} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function Courses() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              All <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master web development with our comprehensive HTML and CSS courses
              designed for beginners.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses?.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  //  progress={index === 0 ? 75 : index === 1 ? 45 : 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
