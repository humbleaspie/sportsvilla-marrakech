# Design Guidelines: Marrakech Sports Villa Landing Page

## Design Approach

**Reference-Based: Luxury Hospitality**
Drawing inspiration from Airbnb Luxe and Booking.com premium properties, with emphasis on aspirational imagery, trust-building elements, and frictionless conversion paths. The design should feel exclusive yet approachable, combining Dubai-style luxury with warm Moroccan hospitality.

**Core Principle:** Single-purpose conversion machine - every element drives toward WhatsApp engagement.

---

## Typography System

**Font Families:**
- Headlines: Playfair Display (via Google Fonts) - serif elegance for luxury positioning
- Body & UI: Inter (via Google Fonts) - clean, highly readable sans-serif

**Type Hierarchy:**
- H1 (Hero): 3xl to 6xl responsive, font-bold, Playfair Display
- H2 (Section titles): 2xl to 4xl responsive, font-semibold, Playfair Display  
- H3 (Subsections): xl to 2xl, font-semibold, Inter
- Body text: base to lg, font-normal, Inter, leading-relaxed
- Feature callouts: sm to base, font-medium, Inter, uppercase tracking-wide
- Testimonial text: base to lg, font-normal, Inter, italic
- CTA buttons: base to lg, font-semibold, Inter

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 to space-y-16
- Card padding: p-6 to p-8
- Button padding: px-8 py-4

**Container Strategy:**
- Full-width hero and visual sections: w-full
- Content sections: max-w-7xl mx-auto px-4 md:px-6
- Text-heavy content: max-w-4xl mx-auto
- No traditional header navigation (distraction-free)

---

## Component Library

### 1. Hero Section (Full-Screen Impact)
- Full viewport height background (video or high-res image of villa)
- Dark gradient overlay (bottom to top) for text legibility
- Centered content stack with generous vertical spacing
- Headline + subheadline + feature badges + dual CTAs
- Feature badges: Grid of 3-4 key stats (sleeps 12, heated pool, etc.) with icons from Heroicons
- Buttons with frosted glass/blur background effect (backdrop-blur-sm)
- Scroll indicator at bottom center

### 2. Visual Tour Gallery
- Masonry grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- High-quality images with 4:3 aspect ratio, rounded corners (rounded-lg)
- Overlay captions on hover/tap with semi-transparent background
- Lightbox/modal capability for full-screen viewing
- Each image card includes: photo + caption text overlay

### 3. Value Proposition Cards (Who This Is For)
- 2-column grid on desktop (grid-cols-1 md:grid-cols-2)
- Each card: icon (Heroicons) + headline + supporting text
- Cards with subtle elevation (shadow-lg)
- Generous internal padding (p-8)
- Rounded corners (rounded-xl)

### 4. Experience Narrative Section
- Single column, centered, max-w-3xl
- Large pull-quote style formatting
- Interspersed with 2-3 smaller supporting images (inline, floating)
- Increased line height for luxury feel (leading-loose)
- Each paragraph separated by significant spacing

### 5. Pricing & Availability Block
- Prominent card/panel design with border accent
- Price displayed large and bold (4xl to 6xl)
- Per-person breakdown in smaller text
- Urgency indicators (limited availability) with subtle pulse animation
- Incentive callout (Amazon voucher) in highlighted box
- Payment options (Klarna) with logos
- Dual CTA buttons stacked or side-by-side

### 6. Testimonial Carousel
- 3-column grid on desktop, single column mobile
- Each testimonial card: quote + guest name + location
- Quote marks as decorative element (text-6xl opacity-20)
- Profile images (circular, 64px) if available, otherwise initials
- Cards with consistent height and shadow

### 7. Fixed WhatsApp Button
- Bottom-right fixed position (fixed bottom-8 right-8)
- Large, circular button (w-16 h-16) with WhatsApp icon
- Pulsing ring animation for attention
- Expands on hover to show "Chat to our team"
- Opens WhatsApp with pre-filled message

---

## Images

### Required Images:

1. **Hero Background** (16:9 or wider aspect ratio, 1920x1080 minimum)
   - Dramatic drone footage of villa at sunset/golden hour, showcasing pool, padel court, and Atlas Mountains backdrop
   - Option: Background video loop (15-30 seconds) showing pool, court, lifestyle

2. **Visual Tour Gallery** (Minimum 8 images, 1200x900px each):
   - Heated Bali stone pool with loungers and mountain views
   - Padel court with players in action or pristine court at sunset
   - Basketball court with dramatic lighting
   - Outdoor TV/entertainment setup with seating area
   - Private chef plating gourmet dishes in modern kitchen
   - Luxury ensuite bedroom with high-end linens
   - Mercedes Vito vehicle for airport transfers
   - Gym equipment and training area
   - Bonus: Aerial villa overview, outdoor dining setup

3. **Supporting Images** (Optional, 800x600px):
   - Atlas Mountains landscape for section backgrounds
   - Moroccan architectural details
   - Lifestyle shots (people enjoying amenities)

### Image Treatment:
- All images optimized and lazy-loaded for performance
- Subtle zoom effect on gallery hover
- Professional editing: high contrast, warm tones, aspirational feel

---

## Interaction & Animation

**Minimal, Purposeful Motion:**
- Smooth scroll behavior between sections
- Fade-in on scroll for section reveals (subtle, 200-300ms)
- Hover scale on gallery images (scale-105)
- WhatsApp button pulse animation (continuous, gentle)
- NO auto-playing carousels or distracting effects

**Performance Priority:**
- Lazy load all images below fold
- Video as background: muted, autoplay, loop, compressed
- Optimize all assets for sub-3-second load time

---

## Mobile Optimization

**Mobile-First Approach:**
- Stack all multi-column layouts to single column below md breakpoint
- Increase touch target sizes (min 44x44px)
- Hero headline scales down gracefully (text-3xl on mobile)
- WhatsApp button remains accessible but slightly smaller on mobile
- Gallery switches to single column with full-width images
- Generous vertical spacing maintained (never cramped)

---

## Conversion Elements

**Primary CTA:** "Chat to our team via WhatsApp"
- Large button (text-lg px-10 py-5)
- Appears in hero, pricing section, and floating button
- WhatsApp green accent (visual hierarchy)
- Linked to +44 7454 454984 with pre-filled message template

**Secondary CTA:** "Check Availability"
- Paired with primary in hero section
- Opens WhatsApp with availability-specific message

**Trust Signals:**
- Feature badges in hero (10 mins from Medina, sleeps 12, etc.)
- Testimonial section with real names and locations
- Payment flexibility mention (Klarna)
- Concierge service highlights

---

## Special Considerations

**Editable Testimonials:**
- Structure testimonial section with clear, repeatable card pattern
- Each testimonial in distinct container with consistent markup
- Comments in code marking testimonial edit zones

**Zero Navigation:**
- No header menu or footer links
- Pure scroll-based experience
- All sections accessible via smooth scroll from top

**Luxury Aesthetic Markers:**
- Ample whitespace (never cramped)
- Sophisticated serif headlines
- High-quality imagery dominates
- Understated elegance over flashy effects
- Premium feel through restraint and refinement