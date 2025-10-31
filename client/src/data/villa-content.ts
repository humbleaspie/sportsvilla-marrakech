// ==========================================
// VILLA CONTENT CONFIGURATION
// ==========================================
// Edit this file to customize all text, images, and videos for your landing page

// Import your own images here - replace these with your actual villa photos
// To add your own images: Place them in the 'attached_assets' folder and import like this:
// import myImage from "@assets/my-image.jpg";

import heroImage from "@assets/generated_images/Villa_hero_sunset_view_049ff5ba.png";
import poolImage from "@assets/generated_images/Bali_stone_pool_loungers_57cd748d.png";
import padelImage from "@assets/generated_images/Pristine_padel_court_sunset_48cbb9e6.png";
import basketballImage from "@assets/generated_images/Basketball_court_dramatic_lighting_3860707c.png";
import outdoorTvImage from "@assets/generated_images/Outdoor_TV_entertainment_area_b52a60cb.png";
import chefImage from "@assets/generated_images/Private_chef_plating_gourmet_103305f4.png";
import bedroomImage from "@assets/generated_images/Luxury_ensuite_bedroom_1ba22fc6.png";
import mercedesImage from "@assets/generated_images/Mercedes_Vito_luxury_transfer_39ea95cd.png";
import gymImage from "@assets/generated_images/Luxury_home_gym_equipment_91ef8979.png";

// ==========================================
// HERO SECTION
// ==========================================
export const heroContent = {
  // VIDEO OPTION: Set this to your video URL to use video instead of image
  // Example: videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID" or "/path/to/your/video.mp4"
  videoUrl: "", // Leave empty to use image instead
  
  // IMAGE OPTION: Used when videoUrl is empty
  backgroundImage: heroImage,
  
  title: "Marrakesh's #1 Sports Villa Experience",
  subtitle: "Private 6-Bedroom Villa with Padel Court, Heated Pool & Chef Service",
  description: "This villa is booked by athletes, influencers, and elite families who want to train, relax, and play — all in one place.",
  
  badges: [
    { text: "10 mins from Medina", icon: "MapPin" },
    { text: "Sleeps 12", icon: "Users" },
    { text: "From £850/night", icon: "Home" }
  ],
  
  ctaText: "Chat to our team via WhatsApp"
};

// ==========================================
// GALLERY / VISUAL TOUR
// ==========================================
// Add, remove, or reorder images as needed
export const galleryImages = [
  {
    src: poolImage,
    caption: "Your own heated Bali stone pool — 30° year-round"
  },
  {
    src: padelImage,
    caption: "Play padel under the Moroccan sun"
  },
  {
    src: basketballImage,
    caption: "Full-size basketball court with dramatic lighting"
  },
  {
    src: outdoorTvImage,
    caption: "Stream Netflix poolside or catch the match outdoors"
  },
  {
    src: chefImage,
    caption: "Private chef preparing gourmet meals daily"
  },
  {
    src: gymImage,
    caption: "Fully-equipped gym with Atlas Mountain views"
  },
  {
    src: bedroomImage,
    caption: "6 beautiful ensuite bedrooms with premium linens"
  },
  {
    src: mercedesImage,
    caption: "Mercedes Vito airport transfers included"
  }
];

// ==========================================
// TESTIMONIALS
// ==========================================
// Edit, add, or remove testimonials as needed
export const testimonials = [
  {
    quote: "Unreal! My teens were on the court while I was in the pool. Best holiday ever.",
    name: "Jamie T.",
    location: "UK",
    initials: "JT"
  },
  {
    quote: "Everything was smooth — transfers, chef, reservations. Felt like Dubai, but better.",
    name: "Reema A.",
    location: "UAE",
    initials: "RA"
  },
  {
    quote: "The padel court is world-class. We trained every morning and the chef kept us fueled. Incredible experience.",
    name: "Marcus L.",
    location: "USA",
    initials: "ML"
  }
];

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
export const whatsappConfig = {
  phoneNumber: "+447454454984",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};
