import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Lock, Eye, Code, Save } from "lucide-react";
import type { Course } from "@shared/schema";
import { CSS_LESSONS } from "./lessons-css";
import { ARDUINO_LESSONS } from "./lessons-arduino";
import eiffel from "@assets/generated_images/eiffel.webp";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";


export default function CourseDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [htmlCode, setHtmlCode] = useState("");
  const [userHasEditedCode, setUserHasEditedCode] = useState(false);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["/api/courses", id],
  });

  // Define lessons by course for better organization
  const HTML_LESSONS = [
          {
            id: 1,
            title: "What is HTML? - Your First Web Page",
            completed: false,
            playgroundCode:
              "<h1>Hello, World!</h1>\\n<p>This is my first HTML page!</p>\\n<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>",
            content: {
              title: "What is HTML? - Your First Web Page",
              description:
                "Welcome to the exciting world of web development! HTML is the foundation of every website on the internet. Let's discover what makes the web work and create your very first webpage! 🌟",
              sections: [
                {
                  title: "What is HTML?",
                  content:
                    "HTML stands for HyperText Markup Language. Think of it as the skeleton of a website:\\n\\n• **HyperText**: Text with links to other text\\n• **Markup**: Special codes that describe content\\n• **Language**: A system computers understand\\n\\nHTML tells browsers what each piece of content is - whether it's a heading, paragraph, image, or link. It's like the blueprint of a house!",
                },
                {
                  title: "How Websites Work",
                  content:
                    "When you visit a website:\\n1. Your browser asks a server for the webpage\\n2. The server sends back HTML code\\n3. Your browser reads the HTML and displays it\\n4. You see the beautiful webpage!\\n\\nHTML is everywhere - every website uses it, from simple blogs to complex applications like Facebook and Google.",
                },
                {
                  title: "HTML Tags - The Building Blocks",
                  content:
                    "HTML uses 'tags' to mark up content:\\n\\n• Tags are surrounded by angle brackets: `<tag>`\\n• Most tags come in pairs: `<tag>content</tag>`\\n• The opening tag starts the element\\n• The closing tag ends it (has a forward slash)\\n\\nExample: `<h1>This is a heading</h1>`",
                },
                {
                  title: "Try It Yourself!",
                  content:
                    "In the playground, try:\\n1. Change 'Hello, World!' to your own message\\n2. Add another paragraph with `<p>Your text here</p>`\\n3. Make some text bold with `<strong>bold text</strong>`\\n4. See how the changes appear instantly!\\n\\nCongratulations - you're now writing HTML! 🎉",
                },
              ],
            },
          },
          {
            id: 2,
            title: "HTML Document Structure & DOCTYPE",
            completed: false,
            playgroundCode:
              '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>My Amazing Webpage</title>\\n</head>\\n<body>\\n    <h1>Welcome to My Website!</h1>\\n    <p>This is a properly structured HTML document.</p>\\n</body>\\n</html>',
            content: {
              title: "HTML Document Structure & DOCTYPE",
              description:
                "Every HTML document follows a specific structure - like a recipe with essential ingredients! Learn the anatomy of a webpage and why proper structure matters. 🏗️",
              sections: [
                {
                  title: "The DOCTYPE Declaration",
                  content:
                    "`<!DOCTYPE html>` tells the browser this is an HTML5 document.\\n\\n**Why it matters:**\\n• Ensures your page displays correctly\\n• Prevents 'quirks mode' rendering problems\\n• Must be the very first line\\n• Case doesn't matter, but lowercase is standard\\n\\nThink of DOCTYPE as showing your ID card to the browser - it identifies what kind of document you have!",
                },
                {
                  title: "The HTML Element",
                  content:
                    "The `<html>` element wraps everything else:\\n\\n```html\\n<html lang=\"en\">\\n  <!-- Everything goes here -->\\n</html>\\n```\\n\\n**The lang attribute:**\\n• Tells screen readers what language to use\\n• Helps search engines understand your content\\n• Use 'en' for English, 'es' for Spanish, etc.\\n• Important for accessibility!",
                },
                {
                  title: "Head vs Body - Two Important Sections",
                  content:
                    "Every HTML document has two main parts:\\n\\n**The `<head>` (invisible to users):**\\n• Page title (shows in browser tab)\\n• Meta information\\n• Links to CSS and JavaScript files\\n• Search engine information\\n\\n**The `<body>` (visible to users):**\\n• All the content people see\\n• Text, images, links, videos\\n• Everything that makes up your webpage",
                },
                {
                  title: "Essential Meta Tags",
                  content:
                    'Meta tags provide important information:\\n\\n• `<meta charset="UTF-8">` - Handles all text characters\\n• `<meta name="viewport"...>` - Makes your site mobile-friendly\\n• `<title>` - Page title in browser tab and search results\\n\\nThese might seem invisible, but they\'re crucial for a professional website!',
                },
                {
                  title: "Document Structure Practice! 📋",
                  content:
                    "In the playground, experiment with:\\n1. Change the page title and see it update in the browser tab\\n2. Add more content inside the `<body>`\\n3. Try different language codes in the lang attribute\\n4. Notice how the browser understands this structure\\n\\nProper structure is the foundation of every great website!",
                },
              ],
            },
          },
          {
            id: 3,
            title: "Headings and Text Formatting",
            completed: false,
            playgroundCode:
              "<h1>This is a Main Heading</h1>\\n<h2>This is a Secondary Heading</h2>\\n<h3>This is a Smaller Heading</h3>\\n<h4>Even Smaller</h4>\\n<h5>Smaller Still</h5>\\n<h6>The Smallest Heading</h6>\\n\\n<p>This is regular paragraph text.</p>\\n<p><strong>This text is bold and important.</strong></p>\\n<p><em>This text is italic and emphasized.</em></p>\\n<p><strong><em>This text is both bold and italic!</em></strong></p>",
            content: {
              title: "Headings and Text Formatting",
              description:
                "Learn to organize your content with headings and make your text expressive with formatting! Headings create structure, while formatting adds emphasis and meaning to your words. 📝",
              sections: [
                {
                  title: "The Six Heading Levels",
                  content:
                    "HTML has six heading levels, from h1 (biggest) to h6 (smallest):\\n\\n• **h1**: Main page title (use only one per page!)\\n• **h2**: Major section headings\\n• **h3**: Sub-section headings\\n• **h4, h5, h6**: Smaller subdivisions\\n\\nThink of headings like the outline of a book: Chapter (h1), Section (h2), Sub-section (h3), etc.",
                },
                {
                  title: "Creating Visual Hierarchy",
                  content:
                    "Headings create a 'visual hierarchy' that guides readers:\\n\\n• Bigger headings = more important content\\n• Smaller headings = supporting details\\n• Proper heading order helps with accessibility\\n• Screen readers use headings to navigate\\n\\nNever choose headings just for size - choose them for importance!",
                },
                {
                  title: "Text Formatting Elements",
                  content:
                    "Make your text more expressive:\\n\\n• **`<strong>`**: Important, serious text (usually bold)\\n• **`<em>`**: Emphasized text (usually italic)\\n• **`<mark>`**: Highlighted text (like a yellow marker)\\n• **`<small>`**: Fine print or less important text\\n\\nThese tags have meaning, not just appearance - screen readers understand the difference!",
                },
                {
                  title: "Heading Best Practices",
                  content:
                    "Follow these rules for great headings:\\n\\n• Only one h1 per page (your main title)\\n• Don't skip levels (h1 → h2 → h3, not h1 → h4)\\n• Keep headings short and descriptive\\n• Use them for structure, not styling\\n• Make them meaningful - 'Products' not 'Big Text'\\n\\nGood headings make your content scannable and accessible!",
                },
                {
                  title: "Formatting Practice Challenge! ✏️",
                  content:
                    "In the playground, try:\\n1. Create a heading hierarchy for a blog post about your hobby\\n2. Use strong and em tags to emphasize key points\\n3. Try combining bold and italic formatting\\n4. Create a simple article outline using different heading levels\\n\\nRemember: headings organize content, formatting adds emphasis!",
                },
              ],
            },
          },
          {
            id: 4,
            title: "Paragraphs, Line Breaks & Text Structure",
            completed: false,
            playgroundCode:
              "<p>This is a regular paragraph. Paragraphs are the building blocks of text content on web pages.</p>\\n\\n<p>This is another paragraph. Notice the space between paragraphs - browsers add this automatically!</p>\\n\\n<p>You can have multiple sentences in a paragraph.<br>\\nUse the &lt;br&gt; tag to create line breaks within a paragraph.<br>\\nLike this!</p>\\n\\n<p>Here is a paragraph with some <strong>bold text</strong> and some <em>italic text</em> mixed in naturally with the content.</p>",
            content: {
              title: "Paragraphs, Line Breaks & Text Structure",
              description:
                "Master the art of organizing text! Paragraphs and line breaks are fundamental to creating readable, well-structured content that flows naturally. 📖",
              sections: [
                {
                  title: "The Paragraph Element",
                  content:
                    "The `<p>` tag creates paragraphs - the basic unit of text:\\n\\n• Each `<p>` tag creates a new paragraph\\n• Browsers add space above and below paragraphs\\n• Paragraphs are block-level elements (full width)\\n• Perfect for body text, descriptions, articles\\n\\n**Example:**\\n```html\\n<p>This is one paragraph.</p>\\n<p>This is another paragraph.</p>\\n```",
                },
                {
                  title: "Line Breaks vs Paragraphs",
                  content:
                    "Understanding when to use `<br>` vs `<p>`:\\n\\n**Use `<br>` for:**\\n• Line breaks within the same thought\\n• Addresses, poems, lyrics\\n• Short lists within paragraphs\\n\\n**Use `<p>` for:**\\n• Separate ideas or topics\\n• Each distinct thought\\n• Body text and articles\\n\\n**Remember:** Don't use multiple `<br>` tags for spacing - use CSS instead!",
                },
                {
                  title: "Text Flow and Structure",
                  content:
                    "Good text structure makes content easy to read:\\n\\n• **Short paragraphs**: 2-4 sentences ideal for web\\n• **One idea per paragraph**: Keep it focused\\n• **Logical flow**: Ideas should connect naturally\\n• **Scannable content**: Break up long text blocks\\n\\nThink about your reader - make it easy for them to digest your content!",
                },
                {
                  title: "White Space and Readability",
                  content:
                    "White space (empty areas) improves readability:\\n\\n• Paragraphs create natural white space\\n• Don't fear empty space - it helps readers\\n• Break up text walls with headings\\n• Use lists for multiple related items\\n\\nGood white space makes your content inviting, not intimidating!",
                },
                {
                  title: "Text Structure Workshop! 📚",
                  content:
                    "In the playground, practice:\\n1. Write a short story using multiple paragraphs\\n2. Use line breaks for an address or poem\\n3. Mix formatting (bold, italic) naturally within paragraphs\\n4. Create content that's easy to scan and read\\n\\nWell-structured text is the foundation of good web content!",
                },
              ],
            },
          },
          {
            id: 5,
            title: "Lists - Organizing Information",
            completed: false,
            playgroundCode:
              "<h1>My Favorite Things</h1>\\n\\n<h2>Unordered List (Bullets):</h2>\\n<ul>\\n    <li>Pizza</li>\\n    <li>Ice cream</li>\\n    <li>Movies</li>\\n    <li>Video games</li>\\n</ul>\\n\\n<h2>Ordered List (Numbers):</h2>\\n<ol>\\n    <li>Wake up</li>\\n    <li>Brush teeth</li>\\n    <li>Eat breakfast</li>\\n    <li>Go to work</li>\\n</ol>\\n\\n<h2>Nested Lists:</h2>\\n<ul>\\n    <li>Fruits\\n        <ul>\\n            <li>Apples</li>\\n            <li>Bananas</li>\\n            <li>Oranges</li>\\n        </ul>\\n    </li>\\n    <li>Vegetables\\n        <ul>\\n            <li>Carrots</li>\\n            <li>Broccoli</li>\\n        </ul>\\n    </li>\\n</ul>",
            content: {
              title: "Lists - Organizing Information",
              description:
                "Lists are perfect for organizing related information! Whether you need bullets or numbers, lists make content scannable and easy to understand. Let's master both types! 📋",
              sections: [
                {
                  title: "Unordered Lists (Bullets)",
                  content:
                    "Use `<ul>` for lists where order doesn't matter:\\n\\n• **`<ul>`**: Unordered list container\\n• **`<li>`**: List item (each bullet point)\\n\\n**Perfect for:**\\n• Features or benefits\\n• Shopping lists\\n• Navigation menus\\n• Any items without specific order\\n\\n**Example:**\\n```html\\n<ul>\\n  <li>First item</li>\\n  <li>Second item</li>\\n</ul>\\n```",
                },
                {
                  title: "Ordered Lists (Numbers)",
                  content:
                    "Use `<ol>` when sequence or ranking matters:\\n\\n• **`<ol>`**: Ordered list container\\n• **`<li>`**: List item (each numbered point)\\n\\n**Perfect for:**\\n• Step-by-step instructions\\n• Rankings or top 10 lists\\n• Recipes\\n• Any sequential information\\n\\n**Example:**\\n```html\\n<ol>\\n  <li>Step one</li>\\n  <li>Step two</li>\\n</ol>\\n```",
                },
                {
                  title: "Nested Lists - Lists Within Lists",
                  content:
                    "Create hierarchical information with nested lists:\\n\\n```html\\n<ul>\\n  <li>Main topic\\n    <ul>\\n      <li>Subtopic 1</li>\\n      <li>Subtopic 2</li>\\n    </ul>\\n  </li>\\n</ul>\\n```\\n\\n**Great for:**\\n• Outline structures\\n• Category and subcategory organization\\n• Multi-level navigation\\n• Complex information hierarchies",
                },
                {
                  title: "List Best Practices",
                  content:
                    "Make your lists effective:\\n\\n• **Consistent format**: Keep items similar in structure\\n• **Parallel language**: Start items with similar words\\n• **Appropriate list type**: Order matters = `<ol>`, otherwise `<ul>`\\n• **Reasonable length**: 5-9 items ideal for memory\\n• **Meaningful content**: Each item should add value\\n\\nGood lists improve scannability and comprehension!",
                },
                {
                  title: "Lists Practice Lab! 📝",
                  content:
                    "In the playground, create:\\n1. Your top 5 favorite movies (ordered list)\\n2. Things needed for a picnic (unordered list)\\n3. A nested list of hobbies with subcategories\\n4. Step-by-step instructions for making a sandwich\\n5. A site navigation structure using nested lists\\n\\nLists are everywhere on the web - master them!",
                },
              ],
            },
          },
          {
            id: 6,
            title: "Links - Connecting the Web",
            completed: false,
            playgroundCode:
              '<h1>All About Links</h1>\\n\\n<p>Here are different types of links:</p>\\n\\n<p><a href=\"https://www.google.com\">Visit Google</a></p>\\n\\n<p><a href=\"https://www.youtube.com\" target=\"_blank\">Open YouTube in New Tab</a></p>\\n\\n<p><a href=\"mailto:hello@example.com\">Send me an Email</a></p>\\n\\n<p><a href=\"tel:+1-555-123-4567\">Call this Phone Number</a></p>\\n\\n<h2 id=\"section1\">Section 1</h2>\\n<p>This is section 1 content.</p>\\n\\n<h2 id=\"section2\">Section 2</h2>\\n<p>This is section 2 content.</p>\\n\\n<p><a href=\"#section1\">Jump to Section 1</a></p>\\n<p><a href=\"#section2\">Jump to Section 2</a></p>',
            content: {
              title: "Links - Connecting the Web",
              description:
                "Links are what make the web 'web'! They connect pages, sites, and content together. Master the art of linking and you'll understand the true power of the internet. 🔗",
              sections: [
                {
                  title: "The Anchor Tag - Your Link Tool",
                  content:
                    'The `<a>` (anchor) tag creates all links:\\n\\n**Basic syntax:**\\n```html\\n<a href="destination">Link text</a>\\n```\\n\\n• **href**: Where the link goes (the destination)\\n• **Link text**: What users click on\\n• **Clickable area**: The entire link text is clickable\\n\\nThe link text should describe where you\'re going!',
                },
                {
                  title: "Types of Links",
                  content:
                    'Different types of links for different purposes:\\n\\n**External links:**\\n`<a href="https://google.com">Google</a>`\\n\\n**Internal links (same site):**\\n`<a href="/about">About Page</a>`\\n\\n**Email links:**\\n`<a href="mailto:user@email.com">Email Me</a>`\\n\\n**Phone links:**\\n`<a href="tel:+1234567890">Call Us</a>`\\n\\n**Section links (same page):**\\n`<a href="#section1">Go to Section 1</a>`',
                },
                {
                  title: "Link Attributes and Behavior",
                  content:
                    'Control how links behave:\\n\\n**target="_blank"**: Opens in new tab/window\\n• Use sparingly - let users choose\\n• Good for external sites\\n\\n**title**: Tooltip text on hover\\n• Provides extra information\\n• Helpful for accessibility\\n\\n**Example:**\\n```html\\n<a href="https://example.com" \\n   target="_blank" \\n   title="Opens Example.com in new tab">\\n   Visit Example\\n</a>\\n```',
                },
                {
                  title: "Writing Good Link Text",
                  content:
                    "Link text should be clear and descriptive:\\n\\n**Good link text:**\\n• 'Download the user manual'\\n• 'View our pricing page'\\n• 'Contact our support team'\\n\\n**Avoid:**\\n• 'Click here'\\n• 'Read more'\\n• 'This link'\\n\\nDescriptive links help with accessibility and user experience!",
                },
                {
                  title: "Link Building Workshop! 🔗",
                  content:
                    "In the playground, create:\\n1. Links to your favorite websites\\n2. An email link to contact you\\n3. Internal links that jump between sections\\n4. A phone number link\\n5. Links that open in new tabs (sparingly!)\\n\\nLinks are the highways of the internet - connect everything!",
                },
              ],
            },
          },
          {
            id: 7,
            title: "Images - Adding Visual Content",
            completed: false,
            playgroundCode:
              '<h1>Working with Images</h1>\\n\\n<img src=\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400\" alt=\"Beautiful landscape with mountains and lake\" width=\"400\">\\n\\n<p>The image shows a man smiling.</p>\\n\\n<figure>\\n    <img src=\"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300\" alt=\"Fresh vegetables and fruits\" width=\"300\">\\n    <figcaption>Healthy fruits and vegetables for a balanced diet</figcaption>\\n</figure>\\n\\n<p>You can also use images as links:</p>\\n<a href=\"https://unsplash.com\">\\n    <img src=\"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200\" alt=\"Camera lens close-up\" width=\"200\">\\n</a>',
            content: {
              title: "Images - Adding Visual Content",
              description:
                "A picture is worth a thousand words! Images make websites engaging, informative, and memorable. Learn to add images properly with accessibility in mind. 📸",
              sections: [
                {
                  title: "The Image Tag Basics",
                  content:
                    'The `<img>` tag adds images to your webpage:\\n\\n**Basic syntax:**\\n```html\\n<img src="image.jpg" alt="Description">\\n```\\n\\n**Key points:**\\n• Self-closing tag (no closing tag needed)\\n• `src` = source (where the image file is)\\n• `alt` = alternative text (crucial for accessibility)\\n• Images are inline elements by default',
                },
                {
                  title: "Image Sources and Formats",
                  content:
                    "Where to get images and what formats to use:\\n\\n**Image sources:**\\n• Your own photos/graphics\\n• Stock photo sites (Unsplash, Pexels)\\n• Online image URLs\\n• Local files in your project\\n\\n**Best formats:**\\n• **JPEG**: Photos, complex images\\n• **PNG**: Graphics, logos, transparency\\n• **WebP**: Modern format, smaller files\\n• **SVG**: Vector graphics, icons",
                },
                {
                  title: "Alt Text - Making Images Accessible",
                  content:
                    'Alt text is crucial for accessibility and SEO:\\n\\n**Good alt text:**\\n• Describes what\'s in the image\\n• Concise but descriptive\\n• Provides context if needed\\n\\n**Examples:**\\n• `alt="Red sports car parked on city street"`\\n• `alt="Graph showing 25% increase in sales"`\\n• `alt=""` (empty for decorative images)\\n\\n**Screen readers** use alt text to describe images to visually impaired users!',
                },
                {
                  title: "Image Sizing and Responsive Images",
                  content:
                    'Control image size and make them mobile-friendly:\\n\\n**Size attributes:**\\n```html\\n<img src="photo.jpg" alt="Description" \\n     width="400" height="300">\\n```\\n\\n**CSS for responsive images:**\\n```css\\nimg { max-width: 100%; height: auto; }\\n```\\n\\n**Loading optimization:**\\n`loading="lazy"` for images below the fold',
                },
                {
                  title: "Advanced Image Techniques",
                  content:
                    'Take your images further:\\n\\n**Figure and figcaption:**\\n```html\\n<figure>\\n  <img src="chart.jpg" alt="Sales data">\\n  <figcaption>Q4 sales increased 40%</figcaption>\\n</figure>\\n```\\n\\n**Clickable images:**\\n```html\\n<a href="larger-image.jpg">\\n  <img src="thumbnail.jpg" alt="Click to enlarge">\\n</a>\\n```\\n\\nFigures group images with their captions semantically!',
                },
                {
                  title: "Image Practice Challenge! 📸",
                  content:
                    "In the playground, try:\\n1. Replace images with URLs from Unsplash (search for topics you like)\\n2. Write detailed, helpful alt text for each image\\n3. Add captions using `<figure>` and `<figcaption>`\\n4. Try different image sizes and see how they adapt\\n5. Create an image grid or gallery layout\\n6. Add `title` attributes for hover tooltips\\n\\nGreat images make websites memorable and engaging!",
                },
              ],
            },
          },
          {
            id: 8,
            title: "Tables - Organizing Data",
            completed: false,
            playgroundCode:
              '<h1>Student Grade Report</h1>\\n\\n<table border=\"1\" style=\"border-collapse: collapse; width: 100%;\">\\n    <thead>\\n        <tr>\\n            <th>Student Name</th>\\n            <th>Math</th>\\n            <th>Science</th>\\n            <th>English</th>\\n            <th>Average</th>\\n        </tr>\\n    </thead>\\n    <tbody>\\n        <tr>\\n            <td>Alice Johnson</td>\\n            <td>92</td>\\n            <td>88</td>\\n            <td>95</td>\\n            <td>91.7</td>\\n        </tr>\\n        <tr>\\n            <td>Bob Smith</td>\\n            <td>78</td>\\n            <td>85</td>\\n            <td>82</td>\\n            <td>81.7</td>\\n        </tr>\\n        <tr>\\n            <td>Carol Davis</td>\\n            <td>95</td>\\n            <td>92</td>\\n            <td>89</td>\\n            <td>92.0</td>\\n        </tr>\\n    </tbody>\\n</table>',
            content: {
              title: "Tables - Organizing Data",
              description:
                "Tables are perfect for displaying data that has relationships - like spreadsheets, schedules, and comparisons. Learn to create organized, accessible tables! 📊",
              sections: [
                {
                  title: "Table Structure",
                  content:
                    "HTML tables use several elements working together:\\n\\n• **`<table>`**: The container for everything\\n• **`<tr>`**: Table row (horizontal)\\n• **`<th>`**: Table header (column titles)\\n• **`<td>`**: Table data (regular cells)\\n• **`<thead>`**: Groups header rows\\n• **`<tbody>`**: Groups body rows\\n\\nThink of it like building a house: table is the foundation, rows are floors, cells are rooms!",
                },
                {
                  title: "Creating Your First Table",
                  content:
                    "Basic table structure:\\n\\n```html\\n<table>\\n  <tr>\\n    <th>Name</th>\\n    <th>Age</th>\\n    <th>City</th>\\n  </tr>\\n  <tr>\\n    <td>Alice</td>\\n    <td>25</td>\\n    <td>New York</td>\\n  </tr>\\n</table>\\n```\\n\\n**Key points:**\\n• First row usually contains headers (`<th>`)\\n• Each row should have the same number of cells\\n• Headers help screen readers understand table structure",
                },
                {
                  title: "Making Tables Accessible",
                  content:
                    "Tables need proper structure for accessibility:\\n\\n**Use semantic elements:**\\n```html\\n<table>\\n  <thead>\\n    <tr><th>Header 1</th><th>Header 2</th></tr>\\n  </thead>\\n  <tbody>\\n    <tr><td>Data 1</td><td>Data 2</td></tr>\\n  </tbody>\\n</table>\\n```\\n\\n**Add captions:**\\n```html\\n<table>\\n  <caption>Monthly Sales Report</caption>\\n  <!-- table content -->\\n</table>\\n```\\n\\nThis helps browsers and assistive technology understand your table!",
                },
                {
                  title: "When to Use Tables",
                  content:
                    "Tables are for tabular data, not layout:\\n\\n**Good uses:**\\n• Spreadsheet-like data\\n• Comparisons (features, prices)\\n• Schedules and calendars\\n• Financial reports\\n• Scientific data\\n\\n**Don't use tables for:**\\n• Page layout (use CSS Grid/Flexbox instead)\\n• Positioning elements\\n• Creating columns of text\\n\\nTables are for data that makes sense in rows and columns!",
                },
                {
                  title: "Table Practice Workshop! 📈",
                  content:
                    "In the playground, try:\\n1. Add more students to the grade report\\n2. Create a table comparing different smartphones\\n3. Build a weekly schedule table\\n4. Add a caption describing what the table shows\\n5. Experiment with different types of data\\n\\nTables are powerful tools for organizing complex information clearly!",
                },
              ],
            },
          },
          {
            id: 9,
            title: "Forms - Collecting User Input",
            completed: false,
            playgroundCode:
              '<h1>Contact Us Form</h1>\\n\\n<form>\\n    <label for=\"name\">Your Name:</label><br>\\n    <input type=\"text\" id=\"name\" name=\"name\" required><br><br>\\n    \\n    <label for=\"email\">Email Address:</label><br>\\n    <input type=\"email\" id=\"email\" name=\"email\" required><br><br>\\n    \\n    <label for=\"subject\">Subject:</label><br>\\n    <select id=\"subject\" name=\"subject\">\\n        <option value=\"\">Choose a topic...</option>\\n        <option value=\"general\">General Question</option>\\n        <option value=\"support\">Technical Support</option>\\n        <option value=\"feedback\">Feedback</option>\\n    </select><br><br>\\n    \\n    <label for=\"message\">Your Message:</label><br>\\n    <textarea id=\"message\" name=\"message\" rows=\"5\" cols=\"50\" required></textarea><br><br>\\n    \\n    <input type=\"checkbox\" id=\"newsletter\" name=\"newsletter\">\\n    <label for=\"newsletter\">Subscribe to our newsletter</label><br><br>\\n    \\n    <input type=\"submit\" value=\"Send Message\">\\n    <input type=\"reset\" value=\"Clear Form\">\\n</form>',
            content: {
              title: "Forms - Collecting User Input",
              description:
                "Forms are how websites talk to users! From contact forms to surveys, forms make websites interactive. Let's master user-friendly forms! 📋",
              sections: [
                {
                  title: "Form Basics",
                  content:
                    'Forms collect user data and send it somewhere:\\n\\n**Basic structure:**\\n```html\\n<form action="where-to-send" method="post">\\n  <input type="text" name="username">\\n  <button type="submit">Submit</button>\\n</form>\\n```\\n\\n**Key attributes:**\\n• **action**: Where to send form data\\n• **method**: How to send data ("get" or "post")\\n• **name**: Identifies each input when form is submitted',
                },
                {
                  title: "Input Types",
                  content:
                    'Different input types for different data:\\n\\n**Text inputs:**\\n• `type="text"` - Regular text\\n• `type="email"` - Email addresses\\n• `type="password"` - Hidden text\\n• `type="tel"` - Phone numbers\\n\\n**Other inputs:**\\n• `type="number"` - Numbers only\\n• `type="date"` - Date picker\\n• `type="checkbox"` - Checkboxes\\n• `type="radio"` - Radio buttons\\n\\nChoose the right input type for better user experience!',
                },
                {
                  title: "Labels and Accessibility",
                  content:
                    'Always use labels with form inputs:\\n\\n**Proper labeling:**\\n```html\\n<label for="email">Email Address</label>\\n<input type="email" id="email" name="email">\\n```\\n\\n**Why labels matter:**\\n• Screen readers can announce what each field is for\\n• Clicking labels focuses the input (better UX)\\n• Required for web accessibility\\n• Makes forms easier to use on mobile\\n\\nThe `for` attribute must match the input\'s `id`!',
                },
                {
                  title: "Form Validation",
                  content:
                    'HTML5 provides built-in validation:\\n\\n**Required fields:**\\n```html\\n<input type="email" name="email" required>\\n```\\n\\n**Input constraints:**\\n• `maxlength` for text length\\n• `min` and `max` for numbers\\n• `pattern` for custom validation\\n• `placeholder` for hints\\n\\n**Browser benefits:**\\n• Shows error messages automatically\\n• Prevents submission of invalid data\\n• Better user experience',
                },
                {
                  title: "Form Practice Workshop! 💪",
                  content:
                    'In the playground, experiment with:\\n1. Add your personal information to test the form\\n2. Try submitting with required fields empty\\n3. Add a new field with `type="date"` for birthdate\\n4. Create radio buttons for selecting preferences\\n5. Add more options to the dropdown menu\\n6. Test different input types\\n\\nForms are the bridge between users and your website!',
                },
              ],
            },
          },
          {
            id: 10,
            title: "HTML5 Semantic Elements",
            completed: false,
            playgroundCode:
              '<header>\\n    <h1>My Personal Blog</h1>\\n    <nav>\\n        <ul>\\n            <li><a href=\"#home\">Home</a></li>\\n            <li><a href=\"#about\">About</a></li>\\n            <li><a href=\"#blog\">Blog</a></li>\\n            <li><a href=\"#contact\">Contact</a></li>\\n        </ul>\\n    </nav>\\n</header>\\n\\n<main>\\n    <article>\\n        <header>\\n            <h2>My First Blog Post</h2>\\n            <time datetime=\"2024-01-15\">January 15, 2024</time>\\n        </header>\\n        \\n        <section>\\n            <h3>Introduction</h3>\\n            <p>This is my first blog post using semantic HTML5 elements!</p>\\n        </section>\\n        \\n        <section>\\n            <h3>What I Learned</h3>\\n            <p>Semantic elements make websites more meaningful and accessible.</p>\\n        </section>\\n    </article>\\n    \\n    <aside>\\n        <h3>Recent Posts</h3>\\n        <ul>\\n            <li><a href=\"#\">Getting Started with HTML</a></li>\\n            <li><a href=\"#\">CSS Basics</a></li>\\n        </ul>\\n    </aside>\\n</main>\\n\\n<footer>\\n    <p>&copy; 2024 My Personal Blog. All rights reserved.</p>\\n</footer>',
            content: {
              title: "HTML5 Semantic Elements",
              description:
                "HTML5 introduced amazing semantic elements that give meaning to your content! These elements make websites more accessible, SEO-friendly, and easier to understand. 🏗️",
              sections: [
                {
                  title: "What Are Semantic Elements?",
                  content:
                    'Semantic elements clearly describe their meaning:\\n\\n**Before HTML5:** `<div class="header">`\\n**HTML5 Semantic:** `<header>`\\n\\n**Benefits:**\\n• Better accessibility for screen readers\\n• Improved SEO (search engines understand structure)\\n• More readable code for developers\\n• Consistent page structure across the web\\n\\nSemantic elements tell the story of your content!',
                },
                {
                  title: "Essential Semantic Elements",
                  content:
                    "Core HTML5 semantic elements:\\n\\n• **`<header>`**: Page or section header\\n• **`<nav>`**: Navigation links\\n• **`<main>`**: Main content area (one per page)\\n• **`<article>`**: Independent content (blog posts)\\n• **`<section>`**: Thematic grouping of content\\n• **`<aside>`**: Related content (sidebars)\\n• **`<footer>`**: Page or section footer\\n• **`<figure>`**: Images with captions\\n• **`<time>`**: Dates and times",
                },
                {
                  title: "Building Page Structure",
                  content:
                    "Typical semantic page layout:\\n\\n```html\\n<header>\\n  <h1>Site Title</h1>\\n  <nav><!-- Navigation --></nav>\\n</header>\\n\\n<main>\\n  <article>\\n    <section><!-- Content --></section>\\n  </article>\\n  <aside><!-- Sidebar --></aside>\\n</main>\\n\\n<footer>\\n  <p>&copy; 2024 Your Site</p>\\n</footer>\\n```\\n\\nThis creates a clear, logical structure!",
                },
                {
                  title: "Semantic vs Generic Elements",
                  content:
                    'When to use semantic elements vs `<div>`:\\n\\n**Use semantic elements when:**\\n• Content has specific meaning\\n• You want better accessibility\\n• Structure is important\\n\\n**Use `<div>` when:**\\n• You need a container purely for styling\\n• No semantic meaning exists\\n• Grouping elements for layout\\n\\n**Example:**\\n• ✅ `<article>` for blog posts\\n• ✅ `<div class="card">` for styling containers',
                },
                {
                  title: "Semantic HTML Practice! 🎯",
                  content:
                    "In the playground, explore:\\n1. Change the article content to your own blog post\\n2. Add more sections to the article\\n3. Update the aside with your own links\\n4. Try adding a `<figure>` with an image\\n5. Use `<time>` elements for different dates\\n\\nSemantic HTML makes the web better for everyone!",
                },
              ],
            },
          },
          {
            id: 11,
            title: "Advanced Text Elements & Formatting",
            completed: false,
            playgroundCode:
              '<h1>Advanced Text Formatting</h1>\\n\\n<p>This text contains <code>inline code</code> and a <kbd>Ctrl+C</kbd> keyboard shortcut.</p>\\n\\n<blockquote>\\n    <p>"The best time to plant a tree was 20 years ago. The second best time is now."</p>\\n    <cite>— Chinese Proverb</cite>\\n</blockquote>\\n\\n<p>Chemical formula: H<sub>2</sub>O</p>\\n<p>Mathematical expression: E = mc<sup>2</sup></p>\\n\\n<p>Use the <abbr title="HyperText Markup Language">HTML</abbr> element for web development.</p>\\n\\n<p><mark>Highlighted text</mark> stands out from the rest.</p>',
            content: {
              title: "Advanced Text Elements & Formatting",
              description:
                "Take your text formatting to the next level! Learn specialized elements for code, quotes, abbreviations, and more. These elements add semantic meaning and professional polish. ✨",
              sections: [
                {
                  title: "Code and Technical Text",
                  content:
                    "Special elements for technical content:\\n\\n• **`<code>`**: Inline code snippets\\n• **`<pre>`**: Preformatted text (preserves spaces)\\n• **`<kbd>`**: Keyboard input\\n• **`<samp>`**: Sample computer output\\n• **`<var>`**: Variables in programming\\n\\nThese elements help distinguish technical content from regular text and often display in monospace fonts.",
                },
                {
                  title: "Quotations and Citations",
                  content:
                    "Proper elements for quotes:\\n\\n**`<blockquote>`**: Long quotes (block-level)\\n```html\\n<blockquote>\\n  <p>Quote text here</p>\\n  <cite>— Author Name</cite>\\n</blockquote>\\n```\\n\\n**`<q>`**: Short inline quotes\\n**`<cite>`**: Citation of works, authors\\n\\nUse these for proper semantic meaning and accessibility!",
                },
                {
                  title: "Subscript and Superscript",
                  content:
                    "For mathematical and scientific notation:\\n\\n• **`<sub>`**: Subscript (H₂O)\\n• **`<sup>`**: Superscript (E=mc²)\\n\\n**Perfect for:**\\n• Chemical formulas\\n• Mathematical expressions\\n• Footnote references\\n• Ordinal numbers (1st, 2nd, 3rd)",
                },
                {
                  title: "Abbreviations and Definitions",
                  content:
                    'Help users understand terminology:\\n\\n**`<abbr>`**: Abbreviations with explanations\\n```html\\n<abbr title="HyperText Markup Language">HTML</abbr>\\n```\\n\\n**`<dfn>`**: Defining instance of a term\\n**`<mark>`**: Highlighted text\\n\\nThese elements improve accessibility and user understanding!',
                },
                {
                  title: "Advanced Formatting Practice! 🔬",
                  content:
                    "In the playground, try:\\n1. Create a scientific article with chemical formulas\\n2. Add code examples using proper code elements\\n3. Include a meaningful blockquote with citation\\n4. Use abbreviations with helpful title attributes\\n5. Highlight important terms with mark\\n\\nThese elements make your content more professional and accessible!",
                },
              ],
            },
          },
          {
            id: 12,
            title: "Accessibility - Making Websites for Everyone",
            completed: false,
            playgroundCode:
              '<h1>Accessible Web Design</h1>\\n\\n<nav aria-label="Main navigation">\\n    <ul>\\n        <li><a href="#content" aria-label="Skip to main content">Skip to content</a></li>\\n        <li><a href="#home">Home</a></li>\\n        <li><a href="#about">About</a></li>\\n    </ul>\\n</nav>\\n\\n<main id="content">\\n    <h2>Contact Form</h2>\\n    <form>\\n        <label for="name">Full Name (required)</label>\\n        <input type="text" id="name" name="name" required aria-describedby="name-help">\\n        <small id="name-help">Enter your first and last name</small>\\n        \\n        <label for="email">Email Address</label>\\n        <input type="email" id="email" name="email" required>\\n        \\n        <button type="submit">Send Message</button>\\n    </form>\\n    \\n    <img src="https://images.unsplash.com/photo-1573495627256-6b3c5a7d0a10?w=300" alt="Person using a laptop computer at a wooden desk with coffee cup nearby">\\n</main>',
            content: {
              title: "Accessibility - Making Websites for Everyone",
              description:
                "Accessibility ensures everyone can use your website! Learn to create inclusive web experiences that work for all users, including those with disabilities. It's not just the right thing to do—it makes better websites! ♿✨",
              sections: [
                {
                  title: "Why Accessibility Matters",
                  content:
                    "Web accessibility benefits everyone:\\n\\n**Who benefits:**\\n• People with disabilities (vision, hearing, motor, cognitive)\\n• Users with temporary limitations (broken arm, bright sunlight)\\n• Everyone using different devices or slow internet\\n\\n**Business benefits:**\\n• Legal compliance\\n• Larger audience reach\\n• Better SEO\\n• Improved usability for all",
                },
                {
                  title: "Essential Accessibility Features",
                  content:
                    "Key accessibility practices:\\n\\n**Semantic HTML:**\\n• Use proper headings for structure\\n• Lists for grouped content\\n• Semantic elements (nav, main, article)\\n\\n**Form accessibility:**\\n• Labels with every input\\n• Clear instructions and error messages\\n• Logical tab order\\n\\n**Images:**\\n• Meaningful alt text\\n• Empty alt='' for decorative images",
                },
                {
                  title: "ARIA Attributes",
                  content:
                    'ARIA provides extra accessibility information:\\n\\n**Common ARIA attributes:**\\n• `aria-label`: Accessible name\\n• `aria-describedby`: Additional description\\n• `aria-labelledby`: References labeling element\\n• `role`: Defines element purpose\\n\\n**Example:**\\n```html\\n<button aria-label="Close dialog">×</button>\\n<nav aria-label="Main navigation">...\\n```',
                },
                {
                  title: "Keyboard Navigation",
                  content:
                    "Ensure keyboard-only navigation works:\\n\\n**Essential features:**\\n• All interactive elements focusable\\n• Visible focus indicators\\n• Logical tab order\\n• Skip links for main content\\n\\n**Testing:**\\n• Tab through your entire page\\n• Use Enter/Space to activate elements\\n• Ensure you can reach everything",
                },
                {
                  title: "Accessibility Testing! ✅",
                  content:
                    "In the playground, test:\\n1. Navigate using only the Tab key\\n2. Notice proper form labels\\n3. See how aria-describedby provides context\\n4. Check meaningful alt text\\n5. Use browser dev tools to inspect accessibility\\n\\nAccessible websites are better websites for everyone!",
                },
              ],
            },
          },
          {
            id: 13,
            title: "Meta Tags - Information About Your Page",
            completed: false,
            playgroundCode:
              '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n    <meta charset="UTF-8">\\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n    <title>My Amazing Website - Learn Web Development</title>\\n    \\n    <meta name="description" content="Learn web development with our comprehensive HTML tutorials and hands-on examples.">\\n    <meta name="author" content="Your Name">\\n    <meta name="robots" content="index, follow">\\n    \\n    <!-- Open Graph for social media -->\\n    <meta property="og:title" content="Learn Web Development">\\n    <meta property="og:description" content="Master HTML, CSS, and JavaScript with our beginner-friendly tutorials.">\\n    <meta property="og:image" content="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200">\\n    \\n    <meta name="theme-color" content="#007bff">\\n</head>\\n<body>\\n    <h1>Welcome to My Website! 🌟</h1>\\n    <p>This page demonstrates proper meta tag usage.</p>\\n</body>\\n</html>',
            content: {
              title: "Meta Tags - Information About Your Page",
              description:
                "Meta tags are like your website's business card! They tell search engines and social media what your page is about. Master meta tags for professional, discoverable websites! 🏷️",
              sections: [
                {
                  title: "Essential Meta Tags",
                  content:
                    'Every webpage needs these meta tags:\\n\\n**Character encoding:**\\n`<meta charset="UTF-8">`\\n• Must be first in head section\\n• Supports all languages and emojis\\n\\n**Viewport (mobile-friendly):**\\n`<meta name="viewport" content="width=device-width, initial-scale=1.0">`\\n• Makes sites work on mobile devices\\n• Essential for responsive design',
                },
                {
                  title: "SEO Meta Tags",
                  content:
                    'Help search engines understand your content:\\n\\n**Page description:**\\n`<meta name="description" content="Page description">`\\n• Appears in search results\\n• 150-160 characters ideal\\n• Compelling copy that encourages clicks\\n\\n**Page title:**\\n`<title>Page Title - Site Name</title>`\\n• Shows in browser tab\\n• Most important SEO element',
                },
                {
                  title: "Social Media Meta Tags",
                  content:
                    'Control how links look when shared:\\n\\n**Open Graph (Facebook, LinkedIn):**\\n```html\\n<meta property="og:title" content="Page Title">\\n<meta property="og:description" content="Description">\\n<meta property="og:image" content="image-url">\\n```\\n\\n**Twitter Cards:**\\n```html\\n<meta name="twitter:card" content="summary_large_image">\\n<meta name="twitter:title" content="Page Title">\\n```',
                },
                {
                  title: "Additional Meta Tags",
                  content:
                    'Enhance user experience:\\n\\n**Theme color:**\\n`<meta name="theme-color" content="#007bff">`\\n• Colors browser interface on mobile\\n\\n**Author and robots:**\\n`<meta name="author" content="Your Name">`\\n`<meta name="robots" content="index, follow">`\\n\\nThese improve professionalism and functionality!',
                },
                {
                  title: "Meta Tags Practice! 🧪",
                  content:
                    "In the playground:\\n1. Change the title and see it in the browser tab\\n2. Update the description for your own page\\n3. Add your name as the author\\n4. Experiment with theme-color\\n5. Update Open Graph tags for social sharing\\n\\nMeta tags are invisible but incredibly powerful!",
                },
              ],
            },
          },
          {
            id: 14,
            title: "Audio and Video - Multimedia Content",
            completed: false,
            playgroundCode:
              '<h1>Multimedia Gallery 🎵🎬</h1>\\n\\n<h2>Audio Example:</h2>\\n<audio controls>\\n    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">\\n    <p>Your browser does not support audio. <a href="#">Download audio</a> instead.</p>\\n</audio>\\n\\n<h2>Video Example:</h2>\\n<video width="400" controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400">\\n    <source src="#" type="video/mp4">\\n    <p>Your browser does not support video. <a href="#">Download video</a> instead.</p>\\n</video>\\n\\n<h2>Embedded Video (YouTube):</h2>\\n<iframe width="400" height="225" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowfullscreen>\\n</iframe>',
            content: {
              title: "Audio and Video - Multimedia Content",
              description:
                "Bring your websites to life with multimedia! Modern HTML5 makes it easy to embed audio and video that works across all devices. 🎥",
              sections: [
                {
                  title: "HTML5 Audio Element",
                  content:
                    'The `<audio>` element embeds sound:\\n\\n```html\\n<audio controls>\\n  <source src="audio.mp3" type="audio/mpeg">\\n  Your browser doesn\'t support audio.\\n</audio>\\n```\\n\\n**Key attributes:**\\n• `controls` - Shows play/pause controls\\n• `autoplay` - Auto-starts (use carefully!)\\n• `loop` - Repeats audio\\n• `muted` - Starts muted',
                },
                {
                  title: "HTML5 Video Element",
                  content:
                    'The `<video>` element embeds video:\\n\\n```html\\n<video width="320" height="240" controls>\\n  <source src="movie.mp4" type="video/mp4">\\n  Your browser doesn\'t support video.\\n</video>\\n```\\n\\n**Key attributes:**\\n• `width/height` - Dimensions\\n• `controls` - Shows video controls\\n• `poster` - Image before video loads\\n• `muted` - Required for autoplay',
                },
                {
                  title: "Embedded Content",
                  content:
                    'Use `<iframe>` for external content:\\n\\n**YouTube embed:**\\n```html\\n<iframe src="https://www.youtube.com/embed/VIDEO_ID" \\n        allowfullscreen>\\n</iframe>\\n```\\n\\n**Other embeds:**\\n• Vimeo videos\\n• Google Maps\\n• Social media posts\\n\\n**Security:** Only embed trusted sources!',
                },
                {
                  title: "Accessibility Best Practices",
                  content:
                    "Make multimedia accessible:\\n\\n**For videos:**\\n• Include captions/subtitles\\n• Provide transcripts\\n• Don't autoplay with sound\\n• Use descriptive titles\\n\\n**For audio:**\\n• Provide transcripts\\n• Include descriptive text\\n• Offer alternative formats\\n\\nAccessible media serves all users!",
                },
                {
                  title: "Multimedia Practice Studio! 🎬",
                  content:
                    "In the playground:\\n1. Try the audio and video controls\\n2. Change video dimensions\\n3. Add your own YouTube video embed\\n4. Experiment with different attributes\\n5. Create a simple media gallery\\n\\nMultimedia makes websites engaging and interactive!",
                },
              ],
            },
          },
          {
            id: 15,
            title: "Building a Complete Web Page",
            completed: false,
            playgroundCode:
              '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n    <meta charset="UTF-8">\\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n    <title>Sarah Johnson - Web Developer</title>\\n    <meta name="description" content="Professional web developer portfolio showcasing HTML, CSS, and JavaScript projects.">\\n</head>\\n<body>\\n    <header>\\n        <h1>Sarah Johnson</h1>\\n        <nav>\\n            <ul>\\n                <li><a href="#about">About</a></li>\\n                <li><a href="#projects">Projects</a></li>\\n                <li><a href="#contact">Contact</a></li>\\n            </ul>\\n        </nav>\\n    </header>\\n    \\n    <main>\\n        <section id="about">\\n            <h2>About Me</h2>\\n            <p>I create beautiful, functional websites using modern web technologies.</p>\\n        </section>\\n        \\n        <section id="projects">\\n            <h2>My Projects</h2>\\n            <article>\\n                <h3>Portfolio Website</h3>\\n                <p>Responsive portfolio built with HTML, CSS, and JavaScript.</p>\\n            </article>\\n        </section>\\n        \\n        <section id="contact">\\n            <h2>Contact Me</h2>\\n            <form>\\n                <label for="name">Name:</label>\\n                <input type="text" id="name" name="name" required>\\n                \\n                <label for="email">Email:</label>\\n                <input type="email" id="email" name="email" required>\\n                \\n                <label for="message">Message:</label>\\n                <textarea id="message" name="message" required></textarea>\\n                \\n                <button type="submit">Send</button>\\n            </form>\\n        </section>\\n    </main>\\n    \\n    <footer>\\n        <p>&copy; 2024 Sarah Johnson. All rights reserved.</p>\\n    </footer>\\n</body>\\n</html>',
            content: {
              title: "Building a Complete Web Page",
              description:
                "Time to put it all together! Let's build a complete, professional webpage using all the HTML skills you've learned. This combines structure, content, and best practices! 🏗️",
              sections: [
                {
                  title: "Planning Your Page Structure",
                  content:
                    "Before coding, plan your structure:\\n\\n**Essential sections:**\\n• Header with navigation\\n• Main content area\\n• Footer with info\\n\\n**Semantic structure:**\\n```html\\n<header>\\n  <nav><!-- Navigation --></nav>\\n</header>\\n<main>\\n  <section><!-- Content --></section>\\n</main>\\n<footer><!-- Site info --></footer>\\n```",
                },
                {
                  title: "HTML Best Practices Applied",
                  content:
                    "Use everything you've learned:\\n\\n**Document structure:**\\n• Proper DOCTYPE and html lang\\n• Complete head with meta tags\\n• Semantic elements\\n\\n**Content organization:**\\n• Clear heading hierarchy\\n• Meaningful alt text\\n• Proper form structure\\n• Logical navigation",
                },
                {
                  title: "Content Strategy",
                  content:
                    "Create user-focused content:\\n\\n**Writing principles:**\\n• Clear, concise language\\n• Scannable text structure\\n• Strong calls-to-action\\n\\n**Content sections:**\\n• Hero: Clear value proposition\\n• About: Build credibility\\n• Work: Show examples\\n• Contact: Easy to reach",
                },
                {
                  title: "Quality Checklist",
                  content:
                    "Before launching, verify:\\n\\n**Technical:**\\n• Valid HTML\\n• Working links\\n• Proper alt text\\n• Form functionality\\n\\n**User experience:**\\n• Mobile-friendly\\n• Fast loading\\n• Easy navigation\\n• Accessible to all",
                },
                {
                  title: "Complete Page Challenge! 🚀",
                  content:
                    "In the playground:\\n1. Customize the portfolio for yourself\\n2. Add more sections and content\\n3. Include images with proper alt text\\n4. Test the form structure\\n5. Check the semantic HTML\\n\\nYou now have all the skills to build professional websites!",
                },
              ],
            },
          },
          {
            id: 16,
            title: "Divs, Spans & Generic Containers",
            completed: false,
            playgroundCode:
              '<h1>Container Elements Demo</h1>\\n\\n<div class="container" style="border: 2px solid blue; padding: 20px; margin: 10px;">\\n    <h2>This is a DIV Container</h2>\\n    <p>DIVs are <span style="background: yellow;">block-level</span> elements that take full width.</p>\\n    \\n    <div class="card" style="background: lightblue; padding: 15px; margin: 10px 0;">\\n        <h3>Card Example</h3>\\n        <p>This entire card is a div with styling applied.</p>\\n    </div>\\n</div>\\n\\n<p>This paragraph has <span style="color: red; font-weight: bold;">highlighted text</span> using a span element.</p>\\n\\n<div style="display: flex; gap: 10px;">\\n    <div style="padding: 20px; background: lightgreen; flex: 1; text-align: center;">Box 1</div>\\n    <div style="padding: 20px; background: lightcoral; flex: 1; text-align: center;">Box 2</div>\\n    <div style="padding: 20px; background: lightyellow; flex: 1; text-align: center;">Box 3</div>\\n</div>',
            content: {
              title: "Divs, Spans & Generic Containers",
              description:
                "Meet the building blocks of web layouts! Divs and spans are the Swiss Army knives of HTML - they don't have specific meaning but are incredibly useful for organizing and styling content. 📦",
              sections: [
                {
                  title: "The DIV Element - Your Layout Best Friend",
                  content:
                    "The `<div>` element is a generic container:\\n\\n**Key characteristics:**\\n• Block-level element (takes full width)\\n• No semantic meaning (purely for layout/styling)\\n• Can contain any other elements\\n• Essential for CSS layouts\\n\\n**Common uses:**\\n• Page sections and layout containers\\n• Cards and component wrappers\\n• Styling groups\\n• Grid and flexbox containers",
                },
                {
                  title: "The SPAN Element - Inline Styling Hero",
                  content:
                    "The `<span>` element is for styling parts of text:\\n\\n**Key characteristics:**\\n• Inline element (flows with text)\\n• No semantic meaning\\n• Perfect for styling text portions\\n• Doesn't break text flow\\n\\n**Common uses:**\\n• Highlighting specific words\\n• Adding icons within text\\n• Styling parts of sentences\\n• Small decorative elements",
                },
                {
                  title: "DIV vs SPAN - When to Use Which",
                  content:
                    "Choose the right container:\\n\\n**Use DIV when you need:**\\n• Layout sections or containers\\n• Block-level grouping\\n• CSS grid or flexbox parents\\n• Component wrappers\\n\\n**Use SPAN when you need:**\\n• Inline styling\\n• Text highlighting\\n• Small icons or decorations\\n• Elements that flow with text",
                },
                {
                  title: "Semantic vs Generic Elements",
                  content:
                    'When to use semantic elements vs divs/spans:\\n\\n**Use semantic elements first:**\\n• `<header>` instead of `<div class="header">`\\n• `<nav>` instead of `<div class="navigation">`\\n• `<main>` instead of `<div class="main-content">`\\n\\n**Use div/span when:**\\n• No semantic element fits\\n• Purely for styling/layout\\n• Building complex layouts',
                },
                {
                  title: "Container Practice Lab! 🧪",
                  content:
                    "In the playground:\\n1. Add more content cards using divs\\n2. Use spans to highlight different words\\n3. Create layouts with flexbox containers\\n4. Build a simple grid using divs\\n5. Style specific words in sentences using spans\\n\\nContainers are the foundation of modern web layouts!",
                },
              ],
            },
          },
          {
            id: 17,
            title: "HTML Attributes & Classes",
            completed: false,
            playgroundCode:
              '<h1 id="main-title" class="page-heading">HTML Attributes Demo</h1>\\n\\n<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300" \\n     alt="Person coding on laptop" \\n     title="Click for tooltip" \\n     width="300" \\n     class="featured-image">\\n\\n<div class="container highlight" id="demo-section" data-theme="light">\\n    <h2>Multiple Attributes Example</h2>\\n    <p>This div has class, id, and data attributes.</p>\\n</div>\\n\\n<a href="https://example.com" target="_blank" class="external-link">Visit External Site</a>\\n\\n<p lang="en" class="intro-text">This paragraph is in English and has styling.</p>\\n\\n<button type="button" onclick="alert(\"Hello World!\")" class="btn primary">Click Me!</button>',
            content: {
              title: "HTML Attributes & Classes",
              description:
                "Attributes are like adjectives for HTML elements - they provide extra information and control! Classes and IDs help organize and style your content. Master these fundamentals! 🔧",
              sections: [
                {
                  title: "What Are HTML Attributes?",
                  content:
                    'Attributes provide additional information about elements:\\n\\n**Basic syntax:**\\n```html\\n<element attribute="value">Content</element>\\n```\\n\\n**Key points:**\\n• Written in the opening tag\\n• Use quotes around values\\n• Multiple attributes separated by spaces\\n• Case-insensitive but lowercase is standard',
                },
                {
                  title: "Universal Attributes",
                  content:
                    'These work on any HTML element:\\n\\n• **id**: Unique identifier (`id="header"`)\\n• **class**: CSS styling group (`class="button primary"`)\\n• **title**: Tooltip text (`title="Click for help"`)\\n• **lang**: Language (`lang="en"`)\\n• **style**: Inline CSS\\n• **data-***: Custom data storage',
                },
                {
                  title: "Classes vs IDs",
                  content:
                    "Understanding the difference:\\n\\n**Classes:**\\n• Can be reused on multiple elements\\n• Use for styling groups\\n• CSS selector: `.classname`\\n• Multiple classes per element\\n\\n**IDs:**\\n• Must be unique on the page\\n• Use for specific elements\\n• CSS selector: `#idname`\\n• Good for JavaScript targets",
                },
                {
                  title: "Element-Specific Attributes",
                  content:
                    "Different elements have special attributes:\\n\\n**Links (`<a>`):**\\n• `href`, `target`, `rel`\\n\\n**Images (`<img>`):**\\n• `src`, `alt`, `width`, `height`\\n\\n**Forms:**\\n• `type`, `name`, `required`, `placeholder`\\n\\n**Media:**\\n• `controls`, `autoplay`, `loop`",
                },
                {
                  title: "Attributes Practice Workshop! 🛠️",
                  content:
                    "In the playground:\\n1. Add more classes to different elements\\n2. Create unique IDs and reference them\\n3. Add title attributes for tooltips\\n4. Use data-* attributes for custom data\\n5. Experiment with different attribute combinations\\n\\nAttributes unlock the full power of HTML elements!",
                },
              ],
            },
          },
          {
            id: 18,
            title: "Character Entities & Special Symbols",
            completed: false,
            playgroundCode:
              "<h1>Special Characters & Symbols! ✨</h1>\\n\\n<h2>HTML Character Entities:</h2>\\n<p>Display HTML tags safely:</p>\\n<ul>\\n    <li>&lt;h1&gt;This shows HTML tags literally&lt;/h1&gt;</li>\\n    <li>&amp; - Ampersand symbol</li>\\n    <li>&quot;quoted text&quot; - Quote marks</li>\\n    <li>&copy; 2024 - Copyright symbol</li>\\n    <li>&reg; - Registered trademark</li>\\n    <li>&trade; - Trademark</li>\\n</ul>\\n\\n<h2>Common Symbols:</h2>\\n<p>&hearts; &spades; &clubs; &diams; - Card suits</p>\\n<p>&larr; &uarr; &rarr; &darr; - Arrows</p>\\n<p>&frac12; &frac14; &frac34; - Fractions</p>\\n<p>&plusmn; &times; &divide; - Math symbols</p>\\n\\n<h2>Spaces and Dashes:</h2>\\n<p>Regular space vs&nbsp;&nbsp;&nbsp;non-breaking&nbsp;spaces</p>\\n<p>Em&mdash;dash and en&ndash;dash examples</p>",
            content: {
              title: "Character Entities & Special Symbols",
              description:
                "HTML character entities let you display special characters safely! These are essential for showing symbols that would otherwise break your code or not display correctly. ⚡",
              sections: [
                {
                  title: "Why Character Entities?",
                  content:
                    'Some characters need special treatment:\\n\\n**Problem characters:**\\n• `<` and `>` - Look like HTML tags\\n• `&` - Starts HTML entities\\n• `"` and `\'` - Used for attributes\\n\\n**The solution:**\\nEntities represent them safely:\\n• `&lt;` for `<`\\n• `&gt;` for `>`\\n• `&amp;` for `&`\\n• `&quot;` for `"`',
                },
                {
                  title: "Essential Entities",
                  content:
                    'Most important entities to know:\\n\\n**HTML-safe characters:**\\n• `&lt;` → < (less than)\\n• `&gt;` → > (greater than)\\n• `&amp;` → & (ampersand)\\n• `&quot;` → " (quote)\\n\\n**Common symbols:**\\n• `&copy;` → © (copyright)\\n• `&reg;` → ® (registered)\\n• `&trade;` → ™ (trademark)\\n• `&nbsp;` → non-breaking space',
                },
                {
                  title: "Useful Symbol Entities",
                  content:
                    "Entities for special symbols:\\n\\n**Math symbols:**\\n• `&times;` → × (multiply)\\n• `&divide;` → ÷ (divide)\\n• `&plusmn;` → ± (plus/minus)\\n• `&frac12;` → ½ (one half)\\n\\n**Arrows and shapes:**\\n• `&larr;` → ← (left arrow)\\n• `&rarr;` → → (right arrow)\\n• `&hearts;` → ♥ (heart)\\n• `&spades;` → ♠ (spade)",
                },
                {
                  title: "Numeric Character References",
                  content:
                    "Use numbers for any character:\\n\\n**Decimal format:**\\n• `&#169;` → © (copyright)\\n• `&#8364;` → € (euro)\\n• `&#8482;` → ™ (trademark)\\n\\n**Hexadecimal format:**\\n• `&#x00A9;` → © (copyright)\\n• `&#x20AC;` → € (euro)\\n\\nUse these for characters without named entities!",
                },
                {
                  title: "Special Characters Practice! 🎯",
                  content:
                    "In the playground:\\n1. Display HTML tags as text using entities\\n2. Add copyright and trademark symbols\\n3. Use non-breaking spaces for better control\\n4. Try different arrow and math symbols\\n5. Experiment with numeric character codes\\n\\nEntities ensure your text displays correctly everywhere!",
                },
              ],
            },
          },
          {
            id: 19,
            title: "Comments - Notes for Developers",
            completed: false,
            playgroundCode:
              '<!-- This is an HTML comment - invisible to users -->\\n<h1>Understanding HTML Comments</h1>\\n\\n<!-- \\n    Multi-line comments are useful for\\n    longer explanations and notes\\n-->\\n\\n<div class=\"header\">\\n    <!-- TODO: Add company logo here -->\\n    <h2>Welcome to My Website</h2>\\n    \\n    <!-- Navigation menu - will be added later -->\\n    <!-- <nav>\\n        <ul>\\n            <li><a href=\"#\">Home</a></li>\\n            <li><a href=\"#\">About</a></li>\\n        </ul>\\n    </nav> -->\\n</div>\\n\\n<!-- Main Content Section -->\\n<main>\\n    <p>This content is visible to users.</p>\\n    \\n    <!-- FIXME: Update this text with real content -->\\n    <p>Placeholder text that needs to be replaced.</p>\\n    \\n    <!-- NOTE: Check with designer about color scheme -->\\n    <section style=\"background: lightblue; padding: 20px;\">\\n        <h3>Featured Section</h3>\\n        <p>Important information goes here.</p>\\n    </section>\\n</main>\\n\\n<!-- \\n    Development reminders:\\n    - Test on different browsers\\n    - Optimize images for faster loading\\n    - Add proper alt text to all images\\n    - Consider accessibility improvements\\n-->',
            content: {
              title: "Comments - Notes for Developers",
              description:
                "HTML comments are like sticky notes in your code! They help you and other developers understand what's happening, plan changes, and organize complex projects. 📝",
              sections: [
                {
                  title: "HTML Comment Syntax",
                  content:
                    "Comments are invisible to users but valuable to developers:\\n\\n**Basic syntax:**\\n```html\\n<!-- This is a comment -->\\n```\\n\\n**Multi-line comments:**\\n```html\\n<!-- \\n    This is a longer comment\\n    spanning multiple lines\\n-->\\n```\\n\\n**Key rules:**\\n• Start with `<!--` and end with `-->`\\n• Content is completely ignored by browsers\\n• Cannot be nested inside each other",
                },
                {
                  title: "When to Use Comments",
                  content:
                    "Comments serve many purposes:\\n\\n**Documentation:**\\n• Explain complex sections\\n• Note the purpose of code blocks\\n• Provide context for future developers\\n\\n**Organization:**\\n• Mark different page sections\\n• Create visual separators\\n• Label major components\\n\\n**Planning:**\\n• Note future improvements (TODO)\\n• Mark temporary solutions (FIXME)\\n• Plan upcoming features",
                },
                {
                  title: "Comment Best Practices",
                  content:
                    "Write helpful, professional comments:\\n\\n**Good practices:**\\n• Keep comments up to date\\n• Be clear and concise\\n• Explain 'why', not just 'what'\\n• Use consistent formatting\\n\\n**Common patterns:**\\n```html\\n<!-- TODO: Add mobile menu -->\\n<!-- FIXME: Fix alignment issue -->\\n<!-- NOTE: Check with client -->\\n<!-- HACK: Temporary workaround -->\\n```",
                },
                {
                  title: "Temporarily Disabling Code",
                  content:
                    'Comments can hide code without deleting:\\n\\n**Commenting out code:**\\n```html\\n<!-- Temporarily hidden\\n<div class="promo-banner">\\n    <p>Special offer!</p>\\n</div>\\n-->\\n```\\n\\n**Sectioning large files:**\\n```html\\n<!-- ========== HEADER ========== -->\\n<!-- ========== MAIN ========== -->\\n<!-- ========== FOOTER ========== -->\\n```\\n\\nThis helps during development and debugging!',
                },
                {
                  title: "Comments Practice Workshop! 💭",
                  content:
                    "In the playground:\\n1. Add comments explaining different sections\\n2. Use comments to temporarily hide content\\n3. Create TODO notes for future improvements\\n4. Practice multi-line comment formatting\\n5. Try commenting out entire code blocks\\n\\nGood comments make code maintenance much easier for everyone!",
                },
              ],
            },
          },
          {
            id: 20,
            title: "Inline vs Block Elements",
            completed: false,
            playgroundCode:
              '<h1>Inline vs Block Elements Demo</h1>\\n\\n<h2>Block Elements (Full Width):</h2>\\n<div style=\"border: 2px solid red; margin: 5px; padding: 10px;\">Block DIV - takes full width</div>\\n<div style=\"border: 2px solid red; margin: 5px; padding: 10px;\">Another Block DIV - starts on new line</div>\\n<p style=\"border: 2px solid blue; margin: 5px; padding: 10px;\">Block Paragraph</p>\\n<h3 style=\"border: 2px solid green; margin: 5px; padding: 10px;\">Block Heading</h3>\\n\\n<h2>Inline Elements (Flow with Text):</h2>\\n<p>This paragraph contains \\n<span style=\"border: 2px solid red; padding: 2px;\">inline span</span> and \\n<a href=\"#\" style=\"border: 2px solid blue; padding: 2px;\">inline link</a> and \\n<strong style=\"border: 2px solid green; padding: 2px;\">inline bold</strong> and \\n<em style=\"border: 2px solid purple; padding: 2px;\">inline italic</em> that all flow together.</p>\\n\\n<h2>Mixed Example:</h2>\\n<div style=\"border: 2px solid orange; padding: 15px; margin: 10px;\">\\n    <p>This is a <strong>block paragraph</strong> inside a <em>block div</em>.</p>\\n    <p>It contains <span style=\"background: yellow;\">inline spans</span> and <a href=\"#\">inline links</a> that flow with text.</p>\\n</div>',
            content: {
              title: "Inline vs Block Elements",
              description:
                "Understanding element behavior is crucial for web layout! This fundamental concept affects how elements display and position on your webpage. 📐",
              sections: [
                {
                  title: "Block Elements - Full Width Containers",
                  content:
                    "Block elements stack vertically like building blocks:\\n\\n**Characteristics:**\\n• Take up full width available\\n• Start on a new line\\n• Push next element to new line\\n• Can contain other elements\\n• Width and height controllable with CSS\\n\\n**Common block elements:**\\n• `<div>`, `<p>`, `<h1>`-`<h6>`\\n• `<ul>`, `<ol>`, `<li>`\\n• `<header>`, `<nav>`, `<main>`, `<footer>`",
                },
                {
                  title: "Inline Elements - Flow with Text",
                  content:
                    "Inline elements flow within text like words in sentences:\\n\\n**Characteristics:**\\n• Only take width of their content\\n• Flow with surrounding text\\n• Don't start on new lines\\n• Cannot contain block elements\\n• Width/height determined by content\\n\\n**Common inline elements:**\\n• `<span>`, `<a>`, `<img>`\\n• `<strong>`, `<em>`, `<code>`\\n• `<small>`, `<sub>`, `<sup>`",
                },
                {
                  title: "Inline-Block - Best of Both Worlds",
                  content:
                    "CSS can change element behavior:\\n\\n**display: inline-block**\\n• Flows inline like inline elements\\n• Accepts width/height like block elements\\n• Great for navigation menus\\n• Useful for button groups\\n\\n**display: block**\\n• Forces inline elements to behave like block\\n\\n**display: inline**\\n• Forces block elements to behave inline",
                },
                {
                  title: "Layout Implications",
                  content:
                    "Understanding behavior affects design decisions:\\n\\n**Block element uses:**\\n• Page sections and containers\\n• Layout structure\\n• Content that needs full width\\n• When you need precise sizing\\n\\n**Inline element uses:**\\n• Text formatting within paragraphs\\n• Links within sentences\\n• Small UI elements\\n• Content flowing with text",
                },
                {
                  title: "Element Behavior Experiment! 🔬",
                  content:
                    "In the playground, observe:\\n1. How block elements stack vertically\\n2. How inline elements flow with text\\n3. The borders showing element boundaries\\n4. Different spacing and positioning\\n5. How elements interact with each other\\n\\nUnderstanding element behavior is fundamental to CSS layout!",
                },
              ],
            },
          },
          {
            id: 21,
            title: "Form Input Types & Validation",
            completed: false,
            playgroundCode:
              '<h1>Modern Form Inputs Demo 🚀</h1>\\n\\n<form style=\"max-width: 500px; padding: 20px; border: 1px solid #ccc; border-radius: 10px;\">\\n    <h2>Try Different Input Types:</h2>\\n    \\n    <label for=\"text-input\">Text Input:</label><br>\\n    <input type=\"text\" id=\"text-input\" placeholder=\"Enter your name\" required><br><br>\\n    \\n    <label for=\"email-input\">Email Input:</label><br>\\n    <input type=\"email\" id=\"email-input\" placeholder=\"you@example.com\" required><br><br>\\n    \\n    <label for=\"date-input\">Date Input:</label><br>\\n    <input type=\"date\" id=\"date-input\"><br><br>\\n    \\n    <label for=\"number-input\">Number Input:</label><br>\\n    <input type=\"number\" id=\"number-input\" min=\"1\" max=\"100\" placeholder=\"1-100\"><br><br>\\n    \\n    <label for=\"range-input\">Range Slider:</label><br>\\n    <input type=\"range\" id=\"range-input\" min=\"0\" max=\"100\" value=\"50\"><br><br>\\n    \\n    <label for=\"color-input\">Color Picker:</label><br>\\n    <input type=\"color\" id=\"color-input\" value=\"#3498db\"><br><br>\\n    \\n    <label for=\"file-input\">File Upload:</label><br>\\n    <input type=\"file\" id=\"file-input\" accept=\".jpg,.png,.pdf\"><br><br>\\n    \\n    <label for=\"search-input\">Search Input:</label><br>\\n    <input type=\"search\" id=\"search-input\" placeholder=\"Search here...\"><br><br>\\n    \\n    <input type=\"submit\" value=\"Submit Form\" style=\"background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px;\">\\n</form>',
            content: {
              title: "Form Input Types & Validation",
              description:
                "HTML5 revolutionized forms with powerful input types and built-in validation! Discover specialized inputs and learn to ensure users enter valid data. 🎯",
              sections: [
                {
                  title: "Modern HTML5 Input Types",
                  content:
                    'HTML5 introduced specialized input types:\\n\\n**Communication inputs:**\\n• `type="email"` - Email validation\\n• `type="tel"` - Phone numbers\\n• `type="url"` - Web addresses\\n\\n**Date and time:**\\n• `type="date"` - Date picker\\n• `type="time"` - Time picker\\n• `type="datetime-local"` - Date + time\\n\\n**Interactive inputs:**\\n• `type="range"` - Slider control\\n• `type="color"` - Color picker\\n• `type="file"` - File upload',
                },
                {
                  title: "Input Validation Attributes",
                  content:
                    "Control what users can enter:\\n\\n**Universal attributes:**\\n• `required` - Field must be filled\\n• `placeholder` - Hint text\\n• `readonly` - Can't be edited\\n• `disabled` - Can't be used\\n\\n**Text validation:**\\n• `minlength/maxlength` - Character limits\\n• `pattern` - Custom validation with regex\\n\\n**Number validation:**\\n• `min/max` - Value limits\\n• `step` - Increment size",
                },
                {
                  title: "File Upload and Advanced Features",
                  content:
                    'Handle complex input types:\\n\\n**File inputs:**\\n```html\\n<input type="file" \\n       accept=".pdf,.jpg,.png" \\n       multiple>\\n```\\n• `accept` - Limit file types\\n• `multiple` - Allow multiple files\\n\\n**Search inputs:**\\n```html\\n<input type="search" \\n       placeholder="Search...">\\n```\\n• Often includes clear button\\n• Better mobile experience',
                },
                {
                  title: "Form Validation Best Practices",
                  content:
                    "Create user-friendly validation:\\n\\n**HTML5 validation:**\\n• Automatic error messages\\n• Prevents invalid form submission\\n• Works without JavaScript\\n• Great user experience\\n\\n**Accessibility:**\\n• Always use proper labels\\n• Provide clear error messages\\n• Don't rely only on color\\n• Test with screen readers\\n\\n**Progressive enhancement:**\\nStart with HTML validation, enhance with CSS and JavaScript!",
                },
                {
                  title: "Interactive Forms Challenge! 🎮",
                  content:
                    "In the playground:\\n1. Try submitting with empty required fields\\n2. Enter invalid email formats and see validation\\n3. Use the color picker and range slider\\n4. Try the date picker on different devices\\n5. Upload different file types\\n6. Notice specialized mobile keyboards\\n\\nModern form inputs make data collection powerful and intuitive!",
                },
              ],
            },
          },
          {
            id: 22,
            title: "Advanced HTML Features",
            completed: false,
            playgroundCode:
              '<h1>Advanced HTML Features</h1>\\n\\n<details>\\n    <summary>Click to expand this section</summary>\\n    <p>This content is hidden by default and can be expanded!</p>\\n    <ul>\\n        <li>Great for FAQ sections</li>\\n        <li>Reduces page clutter</li>\\n        <li>Native browser support</li>\\n    </ul>\\n</details>\\n\\n<br>\\n\\n<progress value=\"75\" max=\"100\">75%</progress>\\n<p>Loading progress: 75%</p>\\n\\n<meter value=\"6\" min=\"0\" max=\"10\">6 out of 10</meter>\\n<p>Rating: 6 out of 10 stars</p>\\n\\n<br>\\n\\n<dialog id=\"demo-dialog\" style=\"padding: 20px; border-radius: 10px; border: 2px solid #ccc;\">\\n    <h3>This is a Dialog</h3>\\n    <p>Dialogs are great for modals and popups!</p>\\n    <button onclick=\"alert(\\\"Dialog closed\\\")\">Close Dialog</button>\\n</dialog>\\n\\n<button onclick=\"alert(\\\"Dialog opened\\\")\">Open Dialog</button>\\n\\n<br><br>\\n\\n<output for=\"range-demo\" id=\"output-demo\">50</output>\\n<input type=\"range\" id=\"range-demo\" min=\"0\" max=\"100\" value=\"50\" \\n       oninput=\"document.getElementById(\\\"output-demo\\\").textContent = this.value\">\\n<p>The output element shows calculated results!</p>',
            content: {
              title: "Advanced HTML Features",
              description:
                "Explore powerful HTML5 features that add interactivity and functionality! These advanced elements can enhance user experience without JavaScript. 🚀",
              sections: [
                {
                  title: "Details and Summary - Collapsible Content",
                  content:
                    "Create expandable sections with native HTML:\\n\\n```html\\n<details>\\n  <summary>Click to expand</summary>\\n  <p>Hidden content here...</p>\\n</details>\\n```\\n\\n**Perfect for:**\\n• FAQ sections\\n• Long content organization\\n• Progressive disclosure\\n• Reducing page clutter\\n\\n**Benefits:**\\n• Works without JavaScript\\n• Accessible by default\\n• Keyboard navigation support",
                },
                {
                  title: "Progress and Meter Elements",
                  content:
                    'Show progress and measurements:\\n\\n**Progress element:**\\n```html\\n<progress value="75" max="100">75%</progress>\\n```\\n• Shows completion progress\\n• Great for loading bars\\n• Form submission progress\\n\\n**Meter element:**\\n```html\\n<meter value="6" min="0" max="10">6/10</meter>\\n```\\n• Shows scalar measurements\\n• Ratings, scores, percentages\\n• Disk usage, temperatures',
                },
                {
                  title: "Dialog Element - Native Modals",
                  content:
                    'Create modal dialogs with HTML:\\n\\n```html\\n<dialog id="my-dialog">\\n  <h3>Dialog Title</h3>\\n  <p>Dialog content...</p>\\n  <button>Close</button>\\n</dialog>\\n```\\n\\n**JavaScript to control:**\\n• `dialog.showModal()` - Show as modal\\n• `dialog.show()` - Show as regular dialog\\n• `dialog.close()` - Close dialog\\n\\n**Benefits:**\\n• Built-in accessibility\\n• Proper focus management\\n• ESC key support',
                },
                {
                  title: "Output Element - Calculated Results",
                  content:
                    'Display calculated or user-generated results:\\n\\n```html\\n<output for="input1 input2">Result</output>\\n```\\n\\n**Use cases:**\\n• Calculator results\\n• Form field calculations\\n• Real-time updates\\n• Interactive demonstrations\\n\\n**The `for` attribute:**\\nReferences the IDs of related inputs that contribute to the calculation.',
                },
                {
                  title: "Advanced Features Workshop! 🔬",
                  content:
                    "In the playground, try:\\n1. Expand and collapse the details section\\n2. Watch the progress bar and meter\\n3. Open and close the dialog modal\\n4. Move the range slider to see output update\\n5. Create your own collapsible FAQ\\n6. Build a simple calculator with output\\n\\nThese features add powerful functionality with minimal code!",
                },
              ],
            },
          },
          {
            id: 23,
            title: "Performance & Best Practices",
            completed: false,
            playgroundCode:
              '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <!-- Essential meta tags come first -->\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    \\n    <!-- Optimized title and description -->\\n    <title>Fast Loading Website - Performance Demo</title>\\n    <meta name=\"description\" content=\"Demonstration of HTML performance best practices for faster loading websites.\">\\n    \\n    <!-- Preload critical resources -->\\n    <link rel=\"preload\" href=\"critical.css\" as=\"style\">\\n</head>\\n<body>\\n    <header>\\n        <h1>Performance-Optimized HTML</h1>\\n        <nav aria-label=\"Main navigation\">\\n            <ul>\\n                <li><a href=\"#performance\">Performance Tips</a></li>\\n                <li><a href=\"#optimization\">Optimization</a></li>\\n            </ul>\\n        </nav>\\n    </header>\\n    \\n    <main>\\n        <section id=\"performance\">\\n            <h2>HTML Performance Best Practices</h2>\\n            \\n            <!-- Optimized images with lazy loading -->\\n            <img src=\"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80\" \\n                 alt=\"Person coding on laptop showing performance optimization\" \\n                 width=\"800\" height=\"450\" \\n                 loading=\"lazy\">\\n            \\n            <p>This page demonstrates performance optimizations:</p>\\n            <ul>\\n                <li>Minimal, clean HTML structure</li>\\n                <li>Proper image optimization with lazy loading</li>\\n                <li>Semantic markup for better accessibility</li>\\n                <li>Optimized meta tags for SEO</li>\\n            </ul>\\n        </section>\\n        \\n        <section id=\"optimization\">\\n            <h2>Code Quality Checklist</h2>\\n            <ol>\\n                <li>Valid HTML markup ✅</li>\\n                <li>Semantic element usage ✅</li>\\n                <li>Proper heading hierarchy ✅</li>\\n                <li>Accessible form labels ✅</li>\\n                <li>Optimized images ✅</li>\\n                <li>Clean, readable code ✅</li>\\n            </ol>\\n        </section>\\n    </main>\\n    \\n    <footer>\\n        <p>&copy; 2024 Performance Demo. Built with optimized HTML!</p>\\n    </footer>\\n</body>\\n</html>',
            content: {
              title: "Performance & Best Practices",
              description:
                "Create fast, efficient websites with HTML best practices! Learn optimization techniques that improve loading speed, SEO, and user experience. ⚡",
              sections: [
                {
                  title: "HTML Performance Fundamentals",
                  content:
                    "Optimize HTML for speed and efficiency:\\n\\n**Key principles:**\\n• Minimize HTML file size\\n• Reduce unnecessary elements\\n• Use semantic markup correctly\\n• Optimize images and media\\n• Implement lazy loading\\n\\n**Performance benefits:**\\n• Faster page loading\\n• Better user experience\\n• Improved SEO rankings\\n• Lower bandwidth usage\\n• Better mobile performance",
                },
                {
                  title: "Image Optimization",
                  content:
                    'Images often slow down websites:\\n\\n**Optimization techniques:**\\n```html\\n<img src="image.jpg" \\n     alt="Description" \\n     width="800" height="600" \\n     loading="lazy">\\n```\\n\\n**Best practices:**\\n• Always specify width/height\\n• Use `loading="lazy"` for below-fold images\\n• Choose appropriate formats (WebP, JPEG, PNG)\\n• Compress images for web\\n• Use responsive images with srcset',
                },
                {
                  title: "Code Quality Standards",
                  content:
                    "Write clean, maintainable HTML:\\n\\n**Structure:**\\n• Consistent indentation\\n• Logical element nesting\\n• Proper closing of tags\\n• Meaningful class and ID names\\n\\n**Validation:**\\n• Use W3C HTML validator\\n• Check for accessibility issues\\n• Test across browsers\\n• Validate forms work correctly\\n\\n**Organization:**\\n• Group related elements\\n• Use comments for complex sections\\n• Keep files organized",
                },
                {
                  title: "SEO and Meta Optimization",
                  content:
                    "Optimize for search engines:\\n\\n**Essential meta tags:**\\n• Unique, descriptive titles\\n• Compelling meta descriptions\\n• Proper Open Graph tags\\n• Structured data markup\\n\\n**Content optimization:**\\n• Proper heading hierarchy\\n• Descriptive alt text\\n• Clean URL structures\\n• Fast loading times\\n• Mobile-friendly design",
                },
                {
                  title: "Performance Testing! 🚀",
                  content:
                    "In the playground, notice:\\n1. Clean, minimal HTML structure\\n2. Optimized images with lazy loading\\n3. Proper semantic markup\\n4. Efficient meta tag usage\\n5. Accessible navigation and content\\n\\nTest your own websites with:\\n• PageSpeed Insights\\n• Lighthouse audits\\n• HTML validators\\n• Accessibility checkers",
                },
              ],
            },
          },
          {
            id: 24,
            title: "HTML Project Planning & Structure",
            completed: false,
            playgroundCode:
              '<!-- Website Planning Template -->\\n<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>[Your Project] - [Main Keyword]</title>\\n    <meta name=\"description\" content=\"[150-160 character description of your project]\">\\n</head>\\n<body>\\n    <!-- Header with site identity and navigation -->\\n    <header>\\n        <h1>[Your Site Name]</h1>\\n        <nav aria-label=\"Main navigation\">\\n            <ul>\\n                <li><a href=\"#home\">Home</a></li>\\n                <li><a href=\"#about\">About</a></li>\\n                <li><a href=\"#services\">Services</a></li>\\n                <li><a href=\"#contact\">Contact</a></li>\\n            </ul>\\n        </nav>\\n    </header>\\n    \\n    <!-- Main content area -->\\n    <main>\\n        <!-- Hero/Introduction section -->\\n        <section id=\"home\">\\n            <h2>[Compelling Headline]</h2>\\n            <p>[Brief description of what you offer]</p>\\n            <a href=\"#contact\" class=\"cta-button\">Get Started</a>\\n        </section>\\n        \\n        <!-- About section -->\\n        <section id=\"about\">\\n            <h2>About [Your Business/Project]</h2>\\n            <p>[Your story, mission, or background]</p>\\n        </section>\\n        \\n        <!-- Services/Portfolio section -->\\n        <section id=\"services\">\\n            <h2>What We Offer</h2>\\n            <div class=\"services-grid\">\\n                <article>\\n                    <h3>Service 1</h3>\\n                    <p>Description of service</p>\\n                </article>\\n                <article>\\n                    <h3>Service 2</h3>\\n                    <p>Description of service</p>\\n                </article>\\n            </div>\\n        </section>\\n        \\n        <!-- Contact section -->\\n        <section id=\"contact\">\\n            <h2>Contact Us</h2>\\n            <form>\\n                <label for=\"name\">Name</label>\\n                <input type=\"text\" id=\"name\" name=\"name\" required>\\n                \\n                <label for=\"email\">Email</label>\\n                <input type=\"email\" id=\"email\" name=\"email\" required>\\n                \\n                <label for=\"message\">Message</label>\\n                <textarea id=\"message\" name=\"message\" required></textarea>\\n                \\n                <button type=\"submit\">Send Message</button>\\n            </form>\\n        </section>\\n    </main>\\n    \\n    <!-- Footer with additional info -->\\n    <footer>\\n        <p>&copy; 2024 [Your Name/Company]. All rights reserved.</p>\\n        <nav aria-label=\"Footer navigation\">\\n            <ul>\\n                <li><a href=\"#privacy\">Privacy Policy</a></li>\\n                <li><a href=\"#terms\">Terms of Service</a></li>\\n            </ul>\\n        </nav>\\n    </footer>\\n</body>\\n</html>',
            content: {
              title: "HTML Project Planning & Structure",
              description:
                "Learn to plan and structure HTML projects like a pro! Proper planning leads to better websites that are easier to build and maintain. 🏗️",
              sections: [
                {
                  title: "Project Planning Phase",
                  content:
                    "Before writing code, plan your project:\\n\\n**Define your goals:**\\n• What is the website's purpose?\\n• Who is your target audience?\\n• What actions should users take?\\n• What content do you need?\\n\\n**Create a sitemap:**\\n• List all pages needed\\n• Plan navigation structure\\n• Organize content hierarchy\\n• Consider user journey\\n\\n**Content strategy:**\\n• Write compelling headlines\\n• Plan your messaging\\n• Gather images and media\\n• Organize information logically",
                },
                {
                  title: "HTML Structure Best Practices",
                  content:
                    "Build a solid foundation:\\n\\n**Document structure:**\\n• Proper DOCTYPE and html tag\\n• Complete head section\\n• Semantic body structure\\n• Logical heading hierarchy\\n\\n**Page sections:**\\n• Header with site identity\\n• Navigation for user movement\\n• Main content area\\n• Footer with additional info\\n\\n**Content organization:**\\n• Use semantic elements appropriately\\n• Group related content in sections\\n• Create clear information hierarchy\\n• Ensure logical tab order",
                },
                {
                  title: "Common Website Patterns",
                  content:
                    "Learn standard website structures:\\n\\n**Business website:**\\n• Hero section with value prop\\n• About section with credibility\\n• Services/products showcase\\n• Testimonials or portfolio\\n• Contact information\\n\\n**Portfolio website:**\\n• Personal introduction\\n• Skills and expertise\\n• Project showcase\\n• Work process or approach\\n• Contact and social links\\n\\n**Blog website:**\\n• Recent posts listing\\n• Categories and tags\\n• About the author\\n• Archive or search\\n• Comment sections",
                },
                {
                  title: "Development Workflow",
                  content:
                    "Follow a systematic approach:\\n\\n**1. Planning phase:**\\n• Define requirements\\n• Create wireframes\\n• Plan content structure\\n• Choose technology stack\\n\\n**2. Development phase:**\\n• Write HTML structure first\\n• Add content and test\\n• Validate markup regularly\\n• Test across devices\\n\\n**3. Launch phase:**\\n• Final accessibility check\\n• Performance optimization\\n• SEO verification\\n• Cross-browser testing",
                },
                {
                  title: "Project Planning Workshop! 📋",
                  content:
                    "Use the playground template to:\\n1. Plan your own website project\\n2. Replace placeholder content with your ideas\\n3. Customize the structure for your needs\\n4. Add or remove sections as appropriate\\n5. Consider your target audience\\n6. Plan your content strategy\\n\\nGood planning saves time and creates better websites!",
                },
              ],
            },
          },
          {
            id: 25,
            title: "Final Project & HTML Mastery",
            completed: false,
            playgroundCode:
              '<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>[Your Name] - Web Developer Portfolio</title>\\n    <meta name=\"description\" content=\"Professional web developer portfolio showcasing HTML, CSS, and JavaScript projects. Available for freelance work.\">\\n    <meta name=\"author\" content=\"[Your Name]\">\\n    \\n    <!-- Open Graph tags for social sharing -->\\n    <meta property=\"og:title\" content=\"[Your Name] - Web Developer\">\\n    <meta property=\"og:description\" content=\"Professional web developer creating amazing digital experiences.\">\\n    <meta property=\"og:type\" content=\"website\">\\n</head>\\n<body>\\n    <header>\\n        <h1>[Your Name]</h1>\\n        <p>Web Developer & Designer</p>\\n        \\n        <nav aria-label=\"Main navigation\">\\n            <ul>\\n                <li><a href=\"#about\">About</a></li>\\n                <li><a href=\"#skills\">Skills</a></li>\\n                <li><a href=\"#projects\">Projects</a></li>\\n                <li><a href=\"#contact\">Contact</a></li>\\n            </ul>\\n        </nav>\\n    </header>\\n    \\n    <main>\\n        <section id=\"about\">\\n            <h2>About Me</h2>\\n            <p>I am a passionate web developer who loves creating beautiful, functional websites. I specialize in HTML, CSS, and JavaScript, and I am always learning new technologies.</p>\\n            <p>My goal is to help businesses and individuals establish their online presence with clean, accessible, and performant websites.</p>\\n        </section>\\n        \\n        <section id=\"skills\">\\n            <h2>Skills & Technologies</h2>\\n            <ul>\\n                <li><strong>HTML5</strong> - Semantic markup, accessibility, forms</li>\\n                <li><strong>CSS3</strong> - Responsive design, animations, modern layouts</li>\\n                <li><strong>JavaScript</strong> - Interactive functionality, API integration</li>\\n                <li><strong>Web Performance</strong> - Optimization, best practices</li>\\n                <li><strong>Accessibility</strong> - WCAG compliance, inclusive design</li>\\n            </ul>\\n        </section>\\n        \\n        <section id=\"projects\">\\n            <h2>Featured Projects</h2>\\n            \\n            <article>\\n                <h3>Personal Portfolio Website</h3>\\n                <p>A responsive portfolio website built with semantic HTML5, modern CSS, and progressive enhancement. Features include dark mode, smooth animations, and full accessibility support.</p>\\n                <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript</p>\\n            </article>\\n            \\n            <article>\\n                <h3>Local Business Website</h3>\\n                <p>Complete website redesign for a local restaurant featuring online menu, reservation system, and mobile-first responsive design.</p>\\n                <p><strong>Technologies:</strong> HTML5, CSS Grid, Contact Forms</p>\\n            </article>\\n            \\n            <article>\\n                <h3>Educational Platform</h3>\\n                <p>Interactive learning platform with progress tracking, multimedia content, and accessible design for all users.</p>\\n                <p><strong>Technologies:</strong> Semantic HTML, Advanced Forms, Media Elements</p>\\n            </article>\\n        </section>\\n        \\n        <section id=\"contact\">\\n            <h2>Get in Touch</h2>\\n            <p>I am always interested in new opportunities and collaborations. Let us work together to bring your ideas to life!</p>\\n            \\n            <form>\\n                <label for=\"name\">Your Name</label>\\n                <input type=\"text\" id=\"name\" name=\"name\" required>\\n                \\n                <label for=\"email\">Email Address</label>\\n                <input type=\"email\" id=\"email\" name=\"email\" required>\\n                \\n                <label for=\"project\">Project Type</label>\\n                <select id=\"project\" name=\"project\">\\n                    <option value=\"\">Select project type...</option>\\n                    <option value=\"website\">New Website</option>\\n                    <option value=\"redesign\">Website Redesign</option>\\n                    <option value=\"maintenance\">Website Maintenance</option>\\n                    <option value=\"consultation\">Consultation</option>\\n                </select>\\n                \\n                <label for=\"message\">Project Details</label>\\n                <textarea id=\"message\" name=\"message\" rows=\"5\" required></textarea>\\n                \\n                <button type=\"submit\">Send Message</button>\\n            </form>\\n        </section>\\n    </main>\\n    \\n    <footer>\\n        <p>&copy; 2024 [Your Name]. Built with semantic HTML5 and lots of passion! 🚀</p>\\n        <nav aria-label=\"Social links\">\\n            <ul>\\n                <li><a href=\"#\" aria-label=\"GitHub Profile\">GitHub</a></li>\\n                <li><a href=\"#\" aria-label=\"LinkedIn Profile\">LinkedIn</a></li>\\n                <li><a href=\"#\" aria-label=\"Twitter Profile\">Twitter</a></li>\\n            </ul>\\n        </nav>\\n    </footer>\\n</body>\\n</html>',
            content: {
              title: "Final Project & HTML Mastery",
              description:
                "Congratulations on completing the HTML Fundamentals course! 🎉 Time to showcase everything you've learned by building your own professional portfolio website. You now have all the skills to create amazing web experiences!",
              sections: [
                {
                  title: "Your HTML Journey - What You've Mastered",
                  content:
                    "Look how far you've come! You now understand:\\n\\n**Core HTML Skills:**\\n✅ Document structure and semantic markup\\n✅ Forms, tables, and multimedia content\\n✅ Accessibility and inclusive design\\n✅ SEO optimization and meta tags\\n✅ Modern HTML5 features and best practices\\n\\n**Professional Skills:**\\n✅ Code organization and validation\\n✅ Performance optimization\\n✅ Cross-browser compatibility\\n✅ Project planning and structure\\n✅ Industry best practices",
                },
                {
                  title: "Final Project Requirements",
                  content:
                    "Build a complete portfolio website that demonstrates your skills:\\n\\n**Required Elements:**\\n• Proper HTML5 document structure\\n• Semantic markup throughout\\n• Responsive meta tags\\n• Navigation with internal links\\n• Contact form with validation\\n• Multimedia content (images/video)\\n• Accessibility features\\n\\n**Bonus Features:**\\n• Advanced form inputs\\n• Social media meta tags\\n• Performance optimizations\\n• Creative use of HTML5 features",
                },
                {
                  title: "Beyond HTML - Your Next Steps",
                  content:
                    "You have a solid HTML foundation! Here's what to learn next:\\n\\n**Immediate next steps:**\\n• **CSS** - Style your HTML beautifully\\n• **Responsive Design** - Mobile-first layouts\\n• **JavaScript** - Add interactivity\\n• **Git/GitHub** - Version control\\n\\n**Advanced topics:**\\n• CSS Frameworks (Bootstrap, Tailwind)\\n• JavaScript Frameworks (React, Vue)\\n• Backend Development (Node.js, Python)\\n• Web Performance Optimization\\n• Progressive Web Apps",
                },
                {
                  title: "Professional Development Tips",
                  content:
                    "Continue growing as a web developer:\\n\\n**Build your portfolio:**\\n• Create diverse project types\\n• Document your learning process\\n• Show problem-solving skills\\n• Include live demos\\n\\n**Join the community:**\\n• Follow web development blogs\\n• Join developer forums and Discord\\n• Attend local meetups\\n• Contribute to open source\\n\\n**Keep learning:**\\n• Practice coding daily\\n• Build real projects\\n• Learn from other developers\\n• Stay updated with web standards",
                },
                {
                  title: "Congratulations! 🎓",
                  content:
                    "You've completed the comprehensive HTML Fundamentals course!\\n\\n**Final challenge:**\\n1. Customize the portfolio template with your own information\\n2. Add your personal projects and experiences\\n3. Include your contact information\\n4. Validate your HTML with W3C validator\\n5. Test accessibility with screen readers\\n6. Share your creation with others!\\n\\n**Remember:** You now have the foundation to build any website. The web is your canvas - go create something amazing!\\n\\n**Keep coding, keep learning, keep building!** 🚀",
                },
              ],
            },
          },
  ];

  // Lessons mapping for clean organization
  const LESSONS_BY_COURSE: Record<string, any[]> = {
    "course-1": HTML_LESSONS,
    "course-2": CSS_LESSONS,
    "course-3": ARDUINO_LESSONS,
  };

  const lessons = LESSONS_BY_COURSE[id ?? ""] ?? [];
  const currentLesson =
    lessons.find((lesson) => lesson.id === selectedLesson) || lessons[0];

  // Function to format content text
  const formatContent = (text: string) => {
    let formatted = text;

    // Convert **bold** to <strong>bold</strong>
    formatted = formatted.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold">$1</strong>',
    );

    // Convert `code` to <code>code</code>
    formatted = formatted.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>',
    );

    // Handle code blocks
    formatted = formatted.replace(
      /```html\\n([\s\S]*?)\\n```/g,
      '<pre class="bg-gray-50 p-3 rounded-lg overflow-x-auto my-3"><code class="text-sm font-mono">$1</code></pre>',
    );
    formatted = formatted.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-gray-50 p-3 rounded-lg overflow-x-auto my-3"><code class="text-sm font-mono">$1</code></pre>',
    );

    // Convert bullet points to proper list items
    formatted = formatted.replace(/^• (.+)$/gm, '<li class="mb-1">$1</li>');

    // Convert numbered lists
    formatted = formatted.replace(/^\d+\. (.+)$/gm, '<li class="mb-1">$1</li>');

    // Split into paragraphs - handle both \\n\\n and \n\n
    const paragraphs = formatted.split(/\\n\\n|\n\n/);
    const formattedParagraphs = paragraphs.map((paragraph) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return "";

      // Check if paragraph contains list items
      if (trimmed.includes("<li>")) {
        // Wrap list items in ul tags
        return '<ul class="list-disc ml-6 space-y-1 my-3">' + trimmed + "</ul>";
      } else if (trimmed.includes("<pre>")) {
        // Return code blocks as-is
        return trimmed;
      } else {
        // Regular paragraph - handle single line breaks too
        const cleanText = trimmed.replace(/\\n|\n/g, "<br>");
        return '<p class="mb-3 leading-relaxed">' + cleanText + "</p>";
      }
    });

    return formattedParagraphs.filter((p) => p).join("");
  };

  // Download code as HTML file
  const handleSave = () => {
    const fileName = `lesson-${selectedLesson}-${Date.now()}.html`;
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "File Downloaded!",
      description: `Your code has been saved as ${fileName}`,
    });
  };

  // Auto-grow textarea based on content
  const autoGrowTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const maxHeight = window.innerHeight * 0.7;
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  // Auto-resize iframe based on content
  const autoResizeIframe = () => {
    if (iframeRef.current && iframeRef.current.contentDocument) {
      const body = iframeRef.current.contentDocument.body;
      const html = iframeRef.current.contentDocument.documentElement;
      const height = Math.max(
        body?.scrollHeight || 0,
        html?.scrollHeight || 0,
        300
      );
      iframeRef.current.style.height = `${height}px`;
    }
  };

  // Auto-grow textarea when code changes
  useEffect(() => {
    autoGrowTextarea();
  }, [htmlCode]);

  // Auto-resize iframe when code changes
  useEffect(() => {
    const timer = setTimeout(() => {
      autoResizeIframe();
    }, 100);
    return () => clearTimeout(timer);
  }, [htmlCode]);

  // Update playground code when lesson changes (only if user hasn't edited)
  useEffect(() => {
    if (currentLesson && currentLesson.playgroundCode && !userHasEditedCode) {
      // Convert escaped newlines to actual newlines for the editor
      const cleanCode = currentLesson.playgroundCode
        .replace(/\\\\n/g, "\n") // Convert double-escaped newlines
        .replace(/\\n/g, "\n") // Convert single-escaped newlines
        .replace(/\\t/g, "\t"); // Convert tabs
      setHtmlCode(cleanCode);
    }
  }, [selectedLesson, currentLesson, userHasEditedCode]);

  // Reset the edited flag when lesson changes
  useEffect(() => {
    setUserHasEditedCode(false);
  }, [selectedLesson]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{t.course.loadingCourse}</p>
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
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {t.course.courseNotFound}
            </h1>
            <p className="text-gray-600">
              The course you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Get translated course content with proper type assertion
  const courseContent = (t.courseContent as any)[course.id];
  const displayTitle = courseContent?.title || course.title;
  const displayDescription = courseContent?.description || course.description;

  // Helper function to get translated lesson content
  const getTranslatedLessonContent = (lesson: any) => {
    if (!lesson) return null;
    
    // Determine course type based on course ID
    let courseType = '';
    if (course.id === 'course-1') courseType = 'html';
    else if (course.id === 'course-2') courseType = 'css';
    else if (course.id === 'course-3') courseType = 'arduino';
    
    // Get translated lesson content from translations
    const translatedContent = (t.lessonContent as any)?.[courseType]?.[lesson.id];
    
    // If translation exists and has content, use it; otherwise use original
    if (translatedContent && translatedContent.title) {
      return {
        ...lesson,
        content: {
          title: translatedContent.title,
          description: translatedContent.description,
          sections: translatedContent.sections
        }
      };
    }
    
    // Fallback to original lesson content
    return lesson;
  };

  // Get translated current lesson
  const translatedCurrentLesson = getTranslatedLessonContent(currentLesson);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navbar />

      {/* Course Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {displayTitle}
              </h1>
              <p className="mt-2 text-gray-600">{displayDescription}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary">{course.level}</Badge>
                <span className="text-sm text-gray-500">{course.duration}</span>
                <span className="text-sm text-gray-500">
                  {lessons.length} lessons
                </span>
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
                <h2 className="text-xl font-semibold mb-4">{t.course.courseLessons}</h2>
                <div className="space-y-3">
                  {lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedLesson === lesson.id
                          ? "bg-purple-100 border-purple-300 border-2"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
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
                          <p className="text-xs text-gray-500">
                            {t.course.lesson} {lesson.id}
                          </p>
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
                    <h2 className="text-xl font-semibold">{t.course.lessonContent}</h2>
                  </div>

                  {translatedCurrentLesson ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {translatedCurrentLesson.content.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {translatedCurrentLesson.content.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        {translatedCurrentLesson.content.sections.map(
                          (section: any, index: number) => (
                            <div
                              key={index}
                              className="border-l-4 border-purple-200 pl-4"
                            >
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {section.title}
                              </h4>
                              <div
                                className="text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: formatContent(section.content),
                                }}
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      {t.course.selectLesson}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Code Playground */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Code className="h-6 w-6 text-purple-600" />
                      <h2 className="text-xl font-semibold">
                        {t.course.interactivePlayground}
                      </h2>
                    </div>
                    <Button
                      onClick={handleSave}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      data-testid="button-save"
                    >
                      <Save className="h-4 w-4" />
                      {t.course.save}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {id === "course-3" ? t.course.arduinoCode : t.course.htmlCode}
                      </label>
                      <textarea
                        ref={textareaRef}
                        value={htmlCode}
                        onChange={(e) => {
                          setHtmlCode(e.target.value);
                          setUserHasEditedCode(true);
                        }}
                        className="w-full min-h-40 max-h-[70vh] p-3 border border-gray-300 rounded-lg font-mono text-sm overflow-y-auto focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder={id === "course-3" ? "Arduino code appears here..." : "Enter your HTML code here..."}
                        data-testid="textarea-html-code"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {id === "course-3" ? t.course.wiringDiagram : t.lesson.preview}
                      </label>
                      <div className="border border-gray-300 rounded-lg p-4 bg-white">
                        {id === "course-3" && translatedCurrentLesson?.wiringImage ? (
                          <img 
                            src={translatedCurrentLesson.wiringImage} 
                            alt="Wiring diagram" 
                            className="w-full h-auto rounded"
                            data-testid="img-wiring-diagram"
                          />
                        ) : (
                          <iframe
                            ref={iframeRef}
                            srcDoc={`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:system-ui,sans-serif;margin:8px;line-height:1.4;}</style></head><body>${htmlCode}</body></html>`}
                            className="w-full border-0"
                            title="HTML Preview"
                            data-testid="iframe-preview"
                            onLoad={autoResizeIframe}
                          />
                        )}
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

/*function getLessons(id: string) {
    return id === 'course-2' ? [
  { 
    id: 1, 
      title: "What is CSS? - Styling Your First Page", 
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
        }
      ] : [];
  } 

//export default function CourseDetail() {
  const { id } = useParams();

  if (!id) return <div>No course selected</div>;

  // ✅ now you are actually using getLessons
  const lessons = getLessons(id);
  return (
    <div>
      <h1>Course Detail</h1>
      {lessons.map(lesson => (
        <div key={lesson.id}>{lesson.title}</div>
      ))}
    </div>
  );
}*/
