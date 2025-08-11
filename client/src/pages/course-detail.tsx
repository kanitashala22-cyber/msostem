import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Lock, Eye, Code } from "lucide-react";
import type { Course } from "@shared/schema";

export default function CourseDetail() {
  const { id } = useParams();
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [htmlCode, setHtmlCode] = useState('<h1>Hello CodeHer!</h1>\n<p>Welcome to your first HTML lesson.</p>');
  
  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["/api/courses", id],
  });

  const lessons = [
    { 
      id: 1, 
      title: "Introduction to HTML", 
      completed: true,
      content: {
        title: "Introduction to HTML",
        description: "Welcome to your first HTML lesson! HTML (HyperText Markup Language) is the foundation of all web pages.",
        sections: [
          {
            title: "What is HTML?",
            content: "HTML is a markup language that defines the structure and content of web pages using elements and tags."
          },
          {
            title: "HTML Elements",
            content: "HTML elements are building blocks of web pages. They consist of opening tags, content, and closing tags."
          },
          {
            title: "Your First HTML",
            content: "Let's start with a simple HTML structure. Try typing the code shown in the playground on the right."
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "HTML Document Structure", 
      completed: true,
      content: {
        title: "HTML Document Structure",
        description: "Learn how to create a proper HTML document with all the essential elements.",
        sections: [
          {
            title: "DOCTYPE Declaration",
            content: "Every HTML document must start with a DOCTYPE declaration that tells the browser which HTML version to use."
          },
          {
            title: "HTML Tag",
            content: "The <html> tag is the root element that contains all other HTML elements on the page."
          },
          {
            title: "Head and Body",
            content: "The <head> contains metadata while the <body> contains the visible content of your web page."
          }
        ]
      }
    },
    { 
      id: 3, 
      title: "Text Elements and Formatting", 
      completed: false,
      content: {
        title: "Text Elements and Formatting",
        description: "Discover how to format text using HTML tags for headings, paragraphs, and emphasis.",
        sections: [
          {
            title: "Headings",
            content: "HTML provides six levels of headings from <h1> to <h6>, with <h1> being the largest and most important."
          },
          {
            title: "Paragraphs",
            content: "Use the <p> tag to create paragraphs of text. Each paragraph creates a new line with space above and below."
          },
          {
            title: "Text Formatting",
            content: "Make text bold with <strong>, italic with <em>, or add line breaks with <br>."
          }
        ]
      }
    },
    { 
      id: 4, 
      title: "Links and Navigation", 
      completed: false,
      content: {
        title: "Links and Navigation",
        description: "Learn how to create links to connect different pages and websites together.",
        sections: [
          {
            title: "Anchor Tags",
            content: "The <a> tag creates hyperlinks. Use the href attribute to specify where the link should go."
          },
          {
            title: "Internal Links",
            content: "Link to other pages on your website using relative URLs like 'about.html' or 'contact.html'."
          },
          {
            title: "External Links",
            content: "Link to other websites using absolute URLs that include the full web address."
          }
        ]
      }
    },
    { 
      id: 5, 
      title: "Images and Media", 
      completed: false,
      content: {
        title: "Images and Media",
        description: "Add visual content to your web pages with images and other media elements.",
        sections: [
          {
            title: "Image Tag",
            content: "Use the <img> tag to add images. Always include src for the image path and alt for accessibility."
          },
          {
            title: "Image Attributes",
            content: "Control image size with width and height attributes, and add descriptions with alt text."
          },
          {
            title: "Image Formats",
            content: "Common web image formats include JPG for photos, PNG for graphics, and SVG for scalable graphics."
          }
        ]
      }
    },
    { 
      id: 6, 
      title: "Lists and Tables", 
      completed: false,
      content: {
        title: "Lists and Tables",
        description: "Organize information using HTML lists and tables for structured data display.",
        sections: [
          {
            title: "Unordered Lists",
            content: "Create bullet point lists using <ul> for the list and <li> for each list item."
          },
          {
            title: "Ordered Lists",
            content: "Create numbered lists using <ol> for the list and <li> for each numbered item."
          },
          {
            title: "Tables",
            content: "Display data in rows and columns using <table>, <tr> for rows, and <td> for cells."
          }
        ]
      }
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600">The course you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentLesson = lessons.find(lesson => lesson.id === selectedLesson) || lessons[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Three Column Layout */}
      <div className="pt-20 h-screen flex">
        {/* Left Sidebar - Lessons List */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
            <p className="text-sm text-gray-600">Choose a lesson to continue learning</p>
          </div>
          
          <div className="p-4 space-y-2">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedLesson === lesson.id
                    ? 'bg-primary text-white'
                    : lesson.completed
                    ? 'bg-green-50 hover:bg-green-100 border border-green-200'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {lesson.completed ? (
                      <CheckCircle className={`w-5 h-5 ${selectedLesson === lesson.id ? 'text-white' : 'text-green-600'}`} />
                    ) : selectedLesson === lesson.id ? (
                      <Play className="w-5 h-5 text-white" />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className={`font-medium text-sm ${
                      selectedLesson === lesson.id
                        ? 'text-white'
                        : lesson.completed
                        ? 'text-green-900'
                        : 'text-gray-700'
                    }`}>
                      Lesson {lesson.id}: {lesson.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Content - Lesson Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-6">
              <Badge className={`mb-3 ${
                currentLesson.completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                Lesson {currentLesson.id}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {currentLesson.content.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {currentLesson.content.description}
              </p>
            </div>

            <div className="space-y-8">
              {currentLesson.content.sections.map((section, index) => (
                <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setSelectedLesson(Math.max(1, selectedLesson - 1))}
                disabled={selectedLesson === 1}
              >
                Previous Lesson
              </Button>
              <Button
                onClick={() => setSelectedLesson(Math.min(lessons.length, selectedLesson + 1))}
                disabled={selectedLesson === lessons.length}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Next Lesson
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Code Playground */}
        <div className="w-96 bg-gray-900 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2 text-white">
              <Code className="w-5 h-5" />
              <span className="font-semibold">Code Playground</span>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 flex-1">
              <div className="text-gray-400 text-sm mb-2 flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                HTML
              </div>
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-40 bg-gray-800 text-gray-300 p-3 rounded-lg font-mono text-sm border border-gray-700 focus:border-primary focus:outline-none resize-none"
                placeholder="Type your HTML code here..."
              />
            </div>

            {/* Live Preview */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-gray-400 text-sm mb-2 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Live Preview
              </div>
              <div className="bg-white rounded-lg p-4 min-h-32 border">
                <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
