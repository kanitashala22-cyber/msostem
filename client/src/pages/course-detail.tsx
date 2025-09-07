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

  // Determine lessons based on course ID
  const lessons = id === 'course-2' ? [
    { 
      id: 1, 
      title: "CSS Basics & Selectors", 
      completed: true,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  h1 {\n    color: purple;\n    font-size: 2em;\n  }\n  \n  p {\n    color: #333;\n    font-family: Arial, sans-serif;\n  }\n  \n  .highlight {\n    background-color: yellow;\n    padding: 5px;\n  }\n</style>\n</head>\n<body>\n  <h1>Welcome to CSS!</h1>\n  <p>This paragraph is styled with CSS.</p>\n  <p class="highlight">This paragraph has a yellow background!</p>\n</body>\n</html>',
      content: {
        title: "CSS Basics & Selectors",
        description: "Welcome to CSS! CSS (Cascading Style Sheets) is what makes websites beautiful. If HTML is the skeleton, CSS is the skin, clothes, and makeup that makes everything look amazing!",
        sections: [
          {
            title: "What is CSS?",
            content: "CSS stands for Cascading Style Sheets. Think of it as the fashion designer for your website! While HTML creates the structure (like building a house), CSS makes it look beautiful (like decorating and painting the house).\n\nCSS controls colors, fonts, spacing, layouts, animations - basically everything that makes a website visually appealing."
          },
          {
            title: "How CSS Works with HTML",
            content: "CSS works by selecting HTML elements and applying styles to them. There are three ways to add CSS:\n\n• **Inline**: style=\"color: red;\" (directly in HTML tags)\n• **Internal**: <style> tags in the HTML head\n• **External**: separate .css files (most common)\n\nIn our playground, we're using internal CSS with <style> tags."
          },
          {
            title: "CSS Selectors - Targeting Elements",
            content: "Selectors tell CSS which HTML elements to style:\n\n• **Element selector**: h1 { } styles all <h1> tags\n• **Class selector**: .highlight { } styles elements with class=\"highlight\"\n• **ID selector**: #myId { } styles element with id=\"myId\"\n\nThink of selectors as pointing fingers - they point to exactly what you want to style!"
          },
          {
            title: "Try It Yourself!",
            content: "In the playground, experiment with:\n1. Change the h1 color from purple to blue\n2. Add a new style rule for h2 elements\n3. Create a new class called .important with red text\n4. Add the class to a paragraph: <p class=\"important\">Text</p>\n\nRemember: CSS property names use dashes (background-color) not camelCase!"
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "Colors & Typography", 
      completed: true,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body {\n    font-family: Georgia, serif;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    margin: 0;\n    padding: 20px;\n  }\n  \n  .container {\n    background: white;\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  }\n  \n  h1 {\n    color: #2c3e50;\n    font-family: "Arial", sans-serif;\n    font-size: 2.5em;\n    font-weight: bold;\n    text-align: center;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);\n  }\n  \n  p {\n    color: #7f8c8d;\n    font-size: 1.1em;\n    line-height: 1.6;\n    letter-spacing: 0.5px;\n  }\n  \n  .colorful {\n    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: bold;\n    font-size: 1.3em;\n  }\n</style>\n</head>\n<body>\n  <div class="container">\n    <h1>Beautiful Typography</h1>\n    <p>This text demonstrates various CSS typography and color techniques.</p>\n    <p class="colorful">This text has a gradient color effect!</p>\n    <p>Notice the shadows, spacing, and beautiful gradient background.</p>\n  </div>\n</body>\n</html>',
      content: {
        title: "Colors & Typography",
        description: "Let's make your text beautiful! Colors and typography are the foundation of great web design. Learn how to choose colors, style fonts, and create visual hierarchy that guides users through your content.",
        sections: [
          {
            title: "Working with Colors in CSS",
            content: "CSS offers many ways to specify colors:\n\n• **Color names**: red, blue, purple (140+ named colors)\n• **Hex codes**: #ff0000 (red), #0000ff (blue)\n• **RGB**: rgb(255, 0, 0) for red\n• **RGBA**: rgba(255, 0, 0, 0.5) for semi-transparent red\n• **HSL**: hsl(0, 100%, 50%) for red\n\nPro tip: Use hex codes or RGB for precise colors, and RGBA when you need transparency!"
          },
          {
            title: "Typography Fundamentals",
            content: "Typography controls how text looks and feels:\n\n• **font-family**: Choose the typeface (Arial, Times, etc.)\n• **font-size**: Control text size (px, em, rem)\n• **font-weight**: Make text bold (normal, bold, 100-900)\n• **line-height**: Space between lines (1.5 = 150% of font size)\n• **letter-spacing**: Space between characters\n• **text-align**: Align text (left, center, right, justify)\n\nGood typography makes content easy and pleasant to read!"
          },
          {
            title: "Creating Visual Hierarchy",
            content: "Visual hierarchy guides readers through your content:\n\n• **Size**: Bigger = more important\n• **Weight**: Bold = important\n• **Color**: Bright colors draw attention\n• **Spacing**: More space = separation of ideas\n• **Font families**: Different fonts for headings vs body text\n\nExample: Use large, bold headings and smaller, lighter body text."
          },
          {
            title: "Advanced Color Techniques",
            content: "Take your colors to the next level:\n\n• **Gradients**: linear-gradient() for smooth color transitions\n• **Shadows**: text-shadow and box-shadow for depth\n• **Transparency**: RGBA colors for layering effects\n• **Color psychology**: Blue = trust, red = urgency, green = success\n\nExperiment in the playground with different gradient directions and shadow effects!"
          }
        ]
      }
    },
    { 
      id: 3, 
      title: "Layout with Flexbox", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 300px;\n    background: linear-gradient(45deg, #ff9a9e, #fecfef);\n    border-radius: 10px;\n    padding: 20px;\n  }\n  \n  .box {\n    width: 120px;\n    height: 120px;\n    background: white;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    color: #333;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n    transition: transform 0.3s ease;\n  }\n  \n  .box:hover {\n    transform: translateY(-5px);\n  }\n  \n  .column-layout {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 20px;\n  }\n  \n  .item {\n    background: #4ecdc4;\n    color: white;\n    padding: 15px;\n    border-radius: 5px;\n    text-align: center;\n  }\n</style>\n</head>\n<body>\n  <div class="container">\n    <div class="box">Box 1</div>\n    <div class="box">Box 2</div>\n    <div class="box">Box 3</div>\n  </div>\n  \n  <div class="column-layout">\n    <div class="item">Item A</div>\n    <div class="item">Item B</div>\n    <div class="item">Item C</div>\n  </div>\n</body>\n</html>',
      content: {
        title: "Layout with Flexbox",
        description: "Flexbox is a powerful CSS layout system that makes it easy to arrange elements in rows and columns. Say goodbye to complicated positioning tricks - flexbox makes layouts intuitive and responsive!",
        sections: [
          {
            title: "What is Flexbox?",
            content: "Flexbox (Flexible Box Layout) is a CSS layout method designed for arranging items in one dimension - either in a row or column. Think of it as a smart container that automatically organizes its children.\n\nTo use flexbox, add display: flex to a parent container. The children automatically become flex items that can be easily positioned and sized."
          },
          {
            title: "Main Flexbox Properties",
            content: "Key properties for the flex container:\n\n• **justify-content**: Controls horizontal alignment\n  - flex-start, center, flex-end, space-between, space-around\n• **align-items**: Controls vertical alignment\n  - flex-start, center, flex-end, stretch\n• **flex-direction**: Controls the direction\n  - row (default), column, row-reverse, column-reverse\n• **gap**: Adds space between items\n\nThese properties give you precise control over layout!"
          },
          {
            title: "Common Flexbox Patterns",
            content: "Master these common layouts:\n\n• **Center everything**: justify-content: center; align-items: center;\n• **Space items evenly**: justify-content: space-between;\n• **Stack vertically**: flex-direction: column;\n• **Responsive cards**: flex-wrap: wrap;\n\nFlexbox works great for navigation bars, card layouts, centering content, and creating responsive designs!"
          },
          {
            title: "Practice Flexbox!",
            content: "In the playground, try modifying:\n1. Change justify-content to 'center' or 'flex-end'\n2. Change align-items to 'flex-start' or 'stretch'\n3. Add flex-direction: column to .container\n4. Experiment with different gap values\n\nNotice how the boxes move around automatically!"
          }
        ]
      }
    },
    { 
      id: 4, 
      title: "CSS Grid Fundamentals", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: auto auto auto;\n    gap: 15px;\n    padding: 20px;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    border-radius: 10px;\n  }\n  \n  .grid-item {\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: bold;\n    color: #333;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n  }\n  \n  .header {\n    grid-column: 1 / -1; /* Span all columns */\n    background: #ff6b6b;\n    color: white;\n  }\n  \n  .sidebar {\n    background: #4ecdc4;\n    color: white;\n  }\n  \n  .main {\n    background: #45b7d1;\n    color: white;\n  }\n  \n  .footer {\n    grid-column: 1 / -1; /* Span all columns */\n    background: #96ceb4;\n    color: white;\n  }\n</style>\n</head>\n<body>\n  <div class="grid-container">\n    <div class="grid-item header">Header</div>\n    <div class="grid-item sidebar">Sidebar</div>\n    <div class="grid-item main">Main Content</div>\n    <div class="grid-item sidebar">Sidebar 2</div>\n    <div class="grid-item footer">Footer</div>\n  </div>\n</body>\n</html>',
      content: {
        title: "CSS Grid Fundamentals",
        description: "CSS Grid is the most powerful layout system in CSS. While Flexbox handles one-dimensional layouts, Grid excels at two-dimensional layouts with precise control over both rows and columns.",
        sections: [
          {
            title: "Understanding CSS Grid",
            content: "CSS Grid creates a two-dimensional layout system where you can place items in rows AND columns simultaneously. Think of it like a spreadsheet where you can control both the size and position of each cell.\n\nTo create a grid, use display: grid on a container, then define your columns and rows with grid-template-columns and grid-template-rows."
          },
          {
            title: "Grid Template Syntax",
            content: "Define your grid structure:\n\n• **Fixed sizes**: grid-template-columns: 200px 300px 200px\n• **Flexible units**: 1fr 2fr 1fr (fr = fraction of available space)\n• **Mixed units**: 200px 1fr auto\n• **Repeat function**: repeat(3, 1fr) creates 3 equal columns\n• **Auto sizing**: auto fits content, 1fr takes remaining space\n\nThe fr unit is powerful - it distributes available space proportionally!"
          },
          {
            title: "Grid Item Placement",
            content: "Control where items go in the grid:\n\n• **grid-column**: 1 / 3 (spans from column 1 to 3)\n• **grid-row**: 2 / 4 (spans from row 2 to 4)\n• **grid-area**: header (using named areas)\n• **Shorthand**: grid-column: 1 / -1 (spans to the last column)\n\nYou can overlap items, create complex layouts, and position elements precisely!"
          },
          {
            title: "When to Use Grid vs Flexbox",
            content: "Choose the right tool:\n\n**Use CSS Grid for:**\n• Two-dimensional layouts (rows AND columns)\n• Complex page layouts\n• Precise positioning requirements\n• Card layouts with different sizes\n\n**Use Flexbox for:**\n• One-dimensional layouts (row OR column)\n• Component alignment\n• Navigation bars\n• Centering items\n\nOften, you'll use both together in the same project!"
          }
        ]
      }
    },
    { 
      id: 5, 
      title: "Responsive Design", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n  \n  .responsive-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 20px;\n    margin-bottom: 30px;\n  }\n  \n  .card {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n  }\n  \n  .text {\n    font-size: clamp(1rem, 2.5vw, 2rem);\n    margin-bottom: 20px;\n  }\n  \n  /* Mobile-first media queries */\n  @media (max-width: 768px) {\n    .container {\n      padding: 10px;\n    }\n    \n    .card {\n      padding: 15px;\n    }\n  }\n  \n  @media (min-width: 769px) {\n    .responsive-grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n  \n  @media (min-width: 1024px) {\n    .responsive-grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n</style>\n</head>\n<body>\n  <div class="container">\n    <h1 class="text">Responsive Design Demo</h1>\n    <p>Resize your browser window to see the layout change!</p>\n    \n    <div class="responsive-grid">\n      <div class="card">Card 1<br>Resize to see magic!</div>\n      <div class="card">Card 2<br>Mobile-first design</div>\n      <div class="card">Card 3<br>Flexible layouts</div>\n      <div class="card">Card 4<br>CSS Grid power</div>\n    </div>\n  </div>\n</body>\n</html>',
      content: {
        title: "Responsive Design",
        description: "Responsive design ensures your website looks great on all devices - from tiny phones to huge desktop monitors. Learn the techniques that make modern websites adapt automatically to any screen size!",
        sections: [
          {
            title: "Mobile-First Approach",
            content: "Mobile-first means designing for mobile devices first, then enhancing for larger screens. This approach is important because:\n\n• Most web traffic comes from mobile devices\n• It's easier to scale up than scale down\n• Forces you to focus on essential content\n• Better performance on slower mobile connections\n\nStart with mobile styles, then use media queries to add enhancements for tablets and desktops."
          },
          {
            title: "Media Queries",
            content: "Media queries apply different styles based on screen size:\n\n```css\n/* Mobile styles (default) */\n.container { padding: 10px; }\n\n/* Tablet styles */\n@media (min-width: 768px) {\n  .container { padding: 20px; }\n}\n\n/* Desktop styles */\n@media (min-width: 1024px) {\n  .container { padding: 40px; }\n}\n```\n\nCommon breakpoints: 768px (tablet), 1024px (desktop), 1200px (large desktop)"
          },
          {
            title: "Flexible Units and Layouts",
            content: "Use flexible units for responsive design:\n\n• **Percentages**: width: 50% (relative to parent)\n• **Viewport units**: 100vw = full screen width, 100vh = full screen height\n• **rem/em**: Relative to font size, scales with user preferences\n• **CSS Grid**: auto-fit and minmax() for flexible columns\n• **Flexbox**: flex-wrap for responsive item wrapping\n\nAvoid fixed pixel values for widths in responsive layouts!"
          },
          {
            title: "Modern Responsive Techniques",
            content: "Advanced responsive techniques:\n\n• **clamp()**: clamp(min, preferred, max) for fluid typography\n• **Grid auto-fit**: repeat(auto-fit, minmax(250px, 1fr))\n• **Container queries**: Style based on parent size (newer feature)\n• **Aspect ratios**: aspect-ratio: 16/9 for consistent proportions\n\nThese techniques reduce the need for media queries and create more fluid, adaptive layouts!"
          }
        ]
      }
    },
    { 
      id: 6, 
      title: "CSS Animations & Transitions", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .animation-container {\n    padding: 40px;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    border-radius: 15px;\n    text-align: center;\n  }\n  \n  .bounce-box {\n    width: 100px;\n    height: 100px;\n    background: #ff6b6b;\n    margin: 20px auto;\n    border-radius: 50%;\n    animation: bounce 2s infinite;\n  }\n  \n  @keyframes bounce {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-30px); }\n  }\n  \n  .hover-button {\n    background: #4ecdc4;\n    color: white;\n    padding: 15px 30px;\n    border: none;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin: 10px;\n  }\n  \n  .hover-button:hover {\n    background: #45b7d1;\n    transform: scale(1.1) rotate(5deg);\n    box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n  }\n  \n  .fade-slide {\n    background: white;\n    padding: 20px;\n    margin: 20px auto;\n    max-width: 300px;\n    border-radius: 10px;\n    opacity: 0;\n    transform: translateX(-50px);\n    animation: fadeSlide 1s ease forwards;\n    animation-delay: 0.5s;\n  }\n  \n  @keyframes fadeSlide {\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n</style>\n</head>\n<body>\n  <div class="animation-container">\n    <h2 style="color: white; margin-bottom: 20px;">CSS Animations Demo</h2>\n    \n    <div class="bounce-box"></div>\n    \n    <button class="hover-button">Hover me!</button>\n    <button class="hover-button">Me too!</button>\n    \n    <div class="fade-slide">\n      <h3>Animated Content</h3>\n      <p>This box slides in with a fade effect!</p>\n    </div>\n  </div>\n</body>\n</html>',
      content: {
        title: "CSS Animations & Transitions",
        description: "Bring your websites to life with CSS animations and transitions! Learn how to create smooth, engaging animations that enhance user experience without overwhelming your visitors.",
        sections: [
          {
            title: "Transitions - Smooth State Changes",
            content: "Transitions make property changes smooth over time instead of instant:\n\n```css\n.button {\n  background: blue;\n  transition: background 0.3s ease;\n}\n\n.button:hover {\n  background: red; /* Smoothly changes over 0.3s */\n}\n```\n\nKey transition properties:\n• **transition-property**: which properties to animate\n• **transition-duration**: how long the animation takes\n• **transition-timing-function**: the animation curve (ease, linear, etc.)\n• **transition-delay**: wait time before starting"
          },
          {
            title: "CSS Animations with @keyframes",
            content: "Animations allow complex, multi-step movements:\n\n```css\n@keyframes bounce {\n  0% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n  100% { transform: translateY(0); }\n}\n\n.element {\n  animation: bounce 2s infinite;\n}\n```\n\nAnimation properties:\n• **animation-name**: the @keyframes name\n• **animation-duration**: how long one cycle takes\n• **animation-iteration-count**: how many times (or infinite)\n• **animation-direction**: normal, reverse, alternate"
          },
          {
            title: "Transform Property - The Animation Powerhouse",
            content: "Transform creates visual effects without affecting layout:\n\n• **translate()**: Move elements (translateX, translateY)\n• **rotate()**: Spin elements (rotate(45deg))\n• **scale()**: Resize elements (scale(1.2) = 20% bigger)\n• **skew()**: Distort elements (skewX, skewY)\n\nTransforms are hardware-accelerated = smooth performance!\nBest practices: Use transform for movement instead of changing position properties."
          },
          {
            title: "Performance and Best Practices",
            content: "Create smooth, performant animations:\n\n**Optimize for 60fps:**\n• Animate transform and opacity (GPU-accelerated)\n• Avoid animating layout properties (width, height, margin)\n• Use will-change: transform for complex animations\n\n**User Experience:**\n• Keep animations subtle and purposeful\n• Respect prefers-reduced-motion for accessibility\n• Use animation-fill-mode: forwards to maintain end state\n• Durations: 0.1-0.3s for micro-interactions, 0.5-1s for larger animations"
          }
        ]
      }
    }
  ] : [
    { 
      id: 1, 
      title: "What is HTML? Your First Web Page", 
      completed: true,
      playgroundCode: '<!-- This is your very first HTML code! -->\n<h1>Hello, I\'m Learning HTML! 🎉</h1>\n<p>Welcome to the amazing world of web development!</p>\n<p>HTML stands for HyperText Markup Language.</p>\n<p>This is my first web page, and I\'m so excited!</p>\n\n<!-- Try changing this text to your name -->\n<h2>My name is [Your Name Here]</h2>\n<p>I\'m going to build awesome websites!</p>',
      content: {
        title: "What is HTML? Your First Web Page",
        description: "Welcome to HTML! 🌟 HTML is the foundation of EVERY website you've ever visited. Think of it as the skeleton that gives structure to web pages - it tells the browser what's a heading, what's a paragraph, what's a link, and so much more!",
        sections: [
          {
            title: "What Does HTML Actually Mean?",
            content: "HTML stands for **HyperText Markup Language**. Let's break this down:\n\n• **HyperText**: Text that can link to other text (like clicking links to go to other pages!)\n• **Markup**: Adding special codes (called tags) to regular text to give it meaning\n• **Language**: A way for us to communicate with web browsers\n\nHTML is like giving instructions to a browser: 'Make this text big and bold!' or 'Put this text in a paragraph!'"
          },
          {
            title: "How HTML Works - Tags Are Everything!",
            content: "HTML uses **tags** - special codes wrapped in angle brackets < >. Most tags come in pairs:\n\n• **Opening tag**: `<h1>` (starts something)\n• **Content**: The actual text you want to show\n• **Closing tag**: `</h1>` (ends it - notice the forward slash!)\n\nExample: `<h1>My Big Heading</h1>`\n\nThe browser reads these tags and knows 'Oh, this should be displayed as a big heading!'"
          },
          {
            title: "Your First HTML Elements",
            content: "In the playground, you can see some basic HTML elements:\n\n• `<h1>`: Creates the biggest heading (perfect for titles!)\n• `<h2>`: Creates a smaller heading (great for subtitles)\n• `<p>`: Creates a paragraph of text\n• `<!-- -->`: Creates comments (notes that browsers ignore but help you remember what you did)\n\nThese are the building blocks of web pages!"
          },
          {
            title: "Let's Experiment! 🔬",
            content: "Time to get your hands dirty! In the playground:\n\n1. **Change the greeting**: Replace 'Hello, I'm Learning HTML!' with your own message\n2. **Add your name**: Replace '[Your Name Here]' with your actual name\n3. **Create more paragraphs**: Add another `<p>Your text here</p>`\n4. **Try different headings**: Change `<h2>` to `<h3>` and see what happens\n5. **Write a comment**: Add `<!-- This is my note -->` anywhere\n\nRemember: Making mistakes is part of learning! Experiment and have fun!"
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "HTML Document Structure & DOCTYPE", 
      completed: true,
      playgroundCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <title>My Amazing Website - Change This Title!</title>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>\n    <h1>Welcome to My Complete Website! 🚀</h1>\n    <p>This webpage has ALL the essential parts of a proper HTML document.</p>\n    \n    <h2>What Makes This Special?</h2>\n    <p>This page has:</p>\n    <ul>\n        <li>A proper DOCTYPE declaration</li>\n        <li>HTML root element with language</li>\n        <li>A head section with important information</li>\n        <li>A body section with visible content</li>\n    </ul>\n    \n    <p><strong>Change the title above and watch the browser tab change!</strong></p>\n</body>\n</html>',
      content: {
        title: "HTML Document Structure & DOCTYPE",
        description: "Every professional website follows a specific structure, just like how a house needs a foundation, walls, and a roof! Let's build your first complete HTML document with all the essential parts. 🏗️",
        sections: [
          {
            title: "The DOCTYPE Declaration - Your HTML's ID Card",
            content: "Every HTML document MUST start with `<!DOCTYPE html>`. Think of this as your webpage's ID card that tells the browser:\n\n'Hi browser! This is a modern HTML5 document. Please display it using the latest HTML standards!'\n\n**Why is this important?**\n• Without it, browsers might display your page in 'quirks mode' (old, weird behavior)\n• It must be the VERY FIRST line (even before `<html>`)\n• It's not a tag - it's a declaration (notice no closing tag needed)\n\nAlways, ALWAYS start with `<!DOCTYPE html>`!"
          },
          {
            title: "The HTML Root Element - Your Document's Container",
            content: "The `<html>` tag is like the main box that contains everything else:\n\n```html\n<html lang=\"en\">\n  <!-- Everything goes inside here -->\n</html>\n```\n\n**The lang attribute** tells browsers and screen readers what language your content is in:\n• `lang=\"en\"` for English\n• `lang=\"es\"` for Spanish\n• `lang=\"fr\"` for French\n\nThis helps with accessibility and search engines understanding your content!"
          },
          {
            title: "HEAD Section - The Behind-the-Scenes Information",
            content: "The `<head>` section contains information ABOUT your webpage that visitors don't see directly:\n\n**Essential head elements:**\n• `<title>`: What shows in browser tabs and bookmarks\n• `<meta charset=\"UTF-8\">`: Tells browser how to read special characters (emojis, accents, etc.)\n• `<meta name=\"viewport\"...>`: Makes your site work well on phones and tablets\n\n**Think of the head as:**\n• The envelope of a letter (has important info but isn't the main message)\n• The settings/preferences for your webpage\n• Information for search engines and social media"
          },
          {
            title: "BODY Section - What People Actually See",
            content: "The `<body>` contains everything visitors see and interact with:\n\n• All your text, images, videos, buttons, forms, etc.\n• This is where you spend most of your time as a web developer\n• Only ONE body element per HTML document\n• Everything visible goes here!\n\n**The basic structure:**\n```html\n<body>\n  <h1>Your content here</h1>\n  <p>More content here</p>\n  <!-- All visible content goes inside body -->\n</body>\n```"
          },
          {
            title: "Practice Time! 💪",
            content: "Let's customize your complete HTML document:\n\n1. **Change the title**: Update the `<title>` text and watch your browser tab change!\n2. **Add more content**: Create more headings and paragraphs in the body\n3. **Experiment with structure**: Try adding `<h3>`, `<h4>` headings\n4. **Add meta description**: In the head, add `<meta name=\"description\" content=\"My awesome website\">`\n\nNotice how head changes affect the browser/tab, but body changes affect what you see on the page!"
          }
        ]
      }
    },
    { 
      id: 3, 
      title: "Headings and Text Formatting", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Text Formatting Demo</title>\n</head>\n<body>\n    <h1>This is the Main Title (H1)</h1>\n    <h2>This is a Section Heading (H2)</h2>\n    <h3>This is a Subsection (H3)</h3>\n    <h4>Smaller Heading (H4)</h4>\n    <h5>Even Smaller (H5)</h5>\n    <h6>Smallest Heading (H6)</h6>\n    \n    <p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>\n    \n    <p>You can also use <u>underlined text</u>, <mark>highlighted text</mark>, and <small>small text</small>.</p>\n    \n    <p>For code, use <code>console.log(\"Hello!\")</code> and for deleted text use <del>this was wrong</del>.</p>\n    \n    <p>Subscript: H<sub>2</sub>O and Superscript: E=mc<sup>2</sup></p>\n    \n    <blockquote>\n        \"The best way to learn HTML is by doing it!\" - Every web developer\n    </blockquote>\n</body>\n</html>',
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
    { 
      id: 7, 
      title: "Paragraphs, Line Breaks & Spacing", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Text Spacing and Breaks</title>\n</head>\n<body>\n    <h1>Understanding Text Spacing</h1>\n    \n    <p>This is a regular paragraph. HTML automatically adds space above and below paragraphs, making your content easy to read.</p>\n    \n    <p>This is another paragraph. Notice the space between this and the paragraph above? That\'s automatic!</p>\n    \n    <p>Sometimes you want a line break within a paragraph.<br>\n    Like this! The &lt;br&gt; tag creates a single line break.<br>\n    You can use it multiple times for more space.</p>\n    \n    <p>You can also use &amp;nbsp; for non-breaking spaces.&nbsp;&nbsp;&nbsp;Like&nbsp;this!</p>\n    \n    <hr>\n    \n    <p>The &lt;hr&gt; tag above creates a horizontal line to separate content sections.</p>\n    \n    <p>Want to show code? Use spaces and the &lt;pre&gt; tag:</p>\n    <pre>\n    This text preserves\n        all    spacing\n            and line breaks!\n    </pre>\n</body>\n</html>',
      content: {
        title: "Paragraphs, Line Breaks & Spacing",
        description: "Master the art of text spacing! Learn how HTML handles paragraphs, line breaks, and spacing to make your content readable and well-organized. Good spacing makes the difference between messy and professional-looking websites! ✨",
        sections: [
          {
            title: "Paragraphs - Your Text Building Blocks",
            content: "The `<p>` tag is your best friend for text content! Every `<p>` tag automatically:\n\n• Adds space above and below the text\n• Creates a distinct block of content\n• Makes text easier to read\n• Works perfectly on mobile devices\n\n**Best practice:** Use a new `<p>` tag for each new thought or topic, just like you'd start a new paragraph when writing an essay!"
          },
          {
            title: "Line Breaks - When You Need Just One Line",
            content: "Sometimes you need to break a line WITHOUT starting a new paragraph:\n\n• `<br>` creates a single line break\n• `<br>` is self-closing (no closing tag needed)\n• Perfect for addresses, poems, or song lyrics\n\nExample:\n```html\nJohn Smith<br>\n123 Main Street<br>\nAnytown, USA 12345\n```\n\nUse `<br>` sparingly - paragraphs are usually better for readability!"
          },
          {
            title: "Special Spacing Techniques",
            content: "HTML has special ways to control spacing:\n\n• **`&nbsp;`**: Non-breaking space (won't wrap to next line)\n• **`<pre>`**: Preserves ALL spacing and line breaks (great for code)\n• **`<hr>`**: Horizontal rule - creates a line to separate content\n\n**Pro tip:** Never use multiple `<br>` tags to create space. Use CSS instead for better control!"
          },
          {
            title: "Practice Perfect Spacing! 🎯",
            content: "In the playground, experiment with:\n1. Add more paragraphs and see the automatic spacing\n2. Use `<br>` to create line breaks within a paragraph\n3. Try the `<pre>` tag with your own formatted text\n4. Add `<hr>` tags to separate different sections\n5. Play with `&nbsp;` to create specific spacing\n\nRemember: Good spacing makes content easier to read and more professional!"
          }
        ]
      }
    },
    { 
      id: 8, 
      title: "Lists - Organized Content Made Easy", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>List Mastery</title>\n</head>\n<body>\n    <h1>My Learning Journey</h1>\n    \n    <h2>Things I Love About Coding:</h2>\n    <ul>\n        <li>Creating something from nothing</li>\n        <li>Solving puzzles and problems</li>\n        <li>Building websites that help people</li>\n        <li>The \"aha!\" moment when code works</li>\n        <li>Continuous learning and growth</li>\n    </ul>\n    \n    <h2>My Daily Learning Routine:</h2>\n    <ol>\n        <li>Review yesterday\'s lessons</li>\n        <li>Learn one new HTML concept</li>\n        <li>Practice in the playground</li>\n        <li>Build something fun</li>\n        <li>Celebrate my progress! 🎉</li>\n    </ol>\n    \n    <h2>Web Development Skills:</h2>\n    <ul>\n        <li>HTML Basics\n            <ul>\n                <li>Document structure</li>\n                <li>Text formatting</li>\n                <li>Links and images</li>\n            </ul>\n        </li>\n        <li>CSS (Coming Soon!)\n            <ul>\n                <li>Colors and fonts</li>\n                <li>Layouts</li>\n                <li>Animations</li>\n            </ul>\n        </li>\n    </ul>\n    \n    <h2>Description List Example:</h2>\n    <dl>\n        <dt>HTML</dt>\n        <dd>The structure and content of web pages</dd>\n        \n        <dt>CSS</dt>\n        <dd>The styling and appearance of web pages</dd>\n        \n        <dt>JavaScript</dt>\n        <dd>The behavior and interactivity of web pages</dd>\n    </dl>\n</body>\n</html>',
      content: {
        title: "Lists - Organized Content Made Easy",
        description: "Lists are everywhere on the web! From navigation menus to shopping carts, from feature lists to step-by-step guides. Master HTML lists and you'll be able to organize any content clearly and professionally! 📋",
        sections: [
          {
            title: "Unordered Lists - When Order Doesn't Matter",
            content: "Use `<ul>` (unordered list) for items where sequence isn't important:\n\n```html\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>\n```\n\n**Perfect for:**\n• Feature lists\n• Navigation menus  \n• Shopping lists\n• Benefits/advantages\n• Social media links\n\nBy default, browsers show bullets (•), but you can change this with CSS!"
          },
          {
            title: "Ordered Lists - When Sequence Matters",
            content: "Use `<ol>` (ordered list) when the order IS important:\n\n```html\n<ol>\n  <li>Mix ingredients</li>\n  <li>Bake for 30 minutes</li>\n  <li>Let cool</li>\n</ol>\n```\n\n**Perfect for:**\n• Step-by-step instructions\n• Rankings or top 10 lists\n• Recipes\n• Tutorial steps\n• Timeline events\n\nNumbers appear automatically - HTML counts for you!"
          },
          {
            title: "Nested Lists - Lists Within Lists",
            content: "You can put lists inside other lists for complex organization:\n\n```html\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Apples</li>\n      <li>Oranges</li>\n    </ul>\n  </li>\n  <li>Vegetables\n    <ul>\n      <li>Carrots</li>\n      <li>Broccoli</li>\n    </ul>\n  </li>\n</ul>\n```\n\nGreat for site maps, category organization, and detailed outlines!"
          },
          {
            title: "Description Lists - Terms and Definitions",
            content: "Use `<dl>` for term/definition pairs:\n\n```html\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  \n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>\n```\n\n• `<dl>` = description list\n• `<dt>` = description term\n• `<dd>` = description definition\n\nPerfect for glossaries, FAQs, and key-value information!"
          },
          {
            title: "List Practice Time! 🚀",
            content: "In the playground, try:\n1. Add more items to your favorite things list\n2. Create a nested list of your hobbies with specific activities\n3. Make an ordered list of your goals for this year\n4. Build a description list of HTML terms you've learned\n5. Experiment with mixing different list types\n\nLists are the foundation of organized web content!"
          }
        ]
      }
    },
    { 
      id: 9, 
      title: "Links - Connecting the Web Together", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Link Mastery</title>\n</head>\n<body>\n    <h1>Welcome to My Link Collection! 🔗</h1>\n    \n    <h2>External Links:</h2>\n    <p>Check out these awesome websites:</p>\n    <ul>\n        <li><a href=\"https://www.codecademy.com\" target=\"_blank\" title=\"Learn to code interactively\">Codecademy - Interactive Coding Lessons</a></li>\n        <li><a href=\"https://developer.mozilla.org\" target=\"_blank\">MDN Web Docs - The Ultimate Reference</a></li>\n        <li><a href=\"https://www.freecodecamp.org\" target=\"_blank\">FreeCodeCamp - Free Coding Education</a></li>\n    </ul>\n    \n    <h2>Communication Links:</h2>\n    <p>Get in touch with me:</p>\n    <ul>\n        <li>📧 <a href=\"mailto:hello@example.com?subject=Hello from your website!\">Send me an email</a></li>\n        <li>📱 <a href=\"tel:+1234567890\">Call me: (123) 456-7890</a></li>\n        <li>💬 <a href=\"sms:+1234567890\">Send me a text message</a></li>\n    </ul>\n    \n    <h2>Page Navigation:</h2>\n    <p>Jump to different sections:</p>\n    <ul>\n        <li><a href=\"#about\">About Me</a></li>\n        <li><a href=\"#skills\">My Skills</a></li>\n        <li><a href=\"#contact\">Contact Information</a></li>\n    </ul>\n    \n    <h2 id=\"about\">About Me</h2>\n    <p>I\'m learning web development and loving every minute of it! HTML is amazing because it connects the entire web together through links.</p>\n    \n    <h2 id=\"skills\">My Skills</h2>\n    <p>I\'m building skills in:</p>\n    <ul>\n        <li>HTML structure and semantics</li>\n        <li>Creating accessible and user-friendly links</li>\n        <li>Building navigation that makes sense</li>\n    </ul>\n    \n    <h2 id=\"contact\">Contact Information</h2>\n    <p>Want to connect? Use any of the communication links above!</p>\n    \n    <p><a href=\"#top\">Back to top ⬆️</a></p>\n</body>\n</html>',
      content: {
        title: "Links - Connecting the Web Together",
        description: "Links are the magic that makes the web 'worldwide'! They're the bridges that connect every website, page, and resource on the internet. Master links and you'll understand the fundamental power of the web! 🌐",
        sections: [
          {
            title: "The Anchor Tag - Your Gateway to Everywhere",
            content: "The `<a>` tag (anchor) creates all links. Think of it as a door that can lead anywhere:\n\n```html\n<a href=\"destination\">Link text</a>\n```\n\n• **href** = hypertext reference (where to go)\n• **Link text** = what users see and click\n• **href** is like GPS coordinates for the web\n• **Link text** should clearly describe the destination\n\nAlways make link text descriptive - 'Visit our pricing page' is better than 'click here'!"
          },
          {
            title: "External Links - Connecting to Other Websites",
            content: "Link to other websites with full URLs:\n\n```html\n<a href=\"https://www.example.com\">Visit Example.com</a>\n```\n\n**Best practices:**\n• Always start with `https://` for secure connections\n• Use `target=\"_blank\"` to open in new tab: `<a href=\"...\" target=\"_blank\">`\n• Add `title` attribute for helpful tooltips\n• Test your links regularly to ensure they work\n\n**Example with all best practices:**\n```html\n<a href=\"https://github.com\" target=\"_blank\" title=\"GitHub - Where code lives\">Visit GitHub</a>\n```"
          },
          {
            title: "Communication Links - Direct Contact Made Easy",
            content: "HTML can trigger different actions:\n\n• **Email**: `<a href=\"mailto:someone@email.com\">Send Email</a>`\n• **Phone**: `<a href=\"tel:+1234567890\">Call Us</a>`\n• **SMS**: `<a href=\"sms:+1234567890\">Text Us</a>`\n\n**Enhanced email links:**\n```html\n<a href=\"mailto:hello@site.com?subject=Hello&body=Hi there!\">Email with pre-filled subject and message</a>\n```\n\nThese links work automatically on phones and computers!"
          },
          {
            title: "Internal Links - Navigation Within Your Site",
            content: "Link to sections on the same page or other pages:\n\n**Same page sections:**\n1. Add an `id` to any element: `<h2 id=\"about\">About</h2>`\n2. Link to it: `<a href=\"#about\">Go to About section</a>`\n\n**Other pages on your site:**\n• `<a href=\"about.html\">About Page</a>`\n• `<a href=\"../contact.html\">Contact Page</a>`\n• `<a href=\"/\">Home Page</a>`\n\n**File downloads:**\n• `<a href=\"resume.pdf\" download>Download my resume</a>`"
          },
          {
            title: "Link Practice Session! 🎯",
            content: "In the playground, experiment with:\n1. Change external links to your favorite websites\n2. Update the email link with your email address\n3. Add new internal navigation links\n4. Create a 'Back to top' link\n5. Try the `target=\"_blank\"` attribute\n6. Add helpful `title` attributes\n\nLinks are the foundation of web navigation - master them and you master the web!"
          }
        ]
      }
    },
    { 
      id: 10, 
      title: "Images - Adding Visual Content", 
      completed: false,
      playgroundCode: '<h1>My Photo Gallery 📸</h1>\\n\\n<p>Here are some beautiful images:</p>\\n\\n<img src=\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300\" alt=\"Beautiful mountain landscape\" width=\"300\">\\n\\n<p>A cute kitten:</p>\\n<img src=\"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=250\" alt=\"Adorable orange kitten\" width=\"250\">\\n\\n<p>You can also add captions:</p>\\n<figure>\\n  <img src=\"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300\" alt=\"Sunset over the ocean\" width=\"300\">\\n  <figcaption>Beautiful sunset at the beach</figcaption>\\n</figure>\\n\\n<p>Try changing the image URLs or adding your own!</p>',
      content: {
        title: "Images - Adding Visual Content",
        description: "A picture truly is worth a thousand words! Images make websites come alive, tell stories, and create emotional connections with your visitors. Let's master the art of adding beautiful, accessible images to your web pages! 🎨",
        sections: [
          {
            title: "The Image Tag - Your Visual Gateway",
            content: "The `<img>` tag brings images to your webpage. Unlike most HTML tags, it's self-closing:\n\n```html\n<img src=\"image.jpg\" alt=\"Description of image\">\n```\n\n**Essential attributes:**\n• **src**: The image source (URL or file path)\n• **alt**: Alternative text for accessibility and SEO\n• **width/height**: Dimensions (optional but helpful)\n• **title**: Tooltip text when hovering\n\n**Remember:** The `alt` attribute is crucial - it helps screen readers describe images to visually impaired users!"
          },
          {
            title: "Image Sources - Where to Find Great Images",
            content: "You can use images from various sources:\n\n**Free image websites (always check licenses):**\n• Unsplash.com - High-quality photos\n• Pexels.com - Free stock photos\n• Pixabay.com - Images, vectors, illustrations\n• Freepik.com - Graphics and vectors\n\n**Your own images:**\n• Photos from your phone/camera\n• Screenshots\n• Graphics you create\n• Company logos and branding\n\n**Best practices:**\n• Always respect copyright\n• Optimize file sizes for faster loading\n• Choose images that support your content"
          },
          {
            title: "Making Images Responsive and Accessible",
            content: "Modern images should work on all devices:\n\n**Responsive images:**\n```html\n<img src=\"photo.jpg\" \n     alt=\"Detailed description\" \n     style=\"max-width: 100%; height: auto;\">\n```\n\n**Figure and figcaption for images with captions:**\n```html\n<figure>\n  <img src=\"sunset.jpg\" alt=\"Sunset over mountains\">\n  <figcaption>Beautiful sunset in the Rocky Mountains</figcaption>\n</figure>\n```\n\n**Writing great alt text:**\n• Be descriptive but concise\n• Describe what's important about the image\n• Skip 'image of' or 'picture of'\n• For decorative images, use empty alt: `alt=\"\"`"
          },
          {
            title: "Advanced Image Techniques",
            content: "Take your images to the next level:\n\n**Loading optimization:**\n```html\n<img src=\"large-image.jpg\" \n     alt=\"Description\" \n     loading=\"lazy\">\n```\n\n**Multiple image sources for different devices:**\n```html\n<picture>\n  <source media=\"(min-width: 800px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 400px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Description\">\n</picture>\n```\n\n**Images as links:**\n```html\n<a href=\"full-size-image.jpg\">\n  <img src=\"thumbnail.jpg\" alt=\"Click to view larger\">\n</a>\n```"
          },
          {
            title: "Image Practice Challenge! 📸",
            content: "In the playground, experiment with:\n1. Replace images with URLs from Unsplash (search for topics you like)\n2. Write detailed, helpful alt text for each image\n3. Add captions using `<figure>` and `<figcaption>`\n4. Try different image sizes and see how they adapt\n5. Create an image grid or gallery layout\n6. Add `title` attributes for hover tooltips\n\nGreat images make websites memorable and engaging!"
          }
        ]
      }
    }
  ];

  const currentLesson = lessons.find(lesson => lesson.id === selectedLesson) || lessons[0];

  // Update playground code when lesson changes
  useEffect(() => {
    if (currentLesson && currentLesson.playgroundCode) {
      setHtmlCode(currentLesson.playgroundCode);
    }
  }, [selectedLesson, currentLesson]);

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
