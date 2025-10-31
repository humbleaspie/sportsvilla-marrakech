// ==========================================
// VILLA CONTENT CONFIGURATION
// ==========================================
// Edit this file to customize all text, images, and videos for your landing page

// Import your own images here - replace these with your actual villa photos
// To add your own images: Place them in the 'attached_assets' folder and import like this:
// import myImage from "@assets/my-image.jpg";

import heroImage from "@assets/Uploaded_images/Picture1.png";
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
// WHO THIS IS FOR SECTION
// ==========================================
export const whoThisIsForContent = {
  sectionTitle: "Who This Villa Is For",
  sectionSubtitle: "Designed for those who demand excellence and won't settle for ordinary",
  
  audiences: [
    {
      title: "Family trips with active teens",
      description: "Give your family the perfect blend of relaxation and adventure with world-class sports facilities",
      icon: "Users"
    },
    {
      title: "Sports teams or corporate retreats",
      description: "Train, bond, and perform at your best in a private setting designed for champions",
      icon: "Trophy"
    },
    {
      title: "Groups of friends who want sun, fun, and total privacy",
      description: "Experience the ultimate getaway with your crew — no compromises, no crowds",
      icon: "Palmtree"
    },
    {
      title: "Clients used to Dubai-style service — but at ⅓ of the price",
      description: "Enjoy five-star luxury and concierge service without the premium Dubai price tag",
      icon: "Crown"
    }
  ]
};

// ==========================================
// EXPERIENCE SECTION
// ==========================================
export const experienceContent = {
  sectionTitle: "The Experience",
  
  experiences: [
    "Wake up to <strong>fresh mint tea by the pool</strong>.",
    "Play a padel match before your <strong>chef-prepared breakfast</strong>.",
    "Train in your private gym while your friends shoot hoops.",
    "Watch the <strong>sunset over the Atlas Mountains</strong> — from your heated pool."
  ],
  
  closingStatement: "Everything is handled. From airport pickup to club bookings — we manage it all."
};

// ==========================================
// PRICING SECTION
// ==========================================
export const pricingContent = {
  sectionTitle: "Pricing & Availability",
  
  pricePerNight: "£850",
  guestCount: 12,
  pricePerPerson: "£70",
  
  features: [
    "6 ensuite bedrooms with premium linens",
    "Private padel court & basketball court",
    "Heated Bali stone pool (30°C year-round)",
    "Private chef & full concierge service",
    "Mercedes Vito airport transfers"
  ],
  
  badges: [
    { text: "Only a few summer dates left!", icon: "Calendar" },
    { text: "Klarna available", icon: "CreditCard" },
    { text: "£100 Amazon Voucher bonus", icon: "Gift" }
  ],
  
  bonusText: "Book this week and receive a £100 Amazon Voucher"
};

// ==========================================
// VISUAL TOUR SECTION
// ==========================================
export const visualTourContent = {
  sectionTitle: "Experience Luxury at Every Turn",
  sectionSubtitle: "From sunrise workouts to sunset pool sessions — discover what makes this villa extraordinary"
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================
export const testimonialsContent = {
  sectionTitle: "What Our Guests Say",
  sectionSubtitle: "Real experiences from families, athletes, and groups who've stayed with us"
};

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
export const whatsappConfig = {
  phoneNumber: "+447454454984",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};
