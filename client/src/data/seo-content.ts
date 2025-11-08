// ==========================================
// SEO CONTENT - SINGLE SOURCE OF TRUTH
// ==========================================
// This file contains ALL text content for SEO, meta tags, and hero section.
// 
// IMPORTANT: When you update content here:
// 1. Hero title and subtitle automatically update on the page (imported by villa-content.ts)
// 2. You MUST manually update the matching meta tags in client/index.html
//    - Look for the comments that reference this file
//    - Copy the exact text from this file to keep them in sync
// 
// WHY THIS MATTERS:
// - Google and social media crawlers read meta tags from index.html (not React)
// - Keeping these in sync ensures your Google Ads, WhatsApp shares, and search results
//   display the same message as your landing page
//
// IMPORTANT: Do not import images or other assets in this file.

export const seoContent = {
  // Page Title (appears in browser tab and search results)
  // Current: Synced from heroContent.title + key features
  pageTitle: "Marrakech's No.1 6 Bed Luxury Sports Villa | Heated Pool, Private Padel Court, Fully Staffed | Save £150/Night",
  
  // Meta Description (appears in Google search results)
  // Keep under 160 characters for best display
  metaDescription: "Luxury 6-bed sports villa in Marrakech with heated pool, padel court, basketball, gym, cook & maid. Sleeps 12. Save £150/night. Perfect for group getaways.",
  
  // Hero Section Title (H1 - also used in OG tags)
  heroTitle: "Marrakech's No.1 6 Bed Luxury Sports Villa",
  
  // Hero Section Subtitle
  heroSubtitle: "Sleeps 12 • Heated Pool • Private Padel Court • Fully Staffed",
  
  // Open Graph Title (for Facebook/WhatsApp/social sharing)
  ogTitle: "Marrakech's No.1 6 Bed Luxury Sports Villa | Save £150/Night",
  
  // Open Graph Description (for social sharing preview)
  ogDescription: "Luxury 6-bed sports villa with heated pool, private padel court, basketball, gym, cook & maid included. Sleeps 12. Perfect for families & groups. Save £150/night this week!",
  
  // Keywords for SEO
  keywords: [
    "Marrakech villa",
    "sports villa Marrakech",
    "villa with pool Marrakech",
    "padel villa Marrakech",
    "Marrakech 6 bedroom villa",
    "Marrakech villas to rent",
    "Marrakech group villa",
    "luxury villa Marrakech",
    "Marrakech sports villa rental",
    "villa with padel court Marrakech"
  ],
  
  // Site Information
  siteName: "Sports Villa Marrakech",
  siteUrl: "https://sportsvilla.vipatmarrakech.com/",
  author: "The VIP Concierge Group"
};
