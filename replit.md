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
  - **LCP Priority Fix**: All gallery images set to loading="lazy" and fetchpriority="low"
    - Ensures only hero poster video competes for LCP bandwidth
    - Resolves "LCP request discovery" PageSpeed warnings

- **Image Format Optimization**: 
  - Converted all gallery images from PNG to WebP format
  - Total size reduction: 35MB → 2.2MB (94% reduction)
  - 10 desktop WebP images (3200px each)
  - 10 mobile WebP images (800px each, with "_mobile.webp" suffix)

- **Video Optimization**:
  - Hero video trimmed to 27 seconds (from 55 seconds)
  - Final optimized size: 1.2MB (from original 8.5MB - 86% reduction)
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

**JavaScript Bundle Optimization (November 6, 2025)**:
- **Contact Form Lazy Loading with IntersectionObserver** (ACTIVE):
  - ContactForm component now loads only when user scrolls within 200px of contact section
  - Defers ~108 KiB of unused JavaScript (react-hook-form, Zod, TanStack Query, shadcn Form components)
  - Placeholder Card with min-h-[400px] prevents layout shifts
  - Rationale: Contact form at bottom of page, heavy dependencies not needed for initial render
  - Expected impact: Eliminates "Reduce unused JavaScript: 108 KiB" PageSpeed warning

- **Previous Attempt - Gallery/Testimonials Lazy Loading** (REVERTED):
  - Initially attempted selective lazy loading of VisualTour and TestimonialsSection
  - REVERTED: Lazy loading caused 5-point performance regression (76→71/100 mobile)
  - REVERTED: Broke anchor navigation to #gallery and #testimonials sections
  - Root cause: Deferred components caused layout shifts, extended LCP, and navigation failures
  
- **Optimized Hero Video Loading**:
  - Hero video uses preload="metadata" (loads only metadata, not full 1.2MB file)
  - Video trimmed to 27 seconds for faster download (40% size reduction from 2MB)
  - Poster image displays instantly for fast LCP with fetchpriority="high"
  - Video autoplays on component mount without blocking critical render path
  - Rationale: Deferred video loading caused regression as browser treated late-loaded source as high-priority fetch
  
- **Deferred Third-Party Scripts**:
  - Google Ads script deferred until after page load
  - Prevents blocking initial render
  - Uses window 'load' event to inject gtag.js dynamically

- **DNS & Resource Optimization**:
  - Preconnect to fonts.googleapis.com for faster font loading
  - Preconnect to googletagmanager.com for faster analytics
  - DNS prefetch for WhatsApp (wa.me) for faster CTA clicks
  - Hero poster preloaded with fetchpriority="high" for optimal LCP

**PageSpeed Scores**:
- Desktop: 99/100 ⭐ (November 4, 2025)
- Mobile: 83/100 ⭐ (November 6, 2025 - before video trim)
- Target: 90+/100 mobile (achievable with video trim optimization)
- Total asset reduction: ~44MB → ~3.4MB (92% reduction including video trim)
- Performance improvement: Mobile score increased from 67 → 83+ (24%+ improvement)
- Key wins: Selective lazy loading + 27-second video (1.2MB) + metadata preloading prevents blocking

**Technical Implementation**:
- Gallery data structure in `villa-content.ts` includes both src (desktop) and srcMobile properties
- VisualTour component uses responsive srcset: `srcset="${image.srcMobile} 800w, ${image.src} 3200w"`
- Sizes attribute: `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- All optimized images stored in `attached_assets/generated_images/`
- Async font loader in `client/index.html` eliminates render-blocking while preserving custom typography

**Additional Performance Optimizations (November 6, 2025)**:
- **Self-hosted WOFF2 fonts with async loading**: Migrated from Google Fonts CDN to local optimized WOFF2 files
  - Fonts stored in client/public/fonts/ directory for proper Vite serving
  - Async font loading via `<link rel="preload" as="style" onload="this.rel='stylesheet'">` eliminates render-blocking
  - Fonts load AFTER first paint, preventing CSS from blocking FCP/LCP
  - Preloaded critical fonts (Inter 400, Playfair Display 700) for faster download
  - Total font payload: 440KB WOFF2 (only 2 critical font faces, removed unused Inter 500/600)
  - Maintained font-display: swap for optimal fallback behavior
  - Fixed: TTF files were not served by Vite dev server (returned HTML), switched to WOFF2
  - Performance impact: Async loading eliminates 300-450ms render-blocking delay
  
- **Improved script deferral**: Google Ads now loads via requestIdleCallback instead of window load event
  - Reduces main-thread blocking by ~150ms
  - 2-second timeout ensures load even on older browsers
  
- **CSS containment**: Applied content-visibility: auto to below-fold sections
  - Browser skips rendering off-screen content, improving initial paint
  - contain-intrinsic-size: auto 500px provides placeholder sizing
  
**Critical CSS Optimization (November 6, 2025)**:
- **Inline critical CSS**: Inlined ~2.5KB of hero-specific Tailwind utilities in index.html
  - Covers complete hero section: heights (70vh/75vh/80vh), gradients, colors, layout, focus states
  - Eliminates render-blocking CSS delay for above-the-fold content
- **Deferred main CSS loading**: Converted synchronous CSS import to dynamic import via requestIdleCallback
  - Main Tailwind bundle loads AFTER first paint (non-blocking)
  - Hero renders immediately with inlined styles, preventing FOUC and layout shifts
- **Performance impact**: Eliminates 160ms render-blocking CSS delay

**Expected Mobile Score**: 83-86/100 (with critical CSS inlining + deferred loading)

**Technical Notes**:
- Vite dev server only serves certain file types from client/public/ directory
- WOFF2 files work correctly, but TTF files caused routing issues (returned HTML instead)
- All static assets must be in client/public/ for development, dist/public/ for production

**Remaining Performance Constraints**:
- Replit hosting has inherent server response time limitations
- React framework bundle includes ~133 KiB of necessary overhead
- Achieving 90+/100 mobile consistently is challenging without CDN hosting and edge caching