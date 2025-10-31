# Marrakech Sports Villa Landing Page

## Overview

This is a luxury villa landing page built as a conversion-focused marketing tool. The application showcases a premium 6-bedroom sports villa in Marrakech with features like a private padel court, heated pool, and chef service. The entire design follows a "single-purpose conversion machine" philosophy where every element drives toward WhatsApp engagement for lead capture.

The application is a single-page React application with no traditional navigation, optimized for a distraction-free user experience that focuses on visual storytelling and direct conversion paths.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Implemented using Wouter (lightweight client-side routing). The application is primarily a single-page experience with a home route and a 404 fallback.

**State Management**: React Query (TanStack Query) for server state management. The application currently uses minimal server interaction, with most content managed through static configuration files.

**UI Component Library**: Shadcn/ui components built on top of Radix UI primitives. All UI components follow a consistent design system defined in Tailwind configuration with custom CSS variables for theming.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- Custom design system with CSS variables for colors and spacing
- Typography uses Google Fonts (Playfair Display for headings, Inter for body text)
- Responsive design with mobile-first approach
- Custom utility classes for hover/active states (`hover-elevate`, `active-elevate-2`)

**Content Management**: All content (text, images, testimonials, pricing) is centralized in `client/src/data/villa-content.ts`, allowing non-technical users to update the landing page by editing a single TypeScript configuration file.

**Component Structure**:
- Modular section-based components (Hero, VisualTour, WhoThisIsFor, Experience, Pricing, Testimonials)
- Reusable UI primitives from Shadcn
- Floating WhatsApp button for persistent conversion path
- No header navigation to maintain distraction-free experience

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: Custom Vite middleware integration for HMR (Hot Module Replacement) in development. Production builds serve static files from the dist directory.

**Storage Interface**: Abstract storage layer (`server/storage.ts`) with an in-memory implementation. Designed to be swappable with database implementations without changing application logic.

**API Design**: RESTful API structure with routes prefixed with `/api`. Currently minimal backend functionality as the landing page is primarily static content-driven.

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single production command runs the Express server serving static assets

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Maps for user data (MemStorage class).

**Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. Connection configured through `DATABASE_URL` environment variable.

**Schema Design**: Basic user table with UUID primary keys, username, and password fields. Uses Drizzle-Zod for runtime validation.

**Migration Strategy**: Drizzle Kit configured for schema migrations with output to `./migrations` directory.

**Rationale**: The in-memory storage allows rapid development and testing without database dependencies. The abstract storage interface (`IStorage`) enables seamless migration to PostgreSQL when persistent data storage becomes necessary.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible, unstyled components
- Embla Carousel for image galleries
- Lucide React for icons
- React Hook Form with Zod resolvers for form handling

**Styling**:
- Tailwind CSS with PostCSS for processing
- Class Variance Authority for component variants
- CLSX and Tailwind Merge for className composition

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- Drizzle Zod for schema validation

**Build & Development Tools**:
- Vite for frontend bundling and dev server
- esbuild for backend bundling
- TypeScript for type safety across the stack
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error modal)

**Asset Management**: Images and videos stored in `attached_assets` directory with Vite alias configuration (`@assets`) for easy imports.

**Communication Integration**: WhatsApp Business API integration through direct `wa.me` links with pre-filled messages for lead capture.

**Typography**: Google Fonts CDN for Playfair Display and Inter font families.

**Design Philosophy**: The application follows a reference-based design approach inspired by Airbnb Luxe and Booking.com premium properties, emphasizing aspirational imagery, trust-building elements, and frictionless conversion paths. Every design decision supports the primary goal of WhatsApp engagement.