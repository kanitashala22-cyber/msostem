import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Lock, Eye, Code } from "lucide-react";
import type { Course } from "@shared/schema";

export default function CourseDetail() {
  const { id } = useParams();
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [htmlCode, setHtmlCode] = useState('');
  
  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["/api/courses", id],
  });

  // HTML Fundamentals - 25 comprehensive lessons
  const lessons = id === 'course-1' ? [
    { 
      id: 1, 
      title: "What is HTML? - Your First Web Page", 
      completed: false,
      playgroundCode: '<h1>Hello, World!</h1>\\n<p>This is my first HTML page!</p>\\n<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>',
      content: {
        title: "What is HTML? - Your First Web Page",
        description: "Welcome to the exciting world of web development! HTML is the foundation of every website on the internet. Let's discover what makes the web work and create your very first webpage! 🌟",
        sections: [
          {
            title: "What is HTML?",
            content: "HTML stands for HyperText Markup Language. Think of it as the skeleton of a website:\\n\\n• **HyperText**: Text with links to other text\\n• **Markup**: Special codes that describe content\\n• **Language**: A system computers understand\\n\\nHTML tells browsers what each piece of content is - whether it's a heading, paragraph, image, or link. It's like the blueprint of a house!"
          },
          {
            title: "How Websites Work",
            content: "When you visit a website:\\n1. Your browser asks a server for the webpage\\n2. The server sends back HTML code\\n3. Your browser reads the HTML and displays it\\n4. You see the beautiful webpage!\\n\\nHTML is everywhere - every website uses it, from simple blogs to complex applications like Facebook and Google."
          },
          {
            title: "HTML Tags - The Building Blocks",
            content: "HTML uses 'tags' to mark up content:\\n\\n• Tags are surrounded by angle brackets: `<tag>`\\n• Most tags come in pairs: `<tag>content</tag>`\\n• The opening tag starts the element\\n• The closing tag ends it (has a forward slash)\\n\\nExample: `<h1>This is a heading</h1>`"
          },
          {
            title: "Try It Yourself!",
            content: "In the playground, try:\\n1. Change 'Hello, World!' to your own message\\n2. Add another paragraph with `<p>Your text here</p>`\\n3. Make some text bold with `<strong>bold text</strong>`\\n4. See how the changes appear instantly!\\n\\nCongratulations - you're now writing HTML! 🎉"
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "HTML Document Structure & DOCTYPE", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>My Amazing Webpage</title>\\n</head>\\n<body>\\n    <h1>Welcome to My Website!</h1>\\n    <p>This is a properly structured HTML document.</p>\\n</body>\\n</html>',
      content: {
        title: "HTML Document Structure & DOCTYPE",
        description: "Every HTML document follows a specific structure - like a recipe with essential ingredients! Learn the anatomy of a webpage and why proper structure matters. 🏗️",
        sections: [
          {
            title: "The DOCTYPE Declaration",
            content: "`<!DOCTYPE html>` tells the browser this is an HTML5 document.\\n\\n**Why it matters:**\\n• Ensures your page displays correctly\\n• Prevents 'quirks mode' rendering problems\\n• Must be the very first line\\n• Case doesn't matter, but lowercase is standard\\n\\nThink of DOCTYPE as showing your ID card to the browser - it identifies what kind of document you have!"
          },
          {
            title: "The HTML Element",
            content: "The `<html>` element wraps everything else:\\n\\n```html\\n<html lang=\"en\">\\n  <!-- Everything goes here -->\\n</html>\\n```\\n\\n**The lang attribute:**\\n• Tells screen readers what language to use\\n• Helps search engines understand your content\\n• Use 'en' for English, 'es' for Spanish, etc.\\n• Important for accessibility!"
          },
          {
            title: "Head vs Body - Two Important Sections",
            content: "Every HTML document has two main parts:\\n\\n**The `<head>` (invisible to users):**\\n• Page title (shows in browser tab)\\n• Meta information\\n• Links to CSS and JavaScript files\\n• Search engine information\\n\\n**The `<body>` (visible to users):**\\n• All the content people see\\n• Text, images, links, videos\\n• Everything that makes up your webpage"
          },
          {
            title: "Essential Meta Tags",
            content: "Meta tags provide important information:\\n\\n• `<meta charset=\"UTF-8\">` - Handles all text characters\\n• `<meta name=\"viewport\"...>` - Makes your site mobile-friendly\\n• `<title>` - Page title in browser tab and search results\\n\\nThese might seem invisible, but they're crucial for a professional website!"
          },
          {
            title: "Document Structure Practice! 📋",
            content: "In the playground, experiment with:\\n1. Change the page title and see it update in the browser tab\\n2. Add more content inside the `<body>`\\n3. Try different language codes in the lang attribute\\n4. Notice how the browser understands this structure\\n\\nProper structure is the foundation of every great website!"
          }
        ]
      }
    }
  ] : [];

  const currentLesson = lessons.find(lesson => lesson.id === selectedLesson) || lessons[0];

  // Update playground code when lesson changes
  useEffect(() => {
    if (currentLesson && currentLesson.playgroundCode) {
      setHtmlCode(currentLesson.playgroundCode.replace(/\\\\n/g, '\\n'));
    }
  }, [selectedLesson, currentLesson]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h1>
            <p className="text-gray-600">The course you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navbar />
      
      {/* Course Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary">{course.level}</Badge>
                <span className="text-sm text-gray-500">{course.duration}</span>
                <span className="text-sm text-gray-500">{lessons.length} lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Course Lessons</h2>
                <div className="space-y-3">
                  {lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedLesson === lesson.id
                          ? 'bg-purple-100 border-purple-300 border-2'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : selectedLesson === lesson.id ? (
                          <Play className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <Lock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-gray-500">Lesson {lesson.id}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Lesson Content */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="h-6 w-6 text-purple-600" />
                    <h2 className="text-xl font-semibold">Lesson Content</h2>
                  </div>
                  
                  {currentLesson ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {currentLesson.content.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {currentLesson.content.description}
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        {currentLesson.content.sections.map((section, index) => (
                          <div key={index} className="border-l-4 border-purple-200 pl-4">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {section.title}
                            </h4>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Select a lesson to view its content.</p>
                  )}
                </CardContent>
              </Card>

              {/* Code Playground */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="h-6 w-6 text-purple-600" />
                    <h2 className="text-xl font-semibold">Interactive Playground</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        HTML Code
                      </label>
                      <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm"
                        placeholder="Enter your HTML code here..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preview
                      </label>
                      <div className="border border-gray-300 rounded-lg p-4 bg-white min-h-[200px]">
                        <iframe
                          srcDoc={htmlCode}
                          className="w-full h-full min-h-[180px] border-0"
                          title="HTML Preview"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}