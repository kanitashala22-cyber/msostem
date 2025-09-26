# Overview

MsoSTEM is a comprehensive web application designed to empower young women in technology by providing interactive coding courses and scholarship opportunities. The platform focuses on HTML and CSS education with a modern, engaging interface featuring course progression tracking, an interactive code playground, and curated scholarship listings.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side navigation with file-based routing structure
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management and caching
- **Design System**: Custom gradient-based color scheme with responsive design patterns

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for RESTful API endpoints
- **Development Setup**: Hot module replacement via Vite middleware integration
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Design**: Resource-based endpoints for courses, scholarships, user progress, and code projects

## Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migration Strategy**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for rapid development and testing

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User System**: Complete user management with username/email authentication
- **Progress Tracking**: User-specific course progression and achievement tracking

## External Dependencies
- **Database**: Neon Database (PostgreSQL) for production data persistence
- **Code Editor**: Monaco Editor integration for interactive coding playground
- **UI Components**: Radix UI primitives for accessible component foundation
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts (Inter, Fira Code) for typography consistency