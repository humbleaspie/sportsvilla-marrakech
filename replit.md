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

### Performance Optimizations (November 2025)

**Mobile-Specific Optimizations:**
- **Responsive Images with srcset**: All 10 gallery images now serve device-appropriate sizes
  - Mobile devices (<768px): 800px width WebP images
  - Desktop devices (>768px): 3200px width WebP images
  - Implemented via srcset and sizes attributes in VisualTour component
  - Mobile images reduce download size by ~75% compared to desktop versions

- **Image Format Optimization**: 
  - Converted all gallery images from PNG to WebP format
  - Total size reduction: 35MB → 2.2MB (94% reduction)
  - 10 desktop WebP images (3200px each)
  - 10 mobile WebP images (800px each, with "_mobile.webp" suffix)

- **Video Optimization**:
  - Hero video optimized from 8.5MB to 2MB (76% reduction)
  - Added video poster image to prevent autoload on mobile
  - Configured with preload="metadata" to minimize initial bandwidth
  - Streaming-optimized encoding for faster playback start

- **Core Web Vitals Improvements**:
  - Lazy loading for all non-critical images
  - Explicit width/height attributes to prevent layout shifts (CLS)
  - fetchpriority="high" on hero image for faster LCP
  - Hero poster preload for immediate LCP rendering

- **Font Optimization Strategy**:
  - Async non-blocking font loading script prevents render-blocking
  - Uses Font Loading API (`document.fonts.load()`) when available
  - Fallback to media query technique for older browsers
  - System fonts (Georgia, Arial) display instantly while custom fonts load
  - Playfair Display and Inter swap in seamlessly after download
  - Preserves design requirements while eliminating 600ms+ render-blocking delay

**PageSpeed Scores (November 4, 2025)**:
- Desktop: 99/100 ⭐
- Mobile: 85/100 ⭐
- Total asset reduction: ~44MB → ~4.2MB (90% reduction)
- Performance improvement: Mobile score increased from 67 → 85 (27% improvement)

**Technical Implementation**:
- Gallery data structure in `villa-content.ts` includes both src (desktop) and srcMobile properties
- VisualTour component uses responsive srcset: `srcset="${image.srcMobile} 800w, ${image.src} 3200w"`
- Sizes attribute: `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- All optimized images stored in `attached_assets/generated_images/`
- Async font loader in `client/index.html` eliminates render-blocking while preserving custom typography

**Remaining Performance Constraints**:
- Replit hosting has inherent server response time limitations
- React framework bundle includes ~133 KiB of necessary overhead
- Achieving 100/100 mobile would require CDN hosting, aggressive code splitting, and self-hosted resources