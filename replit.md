# Marrakech Sports Villa Landing Page

## Overview
This project is a high-conversion, single-page React landing page for a luxury 6-bedroom sports villa in Marrakech. Its primary purpose is lead generation through direct WhatsApp engagement and Tally.so contact form. The design emphasizes a distraction-free user experience, visual storytelling, and clear calls to action, functioning as a "single-purpose conversion machine." The application showcases premium features like a private padel court, heated pool, and chef service.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, using Vite for building and development.
- **Routing**: Lightweight client-side routing with Wouter, primarily for a single-page experience with a 404 fallback.
- **State Management**: React Query for server state, with most content managed via static TypeScript configuration.
- **UI Components**: Shadcn/ui built on Radix UI primitives, using a consistent design system defined in Tailwind CSS.
- **Styling**: Tailwind CSS with custom CSS variables, Google Fonts (Playfair Display, Inter), and a mobile-first responsive approach. Custom utility classes for hover/active states.
- **Content Management**: 
    - All page content (text, images, testimonials, pricing) is centralized in `client/src/data/villa-content.ts` for easy updates.
    - **SEO Content System**: `client/src/data/seo-content.ts` serves as the single source of truth for all SEO-related text (hero titles, meta descriptions, keywords). This file is imported by `villa-content.ts` to automatically update the hero section. Meta tags in `client/index.html` must be manually synced (clearly marked with comments). See `SEO_SYNC_GUIDE.md` for complete documentation.
- **Component Structure**: Modular, section-based components (Hero, VisualTour, WhoThisIsFor, Experience, Pricing, Testimonials) and a persistent floating WhatsApp button. No traditional navigation.
- **Performance Optimizations**:
    - **Image Optimization**: Responsive images (srcset) with WebP format, significantly reducing file sizes. Lazy loading for non-critical images.
    - **Video Optimization**: Hero video trimmed and optimized (WebP poster, `preload="none"`, deferred loading) for faster LCP.
    - **Font Optimization**: Self-hosted WOFF2 fonts with asynchronous loading to prevent render-blocking.
    - **JavaScript Optimization**: Contact form lazy-loaded using IntersectionObserver to defer heavy dependencies.
    - **CSS Optimization**: Inlined critical CSS for above-the-fold content and deferred main CSS loading for faster initial paint.
    - **Core Web Vitals**: Achieved excellent TBT (0ms) and CLS (0), with LCP and FCP optimized as much as possible given hosting constraints.

### Backend
- **Server Framework**: Express.js with Node.js and TypeScript (for Replit development).
- **Development**: Vite middleware integration for HMR.
- **Build Process**: Vite for frontend (`dist/public`), esbuild for backend.
- **Contact Form**: Uses Tally.so embedded form (https://tally.so/r/VLE4Za) - no backend API required.
  - Sends email notifications directly to Rupal@thevipgroups.com
  - No API keys or environment variables needed
  - 100% reliable email delivery
  - Previous Cloudflare Functions implementation (`functions/api/enquiries.ts`) replaced with Tally.so embed

### Data Storage
- **Current**: In-memory storage (`MemStorage`) for rapid development.
- **Future-Ready**: Drizzle ORM configured for PostgreSQL (`shared/schema.ts`) with migration support, enabling seamless transition to persistent storage.

## External Dependencies
- **UI/Components**: Radix UI, Embla Carousel, Lucide React, React Hook Form, Zod.
- **Styling**: Tailwind CSS, PostCSS, Class Variance Authority, CLSX, Tailwind Merge.
- **Database**: Drizzle ORM, @neondatabase/serverless (for PostgreSQL), Drizzle Zod.
- **Build/Dev Tools**: Vite, esbuild, TypeScript, Replit-specific plugins (cartographer, dev banner, runtime error modal).
- **Asset Management**: Images and videos in `attached_assets` with Vite alias `@assets`.
- **Communication**: WhatsApp Business API via direct `wa.me` links for lead capture.
- **Typography**: Google Fonts CDN (Playfair Display, Inter) initially, now self-hosted WOFF2.
- **Analytics**: Google Ads (deferred loading).