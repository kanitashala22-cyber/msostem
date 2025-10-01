export const RESPONSIVE_LESSONS = [
  { 
    id: 1, 
    title: "Mobile-First Design Philosophy", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Mobile-first: Start with mobile styles */
        .container {
            padding: 15px;
            background-color: #3498db;
            color: white;
        }
        
        h1 { font-size: 24px; }
        p { font-size: 16px; }
        
        /* Tablet: 768px and up */
        @media (min-width: 768px) {
            .container { padding: 30px; }
            h1 { font-size: 32px; }
        }
        
        /* Desktop: 1024px and up */
        @media (min-width: 1024px) {
            .container { 
                max-width: 1200px;
                margin: 0 auto;
                padding: 50px;
            }
            h1 { font-size: 40px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Mobile-First Design</h1>
        <p>This design starts with mobile and enhances for larger screens!</p>
        <p>Resize your browser to see it adapt.</p>
    </div>
</body>
</html>`,
    content: {
      title: "Mobile-First Design Philosophy",
      description: "Learn the mobile-first approach to building responsive websites! Start small and enhance for larger screens - this is how modern web development works. 📱",
      sections: [
        {
          title: "What is Mobile-First Design?",
          content: "Mobile-first means designing for mobile devices FIRST, then enhancing for larger screens:\\n\\n• **Start small**: Design for the smallest screen first\\n• **Progressive enhancement**: Add features for bigger screens\\n• **Better performance**: Mobile users don't load desktop CSS\\n• **Focus on essentials**: Mobile forces you to prioritize\\n\\n**Why mobile-first?** Over 60% of web traffic is from mobile devices!"
        },
        {
          title: "Mobile-First vs Desktop-First",
          content: "**Desktop-First (old way):**\\n• Design for desktop, then remove features for mobile\\n• Uses max-width media queries\\n• Results in bloated mobile experience\\n\\n**Mobile-First (modern way):**\\n• Design for mobile, then add features for desktop\\n• Uses min-width media queries\\n• Lean, fast mobile experience\\n• Enhanced desktop experience\\n\\n**Best practice**: Always use mobile-first!"
        },
        {
          title: "Min-Width Media Queries",
          content: "Mobile-first uses `min-width` media queries:\\n\\n```css\\n/* Mobile styles (default) */\\n.container { padding: 15px; }\\n\\n/* Tablet and up */\\n@media (min-width: 768px) {\\n  .container { padding: 30px; }\\n}\\n\\n/* Desktop and up */\\n@media (min-width: 1024px) {\\n  .container { padding: 50px; }\\n}\\n```\\n\\n**The logic**: 'If screen is AT LEAST this wide, apply these styles'"
        },
        {
          title: "Mobile-First Practice! 📱",
          content: "In the playground, try:\\n1. View the page and resize your browser\\n2. Add a new breakpoint at 600px for small tablets\\n3. Change colors at different breakpoints\\n4. Add `display: flex;` for larger screens only\\n\\nMobile-first is the foundation of modern responsive design!"
        }
      ]
    }
  },
  { 
    id: 2, 
    title: "Viewport & Meta Tags", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn about viewport meta tags for responsive design">
    <title>Viewport Meta Tags Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .viewport-info {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
        }
        .box {
            background-color: #f39c12;
            padding: 20px;
            margin: 10px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Understanding the Viewport</h1>
    <div class="viewport-info">
        <h2>What is a Viewport?</h2>
        <p>The viewport is the visible area of a web page on your screen!</p>
    </div>
    <div class="box">
        <p>Without the viewport meta tag, mobile browsers would show this page zoomed out!</p>
    </div>
    <div class="box">
        <p>The viewport meta tag ensures proper scaling on mobile devices.</p>
    </div>
</body>
</html>`,
    content: {
      title: "Viewport & Meta Tags",
      description: "Master the viewport meta tag - the most important element for responsive design! Without it, your mobile site won't work properly. 🎯",
      sections: [
        {
          title: "What is the Viewport?",
          content: "The viewport is the visible area of a web page:\\n\\n• **On desktop**: Usually the browser window\\n• **On mobile**: The device screen\\n• **Different sizes**: Every device has a different viewport\\n• **Without control**: Browsers zoom out to fit content\\n\\n**The problem**: Mobile browsers used to pretend they were 980px wide and zoom everything out!"
        },
        {
          title: "The Essential Viewport Meta Tag",
          content: "```html\\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n```\\n\\n**Breaking it down:**\\n• `name=\"viewport\"`: Targets the viewport\\n• `width=device-width`: Match the device's actual width\\n• `initial-scale=1.0`: Don't zoom in or out\\n\\n**ALWAYS include this** in your `<head>` section!"
        },
        {
          title: "Viewport Properties",
          content: "You can control viewport behavior:\\n\\n• **width**: Device width or specific pixel value\\n• **initial-scale**: Zoom level when page loads (1.0 = 100%)\\n• **minimum-scale**: How far users can zoom out\\n• **maximum-scale**: How far users can zoom in\\n• **user-scalable**: Whether users can zoom (yes/no)\\n\\n**Best practice**: Use the standard tag and let users zoom!"
        },
        {
          title: "Why It Matters",
          content: "Without the viewport meta tag:\\n• Pages look tiny on mobile\\n• Users have to pinch and zoom\\n• Text is unreadable\\n• Terrible user experience\\n\\n**With the viewport meta tag:**\\n• Content fits the screen\\n• Text is readable\\n• No unnecessary zooming\\n• Professional mobile experience\\n\\nThis tiny tag makes a HUGE difference!"
        }
      ]
    }
  },
  { 
    id: 3, 
    title: "Fluid Layouts & Percentage Widths", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { box-sizing: border-box; }
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        /* Fluid container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
        }
        
        /* Fluid grid */
        .row {
            display: flex;
            flex-wrap: wrap;
            margin: -10px;
        }
        
        .col {
            flex: 0 0 100%;
            padding: 10px;
        }
        
        .box {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        
        /* Responsive columns */
        @media (min-width: 600px) {
            .col { flex: 0 0 50%; }
        }
        
        @media (min-width: 900px) {
            .col { flex: 0 0 33.333%; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Fluid Layout Demo</h1>
        <div class="row">
            <div class="col"><div class="box">Column 1</div></div>
            <div class="col"><div class="box">Column 2</div></div>
            <div class="col"><div class="box">Column 3</div></div>
        </div>
    </div>
</body>
</html>`,
    content: {
      title: "Fluid Layouts & Percentage Widths",
      description: "Create flexible layouts that smoothly adapt to any screen size! Learn to use percentages and flexible units for truly responsive designs. 💧",
      sections: [
        {
          title: "What are Fluid Layouts?",
          content: "Fluid layouts adapt smoothly to any screen size:\\n\\n• **Flexible widths**: Use percentages instead of pixels\\n• **Relative sizing**: Elements scale with the viewport\\n• **Smooth adaptation**: No hard breakpoints needed\\n• **Max-width**: Prevent layouts from getting too wide\\n\\n**Example**: `width: 80%;` instead of `width: 800px;`"
        },
        {
          title: "Percentage-Based Widths",
          content: "Percentages are relative to the parent element:\\n\\n```css\\n.container { width: 90%; } /* 90% of body */\\n.column { width: 50%; }    /* 50% of container */\\n```\\n\\n**Common patterns:**\\n• Full width: `width: 100%;`\\n• Two columns: `width: 50%;` each\\n• Three columns: `width: 33.333%;` each\\n• Sidebar layout: 70% main + 30% sidebar"
        },
        {
          title: "Max-Width for Control",
          content: "Prevent layouts from getting too wide on large screens:\\n\\n```css\\n.container {\\n  width: 90%;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n```\\n\\n**What this does:**\\n• Width: 90% on smaller screens\\n• Max: Never wider than 1200px\\n• Margin: Centers the container\\n\\n**Perfect for**: Content areas, article text, card grids"
        },
        {
          title: "Box-Sizing: Border-Box",
          content: "Make width calculations easier:\\n\\n```css\\n* { box-sizing: border-box; }\\n```\\n\\n**Without border-box:**\\nTotal width = width + padding + border\\n\\n**With border-box:**\\nTotal width = width (padding and border included)\\n\\n**Why it matters**: Makes percentage layouts predictable!"
        },
        {
          title: "Fluid Layout Workshop! 💧",
          content: "In the playground, experiment with:\\n1. Change the breakpoints to different values\\n2. Create a 4-column layout for large screens\\n3. Add `min-width` to prevent boxes getting too narrow\\n4. Try mixing fluid columns with fixed sidebars\\n\\nFluid layouts are the heart of responsive design!"
        }
      ]
    }
  },
  { 
    id: 4, 
    title: "Responsive Images & Media", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f0f0f0;
        }
        
        /* Basic responsive image */
        .responsive-img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        
        /* Image container */
        .img-container {
            background-color: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
        }
        
        /* Cover image */
        .cover-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
        }
        
        /* Aspect ratio box */
        .aspect-box {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 ratio */
            background-color: #3498db;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .aspect-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1>Responsive Images Demo</h1>
    
    <div class="img-container">
        <h2>Basic Responsive Image</h2>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" 
             alt="Computer coding" 
             class="responsive-img">
        <p>This image scales with the container (max-width: 100%)</p>
    </div>
    
    <div class="img-container">
        <h2>16:9 Aspect Ratio Box</h2>
        <div class="aspect-box">
            <div class="aspect-content">16:9 Responsive Box</div>
        </div>
    </div>
</body>
</html>`,
    content: {
      title: "Responsive Images & Media",
      description: "Make images and videos look perfect on every screen size! Learn techniques to handle images responsively without breaking layouts. 🖼️",
      sections: [
        {
          title: "The Responsive Image Formula",
          content: "Make any image responsive with two simple CSS rules:\\n\\n```css\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n```\\n\\n**What this does:**\\n• `max-width: 100%`: Never wider than parent\\n• `height: auto`: Maintains aspect ratio\\n• No distortion or stretching\\n• Works on all screen sizes\\n\\n**Pro tip**: Apply this to ALL images on your site!"
        },
        {
          title: "Object-Fit for Containers",
          content: "Control how images fit inside fixed-size containers:\\n\\n**Cover**: Fill the container, crop if needed\\n```css\\nimg {\\n  width: 100%;\\n  height: 300px;\\n  object-fit: cover;\\n}\\n```\\n\\n**Contain**: Fit entire image inside\\n**Fill**: Stretch to fill (not recommended)\\n**None**: Original size\\n\\n**Use cases**: Card images, hero banners, thumbnails"
        },
        {
          title: "Responsive Aspect Ratios",
          content: "Create responsive boxes that maintain aspect ratio:\\n\\n```css\\n.aspect-box {\\n  position: relative;\\n  width: 100%;\\n  padding-bottom: 56.25%; /* 16:9 */\\n}\\n\\n.aspect-content {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n```\\n\\n**Common ratios:**\\n• 16:9 = 56.25%\\n• 4:3 = 75%\\n• 1:1 = 100%\\n• 21:9 = 42.86%"
        },
        {
          title: "Picture Element for Art Direction",
          content: "Serve different images for different screen sizes:\\n\\n```html\\n<picture>\\n  <source media=\"(min-width: 1024px)\" srcset=\"large.jpg\">\\n  <source media=\"(min-width: 600px)\" srcset=\"medium.jpg\">\\n  <img src=\"small.jpg\" alt=\"Responsive image\">\\n</picture>\\n```\\n\\n**Benefits:**\\n• Smaller images for mobile (faster loading)\\n• Different crops for different screens\\n• Better performance and user experience"
        },
        {
          title: "Image Workshop! 🖼️",
          content: "In the playground, experiment with:\\n1. Try different object-fit values: cover, contain, fill\\n2. Change the aspect ratio padding-bottom percentage\\n3. Add border-radius for rounded images\\n4. Create a responsive gallery with CSS Grid\\n5. Test how images scale when resizing the browser\\n\\nResponsive images are essential for modern websites!"
        }
      ]
    }
  },
  { 
    id: 5, 
    title: "Breakpoints & Device Targeting", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            transition: background-color 0.3s;
        }
        
        .device-indicator {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .grid {
            display: grid;
            gap: 15px;
        }
        
        .card {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Mobile (default) */
        body { background-color: #e74c3c; }
        .device-indicator::before { content: "📱 Mobile"; }
        .grid { grid-template-columns: 1fr; }
        
        /* Tablet: 600px - 899px */
        @media (min-width: 600px) {
            body { background-color: #f39c12; }
            .device-indicator::before { content: "📱 Tablet"; }
            .grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        /* Desktop: 900px - 1199px */
        @media (min-width: 900px) {
            body { background-color: #3498db; }
            .device-indicator::before { content: "💻 Desktop"; }
            .grid { grid-template-columns: repeat(3, 1fr); }
        }
        
        /* Large Desktop: 1200px+ */
        @media (min-width: 1200px) {
            body { background-color: #9b59b6; }
            .device-indicator::before { content: "🖥️ Large Desktop"; }
            .grid { grid-template-columns: repeat(4, 1fr); }
        }
    </style>
</head>
<body>
    <div class="device-indicator"></div>
    <h1 style="color: white; text-align: center;">Resize Browser to See Breakpoints!</h1>
    <div class="grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
    </div>
</body>
</html>`,
    content: {
      title: "Breakpoints & Device Targeting",
      description: "Master breakpoints - the key to responsive design! Learn when and how to adjust your layout for different screen sizes. 📐",
      sections: [
        {
          title: "What are Breakpoints?",
          content: "Breakpoints are screen widths where your design changes:\\n\\n• **Purpose**: Adjust layout for different devices\\n• **Media queries**: Define breakpoints in CSS\\n• **Mobile-first**: Start small, add breakpoints going up\\n• **Content-driven**: Let your content guide breakpoints\\n\\n**Example**: At 768px, switch from 1 column to 2 columns"
        },
        {
          title: "Common Breakpoint Values",
          content: "Industry-standard breakpoints:\\n\\n• **320px**: Small phones (rarely needed)\\n• **480px**: Older phones\\n• **600px**: Large phones / small tablets\\n• **768px**: Tablets (portrait)\\n• **900px**: Tablets (landscape) / small laptops\\n• **1024px**: Laptops\\n• **1200px**: Desktops\\n• **1440px**: Large desktops\\n\\n**Remember**: These are guidelines, not rules!"
        },
        {
          title: "Choosing Your Breakpoints",
          content: "**Device-based (not recommended):**\\n• Target specific devices (iPhone, iPad, etc.)\\n• Breaks when new devices come out\\n• Too many breakpoints to maintain\\n\\n**Content-based (recommended):**\\n• Add breakpoints where YOUR content needs them\\n• Test by resizing browser\\n• When layout looks awkward, add a breakpoint\\n• Fewer, more meaningful breakpoints\\n\\n**Best practice**: Start with 3-4 main breakpoints"
        },
        {
          title: "Organizing Breakpoints",
          content: "Keep breakpoints organized and consistent:\\n\\n**CSS Variables approach:**\\n```css\\n:root {\\n  --mobile: 600px;\\n  --tablet: 900px;\\n  --desktop: 1200px;\\n}\\n```\\n\\n**Naming convention:**\\n• Use semantic names (tablet, desktop)\\n• OR size names (small, medium, large)\\n• Be consistent across your project\\n• Document your breakpoints"
        },
        {
          title: "Breakpoint Workshop! 📐",
          content: "In the playground, experiment with:\\n1. Resize your browser and watch the background color change\\n2. Add a new breakpoint at 1400px with a different color\\n3. Change the grid columns at each breakpoint\\n4. Add orientation queries: `@media (orientation: landscape)`\\n5. Test what breakpoints work best for YOUR content\\n\\nMaster breakpoints to create perfectly responsive layouts!"
        }
      ]
    }
  },
  { 
    id: 6, 
    title: "Responsive Typography", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
        }
        
        /* Fluid typography with clamp() */
        h1 {
            font-size: clamp(1.5rem, 5vw, 3rem);
            line-height: 1.2;
            margin-bottom: 0.5em;
        }
        
        h2 {
            font-size: clamp(1.2rem, 3vw, 2rem);
            line-height: 1.3;
        }
        
        p {
            font-size: clamp(1rem, 2vw, 1.125rem);
            line-height: 1.6;
        }
        
        /* Responsive spacing */
        .section {
            margin: clamp(1rem, 5vw, 3rem) 0;
        }
        
        /* Readable line length */
        .text-content {
            max-width: 65ch; /* 65 characters wide */
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Typography</h1>
        <div class="section">
            <h2>Fluid Font Sizes</h2>
            <p class="text-content">
                This text automatically scales between screen sizes using the clamp() function. 
                Resize your browser and watch the text smoothly adapt!
            </p>
        </div>
        <div class="section">
            <h2>Optimal Reading Experience</h2>
            <p class="text-content">
                The line length is limited to 65 characters for comfortable reading. 
                This prevents lines from getting too long on wide screens.
            </p>
        </div>
    </div>
</body>
</html>`,
    content: {
      title: "Responsive Typography",
      description: "Make your text readable and beautiful on every device! Learn modern techniques for fluid typography that automatically scales. 📝",
      sections: [
        {
          title: "Why Responsive Typography Matters",
          content: "Text needs to scale for different screens:\\n\\n• **Mobile**: Larger text for smaller screens\\n• **Desktop**: Comfortable reading size\\n• **Accessibility**: Users can adjust sizes\\n• **Readability**: Optimal line length and spacing\\n\\n**The goal**: Readable text on every device without manual zoom!"
        },
        {
          title: "The Clamp() Function",
          content: "Modern CSS has clamp() for fluid typography:\\n\\n```css\\nfont-size: clamp(min, preferred, max);\\n```\\n\\n**Example:**\\n```css\\nh1 { font-size: clamp(1.5rem, 5vw, 3rem); }\\n```\\n\\n**How it works:**\\n• Minimum: 1.5rem (24px)\\n• Preferred: 5% of viewport width\\n• Maximum: 3rem (48px)\\n\\n**Result**: Text smoothly scales between min and max!"
        },
        {
          title: "Viewport Units for Typography",
          content: "Use viewport units for scalable text:\\n\\n• **vw**: Percentage of viewport width\\n• **vh**: Percentage of viewport height\\n• **vmin**: Smaller of vw or vh\\n• **vmax**: Larger of vw or vh\\n\\n**Example:**\\n```css\\nh1 { font-size: 5vw; }\\n```\\n\\n**Warning**: Always use clamp() with vw to prevent text getting too small or large!"
        },
        {
          title: "Optimal Line Length",
          content: "Limit line length for readability:\\n\\n```css\\n.text-content {\\n  max-width: 65ch;\\n}\\n```\\n\\n**Why 65ch?**\\n• `ch` unit = width of the \"0\" character\\n• 65ch ≈ 65 characters per line\\n• Optimal reading length\\n• Prevents eye strain\\n\\n**Use for**: Articles, blog posts, long-form content"
        },
        {
          title: "Responsive Typography Workshop! ✍️",
          content: "In the playground, experiment with:\\n1. Change clamp() values and resize browser\\n2. Try different viewport units: vw, vmin, vmax\\n3. Adjust the max-width: try 45ch (narrow) or 80ch (wide)\\n4. Add line-height: clamp(1.4, 2vw, 1.8) for responsive spacing\\n5. Create a responsive heading hierarchy\\n\\nMaster responsive typography for perfect readability!"
        }
      ]
    }
  }
];
