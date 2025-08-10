import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progress-bar";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, BookOpen, CheckCircle, Lock } from "lucide-react";
import type { Course } from "@shared/schema";

export default function CourseDetail() {
  const { id } = useParams();
  
  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["/api/courses", id],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600">The course you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const mockProgress = course.id === "course-1" ? 75 : course.id === "course-2" ? 45 : 0;
  const mockLessons = [
    { id: 1, title: "Introduction to HTML", duration: "15 min", completed: true },
    { id: 2, title: "HTML Document Structure", duration: "20 min", completed: true },
    { id: 3, title: "Text Elements and Formatting", duration: "25 min", completed: false },
    { id: 4, title: "Links and Navigation", duration: "18 min", completed: false },
    { id: 5, title: "Images and Media", duration: "22 min", completed: false },
    { id: 6, title: "Lists and Tables", duration: "30 min", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className={`${
                    course.level === 'beginner' ? 'bg-primary/10 text-primary border-primary' :
                    course.level === 'intermediate' ? 'bg-secondary/10 text-secondary border-secondary' :
                    'bg-accent/10 text-accent border-accent'
                  }`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </Badge>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{course.lessonsCount}</div>
                    <div className="text-sm text-gray-500">Lessons</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 mx-auto mb-2 text-success" />
                    <div className="font-semibold">{mockProgress}%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Course Progress</span>
                    <span>{mockProgress}%</span>
                  </div>
                  <ProgressBar 
                    progress={mockProgress} 
                    className={`h-3 rounded-full ${
                      course.level === 'beginner' ? 'bg-primary' :
                      course.level === 'intermediate' ? 'bg-secondary' :
                      'bg-accent'
                    }`}
                  />
                </div>
                
                <Button className={`w-full ${
                  course.level === 'beginner' ? 'bg-primary hover:bg-primary/90' :
                  course.level === 'intermediate' ? 'bg-secondary hover:bg-secondary/90' :
                  'bg-accent hover:bg-accent/90'
                } text-white`}>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
              
              <div className="lg:p-8">
                <img 
                  src={course.imageUrl || ""} 
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg lg:rounded-xl" 
                />
              </div>
            </div>
          </div>
          
          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lessons List */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Lessons</h2>
                  
                  <div className="space-y-4">
                    {mockLessons.map((lesson, index) => (
                      <div 
                        key={lesson.id}
                        className={`flex items-center p-4 rounded-lg border transition-all duration-200 ${
                          lesson.completed 
                            ? 'bg-green-50 border-green-200 hover:bg-green-100' 
                            : index === 2 
                              ? 'bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer'
                              : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex-shrink-0 mr-4">
                          {lesson.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : index === 2 ? (
                            <Play className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Lock className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className={`font-medium ${
                            lesson.completed 
                              ? 'text-green-900' 
                              : index === 2 
                                ? 'text-blue-900'
                                : 'text-gray-500'
                          }`}>
                            {lesson.title}
                          </h3>
                          <p className={`text-sm ${
                            lesson.completed 
                              ? 'text-green-600' 
                              : index === 2 
                                ? 'text-blue-600'
                                : 'text-gray-400'
                          }`}>
                            {lesson.duration}
                          </p>
                        </div>
                        
                        <div className="flex-shrink-0">
                          {lesson.completed && (
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                              Completed
                            </Badge>
                          )}
                          {index === 2 && (
                            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Course Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">HTML document structure and semantics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Text formatting and styling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Creating links and navigation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Working with images and media</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Building forms and tables</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Lessons</span>
                      <span className="font-semibold">{course.lessonsCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-semibold text-success">2 / {course.lessonsCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Level</span>
                      <span className="font-semibold capitalize">{course.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
