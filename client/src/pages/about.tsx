import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, BookOpen, Award, Code } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent mb-6">
              About MsoSTEM
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering young women to break barriers in technology through interactive learning and scholarship opportunities.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                MsoSTEM exists to bridge the gender gap in technology by providing an accessible, 
                engaging platform where girls and young women can learn programming fundamentals 
                and discover scholarship opportunities. We believe that every girl deserves the 
                chance to explore her potential in STEM fields, regardless of her background or 
                current experience level.
              </p>
            </CardContent>
          </Card>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Coding Courses</h3>
                  <p className="text-gray-600">
                    Learn HTML, CSS, and web development through hands-on lessons designed 
                    specifically for beginners. Our courses break down complex concepts into 
                    easy-to-understand steps.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Code Playground</h3>
                  <p className="text-gray-600">
                    Practice your skills in our interactive code editor. Experiment with HTML 
                    and CSS, see your changes in real-time, and build confidence through hands-on experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Scholarship Discovery</h3>
                  <p className="text-gray-600">
                    Discover scholarships and funding opportunities specifically for women in STEM. 
                    We curate programs that support girls pursuing technology and programming education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why It Matters */}
          <Card className="mb-16 bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why It Matters</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Despite making up half the population, women remain significantly underrepresented 
                    in technology fields. This gap often begins early, with girls being discouraged 
                    from pursuing STEM subjects or lacking access to supportive learning environments.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    MsoSTEM addresses this challenge by creating a welcoming space where girls can 
                    explore programming without intimidation, build confidence through achievable goals, 
                    and connect with opportunities that support their educational journey.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Financial barriers shouldn't prevent talented young women from pursuing their 
                    dreams in technology. That's why we focus on connecting our learners with 
                    scholarships and grants that can help fund their education and remove economic obstacles.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Every girl who learns to code through MsoSTEM becomes part of a growing movement 
                    to diversify the tech industry and create more inclusive, innovative solutions for the world.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Impact */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">Growing Community</h3>
                <p className="text-gray-600">
                  Building a supportive network of young women learning to code and pursuing STEM careers
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">Free Education</h3>
                <p className="text-gray-600">
                  Providing completely free programming courses accessible to anyone with an internet connection
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">Opportunities</h3>
                <p className="text-gray-600">
                  Connecting learners with scholarships and funding opportunities to continue their education
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
              <p className="text-xl mb-6 opacity-90">
                Whether you're just starting your coding journey or looking for your next opportunity, 
                MsoSTEM is here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/courses" 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Learning
                </a>
                <a 
                  href="/scholarships" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Find Scholarships
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}