import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progress-bar";
import SuccessStories from "@/components/success-stories";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Play, Clock, CheckCircle, Rocket, Search, Eye, Code, GraduationCap } from "lucide-react";
import type { Course, Scholarship } from "@shared/schema";

export default function Home() {
  const { data: courses, isLoading: coursesLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const { data: scholarships, isLoading: scholarshipsLoading } = useQuery<Scholarship[]>({
    queryKey: ["/api/scholarships"],
  });

  const featuredCourses = courses?.slice(0, 3) || [];
  const featuredScholarships = scholarships?.filter(s => s.status === "open").slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Interactive <span className="gradient-text">Coding Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn HTML and CSS through hands-on projects and interactive lessons designed specifically for beginners.
            </p>
          </div>
          
          {/* Course Progress Overview */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">68%</div>
                <div className="text-gray-100">Overall Progress</div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-3">
                  <ProgressBar progress={68} className="bg-white h-2 rounded-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-gray-100">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-gray-100">Day Streak 🔥</div>
              </div>
            </div>
          </div>
          
          {coursesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <Card key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                  <img 
                    src={course.imageUrl || ""} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.level === 'beginner' ? 'bg-primary bg-opacity-10 text-primary' :
                        course.level === 'intermediate' ? 'bg-secondary bg-opacity-10 text-secondary' :
                        'bg-accent bg-opacity-10 text-accent'
                      }`}>
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
                        <span>{index === 0 ? '75%' : index === 1 ? '45%' : '0%'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <ProgressBar 
                          progress={index === 0 ? 75 : index === 1 ? 45 : 0} 
                          className={`h-2 rounded-full ${
                            course.level === 'beginner' ? 'bg-primary' :
                            course.level === 'intermediate' ? 'bg-secondary' :
                            'bg-accent'
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
                        <Button className={`${
                          course.level === 'beginner' ? 'bg-primary hover:bg-primary/90' :
                          course.level === 'intermediate' ? 'bg-secondary hover:bg-secondary/90' :
                          'bg-accent hover:bg-accent/90'
                        } text-white`}>
                          {index === 2 ? 'Coming Soon' : 'Continue'}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {/* Interactive Code Playground Preview */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">
                  <Code className="inline w-8 h-8 mr-3 text-primary" />
                  Interactive Code Playground
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Practice your skills in our live code editor with instant preview. See your changes in real-time!
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    Live HTML/CSS preview
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    Syntax highlighting & auto-complete
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    Save and share your projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    Step-by-step guided tutorials
                  </li>
                </ul>
                <Link href="/playground">
                  <Button className="mt-6 bg-primary text-white hover:bg-primary/90 font-semibold">
                    Try the Playground
                  </Button>
                </Link>
              </div>
              
              <div className="code-block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-80">
                  {/* HTML Editor */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-2 flex items-center">
                      <i className="fab fa-html5 mr-2 text-orange-500"></i>
                      HTML
                    </div>
                    <div className="font-mono text-sm text-gray-300 space-y-1">
                      <div><span className="text-blue-400">&lt;div</span> <span className="text-yellow-300">class=</span><span className="text-green-400">"card"</span><span className="text-blue-400">&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-400">&lt;h2&gt;</span><span className="text-white">My Project</span><span className="text-blue-400">&lt;/h2&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-400">&lt;p&gt;</span><span className="text-white">Learning is fun!</span><span className="text-blue-400">&lt;/p&gt;</span></div>
                      <div><span className="text-blue-400">&lt;/div&gt;</span></div>
                    </div>
                  </div>
                  
                  {/* CSS Editor */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-2 flex items-center">
                      <i className="fab fa-css3 mr-2 text-blue-500"></i>
                      CSS
                    </div>
                    <div className="font-mono text-sm text-gray-300 space-y-1">
                      <div><span className="text-yellow-300">.card</span> <span className="text-white">{`{`}</span></div>
                      <div className="ml-4"><span className="text-blue-400">background:</span> <span className="text-green-400">#8B5CF6</span><span className="text-white">;</span></div>
                      <div className="ml-4"><span className="text-blue-400">padding:</span> <span className="text-green-400">20px</span><span className="text-white">;</span></div>
                      <div className="ml-4"><span className="text-blue-400">border-radius:</span> <span className="text-green-400">10px</span><span className="text-white">;</span></div>
                      <div><span className="text-white">{`}`}</span></div>
                    </div>
                  </div>
                </div>
                
                {/* Live Preview */}
                <div className="mt-4 bg-white rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-2 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Preview
                  </div>
                  <div className="bg-primary text-white p-5 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">My Project</h2>
                    <p>Learning is fun!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scholarships Section */}
      <section id="scholarships" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tech <span className="gradient-text">Scholarships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover funding opportunities that can help you pursue your dreams in technology and computer science.
            </p>
          </div>
          
          {scholarshipsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredScholarships.map((scholarship) => (
                <Card key={scholarship.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-success">${scholarship.amount.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">Award Amount</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.title}</h3>
                    <p className="text-gray-600 mb-4">{scholarship.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-calendar-alt mr-2 text-primary w-4"></i>
                        <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                        <span>{scholarship.field}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2 text-primary w-4"></i>
                        <span>{scholarship.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        scholarship.status === 'open' ? 'bg-green-100 text-green-800' :
                        scholarship.status === 'closing_soon' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {scholarship.status === 'open' ? 'Open' :
                         scholarship.status === 'closing_soon' ? 'Closing Soon' :
                         'Closed'}
                      </span>
                      <Button className="bg-primary text-white hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/scholarships">
              <Button className="bg-primary text-white px-8 py-3 hover:bg-primary/90 font-semibold">
                View All Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <SuccessStories />
      
      {/* Call to Action */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Tech Journey 
            <span className="block">Starts Today</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Join thousands of women who are building their future in technology. Start with our beginner-friendly courses and discover the scholarships that can fund your dreams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/courses">
              <Button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <Rocket className="w-5 h-5 mr-3" />
                Start Learning Now
              </Button>
            </Link>
            <Link href="/scholarships">
              <Button className="glass-morphism text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300">
                <Search className="w-5 h-5 mr-3" />
                Find Scholarships
              </Button>
            </Link>
          </div>
          
          {/* Floating Animation Elements */}
          <div className="mt-12 relative">
            <div className="absolute left-1/4 animate-float w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
            <div className="absolute right-1/3 animate-float w-4 h-4 bg-white bg-opacity-30 rounded-full" style={{animationDelay: '1s'}}></div>
            <div className="absolute left-1/3 animate-float w-8 h-8 bg-white bg-opacity-10 rounded-full" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
