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

  const lessons = [
    { 
      id: 1, 
      title: "Introduction to HTML", 
      completed: true,
      playgroundCode: '<h1>Hello CodeHer!</h1>\n<p>Welcome to HTML! 🎉</p>\n<p>This is your first web page.</p>',
      content: {
        title: "Introduction to HTML",
        description: "Welcome to your first HTML lesson! HTML (HyperText Markup Language) is the foundation of all web pages. Think of it as the skeleton that gives structure to websites.",
        sections: [
          {
            title: "What is HTML?",
            content: "HTML stands for HyperText Markup Language. It's like the skeleton of a website! Just like your body has bones to give it structure, websites use HTML to organize content. HTML tells the browser 'this is a heading', 'this is a paragraph', 'this is a link', etc."
          },
          {
            title: "How HTML Works",
            content: "HTML uses 'tags' which are like labels that wrap around content. Tags are written with angle brackets < >. Most tags come in pairs: an opening tag like <h1> and a closing tag like </h1>. The content goes between them!"
          },
          {
            title: "Your First HTML Elements",
            content: "In the playground, you can see two basic HTML elements:\n• <h1> creates a big heading (like a title)\n• <p> creates a paragraph of text\n\nTry changing the text between the tags and see what happens!"
          },
          {
            title: "Try It Yourself!",
            content: "In the playground on the right, try:\n1. Change 'Hello CodeHer!' to your own message\n2. Add another <p> tag with your name\n3. Change <h1> to <h2> to see the difference\n\nDon't worry about making mistakes - that's how we learn!"
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "HTML Document Structure", 
      completed: true,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Website</title>\n</head>\n<body>\n    <h1>Welcome to My Site!</h1>\n    <p>This is a complete HTML document.</p>\n</body>\n</html>',
      content: {
        title: "HTML Document Structure",
        description: "Every HTML document follows a specific structure, like how a letter has a header and body. Let's learn the essential parts that make a complete web page!",
        sections: [
          {
            title: "The DOCTYPE Declaration",
            content: "Every HTML document starts with <!DOCTYPE html>. Think of this as telling the browser 'Hey, this is an HTML5 document!' It's like putting a label on a box so everyone knows what's inside. This must be the very first line of your HTML file."
          },
          {
            title: "The HTML Root Element",
            content: "The <html> tag wraps around everything else in your document. It's like the main container that holds all your content. Everything you write goes inside this tag. Think of it as the wrapper for your entire webpage."
          },
          {
            title: "Head vs Body - What's the Difference?",
            content: "Your HTML document has two main parts:\n\n• <head>: Contains information ABOUT your page (like the title you see in browser tabs, but visitors don't see this content)\n• <body>: Contains what visitors actually SEE on your webpage (text, images, etc.)\n\nIt's like an envelope: the head is the address info, the body is the actual letter!"
          },
          {
            title: "Try the Complete Structure!",
            content: "In the playground, you can see a complete HTML document. Try:\n1. Change the <title> - you'll see it in the browser tab!\n2. Add more content in the <body> section\n3. Try adding <h2> or <h3> tags for smaller headings\n\nThis is the foundation every webpage is built on!"
          }
        ]
      }
    },
    { 
      id: 3, 
      title: "Text Elements and Formatting", 
      completed: false,
      playgroundCode: '<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<h3>Smaller Heading</h3>\n\n<p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>\n\n<p>Here\'s another paragraph.<br>This line has a break!</p>\n\n<p>You can also make text <u>underlined</u> or <mark>highlighted</mark>.</p>',
      content: {
        title: "Text Elements and Formatting",
        description: "Now let's make your text look awesome! HTML gives you many ways to format text - from big headings to emphasized words. It's like having different fonts and styles in a word processor!",
        sections: [
          {
            title: "Headings - Size Matters!",
            content: "HTML has 6 different heading sizes, from <h1> (biggest) to <h6> (smallest):\n\n• <h1>: Main title (like a book title)\n• <h2>: Chapter headings \n• <h3>: Section headings\n• <h4>, <h5>, <h6>: Smaller subheadings\n\nThink of them like an outline for a school essay - h1 is your main topic, h2 are your main points, h3 are sub-points, etc!"
          },
          {
            title: "Paragraphs - Your Text Blocks",
            content: "The <p> tag creates paragraphs - chunks of text with space above and below them. Every time you want a new paragraph (like hitting Enter twice in a word document), use a new <p> tag!\n\nTip: Browsers automatically add space between paragraphs, so you don't need to worry about spacing."
          },
          {
            title: "Making Text Stand Out",
            content: "Want to emphasize certain words? HTML has you covered:\n\n• <strong>: Makes text **bold** (important stuff)\n• <em>: Makes text *italic* (emphasis)\n• <u>: Underlines text\n• <mark>: Highlights text (like a yellow highlighter!)\n• <br>: Forces a line break (like hitting Enter once)\n\nUse these to make your content more interesting and easier to read!"
          },
          {
            title: "Practice Time!",
            content: "In the playground, try:\n1. Change the heading sizes - what happens when you use <h4>?\n2. Add your own paragraph with <strong> and <em> tags\n3. Use <br> to create line breaks within a paragraph\n4. Experiment with <mark> to highlight important words\n\nRemember: You can combine these tags! Like <strong><em>bold AND italic</em></strong>"
          }
        ]
      }
    },
    { 
      id: 4, 
      title: "Links and Navigation", 
      completed: false,
      playgroundCode: '<h1>My Favorite Websites</h1>\n\n<p>Here are some cool links:</p>\n\n<a href="https://www.google.com">Visit Google</a><br>\n<a href="https://www.github.com">Check out GitHub</a><br>\n<a href="mailto:someone@example.com">Send an Email</a>\n\n<p>You can also link to sections on the same page:</p>\n<a href="#section1">Jump to Section 1</a>\n\n<h2 id="section1">Section 1</h2>\n<p>This is the section we linked to above!</p>',
      content: {
        title: "Links and Navigation",
        description: "Links are what make the web 'worldwide'! They connect pages together and let users jump around the internet. Let's learn how to create clickable links that take users anywhere you want!",
        sections: [
          {
            title: "The Amazing Anchor Tag",
            content: "The <a> tag creates links (anchor = something that connects things together). The basic format is:\n\n<a href=\"where-to-go\">What users click on</a>\n\n• href=\"URL\": Where the link goes\n• The text between tags: What users see and click\n\nThink of href as the destination address, and the text as the sign that says where you're going!"
          },
          {
            title: "Different Types of Links",
            content: "You can link to many different things:\n\n• **Other websites**: href=\"https://www.google.com\"\n• **Email addresses**: href=\"mailto:friend@email.com\" \n• **Phone numbers**: href=\"tel:+1234567890\"\n• **Sections on same page**: href=\"#section-name\"\n• **Files to download**: href=\"document.pdf\"\n\nThe browser automatically knows what to do with each type!"
          },
          {
            title: "Making Links User-Friendly",
            content: "Good link text tells users exactly where they're going:\n\n• ✅ Good: \"Visit our Contact Page\"\n• ❌ Bad: \"Click here\"\n\nYou can also add title attributes for extra info:\n<a href=\"https://google.com\" title=\"This opens Google's homepage\">Google</a>\n\nWhen users hover over the link, they'll see your helpful message!"
          },
          {
            title: "Try Creating Links!",
            content: "In the playground, experiment with:\n1. Change the link destinations to your favorite websites\n2. Try the email link - it will open your email app!\n3. Add a new link to any website you like\n4. Create a link to a section further down the page\n\nLinks are the building blocks of website navigation!"
          }
        ]
      }
    },
    { 
      id: 5, 
      title: "Images and Media", 
      completed: false,
      playgroundCode: '<h1>My Photo Gallery</h1>\n\n<p>Here are some beautiful images:</p>\n\n<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300" alt="Beautiful mountain landscape" width="300">\n\n<p>A cute kitten:</p>\n<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=250" alt="Adorable orange kitten" width="250">\n\n<p>You can also add captions:</p>\n<figure>\n  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300" alt="Sunset over the ocean" width="300">\n  <figcaption>Beautiful sunset at the beach</figcaption>\n</figure>',
      content: {
        title: "Images and Media",
        description: "A picture is worth a thousand words! Let's learn how to add images to make your websites more visual and engaging. Images can make your content come alive!",
        sections: [
          {
            title: "The Image Tag Basics",
            content: "The <img> tag adds images to your webpage. Unlike other tags, it doesn't need a closing tag!\n\nBasic format:\n<img src=\"image-url\" alt=\"description\">\n\n• **src**: The image location (like an address)\n• **alt**: Description for screen readers and if image fails to load\n• **width/height**: Control the size\n\nThe alt attribute is super important - it helps people who can't see images understand what's there!"
          },
          {
            title: "Where to Get Images",
            content: "You can use images from:\n\n• **Online**: URLs from websites (like the examples in playground)\n• **Your computer**: Upload images to your project folder\n• **Free image sites**: Unsplash, Pexels, Pixabay\n• **Icons**: Font Awesome, Google Icons\n\n**Important**: Always check if you're allowed to use an image! Some need permission."
          },
          {
            title: "Making Images Look Good",
            content: "Tips for great images:\n\n• **Size them properly**: Use width and height attributes\n• **Write good alt text**: Describe what's in the image\n• **Use figure and figcaption**: For images with captions\n• **Consider file size**: Smaller files load faster\n\nExample with caption:\n<figure>\n  <img src=\"photo.jpg\" alt=\"My cat\">\n  <figcaption>This is my cat Whiskers!</figcaption>\n</figure>"
          },
          {
            title: "Practice with Images!",
            content: "In the playground, try:\n1. Change the image widths to make them bigger or smaller\n2. Update the alt text to describe what you see\n3. Add your own image by finding a URL from Unsplash\n4. Try removing the width attribute - what happens?\n\nRemember: Good alt text helps everyone enjoy your content!"
          }
        ]
      }
    },
    { 
      id: 6, 
      title: "Lists and Tables", 
      completed: false,
      playgroundCode: '<h1>My Favorite Things</h1>\n\n<h2>Unordered List (Bullet Points):</h2>\n<ul>\n  <li>Pizza</li>\n  <li>Chocolate</li>\n  <li>Movies</li>\n  <li>Coding</li>\n</ul>\n\n<h2>Ordered List (Numbered):</h2>\n<ol>\n  <li>Wake up</li>\n  <li>Brush teeth</li>\n  <li>Eat breakfast</li>\n  <li>Start coding!</li>\n</ol>\n\n<h2>My Schedule:</h2>\n<table border="1">\n  <tr>\n    <th>Day</th>\n    <th>Activity</th>\n    <th>Time</th>\n  </tr>\n  <tr>\n    <td>Monday</td>\n    <td>HTML Lesson</td>\n    <td>10:00 AM</td>\n  </tr>\n  <tr>\n    <td>Tuesday</td>\n    <td>CSS Practice</td>\n    <td>2:00 PM</td>\n  </tr>\n</table>',
      content: {
        title: "Lists and Tables",
        description: "Sometimes you need to organize information in a structured way. Lists and tables are perfect for this! Whether it's a shopping list, steps in a recipe, or data in rows and columns.",
        sections: [
          {
            title: "Unordered Lists - Bullet Points",
            content: "Unordered lists create bullet points - perfect for items where order doesn't matter!\n\nStructure:\n<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>\n\n• <ul> = 'unordered list' (the container)\n• <li> = 'list item' (each bullet point)\n\nGreat for: favorite foods, hobbies, features, anything where order doesn't matter!"
          },
          {
            title: "Ordered Lists - Numbered Steps",
            content: "Ordered lists create numbered lists - perfect when order DOES matter!\n\nStructure:\n<ol>\n  <li>Step one</li>\n  <li>Step two</li>\n  <li>Step three</li>\n</ol>\n\n• <ol> = 'ordered list' (the container)\n• <li> = 'list item' (each numbered step)\n\nGreat for: recipes, instructions, rankings, to-do lists!"
          },
          {
            title: "Tables - Organizing Data in Rows and Columns",
            content: "Tables display data in rows and columns, like a spreadsheet!\n\nBasic structure:\n<table>\n  <tr>  <!-- table row -->\n    <th>Header 1</th>  <!-- table header -->\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>  <!-- table data -->\n    <td>Data 2</td>\n  </tr>\n</table>\n\n• <table>: The whole table\n• <tr>: Table row (horizontal)\n• <th>: Table header (bold titles)\n• <td>: Table data (regular cells)"
          },
          {
            title: "Practice Organizing Information!",
            content: "In the playground, try:\n1. Add more items to the unordered list\n2. Create a numbered list of your daily routine\n3. Add more rows to the table with different days\n4. Make a table about your favorite movies with columns for Title, Year, Rating\n\nTip: You can nest lists inside each other for sub-items!"
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

  // Update playground code when lesson changes
  useEffect(() => {
    if (currentLesson && currentLesson.playgroundCode) {
      setHtmlCode(currentLesson.playgroundCode);
    }
  }, [selectedLesson, currentLesson]);

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
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
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
