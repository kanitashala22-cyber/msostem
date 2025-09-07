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
      playgroundCode: '<h1>Hello, World!</h1>\n<p>This is my first HTML page!</p>\n<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>',
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
    },
    { 
      id: 11, 
      title: "Tables - Organizing Data in Rows & Columns", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Examples</title>\n    <style>\n        table { border-collapse: collapse; width: 100%; margin: 20px 0; }\n        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }\n        th { background-color: #f2f2f2; font-weight: bold; }\n        .highlight { background-color: #fff3cd; }\n    </style>\n</head>\n<body>\n    <h1>My Learning Schedule 📅</h1>\n    \n    <h2>Weekly Study Plan:</h2>\n    <table>\n        <thead>\n            <tr>\n                <th>Day</th>\n                <th>Subject</th>\n                <th>Time</th>\n                <th>Duration</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Monday</td>\n                <td>HTML Basics</td>\n                <td>2:00 PM</td>\n                <td>1 hour</td>\n            </tr>\n            <tr class=\"highlight\">\n                <td>Tuesday</td>\n                <td>CSS Styling</td>\n                <td>2:00 PM</td>\n                <td>1.5 hours</td>\n            </tr>\n            <tr>\n                <td>Wednesday</td>\n                <td>Practice Projects</td>\n                <td>3:00 PM</td>\n                <td>2 hours</td>\n            </tr>\n            <tr>\n                <td>Thursday</td>\n                <td>JavaScript Intro</td>\n                <td>2:00 PM</td>\n                <td>1 hour</td>\n            </tr>\n            <tr class=\"highlight\">\n                <td>Friday</td>\n                <td>Portfolio Building</td>\n                <td>4:00 PM</td>\n                <td>2 hours</td>\n            </tr>\n        </tbody>\n    </table>\n    \n    <h2>Progress Tracker:</h2>\n    <table>\n        <tr>\n            <th>Skill</th>\n            <th>Beginner</th>\n            <th>Intermediate</th>\n            <th>Advanced</th>\n        </tr>\n        <tr>\n            <td>HTML</td>\n            <td>✅</td>\n            <td>🔄</td>\n            <td>❌</td>\n        </tr>\n        <tr>\n            <td>CSS</td>\n            <td>🔄</td>\n            <td>❌</td>\n            <td>❌</td>\n        </tr>\n        <tr>\n            <td>JavaScript</td>\n            <td>❌</td>\n            <td>❌</td>\n            <td>❌</td>\n        </tr>\n    </table>\n</body>\n</html>',
      content: {
        title: "Tables - Organizing Data in Rows & Columns",
        description: "Tables are perfect for displaying data that has relationships - like spreadsheets, schedules, and comparisons. Learn to create organized, accessible tables that make complex information easy to understand! 📊",
        sections: [
          {
            title: "Table Structure - The Building Blocks",
            content: "HTML tables use several elements working together:\n\n• **`<table>`**: The container for everything\n• **`<tr>`**: Table row (horizontal)\n• **`<th>`**: Table header (column titles - bold by default)\n• **`<td>`**: Table data (regular cells)\n• **`<thead>`**: Groups header rows\n• **`<tbody>`**: Groups body rows\n• **`<tfoot>`**: Groups footer rows (totals, etc.)\n\nThink of it like building a house: table is the foundation, rows are floors, cells are rooms!"
          },
          {
            title: "Creating Your First Table",
            content: "Basic table structure:\n\n```html\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n    <th>City</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>25</td>\n    <td>New York</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>30</td>\n    <td>London</td>\n  </tr>\n</table>\n```\n\n**Key points:**\n• First row usually contains headers (`<th>`)\n• Each row should have the same number of cells\n• Headers help screen readers understand table structure"
          },
          {
            title: "Making Tables Look Professional",
            content: "Enhance your tables with:\n\n**Styling with CSS:**\n• `border-collapse: collapse` removes double borders\n• `width: 100%` makes table fill container\n• Alternate row colors for readability\n• Padding in cells for better spacing\n\n**Semantic structure:**\n```html\n<table>\n  <thead>\n    <tr><th>Header 1</th><th>Header 2</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data 1</td><td>Data 2</td></tr>\n  </tbody>\n</table>\n```\n\nThis helps browsers and assistive technology understand your table!"
          },
          {
            title: "Advanced Table Features",
            content: "Take your tables further:\n\n**Spanning cells:**\n• `colspan=\"2\"` makes cell span 2 columns\n• `rowspan=\"3\"` makes cell span 3 rows\n\n**Captions and summaries:**\n• `<caption>Table Title</caption>` describes the table\n• Helps with accessibility and SEO\n\n**When NOT to use tables:**\n• Don't use tables for page layout (use CSS instead)\n• Tables are for data that has relationships\n• Use tables when information makes sense in rows and columns"
          },
          {
            title: "Table Practice Challenge! 📈",
            content: "In the playground, try:\n1. Add more rows to the schedule with your own study plan\n2. Create a table comparing different programming languages\n3. Build a grade tracker table with subjects and scores\n4. Add `colspan` to merge cells across columns\n5. Use different background colors to highlight important rows\n\nTables are powerful tools for organizing complex information clearly!"
          }
        ]
      }
    },
    { 
      id: 12, 
      title: "HTML5 Semantic Elements", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Semantic HTML5 Layout</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }\n        header { background: #2c3e50; color: white; padding: 20px; text-align: center; }\n        nav { background: #34495e; padding: 10px; }\n        nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 20px; }\n        nav a { color: white; text-decoration: none; }\n        main { display: flex; min-height: 80vh; }\n        article { flex: 2; padding: 20px; }\n        aside { flex: 1; background: #ecf0f1; padding: 20px; }\n        footer { background: #2c3e50; color: white; text-align: center; padding: 20px; }\n        section { margin-bottom: 30px; }\n        h1, h2, h3 { color: #2c3e50; }\n    </style>\n</head>\n<body>\n    <header>\n        <h1>My Learning Blog 📚</h1>\n        <p>Documenting my journey in web development</p>\n    </header>\n    \n    <nav>\n        <ul>\n            <li><a href=\"#home\">Home</a></li>\n            <li><a href=\"#blog\">Blog Posts</a></li>\n            <li><a href=\"#about\">About Me</a></li>\n            <li><a href=\"#contact\">Contact</a></li>\n        </ul>\n    </nav>\n    \n    <main>\n        <article>\n            <header>\n                <h2>My First Week Learning HTML</h2>\n                <p><time datetime=\"2024-01-15\">January 15, 2024</time> by <strong>Future Web Developer</strong></p>\n            </header>\n            \n            <section>\n                <h3>What I Learned</h3>\n                <p>This week I discovered the amazing world of HTML5 semantic elements! These special tags make websites more meaningful and accessible.</p>\n            </section>\n            \n            <section>\n                <h3>Key Takeaways</h3>\n                <ul>\n                    <li>Semantic elements describe content meaning, not just appearance</li>\n                    <li>They help screen readers navigate websites better</li>\n                    <li>Search engines understand page structure better</li>\n                    <li>Code becomes more readable for other developers</li>\n                </ul>\n            </section>\n            \n            <footer>\n                <p>Tags: <mark>HTML</mark>, <mark>Web Development</mark>, <mark>Learning</mark></p>\n            </footer>\n        </article>\n        \n        <aside>\n            <section>\n                <h3>Quick Links</h3>\n                <ul>\n                    <li><a href=\"#\">HTML Documentation</a></li>\n                    <li><a href=\"#\">CSS Resources</a></li>\n                    <li><a href=\"#\">JavaScript Tutorials</a></li>\n                </ul>\n            </section>\n            \n            <section>\n                <h3>Recent Posts</h3>\n                <ul>\n                    <li><a href=\"#\">Understanding Flexbox</a></li>\n                    <li><a href=\"#\">Building Responsive Layouts</a></li>\n                    <li><a href=\"#\">JavaScript Fundamentals</a></li>\n                </ul>\n            </section>\n        </aside>\n    </main>\n    \n    <footer>\n        <p>&copy; 2024 My Learning Journey. Made with ❤️ and HTML5!</p>\n    </footer>\n</body>\n</html>',
      content: {
        title: "HTML5 Semantic Elements",
        description: "HTML5 introduced amazing semantic elements that give meaning to your content! These elements make your websites more accessible, SEO-friendly, and easier to understand. Let's explore how to build meaningful web pages! 🏗️",
        sections: [
          {
            title: "What Are Semantic Elements?",
            content: "Semantic elements clearly describe their meaning to both browsers and developers:\n\n**Before HTML5:** `<div class=\"header\">`, `<div class=\"navigation\">`\n**HTML5 Semantic:** `<header>`, `<nav>`\n\n**Benefits:**\n• Better accessibility for screen readers\n• Improved SEO (search engines understand structure)\n• More readable code for developers\n• Consistent page structure across the web\n\nSemantic elements tell the story of your content!"
          },
          {
            title: "Essential Semantic Elements",
            content: "Core HTML5 semantic elements:\n\n• **`<header>`**: Page or section header (logo, navigation, intro)\n• **`<nav>`**: Navigation links (menus, breadcrumbs)\n• **`<main>`**: Main content area (one per page)\n• **`<article>`**: Independent content (blog posts, news articles)\n• **`<section>`**: Thematic grouping of content\n• **`<aside>`**: Related content (sidebars, widgets)\n• **`<footer>`**: Page or section footer (copyright, contact info)\n• **`<figure>`**: Images with captions\n• **`<time>`**: Dates and times"
          },
          {
            title: "Building Page Structure",
            content: "Typical semantic page layout:\n\n```html\n<header>\n  <h1>Site Title</h1>\n  <nav><!-- Main navigation --></nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h2>Article Title</h2>\n      <time datetime=\"2024-01-15\">Jan 15, 2024</time>\n    </header>\n    <section><!-- Article content --></section>\n    <footer><!-- Article tags, author --></footer>\n  </article>\n  \n  <aside><!-- Related content, ads --></aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 Your Site</p>\n</footer>\n```\n\nThis creates a clear, logical structure!"
          },
          {
            title: "Semantic Elements vs Generic Divs",
            content: "When to use semantic elements vs `<div>`:\n\n**Use semantic elements when:**\n• Content has a specific meaning (navigation, article, etc.)\n• You want better accessibility\n• Structure is important for SEO\n\n**Use `<div>` when:**\n• You need a container purely for styling\n• No semantic meaning exists\n• Grouping elements for CSS layout\n\n**Example:**\n• ✅ `<article>` for blog posts\n• ✅ `<div class=\"card\">` for styling containers\n• ❌ `<div class=\"navigation\">` (use `<nav>` instead)"
          },
          {
            title: "Semantic HTML Practice! 🎯",
            content: "In the playground, explore:\n1. Change the article content to write about your own learning experience\n2. Add more sections to the article\n3. Update the aside with your favorite learning resources\n4. Try adding a `<figure>` with an image and caption\n5. Use `<time>` elements for different dates\n6. Add your own footer content\n\nSemantic HTML makes the web better for everyone!"
          }
        ]
      }
    },
    { 
      id: 13, 
      title: "Forms - Collecting User Input", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Contact Me Form</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }\n        form { background: #f9f9f9; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }\n        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }\n        input, textarea, select { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px; }\n        input[type=\"radio\"], input[type=\"checkbox\"] { width: auto; margin-right: 8px; }\n        button { background: #3498db; color: white; padding: 12px 30px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; }\n        button:hover { background: #2980b9; }\n        .form-group { margin-bottom: 20px; }\n        .radio-group { display: flex; gap: 20px; }\n    </style>\n</head>\n<body>\n    <h1>Get in Touch! 📝</h1>\n    <p>I\'d love to hear from you. Fill out this form to send me a message!</p>\n    \n    <form action=\"#\" method=\"post\">\n        <div class=\"form-group\">\n            <label for=\"name\">Your Name *</label>\n            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your full name\" required>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"email\">Email Address *</label>\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"your@email.com\" required>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"phone\">Phone Number</label>\n            <input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"(555) 123-4567\">\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"age\">Age</label>\n            <input type=\"number\" id=\"age\" name=\"age\" min=\"13\" max=\"120\" placeholder=\"18\">\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"subject\">Subject</label>\n            <select id=\"subject\" name=\"subject\">\n                <option value=\"\">Choose a topic...</option>\n                <option value=\"general\">General Question</option>\n                <option value=\"collaboration\">Collaboration Opportunity</option>\n                <option value=\"feedback\">Website Feedback</option>\n                <option value=\"other\">Other</option>\n            </select>\n        </div>\n        \n        <div class=\"form-group\">\n            <label>How did you find my website?</label>\n            <div class=\"radio-group\">\n                <label><input type=\"radio\" name=\"source\" value=\"search\"> Search Engine</label>\n                <label><input type=\"radio\" name=\"source\" value=\"social\"> Social Media</label>\n                <label><input type=\"radio\" name=\"source\" value=\"friend\"> Friend Referral</label>\n                <label><input type=\"radio\" name=\"source\" value=\"other\"> Other</label>\n            </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <label>What are you interested in? (Check all that apply)</label>\n            <label><input type=\"checkbox\" name=\"interests\" value=\"webdev\"> Web Development</label>\n            <label><input type=\"checkbox\" name=\"interests\" value=\"design\"> Design</label>\n            <label><input type=\"checkbox\" name=\"interests\" value=\"programming\"> Programming Tutorials</label>\n            <label><input type=\"checkbox\" name=\"interests\" value=\"tips\"> Tips & Tricks</label>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"message\">Your Message *</label>\n            <textarea id=\"message\" name=\"message\" rows=\"6\" placeholder=\"Tell me about your project, ask a question, or just say hello!\" required></textarea>\n        </div>\n        \n        <div class=\"form-group\">\n            <label><input type=\"checkbox\" name=\"newsletter\" value=\"yes\"> Subscribe to my newsletter for web development tips!</label>\n        </div>\n        \n        <button type=\"submit\">Send Message 🚀</button>\n        <button type=\"reset\">Clear Form</button>\n    </form>\n</body>\n</html>',
      content: {
        title: "Forms - Collecting User Input",
        description: "Forms are how websites talk to users! From contact forms to surveys, from login pages to shopping carts - forms make websites interactive. Let's master the art of creating user-friendly forms! 📋",
        sections: [
          {
            title: "Form Basics - The Foundation",
            content: "Forms collect user data and send it somewhere:\n\n**Basic structure:**\n```html\n<form action=\"where-to-send\" method=\"post\">\n  <input type=\"text\" name=\"username\">\n  <button type=\"submit\">Submit</button>\n</form>\n```\n\n**Key attributes:**\n• **action**: Where to send form data (URL or server script)\n• **method**: How to send data (\"get\" or \"post\")\n• **name**: Identifies each input when form is submitted\n\n**Essential elements:**\n• `<input>` - Various input types\n• `<textarea>` - Multi-line text\n• `<select>` - Dropdown menus\n• `<button>` - Form submission"
          },
          {
            title: "Input Types - Choose the Right Tool",
            content: "Different input types for different data:\n\n**Text inputs:**\n• `type=\"text\"` - Regular text\n• `type=\"email\"` - Email addresses (with validation)\n• `type=\"password\"` - Hidden text\n• `type=\"tel\"` - Phone numbers\n• `type=\"url\"` - Website addresses\n\n**Number inputs:**\n• `type=\"number\"` - Numbers with spin buttons\n• `type=\"range\"` - Slider controls\n\n**Date/Time inputs:**\n• `type=\"date\"` - Date picker\n• `type=\"time\"` - Time picker\n• `type=\"datetime-local\"` - Date and time\n\n**Choice inputs:**\n• `type=\"radio\"` - Single choice from group\n• `type=\"checkbox\"` - Multiple choices\n• `<select>` - Dropdown menu"
          },
          {
            title: "Labels and Accessibility",
            content: "Always use labels with form inputs:\n\n**Proper labeling:**\n```html\n<label for=\"email\">Email Address</label>\n<input type=\"email\" id=\"email\" name=\"email\">\n```\n\n**Why labels matter:**\n• Screen readers can announce what each field is for\n• Clicking labels focuses the input (better user experience)\n• Required for web accessibility\n• Makes forms easier to use on mobile devices\n\n**Alternative labeling:**\n```html\n<label>\n  Email Address\n  <input type=\"email\" name=\"email\">\n</label>\n```\n\nBoth methods work, but the first is more flexible!"
          },
          {
            title: "Form Validation - Making Sure Data is Correct",
            content: "HTML5 provides built-in validation:\n\n**Required fields:**\n```html\n<input type=\"email\" name=\"email\" required>\n```\n\n**Input constraints:**\n• `min` and `max` for numbers and dates\n• `maxlength` for text length\n• `pattern` for custom validation (uses regex)\n• `placeholder` for hints\n\n**Example with validation:**\n```html\n<input type=\"password\" \n       name=\"password\" \n       minlength=\"8\" \n       maxlength=\"20\" \n       required \n       placeholder=\"At least 8 characters\">\n```\n\n**Browser benefits:**\n• Shows error messages automatically\n• Prevents submission of invalid data\n• Better user experience"
          },
          {
            title: "Form Practice Workshop! 💪",
            content: "In the playground, experiment with:\n1. Add your own personal information to test the form\n2. Try submitting with required fields empty - see the validation!\n3. Add a new field with `type=\"date\"` for birthdate\n4. Create a rating system using radio buttons (1-5 stars)\n5. Add more checkbox options for interests\n6. Experiment with `placeholder` text\n7. Try different input types like `type=\"color\"` or `type=\"file\"`\n\nForms are the bridge between users and your website!"
          }
        ]
      }
    },
    { 
      id: 14, 
      title: "Form Input Types & Validation", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Modern Form Inputs</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; padding: 20px; background: #f5f7fa; }\n        .form-container { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }\n        .input-group { margin-bottom: 25px; }\n        label { display: block; margin-bottom: 8px; font-weight: bold; color: #2c3e50; }\n        input, select, textarea { width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 8px; font-size: 16px; transition: border-color 0.3s; }\n        input:focus, select:focus, textarea:focus { outline: none; border-color: #3498db; box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1); }\n        input:valid { border-color: #27ae60; }\n        input:invalid:not(:focus):not(:placeholder-shown) { border-color: #e74c3c; }\n        .help-text { font-size: 14px; color: #7f8c8d; margin-top: 5px; }\n        .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }\n        button { background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: transform 0.2s; }\n        button:hover { transform: translateY(-2px); }\n        .demo-output { background: #ecf0f1; padding: 15px; border-radius: 8px; margin-top: 20px; }\n    </style>\n</head>\n<body>\n    <div class=\"form-container\">\n        <h1>🚀 Advanced Form Inputs Demo</h1>\n        <p>Explore all the amazing HTML5 input types and validation features!</p>\n        \n        <form>\n            <div class=\"input-group\">\n                <label for=\"username\">Username *</label>\n                <input type=\"text\" id=\"username\" name=\"username\" \n                       pattern=\"[a-zA-Z0-9_]{3,16}\" \n                       title=\"3-16 characters, letters, numbers, and underscores only\"\n                       placeholder=\"john_doe123\" required>\n                <div class=\"help-text\">3-16 characters, letters, numbers, and underscores only</div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"email\">Email Address *</label>\n                <input type=\"email\" id=\"email\" name=\"email\" \n                       placeholder=\"you@example.com\" required>\n                <div class=\"help-text\">We\'ll never share your email with anyone else</div>\n            </div>\n            \n            <div class=\"input-row\">\n                <div class=\"input-group\">\n                    <label for=\"password\">Password *</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" \n                           minlength=\"8\" maxlength=\"20\" required>\n                    <div class=\"help-text\">8-20 characters</div>\n                </div>\n                \n                <div class=\"input-group\">\n                    <label for=\"confirm-password\">Confirm Password *</label>\n                    <input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" required>\n                </div>\n            </div>\n            \n            <div class=\"input-row\">\n                <div class=\"input-group\">\n                    <label for=\"birthdate\">Birth Date</label>\n                    <input type=\"date\" id=\"birthdate\" name=\"birthdate\" \n                           min=\"1900-01-01\" max=\"2010-12-31\">\n                </div>\n                \n                <div class=\"input-group\">\n                    <label for=\"age\">Age</label>\n                    <input type=\"number\" id=\"age\" name=\"age\" \n                           min=\"13\" max=\"120\" step=\"1\" placeholder=\"18\">\n                </div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"website\">Personal Website</label>\n                <input type=\"url\" id=\"website\" name=\"website\" \n                       placeholder=\"https://yoursite.com\">\n                <div class=\"help-text\">Optional: Share your portfolio or blog</div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"phone\">Phone Number</label>\n                <input type=\"tel\" id=\"phone\" name=\"phone\" \n                       pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" \n                       placeholder=\"123-456-7890\">\n                <div class=\"help-text\">Format: 123-456-7890</div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"experience\">Programming Experience (years)</label>\n                <input type=\"range\" id=\"experience\" name=\"experience\" \n                       min=\"0\" max=\"20\" step=\"1\" value=\"1\" \n                       oninput=\"document.getElementById(\'exp-value\').textContent = this.value\">\n                <div class=\"help-text\">Years: <span id=\"exp-value\">1</span></div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"favorite-color\">Favorite Color</label>\n                <input type=\"color\" id=\"favorite-color\" name=\"favorite-color\" value=\"#3498db\">\n                <div class=\"help-text\">This will help us customize your experience</div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"meeting-time\">Preferred Meeting Time</label>\n                <input type=\"datetime-local\" id=\"meeting-time\" name=\"meeting-time\">\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"portfolio\">Upload Portfolio (PDF)</label>\n                <input type=\"file\" id=\"portfolio\" name=\"portfolio\" accept=\".pdf,.doc,.docx\">\n                <div class=\"help-text\">Accepted formats: PDF, DOC, DOCX (max 5MB)</div>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"skills\">Programming Languages (hold Ctrl/Cmd for multiple)</label>\n                <select id=\"skills\" name=\"skills\" multiple size=\"4\">\n                    <option value=\"html\">HTML</option>\n                    <option value=\"css\">CSS</option>\n                    <option value=\"javascript\">JavaScript</option>\n                    <option value=\"python\">Python</option>\n                    <option value=\"java\">Java</option>\n                    <option value=\"csharp\">C#</option>\n                </select>\n            </div>\n            \n            <div class=\"input-group\">\n                <label for=\"bio\">Tell us about yourself</label>\n                <textarea id=\"bio\" name=\"bio\" rows=\"4\" maxlength=\"500\" \n                         placeholder=\"Share your coding journey, goals, or anything interesting about yourself!\"></textarea>\n                <div class=\"help-text\">Maximum 500 characters</div>\n            </div>\n            \n            <button type=\"submit\">Create Profile ✨</button>\n            <button type=\"reset\">Clear All</button>\n        </form>\n        \n        <div class=\"demo-output\">\n            <strong>💡 Try This:</strong>\n            <ul>\n                <li>Leave required fields empty and try to submit</li>\n                <li>Enter an invalid email format</li>\n                <li>Use the color picker and range slider</li>\n                <li>Select multiple programming languages</li>\n                <li>Notice how borders change color for valid/invalid inputs!</li>\n            </ul>\n        </div>\n    </div>\n</body>\n</html>',
      content: {
        title: "Form Input Types & Validation",
        description: "HTML5 revolutionized forms with powerful input types and built-in validation! Discover specialized inputs for dates, colors, files, and more - plus learn how to ensure users enter valid data. 🎯",
        sections: [
          {
            title: "Modern HTML5 Input Types",
            content: "HTML5 introduced many specialized input types:\n\n**Communication inputs:**\n• `type=\"email\"` - Email validation + mobile keyboard\n• `type=\"tel\"` - Phone numbers + mobile dial pad\n• `type=\"url\"` - Web addresses with validation\n\n**Date and time inputs:**\n• `type=\"date\"` - Date picker\n• `type=\"time\"` - Time picker\n• `type=\"datetime-local\"` - Date + time\n• `type=\"month\"` - Month/year picker\n• `type=\"week\"` - Week picker\n\n**Interactive inputs:**\n• `type=\"range\"` - Slider control\n• `type=\"color\"` - Color picker\n• `type=\"file\"` - File upload\n• `type=\"search\"` - Search box with clear button"
          },
          {
            title: "Input Validation Attributes",
            content: "Control what users can enter:\n\n**Universal attributes:**\n• `required` - Field must be filled\n• `placeholder` - Hint text\n• `readonly` - Can't be edited\n• `disabled` - Can't be used\n\n**Text validation:**\n• `minlength` / `maxlength` - Character limits\n• `pattern` - Custom validation with regex\n• `title` - Custom error message\n\n**Number validation:**\n• `min` / `max` - Value limits\n• `step` - Increment size\n\n**Example:**\n```html\n<input type=\"text\" \n       pattern=\"[A-Z]{2}[0-9]{2}\" \n       title=\"Format: AB12\" \n       required>\n```"
          },
          {
            title: "File Upload and Advanced Features",
            content: "Handle file uploads and complex inputs:\n\n**File inputs:**\n```html\n<input type=\"file\" \n       accept=\".pdf,.jpg,.png\" \n       multiple>\n```\n• `accept` - Limit file types\n• `multiple` - Allow multiple files\n\n**Multi-select dropdowns:**\n```html\n<select multiple size=\"4\">\n  <option value=\"html\">HTML</option>\n  <option value=\"css\">CSS</option>\n</select>\n```\n\n**Grouped options:**\n```html\n<select>\n  <optgroup label=\"Frontend\">\n    <option value=\"html\">HTML</option>\n    <option value=\"css\">CSS</option>\n  </optgroup>\n  <optgroup label=\"Backend\">\n    <option value=\"php\">PHP</option>\n    <option value=\"python\">Python</option>\n  </optgroup>\n</select>\n```"
          },
          {
            title: "Form Validation Strategies",
            content: "Create user-friendly validation:\n\n**CSS pseudo-classes:**\n• `:valid` - Style valid inputs (green border)\n• `:invalid` - Style invalid inputs (red border)\n• `:required` - Style required fields\n• `:optional` - Style optional fields\n\n**JavaScript enhancement:**\n```html\n<input type=\"range\" \n       oninput=\"updateDisplay(this.value)\">\n```\n\n**Accessibility considerations:**\n• Always use proper labels\n• Provide clear error messages\n• Don't rely only on color for validation\n• Test with screen readers\n\n**Progressive enhancement:**\nStart with basic HTML validation, then enhance with CSS and JavaScript!"
          },
          {
            title: "Interactive Forms Challenge! 🎮",
            content: "In the playground, explore:\n1. Try submitting the form with empty required fields\n2. Enter invalid data and watch the validation feedback\n3. Use the color picker to choose your favorite color\n4. Drag the experience slider and see the value update\n5. Try selecting multiple programming languages\n6. Upload a file and see the file picker\n7. Notice how mobile devices show specialized keyboards\n\nModern form inputs make data collection powerful and user-friendly!"
          }
        ]
      }
    },
    { 
      id: 15, 
      title: "Divs, Spans & Container Elements", 
      completed: false,
      playgroundCode: '<h1>Containers Demo</h1>\\n\\n<div class=\"container\">\\n    <h2>This is a DIV Container</h2>\\n    <p>DIVs are <span class=\"highlight\">block-level</span> elements that take full width.</p>\\n    \\n    <div class=\"card\">\\n        <h3>Card Example</h3>\\n        <p>This entire card is a div with styling applied.</p>\\n    </div>\\n</div>\\n\\n<p>This paragraph has <span style=\"background: yellow;\">highlighted text</span> using a span element.</p>\\n\\n<div class=\"flex-container\">\\n    <div class=\"box\">Box 1</div>\\n    <div class=\"box\">Box 2</div>\\n    <div class=\"box\">Box 3</div>\\n</div>\\n\\n<style>\\n.container { padding: 20px; border: 2px solid #ccc; margin: 20px 0; }\\n.card { background: #f0f0f0; padding: 15px; margin: 10px 0; border-radius: 5px; }\\n.highlight { background: #ffeb3b; padding: 2px 4px; }\\n.flex-container { display: flex; gap: 10px; }\\n.box { padding: 20px; background: #e1f5fe; flex: 1; text-align: center; }\\n</style>',
      content: {
        title: "Divs, Spans & Container Elements",
        description: "Meet the building blocks of web layouts! Divs and spans are the Swiss Army knives of HTML - they don't have specific meaning, but they're incredibly useful for organizing and styling content. Master these and you'll be able to build any layout! 📦",
        sections: [
          {
            title: "The DIV Element - Your Layout Best Friend",
            content: "The `<div>` (division) element is a generic container for grouping other elements:\n\n**Key characteristics:**\n• Block-level element (takes full width)\n• No semantic meaning (purely for layout/styling)\n• Can contain any other elements\n• Essential for CSS layouts\n\n**Common uses:**\n• Page sections and layout containers\n• Cards and component wrappers\n• Styling groups\n• Grid and flexbox containers\n\n**Example:**\n```html\n<div class=\"hero-section\">\n  <h1>Welcome</h1>\n  <p>This is a hero section</p>\n  <button>Get Started</button>\n</div>\n```"
          },
          {
            title: "The SPAN Element - Inline Styling Hero",
            content: "The `<span>` element is for styling parts of text or small inline elements:\n\n**Key characteristics:**\n• Inline element (flows with text)\n• No semantic meaning\n• Perfect for styling text portions\n• Doesn't break text flow\n\n**Common uses:**\n• Highlighting specific words\n• Adding icons within text\n• Styling parts of sentences\n• Small decorative elements\n\n**Example:**\n```html\n<p>I love <span class=\"highlight\">web development</span> because it's <span class=\"emphasis\">creative</span>!</p>\n```\n\nSpans let you style individual words without affecting paragraph flow!"
          },
          {
            title: "DIV vs SPAN - When to Use Which",
            content: "Choose the right container for the job:\n\n**Use DIV when you need:**\n• Layout sections or containers\n• Block-level grouping\n• CSS grid or flexbox parents\n• Component wrappers\n• Full-width elements\n\n**Use SPAN when you need:**\n• Inline styling\n• Text highlighting\n• Small icons or decorations\n• Styling within sentences\n• Elements that flow with text\n\n**Visual difference:**\n```html\n<!-- DIVs stack vertically -->\n<div>Block 1</div>\n<div>Block 2</div>\n\n<!-- SPANs flow inline -->\n<span>Inline 1</span> <span>Inline 2</span>\n```"
          },
          {
            title: "Semantic Elements vs Generic Containers",
            content: "When to use divs/spans vs semantic elements:\n\n**Use semantic elements first:**\n• `<header>` instead of `<div class=\"header\">`\n• `<nav>` instead of `<div class=\"navigation\">`\n• `<main>` instead of `<div class=\"main-content\">`\n• `<section>` instead of `<div class=\"section\">`\n• `<strong>` instead of `<span class=\"bold\">`\n\n**Use div/span when:**\n• No semantic element fits\n• Purely for styling/layout\n• Creating reusable components\n• Building complex layouts\n\n**Best practice:** Start with semantic HTML, then add divs/spans for styling and layout needs."
          },
          {
            title: "Container Practice Lab! 🧪",
            content: "In the playground, experiment with:\n1. Add more content cards using divs\n2. Use spans to highlight different words in paragraphs\n3. Create a new flex container with different items\n4. Build a photo gallery using divs as image containers\n5. Style specific words in sentences using spans\n6. Try nesting divs within divs to create complex layouts\n7. Add your own CSS classes to customize the styling\n\nContainers are the foundation of all modern web layouts!"
          }
        ]
      }
    },
    { 
      id: 16, 
      title: "HTML Attributes - Adding Extra Information", 
      completed: false,
      playgroundCode: '<h1>HTML Attributes Demo</h1>\\n\\n<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300" alt="Person coding" title="Click for tooltip" width="300">\\n\\n<a href="https://example.com" target="_blank">Visit Site</a>\\n\\n<p lang="en">English paragraph</p>\\n<p lang="es">Spanish paragraph</p>\\n\\n<div class="container" id="main" data-theme="light">Content with multiple attributes</div>\\n\\n<button onclick="alert(\\'Hello!\\')">Click Me</button>',
      content: {
        title: "HTML Attributes - Adding Extra Information",
        description: "Attributes are like adjectives for HTML elements - they provide extra information and control how elements behave! Master attributes and you'll unlock the full power of HTML elements. 🔧",
        sections: [
          {
            title: "What Are HTML Attributes?",
            content: "Attributes provide additional information about HTML elements:\n\n**Basic syntax:**\n```html\n<element attribute=\"value\">Content</element>\n```\n\n**Key points:**\n• Always written in the opening tag\n• Use quotes around values (single or double)\n• Multiple attributes separated by spaces\n• Case-insensitive (but lowercase is recommended)\n\n**Example:**\n```html\n<img src=\"photo.jpg\" alt=\"My photo\" width=\"300\">\n```"
          },
          {
            title: "Universal Attributes - Work on Any Element",
            content: "These attributes can be used on any HTML element:\n\n• **id**: Unique identifier (`id=\"header\"`)\n• **class**: CSS styling group (`class=\"button primary\"`)\n• **title**: Tooltip text (`title=\"Click for help\"`)\n• **lang**: Language (`lang=\"en\"` or `lang=\"es\"`)\n• **style**: Inline CSS (`style=\"color: red;\"`)\n• **data-***: Custom data (`data-user-id=\"123\"`)\n\n**Best practices:**\n• IDs must be unique on the page\n• Classes can be reused multiple times\n• Use data- attributes for JavaScript data storage"
          },
          {
            title: "Element-Specific Attributes",
            content: "Different elements have their own special attributes:\n\n**Links (`<a>`):**\n• `href` - destination URL\n• `target` - where to open link\n• `rel` - relationship to target\n\n**Images (`<img>`):**\n• `src` - image source\n• `alt` - alternative text\n• `width/height` - dimensions\n• `loading` - lazy loading\n\n**Forms:**\n• `type` - input type\n• `name` - form field name\n• `required` - must be filled\n• `placeholder` - hint text"
          },
          {
            title: "Attribute Practice Workshop! 🛠️",
            content: "In the playground, experiment with:\n1. Change the image `src` to a different URL\n2. Modify the link `target` attribute (try \"_self\")\n3. Add `title` attributes to different elements\n4. Create custom `data-*` attributes\n5. Use `lang` attribute on different paragraphs\n6. Add more attributes to the button element\n\nAttributes make HTML elements much more powerful and flexible!"
          }
        ]
      }
    },
    { 
      id: 17, 
      title: "Classes and IDs - Naming Your Elements", 
      completed: false,
      playgroundCode: '<h1 id=\"page-title\">Welcome to My Site!</h1>\\n\\n<div class=\"container\">\\n    <div class=\"card highlight\">\\n        <h2 class=\"card-title\">Featured Article</h2>\\n        <p class=\"card-text\">This card has multiple classes for flexible styling.</p>\\n        <button class=\"btn btn-primary\">Read More</button>\\n    </div>\\n    \\n    <div class=\"card\">\\n        <h2 class=\"card-title\">Regular Article</h2>\\n        <p class=\"card-text\">This card uses the same classes but different styling.</p>\\n        <button class=\"btn btn-secondary\">Learn More</button>\\n    </div>\\n</div>\\n\\n<aside id=\"sidebar\" class=\"sidebar\">\\n    <h3>Quick Links</h3>\\n    <ul class=\"link-list\">\\n        <li><a href=\"#page-title\" class=\"internal-link\">Back to Top</a></li>\\n        <li><a href=\"#\" class=\"external-link\">About Us</a></li>\\n    </ul>\\n</aside>\\n\\n<style>\\n.container { max-width: 800px; margin: 0 auto; padding: 20px; }\\n.card { border: 1px solid #ddd; padding: 20px; margin: 15px 0; border-radius: 8px; }\\n.highlight { background: #fff3cd; border-color: #ffeaa7; }\\n.btn { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }\\n.btn-primary { background: #007bff; color: white; }\\n.btn-secondary { background: #6c757d; color: white; }\\n#sidebar { background: #f8f9fa; padding: 15px; margin-top: 20px; }\\n</style>',
      content: {
        title: "Classes and IDs - Naming Your Elements",
        description: "Classes and IDs are your naming system for HTML elements! They're essential for CSS styling and JavaScript interaction. Think of them as name tags that help you organize and control your elements! 🏷️",
        sections: [
          {
            title: "IDs - Unique Identifiers",
            content: "The `id` attribute creates a unique identifier for an element:\n\n**Rules for IDs:**\n• Must be unique on the page (only one element can have a specific ID)\n• Used for specific, one-time elements\n• Perfect for navigation targets\n• Case-sensitive\n• No spaces (use dashes or underscores)\n\n**Examples:**\n```html\n<header id=\"main-header\">Site Header</header>\n<nav id=\"primary-navigation\">Menu</nav>\n<main id=\"content\">Main content</main>\n```\n\n**Perfect for:** Headers, main navigation, unique sections, JavaScript targets"
          },
          {
            title: "Classes - Reusable Style Groups",
            content: "The `class` attribute groups elements for styling:\n\n**Rules for Classes:**\n• Can be reused on multiple elements\n• Multiple classes per element (space-separated)\n• Used for styling groups and components\n• Case-sensitive\n• No spaces in individual class names\n\n**Examples:**\n```html\n<div class=\"card featured\">Featured card</div>\n<div class=\"card\">Regular card</div>\n<button class=\"btn btn-primary large\">Button</button>\n```\n\n**Perfect for:** Styling groups, component systems, repeated elements"
          },
          {
            title: "Naming Conventions - Be Consistent!",
            content: "Good naming makes code maintainable:\n\n**Popular naming conventions:**\n• **kebab-case**: `main-header`, `card-title`\n• **camelCase**: `mainHeader`, `cardTitle`\n• **snake_case**: `main_header`, `card_title`\n• **BEM**: `block__element--modifier`\n\n**Best practices:**\n• Be descriptive: `navigation` not `nav1`\n• Use semantic names: `primary-button` not `blue-button`\n• Be consistent throughout your project\n• Avoid abbreviations: `navigation` not `nav`\n\n**Good examples:**\n• `hero-section`, `product-card`, `contact-form`\n• `btn-primary`, `text-large`, `mb-20`"
          },
          {
            title: "CSS Selectors - Targeting Your Named Elements",
            content: "Use classes and IDs in CSS to style your elements:\n\n**ID selector (# symbol):**\n```css\n#page-title {\n  font-size: 2em;\n  color: #333;\n}\n```\n\n**Class selector (. symbol):**\n```css\n.card {\n  padding: 20px;\n  border: 1px solid #ddd;\n}\n\n.highlight {\n  background: yellow;\n}\n```\n\n**Multiple classes:**\n```css\n.btn.btn-primary {\n  background: blue;\n  color: white;\n}\n```"
          },
          {
            title: "Classes and IDs Practice! 🎯",
            content: "In the playground, experiment with:\n1. Add new classes to existing elements\n2. Create a new ID for a section and link to it\n3. Use multiple classes on the same element\n4. Style different combinations of classes\n5. Create a navigation menu using IDs and classes\n6. Practice good naming conventions\n\nClasses and IDs are the foundation of organized, maintainable web development!"
          }
        ]
      }
    },
    { 
      id: 18, 
      title: "Audio and Video - Multimedia Content", 
      completed: false,
      playgroundCode: '<h1>Multimedia Gallery 🎵🎬</h1>\\n\\n<h2>Audio Example:</h2>\\n<audio controls>\\n    <source src=\"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav\" type=\"audio/mpeg\">\\n    <p>Your browser doesn\\'t support audio. <a href=\"audio-file.mp3\">Download the audio</a> instead.</p>\\n</audio>\\n\\n<h2>Video Example:</h2>\\n<video width=\"400\" controls poster=\"https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop\">\\n    <source src=\"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4\" type=\"video/mp4\">\\n    <p>Your browser doesn\\'t support video. <a href=\"video-file.mp4\">Download the video</a> instead.</p>\\n</video>\\n\\n<h2>Embedded Video (YouTube):</h2>\\n<iframe width=\"400\" height=\"225\" \\n        src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" \\n        title=\"YouTube video player\" \\n        frameborder=\"0\" \\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" \\n        allowfullscreen>\\n</iframe>\\n\\n<h2>Audio with Custom Controls:</h2>\\n<audio id=\"my-audio\">\\n    <source src=\"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav\" type=\"audio/mpeg\">\\n</audio>\\n<br>\\n<button onclick=\"document.getElementById(\\'my-audio\\').play()\">Play</button>\\n<button onclick=\"document.getElementById(\\'my-audio\\').pause()\">Pause</button>',
      content: {
        title: "Audio and Video - Multimedia Content",
        description: "Bring your websites to life with audio and video! Modern HTML5 makes it easy to embed multimedia content that works across all devices. Let's explore how to add sound and motion to your web pages! 🎥",
        sections: [
          {
            title: "HTML5 Audio Element",
            content: "The `<audio>` element embeds sound content:\n\n**Basic syntax:**\n```html\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  <source src=\"audio.ogg\" type=\"audio/ogg\">\n  Your browser doesn't support audio.\n</audio>\n```\n\n**Key attributes:**\n• `controls` - Shows play/pause/volume controls\n• `autoplay` - Starts playing automatically (use carefully!)\n• `loop` - Repeats the audio\n• `muted` - Starts muted\n• `preload` - How much to load (\"none\", \"metadata\", \"auto\")\n\n**Multiple sources ensure compatibility across browsers!**"
          },
          {
            title: "HTML5 Video Element",
            content: "The `<video>` element embeds video content:\n\n**Basic syntax:**\n```html\n<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser doesn't support video.\n</video>\n```\n\n**Key attributes:**\n• `width/height` - Dimensions\n• `controls` - Shows video controls\n• `poster` - Image shown before video loads\n• `autoplay` - Auto-starts (blocked by most browsers)\n• `muted` - Required for autoplay to work\n• `loop` - Repeats the video"
          },
          {
            title: "Embedded Content with iFrames",
            content: "Use `<iframe>` to embed content from other sites:\n\n**YouTube embed:**\n```html\n<iframe width=\"560\" height=\"315\" \n        src=\"https://www.youtube.com/embed/VIDEO_ID\" \n        title=\"YouTube video player\" \n        allowfullscreen>\n</iframe>\n```\n\n**Other embeds:**\n• YouTube, Vimeo videos\n• Google Maps\n• Social media posts\n• Interactive content\n\n**Security note:** Only embed content from trusted sources. iFrames can potentially contain harmful content."
          },
          {
            title: "Accessibility and Best Practices",
            content: "Make multimedia accessible to everyone:\n\n**For videos:**\n• Always include captions/subtitles\n• Use descriptive titles\n• Provide transcripts when possible\n• Don't autoplay with sound (accessibility and UX)\n\n**For audio:**\n• Provide transcripts\n• Include descriptive text\n• Use meaningful file names\n\n**Performance tips:**\n• Optimize file sizes\n• Use appropriate formats (MP4 for video, MP3 for audio)\n• Consider lazy loading for videos\n• Use poster images for videos"
          },
          {
            title: "Multimedia Practice Studio! 🎬",
            content: "In the playground, experiment with:\n1. Try the audio and video controls\n2. Add custom play/pause buttons for the audio\n3. Change video dimensions and see how it responds\n4. Add your own YouTube video embed\n5. Experiment with different audio/video attributes\n6. Create a simple media gallery\n\nMultimedia content makes websites engaging and interactive!"
          }
        ]
      }
    },
    { 
      id: 19, 
      title: "Accessibility - Making Websites for Everyone", 
      completed: false,
      playgroundCode: '<h1>Accessible Web Design Examples ♿</h1>\\n\\n<nav role=\"navigation\" aria-label=\"Main navigation\">\\n    <ul>\\n        <li><a href=\"#content\" aria-label=\"Skip to main content\">Skip to content</a></li>\\n        <li><a href=\"#home\">Home</a></li>\\n        <li><a href=\"#about\">About</a></li>\\n        <li><a href=\"#contact\">Contact</a></li>\\n    </ul>\\n</nav>\\n\\n<main id=\"content\" role=\"main\">\\n    <section>\\n        <h2>Contact Form</h2>\\n        <form>\\n            <label for=\"name\">Full Name (required)</label>\\n            <input type=\"text\" id=\"name\" name=\"name\" required aria-describedby=\"name-help\">\\n            <small id=\"name-help\">Enter your first and last name</small>\\n            \\n            <label for=\"email\">Email Address (required)</label>\\n            <input type=\"email\" id=\"email\" name=\"email\" required aria-describedby=\"email-help\">\\n            <small id=\"email-help\">We\\'ll never share your email with anyone</small>\\n            \\n            <fieldset>\\n                <legend>Preferred Contact Method</legend>\\n                <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\\n                <label><input type=\"radio\" name=\"contact\" value=\"phone\"> Phone</label>\\n            </fieldset>\\n            \\n            <button type=\"submit\" aria-describedby=\"submit-help\">Send Message</button>\\n            <small id=\"submit-help\">Your message will be sent securely</small>\\n        </form>\\n    </section>\\n    \\n    <section>\\n        <h2>Image with Proper Alt Text</h2>\\n        <img src=\"https://images.unsplash.com/photo-1573495627256-6b3c5a7d0a10?w=300\" \\n             alt=\"A person using a laptop computer while sitting at a wooden desk with a coffee cup nearby\">\\n        \\n        <figure>\\n            <img src=\"https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300\" \\n                 alt=\"\" role=\"presentation\">\\n            <figcaption>Decorative image of a modern office space (no alt text needed as it\\'s described in caption)</figcaption>\\n        </figure>\\n    </section>\\n</main>',
      content: {
        title: "Accessibility - Making Websites for Everyone",
        description: "Accessibility means creating websites that work for ALL users, including people with disabilities. It's not just the right thing to do - it's also the law in many places and makes your sites better for everyone! ♿✨",
        sections: [
          {
            title: "Why Accessibility Matters",
            content: "Web accessibility ensures everyone can use your website:\n\n**Who benefits:**\n• People who are blind or have low vision (screen readers)\n• People with motor disabilities (keyboard navigation)\n• People who are deaf or hard of hearing (captions)\n• People with cognitive disabilities (clear language)\n• Everyone using mobile devices, slow internet, or older devices\n\n**Legal and business benefits:**\n• Legal compliance (ADA, Section 508)\n• Larger audience reach\n• Better SEO\n• Improved usability for everyone\n• Positive brand reputation"
          },
          {
            title: "Essential Accessibility Features",
            content: "Key accessibility features in HTML:\n\n**Semantic HTML:**\n• Use proper headings (h1-h6) for structure\n• Use lists for grouped content\n• Use semantic elements (nav, main, article)\n\n**Form accessibility:**\n• Always use labels with inputs\n• Group related fields with fieldset/legend\n• Provide clear error messages\n• Use required and aria-describedby attributes\n\n**Images:**\n• Meaningful alt text for informative images\n• Empty alt=\"\" for decorative images\n• Use figcaption for complex images"
          },
          {
            title: "ARIA Attributes - Extra Accessibility Info",
            content: "ARIA (Accessible Rich Internet Applications) provides extra information:\n\n**Common ARIA attributes:**\n• `aria-label` - Accessible name for an element\n• `aria-describedby` - References additional description\n• `aria-labelledby` - References element that labels this one\n• `role` - Defines what an element is or does\n• `aria-hidden` - Hides decorative elements from screen readers\n\n**Examples:**\n```html\n<button aria-label=\"Close dialog\">×</button>\n<img src=\"chart.png\" alt=\"Sales data\" aria-describedby=\"chart-desc\">\n<div id=\"chart-desc\">Sales increased 25% from last year</div>\n```"
          },
          {
            title: "Keyboard Navigation and Focus",
            content: "Ensure your site works with keyboard-only navigation:\n\n**Focus management:**\n• All interactive elements must be focusable\n• Logical tab order\n• Visible focus indicators\n• Skip links for main content\n\n**Testing keyboard navigation:**\n• Tab through your entire page\n• Use Enter and Space to activate buttons/links\n• Use arrow keys in menus and form groups\n• Ensure you can reach all interactive content\n\n**HTML attributes:**\n• `tabindex=\"0\"` - Makes element focusable\n• `tabindex=\"-1\"` - Removes from tab order but allows programmatic focus"
          },
          {
            title: "Accessibility Testing Checklist! ✅",
            content: "In the playground, test these accessibility features:\n1. Try navigating using only the Tab key\n2. Notice how labels are associated with form inputs\n3. See how aria-describedby provides additional context\n4. Check how alt text describes images meaningfully\n5. Use browser dev tools to inspect accessibility tree\n6. Test with a screen reader if available\n\nAccessible websites are better websites for everyone!"
          }
        ]
      }
    },
    { 
      id: 20, 
      title: "Meta Tags - Information About Your Page", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <!-- Essential Meta Tags -->\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>My Awesome Website - Learn Web Development</title>\\n    \\n    <!-- SEO Meta Tags -->\\n    <meta name=\"description\" content=\"Learn web development with our comprehensive HTML, CSS, and JavaScript tutorials. Perfect for beginners and advanced developers.\">\\n    <meta name=\"keywords\" content=\"web development, HTML, CSS, JavaScript, tutorials, coding, programming\">\\n    <meta name=\"author\" content=\"Your Name\">\\n    <meta name=\"robots\" content=\"index, follow\">\\n    \\n    <!-- Open Graph Meta Tags (Social Media) -->\\n    <meta property=\"og:title\" content=\"My Awesome Website - Learn Web Development\">\\n    <meta property=\"og:description\" content=\"Learn web development with our comprehensive tutorials and hands-on examples.\">\\n    <meta property=\"og:image\" content=\"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630\">\\n    <meta property=\"og:url\" content=\"https://myawesomewebsite.com\">\\n    <meta property=\"og:type\" content=\"website\">\\n    \\n    <!-- Twitter Card Meta Tags -->\\n    <meta name=\"twitter:card\" content=\"summary_large_image\">\\n    <meta name=\"twitter:title\" content=\"Learn Web Development Today\">\\n    <meta name=\"twitter:description\" content=\"Master HTML, CSS, and JavaScript with our beginner-friendly tutorials.\">\\n    <meta name=\"twitter:image\" content=\"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630\">\\n    \\n    <!-- Additional Meta Tags -->\\n    <meta name=\"theme-color\" content=\"#007bff\">\\n    <meta name=\"application-name\" content=\"Web Dev Tutorials\">\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\\n</head>\\n<body>\\n    <h1>Welcome to My Website! 🌟</h1>\\n    <p>This page demonstrates proper meta tag usage for SEO and social media sharing.</p>\\n    \\n    <h2>What the Meta Tags Do:</h2>\\n    <ul>\\n        <li><strong>Title:</strong> Shows in browser tabs and search results</li>\\n        <li><strong>Description:</strong> Appears in search engine snippets</li>\\n        <li><strong>Open Graph:</strong> Controls how links look when shared on Facebook, LinkedIn</li>\\n        <li><strong>Twitter Cards:</strong> Optimizes appearance when shared on Twitter</li>\\n        <li><strong>Viewport:</strong> Makes the site mobile-friendly</li>\\n    </ul>\\n    \\n    <p>Try sharing this page on social media to see the meta tags in action!</p>\\n</body>\\n</html>',
      content: {
        title: "Meta Tags - Information About Your Page",
        description: "Meta tags are like your website's business card! They tell search engines and social media platforms what your page is about. Master meta tags and your site will look professional everywhere it appears! 🏷️",
        sections: [
          {
            title: "Essential Meta Tags - The Must-Haves",
            content: "Every HTML page should include these essential meta tags:\n\n**Character encoding:**\n```html\n<meta charset=\"UTF-8\">\n```\n• Tells browser how to interpret text characters\n• Must be first in <head> section\n• UTF-8 supports all languages and emojis\n\n**Viewport (mobile responsiveness):**\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n• Makes your site work properly on mobile devices\n• Essential for responsive design\n• Without this, mobile sites look tiny and broken"
          },
          {
            title: "SEO Meta Tags - Help Search Engines",
            content: "These meta tags improve your search engine rankings:\n\n**Page description:**\n```html\n<meta name=\"description\" content=\"A brief, compelling description of your page\">\n```\n• Appears in Google search results\n• Should be 150-160 characters\n• Compelling copy that makes people want to click\n\n**Keywords (less important now):**\n```html\n<meta name=\"keywords\" content=\"web development, HTML, CSS\">\n```\n\n**Author and robots:**\n```html\n<meta name=\"author\" content=\"Your Name\">\n<meta name=\"robots\" content=\"index, follow\">\n```\n\n**Don't forget the title tag:**\n```html\n<title>Page Title - Site Name</title>\n```"
          },
          {
            title: "Social Media Meta Tags - Look Great When Shared",
            content: "Control how your links look on social media:\n\n**Open Graph (Facebook, LinkedIn):**\n```html\n<meta property=\"og:title\" content=\"Page Title\">\n<meta property=\"og:description\" content=\"Page description\">\n<meta property=\"og:image\" content=\"https://example.com/image.jpg\">\n<meta property=\"og:url\" content=\"https://example.com/page\">\n```\n\n**Twitter Cards:**\n```html\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Page Title\">\n<meta name=\"twitter:description\" content=\"Description\">\n<meta name=\"twitter:image\" content=\"https://example.com/image.jpg\">\n```\n\n**Image requirements:**\n• 1200x630 pixels recommended\n• High quality, clear imagery\n• Relevant to your content"
          },
          {
            title: "Advanced Meta Tags - Extra Features",
            content: "Additional meta tags for enhanced functionality:\n\n**Browser features:**\n```html\n<meta name=\"theme-color\" content=\"#007bff\">\n<meta name=\"application-name\" content=\"App Name\">\n```\n\n**Mobile web app:**\n```html\n<meta name=\"mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n```\n\n**Refresh and redirect:**\n```html\n<meta http-equiv=\"refresh\" content=\"30\">\n<meta http-equiv=\"refresh\" content=\"0; url=https://newsite.com\">\n```\n\n**Cache control:**\n```html\n<meta http-equiv=\"cache-control\" content=\"no-cache\">\n```"
          },
          {
            title: "Meta Tags Practice Lab! 🧪",
            content: "In the playground, explore:\n1. Change the title and see it update in the browser tab\n2. Modify the description to describe your own page\n3. Update the Open Graph image URL\n4. Add your own author name\n5. Test how the page would look when shared (use Facebook's debugger tool)\n6. Experiment with theme-color on mobile devices\n\nMeta tags are invisible but incredibly powerful for your website's success!"
          }
        ]
      }
    },
    { 
      id: 21, 
      title: "Character Entities & Special Symbols", 
      completed: false,
      playgroundCode: '<h1>Special Characters & Symbols! ✨</h1>\\n\\n<h2>HTML Character Entities:</h2>\\n<p>Use entities to display special characters safely:</p>\\n<ul>\\n    <li>&lt;tag&gt; - Shows HTML tags literally</li>\\n    <li>&amp; - Ampersand symbol</li>\\n    <li>&quot;quote&quot; - Quote marks in attributes</li>\\n    <li>&apos;apostrophe&apos; - Single quotes</li>\\n    <li>&copy; 2024 - Copyright symbol</li>\\n    <li>&reg; - Registered trademark</li>\\n    <li>&trade; - Trademark</li>\\n</ul>\\n\\n<h2>Common Symbols:</h2>\\n<p>&hearts; &spades; &clubs; &diams; - Card suits</p>\\n<p>&larr; &uarr; &rarr; &darr; - Arrows</p>\\n<p>&alpha; &beta; &gamma; &delta; - Greek letters</p>\\n<p>&frac12; &frac14; &frac34; - Fractions</p>\\n<p>&plusmn; &times; &divide; - Math symbols</p>\\n\\n<h2>Spaces and Layout:</h2>\\n<p>Regular space vs&nbsp;&nbsp;&nbsp;non-breaking&nbsp;spaces</p>\\n<p>Em&mdash;dash and en&ndash;dash</p>\\n<p>&ldquo;Curly quotes&rdquo; vs \"straight quotes\"</p>',
      content: {
        title: "Character Entities & Special Symbols",
        description: "HTML character entities let you display special characters that would otherwise break your code or not show correctly. Master these and you can display any symbol safely! ⚡",
        sections: [
          {
            title: "Why Character Entities?",
            content: "Some characters have special meaning in HTML and need to be 'escaped':\n\n**Problem characters:**\n• `<` and `>` - Look like HTML tags\n• `&` - Starts HTML entities\n• `\"` and `'` - Used for attribute values\n• Accented characters - May not display correctly\n\n**The solution:**\nCharacter entities represent these characters safely:\n• `&lt;` for `<`\n• `&gt;` for `>`\n• `&amp;` for `&`\n• `&quot;` for `\"`\n• `&apos;` for `'`"
          },
          {
            title: "Essential Character Entities",
            content: "The most important entities to remember:\n\n**HTML-safe characters:**\n```html\n&lt;p&gt;This shows HTML tags as text&lt;/p&gt;\n&amp; - Ampersand\n&quot;quote&quot; - Quotation marks\n```\n\n**Common symbols:**\n• `&copy;` → © (copyright)\n• `&reg;` → ® (registered trademark)\n• `&trade;` → ™ (trademark)\n• `&nbsp;` → non-breaking space\n• `&mdash;` → — (em dash)\n• `&ndash;` → – (en dash)\n\n**Math symbols:**\n• `&times;` → × (multiply)\n• `&divide;` → ÷ (divide)\n• `&plusmn;` → ± (plus/minus)"
          },
          {
            title: "Numeric Character References",
            content: "You can also use numeric codes for any character:\n\n**Decimal format:**\n• `&#8364;` → € (Euro symbol)\n• `&#8482;` → ™ (Trademark)\n• `&#169;` → © (Copyright)\n\n**Hexadecimal format:**\n• `&#x20AC;` → € (Euro symbol)\n• `&#x2122;` → ™ (Trademark)\n• `&#x00A9;` → © (Copyright)\n\n**When to use:**\n• For characters not available as named entities\n• For emoji and special Unicode characters\n• When you need precise character control"
          },
          {
            title: "Practice with Special Characters! 🎯",
            content: "In the playground, try:\n1. Create text that displays HTML tags literally\n2. Add copyright and trademark symbols\n3. Use non-breaking spaces to control spacing\n4. Try different arrow symbols\n5. Add some Greek letters or math symbols\n6. Experiment with em-dashes in sentences\n\nCharacter entities ensure your text displays correctly everywhere!"
          }
        ]
      }
    },
    { 
      id: 22, 
      title: "Comments - Notes for Developers", 
      completed: false,
      playgroundCode: '<!-- This is an HTML comment - it won\\'t show on the webpage -->\\n<h1>Understanding HTML Comments</h1>\\n\\n<!-- \\n    Multi-line comments are useful for\\n    longer explanations or temporarily\\n    disabling code sections\\n-->\\n\\n<div class=\"header\">\\n    <!-- TODO: Add logo image here -->\\n    <h2>Welcome to My Site</h2>\\n    \\n    <!-- Navigation will be added in next version -->\\n    <!-- <nav>\\n        <ul>\\n            <li><a href=\"#\">Home</a></li>\\n            <li><a href=\"#\">About</a></li>\\n        </ul>\\n    </nav> -->\\n</div>\\n\\n<!-- Section: Main Content -->\\n<main>\\n    <p>This content is visible to users.</p>\\n    \\n    <!-- FIXME: This paragraph needs better content -->\\n    <p>Placeholder text that needs to be updated.</p>\\n    \\n    <!-- NOTE: Check with client about this section -->\\n    <section>\\n        <h3>Important Information</h3>\\n        <p>Details to be confirmed.</p>\\n    </section>\\n</main>\\n\\n<!-- \\n    Development Notes:\\n    - Remember to test on mobile devices\\n    - Add proper alt text to all images\\n    - Consider accessibility improvements\\n-->',
      content: {
        title: "Comments - Notes for Developers",
        description: "HTML comments are like sticky notes in your code! They help you and other developers understand what's happening, plan future changes, and temporarily disable code. Master comments for better code organization! 📝",
        sections: [
          {
            title: "HTML Comment Syntax",
            content: "HTML comments are invisible to users but valuable to developers:\n\n**Basic syntax:**\n```html\n<!-- This is a comment -->\n```\n\n**Multi-line comments:**\n```html\n<!-- \n    This is a longer comment\n    that spans multiple lines\n    for detailed explanations\n-->\n```\n\n**Key rules:**\n• Comments start with `<!--` and end with `-->`\n• Content inside is completely ignored by browsers\n• Can span single or multiple lines\n• Cannot be nested (no comments inside comments)"
          },
          {
            title: "When to Use Comments",
            content: "Comments serve many purposes in HTML:\n\n**Documentation:**\n• Explain complex sections\n• Note the purpose of elements\n• Provide context for future developers\n\n**Organization:**\n• Mark different sections of your page\n• Create visual separators in code\n• Label major components\n\n**Planning and TODOs:**\n• Note future improvements\n• Mark temporary solutions\n• Plan upcoming features\n\n**Debugging:**\n• Temporarily disable code\n• Test different versions\n• Isolate problems"
          },
          {
            title: "Best Practices for Comments",
            content: "Write helpful, professional comments:\n\n**Good commenting practices:**\n• Keep comments up to date\n• Be clear and concise\n• Use consistent formatting\n• Explain 'why', not just 'what'\n\n**Common comment patterns:**\n```html\n<!-- Section: Navigation -->\n<!-- TODO: Add mobile menu -->\n<!-- FIXME: Fix alignment issue -->\n<!-- NOTE: Check with designer -->\n<!-- HACK: Temporary workaround -->\n```\n\n**Avoid:**\n• Obvious comments (`<!-- This is a paragraph -->`)\n• Outdated comments\n• Too many comments (clutters code)\n• Sensitive information in comments"
          },
          {
            title: "Practical Comment Applications",
            content: "Real-world comment usage:\n\n**Temporarily disabling code:**\n```html\n<!-- Temporarily hidden for testing\n<div class=\"promo-banner\">\n    <p>Special offer!</p>\n</div>\n-->\n```\n\n**Sectioning large files:**\n```html\n<!-- ========== HEADER ========== -->\n<header>...</header>\n\n<!-- ========== MAIN CONTENT ========== -->\n<main>...</main>\n\n<!-- ========== FOOTER ========== -->\n<footer>...</footer>\n```\n\n**Development notes:**\n```html\n<!-- TODO: Optimize images for faster loading -->\n<!-- REVIEW: Check accessibility with screen reader -->\n```"
          },
          {
            title: "Comments Practice Workshop! 💭",
            content: "In the playground, practice with comments:\n1. Add comments to explain different sections\n2. Use comments to temporarily hide some content\n3. Create TODO notes for future improvements\n4. Add multi-line comments with development notes\n5. Practice good comment formatting\n6. Try commenting out entire blocks of HTML\n\nGood comments make code maintenance much easier!"
          }
        ]
      }
    },
    { 
      id: 23, 
      title: "Inline vs Block Elements", 
      completed: false,
      playgroundCode: '<h1>Inline vs Block Elements Demo</h1>\\n\\n<h2>Block Elements (Full Width):</h2>\\n<div style=\"border: 2px solid red; margin: 5px;\">Block DIV</div>\\n<div style=\"border: 2px solid red; margin: 5px;\">Another Block DIV</div>\\n<p style=\"border: 2px solid blue; margin: 5px;\">Block Paragraph</p>\\n<h3 style=\"border: 2px solid green; margin: 5px;\">Block Heading</h3>\\n\\n<h2>Inline Elements (Flow with Text):</h2>\\n<p>This paragraph contains \\n<span style=\"border: 2px solid red;\">inline span</span> and \\n<a href=\"#\" style=\"border: 2px solid blue;\">inline link</a> and \\n<strong style=\"border: 2px solid green;\">inline bold</strong> and \\n<em style=\"border: 2px solid purple;\">inline italic</em> elements that flow with the text.</p>\\n\\n<h2>Mixed Example:</h2>\\n<div style=\"border: 2px solid orange; padding: 10px;\">\\n    <p>This is a <strong>block paragraph</strong> inside a <em>block div</em>.</p>\\n    <p>It contains <span style=\"background: yellow;\">inline spans</span> and <a href=\"#\">inline links</a>.</p>\\n</div>\\n\\n<h2>Common Block Elements:</h2>\\n<ul>\\n    <li>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;</li>\\n    <li>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</li>\\n    <li>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>\\n</ul>\\n\\n<h2>Common Inline Elements:</h2>\\n<p><span>&lt;span&gt;</span>, <a href=\"#\">&lt;a&gt;</a>, <strong>&lt;strong&gt;</strong>, <em>&lt;em&gt;</em>, <code>&lt;code&gt;</code>, <img src=\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'20\\' height=\\'20\\'%3E%3Crect width=\\'20\\' height=\\'20\\' fill=\\'%23ddd\\'/%3E%3C/svg%3E\" alt=\"small\" style=\"border: 1px solid #ccc;\">&lt;img&gt;</p>',
      content: {
        title: "Inline vs Block Elements",
        description: "Understanding the difference between inline and block elements is crucial for web layout! This fundamental concept affects how elements are displayed and positioned on your webpage. 📐",
        sections: [
          {
            title: "Block Elements - Full Width Containers",
            content: "Block elements are like building blocks that stack vertically:\n\n**Characteristics:**\n• Take up the full width available\n• Start on a new line\n• Push next element to a new line\n• Can contain other block and inline elements\n• Width and height can be controlled with CSS\n\n**Common block elements:**\n• `<div>`, `<p>`, `<h1>`-`<h6>`\n• `<ul>`, `<ol>`, `<li>`\n• `<header>`, `<nav>`, `<main>`, `<footer>`\n• `<section>`, `<article>`, `<aside>`\n• `<form>`, `<table>`, `<blockquote>`"
          },
          {
            title: "Inline Elements - Flow with Text",
            content: "Inline elements flow within text like words in a sentence:\n\n**Characteristics:**\n• Only take up as much width as their content\n• Flow with surrounding text\n• Don't start on a new line\n• Cannot contain block elements (usually)\n• Width and height are determined by content\n\n**Common inline elements:**\n• `<span>`, `<a>`, `<img>`\n• `<strong>`, `<em>`, `<code>`\n• `<input>`, `<button>`, `<label>`\n• `<small>`, `<sub>`, `<sup>`\n• `<abbr>`, `<cite>`, `<time>`"
          },
          {
            title: "Inline-Block - Best of Both Worlds",
            content: "CSS display property can change element behavior:\n\n**display: inline-block**\n• Flows inline like inline elements\n• But accepts width/height like block elements\n• Great for navigation menus and button groups\n\n**display: block**\n• Forces inline elements to behave like block\n• Makes links take full width, for example\n\n**display: inline**\n• Forces block elements to behave inline\n• Rarely used, but sometimes helpful\n\n**Example:**\n```css\n/* Make links behave like buttons */\na { display: inline-block; padding: 10px; }\n```"
          },
          {
            title: "Layout Implications",
            content: "Understanding inline vs block affects layout decisions:\n\n**Block element uses:**\n• Page sections and containers\n• Layout structure\n• Content that should start on new lines\n• When you need width/height control\n\n**Inline element uses:**\n• Text formatting within paragraphs\n• Links within sentences\n• Small UI elements\n• Content that should flow with text\n\n**Common mistakes:**\n• Putting block elements inside inline elements\n• Expecting inline elements to accept width/height\n• Forgetting that block elements create line breaks"
          },
          {
            title: "Element Behavior Experiment! 🔬",
            content: "In the playground, observe:\n1. Notice how block elements stack vertically\n2. See how inline elements flow with text\n3. Try changing element display with CSS\n4. Experiment with inline-block behavior\n5. Test putting different elements inside each other\n6. Add padding/margin to see the differences\n\nUnderstanding element behavior is fundamental to CSS layout!"
          }
        ]
      }
    },
    { 
      id: 24, 
      title: "Building a Complete Web Page", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>Sarah Johnson - Web Developer Portfolio</title>\\n    <meta name=\"description\" content=\"Professional web developer specializing in modern, accessible websites. View my portfolio and get in touch for your next project.\">\\n    <style>\\n        * { margin: 0; padding: 0; box-sizing: border-box; }\\n        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }\\n        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }\\n        header { background: #2c3e50; color: white; padding: 1rem 0; }\\n        nav ul { list-style: none; display: flex; gap: 2rem; }\\n        nav a { color: white; text-decoration: none; }\\n        .hero { background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-align: center; padding: 4rem 0; }\\n        .section { padding: 3rem 0; }\\n        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }\\n        .card { background: #f8f9fa; padding: 2rem; border-radius: 8px; }\\n        footer { background: #2c3e50; color: white; text-align: center; padding: 2rem 0; }\\n        img { max-width: 100%; height: auto; }\\n    </style>\\n</head>\\n<body>\\n    <header>\\n        <div class=\"container\">\\n            <nav>\\n                <ul>\\n                    <li><a href=\"#home\">Home</a></li>\\n                    <li><a href=\"#about\">About</a></li>\\n                    <li><a href=\"#portfolio\">Portfolio</a></li>\\n                    <li><a href=\"#contact\">Contact</a></li>\\n                </ul>\\n            </nav>\\n        </div>\\n    </header>\\n\\n    <main>\\n        <section id=\"home\" class=\"hero\">\\n            <div class=\"container\">\\n                <h1>Sarah Johnson</h1>\\n                <p>Full-Stack Web Developer</p>\\n                <a href=\"#contact\" class=\"btn\">Get In Touch</a>\\n            </div>\\n        </section>\\n\\n        <section id=\"about\" class=\"section\">\\n            <div class=\"container\">\\n                <h2>About Me</h2>\\n                <div class=\"grid\">\\n                    <div>\\n                        <h3>My Story</h3>\\n                        <p>I\\'m passionate about creating beautiful, functional websites that solve real problems. With 5+ years of experience in web development, I specialize in modern technologies and accessible design.</p>\\n                    </div>\\n                    <div>\\n                        <h3>Skills</h3>\\n                        <ul>\\n                            <li>HTML5 & CSS3</li>\\n                            <li>JavaScript & React</li>\\n                            <li>Node.js & Express</li>\\n                            <li>Responsive Design</li>\\n                            <li>Web Accessibility</li>\\n                        </ul>\\n                    </div>\\n                </div>\\n            </div>\\n        </section>\\n\\n        <section id=\"portfolio\" class=\"section\">\\n            <div class=\"container\">\\n                <h2>My Work</h2>\\n                <div class=\"grid\">\\n                    <article class=\"card\">\\n                        <h3>E-Commerce Platform</h3>\\n                        <p>Built a complete online store with shopping cart, payments, and admin dashboard.</p>\\n                        <a href=\"#\">View Project</a>\\n                    </article>\\n                    <article class=\"card\">\\n                        <h3>Portfolio Website</h3>\\n                        <p>Responsive portfolio site showcasing photography work with image galleries.</p>\\n                        <a href=\"#\">View Project</a>\\n                    </article>\\n                    <article class=\"card\">\\n                        <h3>Task Management App</h3>\\n                        <p>Web application for team collaboration with real-time updates and file sharing.</p>\\n                        <a href=\"#\">View Project</a>\\n                    </article>\\n                </div>\\n            </div>\\n        </section>\\n\\n        <section id=\"contact\" class=\"section\">\\n            <div class=\"container\">\\n                <h2>Contact Me</h2>\\n                <form>\\n                    <label for=\"name\">Name</label>\\n                    <input type=\"text\" id=\"name\" name=\"name\" required>\\n                    \\n                    <label for=\"email\">Email</label>\\n                    <input type=\"email\" id=\"email\" name=\"email\" required>\\n                    \\n                    <label for=\"message\">Message</label>\\n                    <textarea id=\"message\" name=\"message\" rows=\"5\" required></textarea>\\n                    \\n                    <button type=\"submit\">Send Message</button>\\n                </form>\\n            </div>\\n        </section>\\n    </main>\\n\\n    <footer>\\n        <div class=\"container\">\\n            <p>&copy; 2024 Sarah Johnson. All rights reserved.</p>\\n            <p>Follow me: <a href=\"#\">LinkedIn</a> | <a href=\"#\">GitHub</a> | <a href=\"#\">Twitter</a></p>\\n        </div>\\n    </footer>\\n</body>\\n</html>',
      content: {
        title: "Building a Complete Web Page",
        description: "Time to put it all together! Let's build a complete, professional webpage using all the HTML skills you've learned. This lesson combines structure, content, and best practices into one cohesive project! 🏗️",
        sections: [
          {
            title: "Planning Your Page Structure",
            content: "Before writing code, plan your page structure:\n\n**Essential sections:**\n• Header with navigation\n• Main content area\n• Footer with contact info\n\n**Semantic HTML structure:**\n```html\n<header>\n  <nav><!-- Navigation --></nav>\n</header>\n<main>\n  <section><!-- Hero/intro --></section>\n  <section><!-- About --></section>\n  <section><!-- Portfolio/services --></section>\n  <section><!-- Contact --></section>\n</main>\n<footer><!-- Site info --></footer>\n```\n\n**Planning checklist:**\n• What's the page purpose?\n• Who's the target audience?\n• What content is most important?\n• How should users navigate?"
          },
          {
            title: "HTML Best Practices Applied",
            content: "Use everything you've learned:\n\n**Document structure:**\n• Proper DOCTYPE and html lang attribute\n• Complete head section with meta tags\n• Semantic elements for structure\n\n**Content organization:**\n• Clear heading hierarchy (h1, h2, h3)\n• Meaningful alt text for images\n• Proper form labels and structure\n• Lists for grouped information\n\n**Accessibility features:**\n• Skip links for keyboard navigation\n• ARIA labels where needed\n• Proper contrast and focus indicators\n• Descriptive link text"
          },
          {
            title: "Content Strategy",
            content: "Create compelling, user-focused content:\n\n**Writing principles:**\n• Clear, concise language\n• Action-oriented headings\n• Scannable text with bullet points\n• Strong calls-to-action\n\n**Content sections:**\n• **Hero**: Clear value proposition\n• **About**: Build trust and credibility\n• **Services/Portfolio**: Show your work\n• **Contact**: Make it easy to reach you\n\n**SEO considerations:**\n• Descriptive title tags\n• Meta descriptions\n• Header tags for structure\n• Internal linking"
          },
          {
            title: "Testing and Quality Assurance",
            content: "Before launching, test thoroughly:\n\n**Technical testing:**\n• Validate HTML (W3C validator)\n• Check all links work\n• Test forms submit properly\n• Verify images load and have alt text\n\n**User testing:**\n• Test on different devices\n• Check keyboard navigation\n• Verify text is readable\n• Ensure fast loading times\n\n**Accessibility testing:**\n• Use screen reader\n• Check color contrast\n• Test keyboard-only navigation\n• Verify proper heading structure"
          },
          {
            title: "Complete Page Building Challenge! 🚀",
            content: "In the playground, explore this complete webpage:\n1. Notice the semantic HTML structure\n2. See how all sections work together\n3. Try the navigation links\n4. Examine the form structure\n5. Look at the CSS organization\n6. Consider mobile responsiveness\n7. Check accessibility features\n\nThis example shows how all HTML concepts work together in a real website!"
          }
        ]
      }
    },
    { 
      id: 25, 
      title: "HTML Best Practices & Final Project", 
      completed: false,
      playgroundCode: '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <!-- Essential Meta Tags -->\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <meta name=\"description\" content=\"Professional portfolio showcasing web development skills and projects. HTML, CSS, JavaScript expertise.\">\\n    <title>Your Name - Web Developer Portfolio</title>\\n    \\n    <!-- Performance & SEO -->\\n    <link rel=\"preload\" href=\"styles.css\" as=\"style\">\\n    <meta name=\"robots\" content=\"index, follow\">\\n    \\n    <style>\\n        /* CSS Best Practices */\\n        :root { --primary: #007bff; --text: #333; --bg: #f8f9fa; }\\n        *, *::before, *::after { box-sizing: border-box; }\\n        body { margin: 0; font: 16px/1.5 Arial, sans-serif; color: var(--text); }\\n        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }\\n        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }\\n        .btn { display: inline-block; padding: 0.75rem 1.5rem; background: var(--primary); color: white; text-decoration: none; border-radius: 4px; transition: background 0.2s; }\\n        .btn:hover, .btn:focus { background: #0056b3; }\\n    </style>\\n</head>\\n<body>\\n    <!-- Skip Link for Accessibility -->\\n    <a href=\"#main\" class=\"sr-only\">Skip to main content</a>\\n    \\n    <header role=\"banner\">\\n        <div class=\"container\">\\n            <nav role=\"navigation\" aria-label=\"Main navigation\">\\n                <ul style=\"display: flex; list-style: none; gap: 2rem; padding: 1rem 0; margin: 0;\">\\n                    <li><a href=\"#about\">About</a></li>\\n                    <li><a href=\"#skills\">Skills</a></li>\\n                    <li><a href=\"#projects\">Projects</a></li>\\n                    <li><a href=\"#contact\">Contact</a></li>\\n                </ul>\\n            </nav>\\n        </div>\\n    </header>\\n    \\n    <main id=\"main\" role=\"main\">\\n        <section id=\"hero\" style=\"text-align: center; padding: 4rem 0; background: var(--bg);\">\\n            <div class=\"container\">\\n                <h1>Hello, I\\'m [Your Name]</h1>\\n                <p style=\"font-size: 1.25rem; margin: 1rem 0;\">Aspiring Web Developer</p>\\n                <p>Passionate about creating accessible, user-friendly websites</p>\\n                <a href=\"#contact\" class=\"btn\">Get In Touch</a>\\n            </div>\\n        </section>\\n        \\n        <section id=\"about\" style=\"padding: 4rem 0;\">\\n            <div class=\"container\">\\n                <h2>About Me</h2>\\n                <p>I\\'m learning web development with a focus on HTML, CSS, and JavaScript. I believe in writing clean, semantic code that works for everyone.</p>\\n            </div>\\n        </section>\\n        \\n        <section id=\"skills\" style=\"padding: 4rem 0; background: var(--bg);\">\\n            <div class=\"container\">\\n                <h2>Skills I\\'m Learning</h2>\\n                <ul style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; list-style: none; padding: 0;\">\\n                    <li style=\"padding: 1rem; background: white; border-radius: 4px;\">\\n                        <strong>HTML5</strong><br>\\n                        Semantic markup, accessibility, forms\\n                    </li>\\n                    <li style=\"padding: 1rem; background: white; border-radius: 4px;\">\\n                        <strong>CSS3</strong><br>\\n                        Responsive design, Flexbox, Grid\\n                    </li>\\n                    <li style=\"padding: 1rem; background: white; border-radius: 4px;\">\\n                        <strong>JavaScript</strong><br>\\n                        ES6+, DOM manipulation, APIs\\n                    </li>\\n                </ul>\\n            </div>\\n        </section>\\n        \\n        <section id=\"projects\" style=\"padding: 4rem 0;\">\\n            <div class=\"container\">\\n                <h2>My Projects</h2>\\n                <p><em>Coming soon! Working on exciting projects to showcase here.</em></p>\\n            </div>\\n        </section>\\n        \\n        <section id=\"contact\" style=\"padding: 4rem 0; background: var(--bg);\">\\n            <div class=\"container\">\\n                <h2>Contact Me</h2>\\n                <form style=\"max-width: 500px;\">\\n                    <div style=\"margin-bottom: 1rem;\">\\n                        <label for=\"name\" style=\"display: block; margin-bottom: 0.5rem;\">Name</label>\\n                        <input type=\"text\" id=\"name\" name=\"name\" required style=\"width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;\">\\n                    </div>\\n                    <div style=\"margin-bottom: 1rem;\">\\n                        <label for=\"email\" style=\"display: block; margin-bottom: 0.5rem;\">Email</label>\\n                        <input type=\"email\" id=\"email\" name=\"email\" required style=\"width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;\">\\n                    </div>\\n                    <div style=\"margin-bottom: 1rem;\">\\n                        <label for=\"message\" style=\"display: block; margin-bottom: 0.5rem;\">Message</label>\\n                        <textarea id=\"message\" name=\"message\" rows=\"5\" required style=\"width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;\"></textarea>\\n                    </div>\\n                    <button type=\"submit\" class=\"btn\">Send Message</button>\\n                </form>\\n            </div>\\n        </section>\\n    </main>\\n    \\n    <footer role=\"contentinfo\" style=\"background: var(--text); color: white; text-align: center; padding: 2rem 0;\">\\n        <div class=\"container\">\\n            <p>&copy; 2024 [Your Name]. Built with HTML5 and passion! ❤️</p>\\n        </div>\\n    </footer>\\n</body>\\n</html>',
      content: {
        title: "HTML Best Practices & Final Project",
        description: "Congratulations on reaching the final lesson! 🎉 Now let's consolidate everything you've learned into a comprehensive set of best practices and create your own personal website as a final project!",
        sections: [
          {
            title: "HTML Best Practices Checklist",
            content: "Follow these practices for professional HTML:\n\n**Document Structure:**\n✅ Use proper DOCTYPE and semantic HTML5\n✅ Include lang attribute on html element\n✅ Complete head section with meta tags\n✅ Logical heading hierarchy (h1→h2→h3)\n\n**Content & Accessibility:**\n✅ Meaningful alt text for all images\n✅ Proper form labels and structure\n✅ Descriptive link text\n✅ Skip links for keyboard users\n✅ ARIA attributes where helpful\n\n**Performance & SEO:**\n✅ Optimized images with loading=\"lazy\"\n✅ Proper meta descriptions\n✅ Clean, valid HTML code\n✅ Fast loading times"
          },
          {
            title: "Code Quality Standards",
            content: "Write clean, maintainable code:\n\n**Formatting:**\n• Consistent indentation (2 or 4 spaces)\n• Lowercase for element names and attributes\n• Quote all attribute values\n• Close all tags properly\n\n**Organization:**\n• Group related elements together\n• Use comments for complex sections\n• Separate concerns (HTML for structure, CSS for style)\n• Keep files organized and named clearly\n\n**Validation:**\n• Use W3C HTML validator regularly\n• Test in multiple browsers\n• Check accessibility with screen readers\n• Validate forms work correctly"
          },
          {
            title: "Professional Development Workflow",
            content: "Establish good development habits:\n\n**Planning Phase:**\n• Sketch your layout first\n• Plan your content strategy\n• Choose appropriate semantic elements\n• Consider user experience\n\n**Development Phase:**\n• Write HTML structure first\n• Add content and test frequently\n• Validate code regularly\n• Test across devices\n\n**Launch Phase:**\n• Final accessibility check\n• Performance optimization\n• Cross-browser testing\n• SEO verification"
          },
          {
            title: "Your Final Project - Personal Portfolio",
            content: "Create your own portfolio website using everything you've learned:\n\n**Requirements:**\n• Complete HTML5 document structure\n• At least 4 semantic sections\n• Contact form with proper labels\n• Navigation menu with internal links\n• Proper meta tags and SEO\n• Accessible and keyboard-friendly\n• Valid HTML (check with W3C validator)\n\n**Suggested sections:**\n• Hero/intro with your name and title\n• About section with your story\n• Skills or interests section\n• Projects or goals section\n• Contact form\n• Footer with social links"
          },
          {
            title: "Congratulations & Next Steps! 🎓",
            content: "You've completed the HTML Fundamentals course! Here's what you've mastered:\n\n**Core Skills Achieved:**\n• HTML document structure and semantics\n• Forms, tables, and multimedia\n• Accessibility and best practices\n• SEO and meta tag optimization\n• Professional code organization\n\n**Next Steps in Your Journey:**\n• Learn CSS for styling and layouts\n• Explore JavaScript for interactivity\n• Practice building more complex projects\n• Study responsive web design\n• Join web development communities\n\n**Final Challenge:**\nCustomize the portfolio template in the playground to create your own unique website. You now have all the skills needed to build professional, accessible web pages!"
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
