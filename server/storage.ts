import { type User, type InsertUser, type Course, type InsertCourse, type Scholarship, type InsertScholarship, type UserProgress, type InsertUserProgress, type CodeProject, type InsertCodeProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Scholarships
  getScholarships(): Promise<Scholarship[]>;
  getScholarship(id: string): Promise<Scholarship | undefined>;
  createScholarship(scholarship: InsertScholarship): Promise<Scholarship>;
  filterScholarships(filters: {
    field?: string;
    amount?: string;
    deadline?: string;
    search?: string;
  }): Promise<Scholarship[]>;

  // User Progress
  getUserProgress(userId: string): Promise<UserProgress[]>;
  getUserCourseProgress(userId: string, courseId: string): Promise<UserProgress | undefined>;
  updateUserProgress(progress: InsertUserProgress): Promise<UserProgress>;

  // Code Projects
  getUserProjects(userId: string): Promise<CodeProject[]>;
  getProject(id: string): Promise<CodeProject | undefined>;
  createProject(project: InsertCodeProject): Promise<CodeProject>;
  updateProject(id: string, project: Partial<CodeProject>): Promise<CodeProject>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private scholarships: Map<string, Scholarship>;
  private userProgress: Map<string, UserProgress>;
  private codeProjects: Map<string, CodeProject>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.scholarships = new Map();
    this.userProgress = new Map();
    this.codeProjects = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample Courses
    const courses: Course[] = [
      {
        id: "course-1",
        title: "HTML Fundamentals",
        description: "Master the building blocks of the web with interactive HTML lessons and real-world projects.",
        level: "beginner",
        duration: "4 weeks",
        lessonsCount: 18,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "html",
        content: {
          lessons: [
            { id: 1, title: "Introduction to HTML", completed: false },
            { id: 2, title: "HTML Structure", completed: false },
            { id: 3, title: "Text Elements", completed: false },
          ]
        },
        createdAt: new Date(),
      },
      {
        id: "course-2",
        title: "CSS Styling & Design",
        description: "Create beautiful, responsive websites with CSS animations, layouts, and modern design principles.",
        level: "beginner",
        duration: "6 weeks",
        lessonsCount: 24,
        imageUrl: "/attached_assets/generated_images/Female_programmer_coding_CSS_8273a1cf.png",
        category: "css",
        content: {
          lessons: [
            { id: 1, title: "CSS Basics", completed: false },
            { id: 2, title: "Colors and Typography", completed: false },
            { id: 3, title: "Layout with Flexbox", completed: false },
          ]
        },
        createdAt: new Date(),
      },
      {
        id: "course-3",
        title: "Responsive Web Design",
        description: "Build websites that look perfect on every device using modern CSS Grid, Flexbox, and media queries.",
        level: "intermediate",
        duration: "8 weeks",
        lessonsCount: 30,
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "responsive",
        content: {
          lessons: [
            { id: 1, title: "Mobile-First Design", completed: false },
            { id: 2, title: "CSS Grid", completed: false },
            { id: 3, title: "Media Queries", completed: false },
          ]
        },
        createdAt: new Date(),
      }
    ];

    courses.forEach(course => this.courses.set(course.id, course));

    // Sample Scholarships
    const scholarships: Scholarship[] = [
      {
        id: "scholarship-1",
        title: "TechGirls",
        description: "Fully-funded U.S. State Department program empowering young women (ages 15-17) to pursue STEM careers through an intensive summer exchange program in the United States.",
        amount: 25000, // Estimated full program value including travel, accommodation, and education
        deadline: new Date("2025-12-06"), // Next application cycle
        field: "Science, Technology, Engineering, Mathematics (STEM)",
        location: "Virginia Tech University + U.S. Cities",
        eligibility: "Young women ages 15-17 from 37 eligible countries with strong interest in STEM fields",
        status: "upcoming", // 2026 cycle will open Fall 2025
        organizationName: "U.S. Department of State",
        applicationUrl: "https://techgirlsglobal.org/apply/",
        createdAt: new Date(),
      },
      {
        id: "scholarship-2",
        title: "Benjamin Franklin Transatlantic Fellowship",
        description: "Fully-funded 4-week intensive exchange program at Purdue University empowering European youth (ages 16-18) to explore diplomacy, leadership, and transatlantic relations in the United States.",
        amount: 15000, // Estimated full program value including travel, accommodation, education, and stipend
        deadline: new Date("2025-02-23"), // Application deadline varies by country, using latest deadline
        field: "Diplomacy, Leadership, International Relations, Civil Society",
        location: "Purdue University, West Lafayette, Indiana",
        eligibility: "European citizens ages 16-18 with strong academic achievement and leadership potential",
        status: "upcoming", // 2025 applications typically open January/February
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/us/program/benjamin-franklin-summer-institutes",
        createdAt: new Date(),
      },
      {
        id: "scholarship-3",
        title: "Kennedy-Lugar Youth Exchange & Study (YES)",
        description: "Competitive merit-based scholarship program bringing high school students from countries with significant Muslim populations to study for a full academic year in the United States, living with host families.",
        amount: 30000, // Estimated full program value including travel, accommodation, education, and stipend
        deadline: new Date("2025-03-31"), // Application deadlines vary by country, typically fall-winter
        field: "Cultural Exchange, Leadership Development, Democracy Studies",
        location: "United States (Various High Schools)",
        eligibility: "High school students ages 15-18 from 45+ participating countries with significant Muslim populations",
        status: "upcoming", // 2025-26 applications typically open in fall
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/non-us/program/kennedy-lugar-youth-exchange-study-yes",
        createdAt: new Date(),
      },
      {
        id: "scholarship-4",
        title: "Future Leaders Exchange (FLEX)",
        description: "Competitive merit-based scholarship program bringing high school students from Europe, Eurasia, and Central Asia to live with American host families and attend U.S. high schools for a full academic year.",
        amount: 35000, // Estimated full program value including travel, accommodation, education, and activities
        deadline: new Date("2025-09-30"), // Applications typically open in fall
        field: "Cultural Exchange, Leadership, Democracy & Entrepreneurship",
        location: "United States (Various High Schools)",
        eligibility: "High school students ages 15-17 from 22 participating countries in Europe, Eurasia, and Central Asia",
        status: "upcoming", // 2025-26 applications open in fall
        organizationName: "U.S. Department of State",
        applicationUrl: "https://exchanges.state.gov/non-us/program/future-leaders-exchange/details",
        createdAt: new Date(),
      },
      {
        id: "scholarship-5",
        title: "Women's Empowerment in STEM",
        description: "Dedicated to supporting women breaking barriers in science, technology, engineering, and mathematics.",
        amount: 7500,
        deadline: new Date("2024-06-30"),
        field: "All STEM Fields",
        location: "United States",
        eligibility: "Women in STEM programs",
        status: "open",
        organizationName: "STEM Empowerment Alliance",
        applicationUrl: "https://example.com/apply",
        createdAt: new Date(),
      },
      {
        id: "scholarship-6",
        title: "Outstanding Achievement Award",
        description: "Recognizing exceptional academic achievement and community impact in technology education.",
        amount: 15000,
        deadline: new Date("2024-01-31"),
        field: "Computer Science, Engineering",
        location: "International",
        eligibility: "High-achieving students with community impact",
        status: "closed",
        organizationName: "Achievement Recognition Foundation",
        applicationUrl: "https://example.com/apply",
        createdAt: new Date(),
      }
    ];

    scholarships.forEach(scholarship => this.scholarships.set(scholarship.id, scholarship));
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id, createdAt: new Date() };
    this.courses.set(id, course);
    return course;
  }

  // Scholarships
  async getScholarships(): Promise<Scholarship[]> {
    return Array.from(this.scholarships.values());
  }

  async getScholarship(id: string): Promise<Scholarship | undefined> {
    return this.scholarships.get(id);
  }

  async createScholarship(insertScholarship: InsertScholarship): Promise<Scholarship> {
    const id = randomUUID();
    const scholarship: Scholarship = { ...insertScholarship, id, createdAt: new Date() };
    this.scholarships.set(id, scholarship);
    return scholarship;
  }

  async filterScholarships(filters: {
    field?: string;
    amount?: string;
    deadline?: string;
    search?: string;
  }): Promise<Scholarship[]> {
    let scholarships = Array.from(this.scholarships.values());

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      scholarships = scholarships.filter(s => 
        s.title.toLowerCase().includes(searchLower) ||
        s.description.toLowerCase().includes(searchLower) ||
        s.field.toLowerCase().includes(searchLower)
      );
    }

    if (filters.field && filters.field !== "All Fields") {
      scholarships = scholarships.filter(s => s.field.includes(filters.field!));
    }

    if (filters.amount && filters.amount !== "Any Amount") {
      scholarships = scholarships.filter(s => {
        switch (filters.amount) {
          case "$1,000 - $5,000":
            return s.amount >= 1000 && s.amount <= 5000;
          case "$5,000 - $10,000":
            return s.amount >= 5000 && s.amount <= 10000;
          case "$10,000+":
            return s.amount >= 10000;
          default:
            return true;
        }
      });
    }

    if (filters.deadline && filters.deadline !== "All Deadlines") {
      const now = new Date();
      scholarships = scholarships.filter(s => {
        const daysDiff = Math.ceil((s.deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
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

    return scholarships;
  }

  // User Progress
  async getUserProgress(userId: string): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values()).filter(p => p.userId === userId);
  }

  async getUserCourseProgress(userId: string, courseId: string): Promise<UserProgress | undefined> {
    return Array.from(this.userProgress.values()).find(p => p.userId === userId && p.courseId === courseId);
  }

  async updateUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const id = randomUUID();
    const progress: UserProgress = { ...insertProgress, id, lastAccessed: new Date() };
    this.userProgress.set(id, progress);
    return progress;
  }

  // Code Projects
  async getUserProjects(userId: string): Promise<CodeProject[]> {
    return Array.from(this.codeProjects.values()).filter(p => p.userId === userId);
  }

  async getProject(id: string): Promise<CodeProject | undefined> {
    return this.codeProjects.get(id);
  }

  async createProject(insertProject: InsertCodeProject): Promise<CodeProject> {
    const id = randomUUID();
    const project: CodeProject = { 
      ...insertProject, 
      id, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    };
    this.codeProjects.set(id, project);
    return project;
  }

  async updateProject(id: string, updateData: Partial<CodeProject>): Promise<CodeProject> {
    const existing = this.codeProjects.get(id);
    if (!existing) {
      throw new Error("Project not found");
    }
    const updated: CodeProject = { 
      ...existing, 
      ...updateData, 
      updatedAt: new Date() 
    };
    this.codeProjects.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
