// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  courses;
  scholarships;
  userProgress;
  codeProjects;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.courses = /* @__PURE__ */ new Map();
    this.scholarships = /* @__PURE__ */ new Map();
    this.userProgress = /* @__PURE__ */ new Map();
    this.codeProjects = /* @__PURE__ */ new Map();
    this.initializeSampleData();
  }
  initializeSampleData() {
    const courses2 = [
      {
        id: "course-1",
        title: "HTML Fundamentals",
        description: "Master the building blocks of the web with comprehensive, beginner-friendly HTML lessons and hands-on interactive projects. Learn everything from basic tags to advanced HTML5 features!",
        level: "beginner",
        duration: "6 weeks",
        lessonsCount: 25,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "html",
        content: {
          lessons: [
            {
              id: 1,
              title: "What is HTML? Your First Web Page",
              completed: false
            },
            {
              id: 2,
              title: "HTML Document Structure & DOCTYPE",
              completed: false
            },
            { id: 3, title: "Headings and Text Formatting", completed: false },
            {
              id: 4,
              title: "Paragraphs, Line Breaks & Spacing",
              completed: false
            },
            {
              id: 5,
              title: "Lists - Organized Content Made Easy",
              completed: false
            },
            {
              id: 6,
              title: "Links - Connecting the Web Together",
              completed: false
            },
            {
              id: 7,
              title: "Images - Adding Visual Content",
              completed: false
            },
            {
              id: 8,
              title: "Tables - Organizing Data in Rows & Columns",
              completed: false
            },
            { id: 9, title: "HTML5 Semantic Elements", completed: false },
            {
              id: 10,
              title: "Forms - Collecting User Input",
              completed: false
            },
            {
              id: 11,
              title: "Form Input Types & Validation",
              completed: false
            },
            {
              id: 12,
              title: "Divs, Spans & Container Elements",
              completed: false
            },
            {
              id: 13,
              title: "HTML Attributes - Adding Extra Information",
              completed: false
            },
            {
              id: 14,
              title: "Classes and IDs - Naming Your Elements",
              completed: false
            },
            {
              id: 15,
              title: "Audio and Video - Multimedia Content",
              completed: false
            },
            {
              id: 16,
              title: "Accessibility - Making Websites for Everyone",
              completed: false
            },
            {
              id: 17,
              title: "Meta Tags - Information About Your Page",
              completed: false
            },
            {
              id: 18,
              title: "Character Entities & Special Symbols",
              completed: false
            },
            {
              id: 19,
              title: "Comments - Notes for Developers",
              completed: false
            },
            { id: 20, title: "Inline vs Block Elements", completed: false },
            { id: 21, title: "Building a Complete Web Page", completed: false },
            {
              id: 22,
              title: "HTML Best Practices & Code Organization",
              completed: false
            },
            {
              id: 23,
              title: "Responsive Images & Modern HTML",
              completed: false
            },
            { id: 24, title: "SEO-Friendly HTML Structure", completed: false },
            {
              id: 25,
              title: "Final Project - Your Personal Website",
              completed: false
            }
          ]
        },
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "course-2",
        title: "CSS Styling & Design",
        description: "Master the art of beautiful web design! Learn CSS from basics to advanced techniques including animations, layouts, and modern design principles that make websites stunning and professional.",
        level: "beginner",
        duration: "5 weeks",
        lessonsCount: 12,
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "css",
        content: {
          lessons: [
            {
              id: 1,
              title: "What is CSS? - Styling Your First Page",
              completed: false
            },
            {
              id: 2,
              title: "CSS Selectors - Targeting HTML Elements",
              completed: false
            },
            {
              id: 3,
              title: "Colors, Backgrounds & Typography",
              completed: false
            },
            {
              id: 4,
              title: "The Box Model - Spacing and Sizing",
              completed: false
            },
            {
              id: 5,
              title: "Flexbox - Modern Layout Made Easy",
              completed: false
            },
            {
              id: 6,
              title: "CSS Grid - Advanced Layout Control",
              completed: false
            },
            {
              id: 7,
              title: "Responsive Design & Media Queries",
              completed: false
            },
            { id: 8, title: "CSS Animations & Transitions", completed: false },
            { id: 9, title: "Positioning & Z-Index", completed: false },
            {
              id: 10,
              title: "CSS Variables & Modern Features",
              completed: false
            },
            {
              id: 11,
              title: "Forms Styling & User Experience",
              completed: false
            },
            {
              id: 12,
              title: "Final Project - Complete Website Design",
              completed: false
            }
          ]
        },
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "course-3",
        title: "Arduino Microprocessors Starter Kit",
        description: "Learn to program Arduino microprocessors from scratch! Build exciting projects with easy-to-follow code examples, wiring diagrams, and interactive visuals.",
        level: "beginner",
        duration: "4 weeks",
        lessonsCount: 12,
        imageUrl: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "hardware",
        content: {
          lessons: [
            { id: 1, title: "Getting Started with Arduino Uno", completed: false },
            { id: 2, title: "LED Blink - Your First Arduino Program", completed: false },
            { id: 3, title: "Understanding Digital Inputs & Buttons", completed: false },
            { id: 4, title: "Analog Sensors & Reading Data", completed: false },
            { id: 5, title: "Controlling Motors & Movement", completed: false },
            { id: 6, title: "Working with LCD Displays", completed: false },
            { id: 7, title: "Building a Temperature Monitor", completed: false },
            { id: 8, title: "Servo Motors & Precise Control", completed: false },
            { id: 9, title: "Ultrasonic Distance Sensors", completed: false },
            { id: 10, title: "Piezo Buzzers & Sound Generation", completed: false },
            { id: 11, title: "Photoresistors & Light Sensing", completed: false },
            { id: 12, title: "Final Project - Smart Home Automation", completed: false }
          ]
        },
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    courses2.forEach((course) => this.courses.set(course.id, course));
    const scholarships2 = [
      {
        id: "scholarship-1",
        title: "TechGirls",
        description: "Fully-funded U.S. State Department program empowering young women (ages 15-17) to pursue STEM careers through an intensive summer exchange program in the United States.",
        amount: 25e3,
        // Estimated full program value including travel, accommodation, and education
        deadline: /* @__PURE__ */ new Date("2025-12-06"),
        // Next application cycle
        field: "Science, Technology, Engineering, Mathematics, STEM, Leadership",
        location: "Virginia Tech University + U.S. Cities",
        eligibility: "Young women ages 15-17 from 37 eligible countries with strong interest in STEM fields",
        status: "upcoming",
        // 2026 cycle will open Fall 2025
        organizationName: "U.S. Department of State",
        applicationUrl: "https://techgirlsglobal.org/apply/",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "scholarship-2",
        title: "Benjamin Franklin Transatlantic Fellowship",
        description: "Fully-funded 4-week intensive exchange program at Purdue University empowering European youth (ages 16-18) to explore diplomacy, leadership, and transatlantic relations in the United States.",
        amount: 15e3,
        // Estimated full program value including travel, accommodation, education, and stipend
        deadline: /* @__PURE__ */ new Date("2025-02-23"),
        // Application deadline varies by country, using latest deadline
        field: "Diplomacy, Leadership, International Relations, Civil Society",
        location: "Purdue University, West Lafayette, Indiana",
        eligibility: "European citizens ages 16-18 with strong academic achievement and leadership potential",
        status: "upcoming",
        // 2025 applications typically open January/February
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/us/program/benjamin-franklin-summer-institutes",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "scholarship-3",
        title: "Kennedy-Lugar Youth Exchange & Study (YES)",
        description: "Competitive merit-based scholarship program bringing high school students from countries with significant Muslim populations to study for a full academic year in the United States, living with host families.",
        amount: 3e4,
        // Estimated full program value including travel, accommodation, education, and stipend
        deadline: /* @__PURE__ */ new Date("2025-03-31"),
        // Application deadlines vary by country, typically fall-winter
        field: "Cultural Exchange, Leadership",
        location: "United States (Various High Schools)",
        eligibility: "High school students ages 15-18 from 45+ participating countries with significant Muslim populations",
        status: "upcoming",
        // 2025-26 applications typically open in fall
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/non-us/program/kennedy-lugar-youth-exchange-study-yes",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "scholarship-4",
        title: "Future Leaders Exchange (FLEX)",
        description: "Competitive merit-based scholarship program bringing high school students from Europe, Eurasia, and Central Asia to live with American host families and attend U.S. high schools for a full academic year.",
        amount: 35e3,
        // Estimated full program value including travel, accommodation, education, and activities
        deadline: /* @__PURE__ */ new Date("2025-09-30"),
        // Applications typically open in fall
        field: "Cultural Exchange, Leadership, Democracy",
        location: "United States (Various High Schools)",
        eligibility: "High school students ages 15-17 from 22 participating countries in Europe, Eurasia, and Central Asia",
        status: "upcoming",
        // 2025-26 applications open in fall
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/non-us/program/future-leaders-exchange/details",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "scholarship-5",
        title: "AFS Global You\u2122 Adventurer",
        description: "A 5-week interactive virtual exchange program, open to teens (aged 14-17) anywhere in the world, to develop key 21st-century global skills and build bridges across cultures.",
        amount: 7500,
        deadline: /* @__PURE__ */ new Date("2025-06-30"),
        field: "Civil Society, Leadership, Cultural Exchange",
        location: "Virtual",
        eligibility: "Students aged from 14-17 years old all over the world.",
        status: "open",
        organizationName: "AFS",
        applicationUrl: "https://afs.org/adventurer/",
        createdAt: /* @__PURE__ */ new Date()
      }
      /* {
        id: "scholarship-6",
        title: "Outstanding Achievement Award",
        description:
          "Recognizing exceptional academic achievement and community impact in technology education.",
        amount: 15000,
        deadline: new Date("2024-01-31"),
        field: "Computer Science, Engineering",
        location: "International",
        eligibility: "High-achieving students with community impact",
        status: "closed",
        organizationName: "Achievement Recognition Foundation",
        applicationUrl: "https://example.com/apply",
        createdAt: new Date(),
      }, */
    ];
    scholarships2.forEach(
      (scholarship) => this.scholarships.set(scholarship.id, scholarship)
    );
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async getUserByEmail(email) {
    return Array.from(this.users.values()).find((user) => user.email === email);
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id, createdAt: /* @__PURE__ */ new Date() };
    this.users.set(id, user);
    return user;
  }
  // Courses
  async getCourses() {
    return Array.from(this.courses.values());
  }
  async getCourse(id) {
    return this.courses.get(id);
  }
  async createCourse(insertCourse) {
    const id = randomUUID();
    const course = { ...insertCourse, id, createdAt: /* @__PURE__ */ new Date() };
    this.courses.set(id, course);
    return course;
  }
  // Scholarships
  async getScholarships() {
    return Array.from(this.scholarships.values());
  }
  async getScholarship(id) {
    return this.scholarships.get(id);
  }
  async createScholarship(insertScholarship) {
    const id = randomUUID();
    const scholarship = {
      ...insertScholarship,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.scholarships.set(id, scholarship);
    return scholarship;
  }
  async filterScholarships(filters) {
    let scholarships2 = Array.from(this.scholarships.values());
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      scholarships2 = scholarships2.filter(
        (s) => s.title.toLowerCase().includes(searchLower) || s.description.toLowerCase().includes(searchLower) || s.field.toLowerCase().includes(searchLower)
      );
    }
    if (filters.field && filters.field !== "All Fields") {
      scholarships2 = scholarships2.filter(
        (s) => s.field.includes(filters.field)
      );
    }
    if (filters.amount && filters.amount !== "Any Amount") {
      scholarships2 = scholarships2.filter((s) => {
        switch (filters.amount) {
          case "$1,000 - $5,000":
            return s.amount >= 1e3 && s.amount <= 5e3;
          case "$5,000 - $10,000":
            return s.amount >= 5e3 && s.amount <= 1e4;
          case "$10,000+":
            return s.amount >= 1e4;
          default:
            return true;
        }
      });
    }
    if (filters.deadline && filters.deadline !== "All Deadlines") {
      const now = /* @__PURE__ */ new Date();
      scholarships2 = scholarships2.filter((s) => {
        const daysDiff = Math.ceil(
          (s.deadline.getTime() - now.getTime()) / (1e3 * 60 * 60 * 24)
        );
        switch (filters.deadline) {
          case "Next 30 days":
            return daysDiff <= 30 && daysDiff > 0;
          case "Next 3 months":
            return daysDiff <= 90 && daysDiff > 0;
          case "Next 6 months":
            return daysDiff <= 180 && daysDiff > 0;
          default:
            return true;
        }
      });
    }
    return scholarships2;
  }
  // User Progress
  async getUserProgress(userId) {
    return Array.from(this.userProgress.values()).filter(
      (p) => p.userId === userId
    );
  }
  async getUserCourseProgress(userId, courseId) {
    return Array.from(this.userProgress.values()).find(
      (p) => p.userId === userId && p.courseId === courseId
    );
  }
  async updateUserProgress(insertProgress) {
    const id = randomUUID();
    const progress = {
      ...insertProgress,
      id,
      lastAccessed: /* @__PURE__ */ new Date()
    };
    this.userProgress.set(id, progress);
    return progress;
  }
  // Code Projects
  async getUserProjects(userId) {
    return Array.from(this.codeProjects.values()).filter(
      (p) => p.userId === userId
    );
  }
  async getProject(id) {
    return this.codeProjects.get(id);
  }
  async createProject(insertProject) {
    const id = randomUUID();
    const project = {
      ...insertProject,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.codeProjects.set(id, project);
    return project;
  }
  async updateProject(id, updateData) {
    const existing = this.codeProjects.get(id);
    if (!existing) {
      throw new Error("Project not found");
    }
    const updated = {
      ...existing,
      ...updateData,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.codeProjects.set(id, updated);
    return updated;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  level: text("level").notNull(),
  // "beginner", "intermediate", "advanced"
  duration: text("duration").notNull(),
  lessonsCount: integer("lessons_count").notNull(),
  imageUrl: text("image_url"),
  category: text("category").notNull(),
  // "html", "css", "responsive"
  content: jsonb("content").notNull(),
  // course lessons and materials
  createdAt: timestamp("created_at").defaultNow()
});
var scholarships = pgTable("scholarships", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  amount: integer("amount").notNull(),
  deadline: timestamp("deadline").notNull(),
  field: text("field").notNull(),
  location: text("location").notNull(),
  eligibility: text("eligibility").notNull(),
  status: text("status").notNull(),
  // "open", "closing_soon", "closed"
  organizationName: text("organization_name").notNull(),
  applicationUrl: text("application_url"),
  createdAt: timestamp("created_at").defaultNow()
});
var userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  courseId: varchar("course_id").notNull(),
  completedLessons: integer("completed_lessons").default(0),
  totalLessons: integer("total_lessons").notNull(),
  progress: integer("progress").default(0),
  // percentage
  lastAccessed: timestamp("last_accessed").defaultNow()
});
var codeProjects = pgTable("code_projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  title: text("title").notNull(),
  htmlCode: text("html_code").notNull(),
  cssCode: text("css_code").notNull(),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true
});
var insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true
});
var insertScholarshipSchema = createInsertSchema(scholarships).omit({
  id: true,
  createdAt: true
});
var insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true
});
var insertCodeProjectSchema = createInsertSchema(codeProjects).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/courses", async (req, res) => {
    try {
      const courses2 = await storage.getCourses();
      res.json(courses2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });
  app2.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourse(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });
  app2.post("/api/courses", async (req, res) => {
    try {
      const courseData = insertCourseSchema.parse(req.body);
      const course = await storage.createCourse(courseData);
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: "Invalid course data" });
    }
  });
  app2.get("/api/scholarships", async (req, res) => {
    try {
      const { field, amount, deadline, search } = req.query;
      const filters = {
        field,
        amount,
        deadline,
        search
      };
      const hasFilters = Object.values(filters).some((filter) => filter && filter !== "");
      const scholarships2 = hasFilters ? await storage.filterScholarships(filters) : await storage.getScholarships();
      res.json(scholarships2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch scholarships" });
    }
  });
  app2.get("/api/scholarships/:id", async (req, res) => {
    try {
      const scholarship = await storage.getScholarship(req.params.id);
      if (!scholarship) {
        return res.status(404).json({ message: "Scholarship not found" });
      }
      res.json(scholarship);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch scholarship" });
    }
  });
  app2.post("/api/scholarships", async (req, res) => {
    try {
      const scholarshipData = insertScholarshipSchema.parse(req.body);
      const scholarship = await storage.createScholarship(scholarshipData);
      res.status(201).json(scholarship);
    } catch (error) {
      res.status(400).json({ message: "Invalid scholarship data" });
    }
  });
  app2.get("/api/progress/:userId", async (req, res) => {
    try {
      const progress = await storage.getUserProgress(req.params.userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch progress" });
    }
  });
  app2.get("/api/progress/:userId/:courseId", async (req, res) => {
    try {
      const progress = await storage.getUserCourseProgress(req.params.userId, req.params.courseId);
      if (!progress) {
        return res.status(404).json({ message: "Progress not found" });
      }
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course progress" });
    }
  });
  app2.post("/api/progress", async (req, res) => {
    try {
      const progressData = insertUserProgressSchema.parse(req.body);
      const progress = await storage.updateUserProgress(progressData);
      res.status(201).json(progress);
    } catch (error) {
      res.status(400).json({ message: "Invalid progress data" });
    }
  });
  app2.get("/api/projects/:userId", async (req, res) => {
    try {
      const projects = await storage.getUserProjects(req.params.userId);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.get("/api/project/:id", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });
  app2.post("/api/projects", async (req, res) => {
    try {
      const projectData = insertCodeProjectSchema.parse(req.body);
      const project = await storage.createProject(projectData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: "Invalid project data" });
    }
  });
  app2.put("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.updateProject(req.params.id, req.body);
      res.json(project);
    } catch (error) {
      res.status(400).json({ message: "Failed to update project" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var vite_config_default = defineConfig({
  base: "/msostem/",
  plugins: [
    react(),
    // only enable the Replit overlay when actually on Replit
    ...process.env.REPL_ID ? [runtimeErrorOverlay()] : [],
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    },
    hmr: {
      overlay: false
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
