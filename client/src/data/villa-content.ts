// ==========================================
// VILLA CONTENT CONFIGURATION
// ==========================================
// Edit this file to customize all text, images, and videos for your landing page

// Import your own images here - replace these with your actual villa photos
// To add your own images: Place them in the 'attached_assets' folder and import like this:
// import myImage from "@assets/my-image.jpg";

import heroVideo from "@assets/generated_images/video.mp4";
import poolImage from "@assets/generated_images/swimming_pool.png";
import padelImage from "@assets/generated_images/Bali_stone_pool.png";
import basketballImage from "@assets/generated_images/padel_court.png";
import outdoorTvImage from "@assets/generated_images/Football_Pitch.png";
import chefImage from "@assets/generated_images/Basketball_Court.png";
import gymImage from "@assets/generated_images/Living_Area.png";
import spaImage from "@assets/generated_images/Kitchen.png";
import diningImage from "@assets/generated_images/Bedroom_3.png";
import loungeImage from "@assets/generated_images/Gym.png";
import rooftopImage from "@assets/generated_images/Garden_3.png";

// ==========================================
// HERO SECTION
// ==========================================
export const heroContent = {
  // VIDEO OPTION: Set this to your video URL to use video instead of image
  // Example: videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID" or "/path/to/your/video.mp4"
  videoUrl: heroVideo, // Leave empty to use image instead
  
  // IMAGE OPTION: Used when videoUrl is empty (not used when video is set)
  backgroundImage: "",
  
  title: "Marrakech's No.1 Sports Villa",
  subtitle: "Luxury 6-Bed Villa with Private Padel Court",
  description: "",
  
  badges: [
    { text: "Padel, Pool, Basketball, Gym", icon: "Dumbbell" },
    { text: "Sleeps 12", icon: "Users" },
    { text: "From £600/night", icon: "Home" }
  ],
  
  ctaText: "Get Instant Quote Via WhatsApp"
};

// ==========================================
// GALLERY / VISUAL TOUR
// ==========================================
// Add, remove, or reorder images as needed
export const galleryImages = [
  {
    src: poolImage,
    caption: "Your own stunning Bali stone pool"
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
    src: spaImage,
    caption: "Traditional Moroccan spa and hammam for ultimate relaxation"
  },
  {
    src: diningImage,
    caption: "Outdoor dining terrace with Atlas Mountain views"
  },
  {
    src: loungeImage,
    caption: "Spacious living lounge with modern Moroccan design"
  },
  {
    src: rooftopImage,
    caption: "Rooftop terrace with panoramic mountain sunset views"
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
// WHY THIS VILLA SECTION
// ==========================================
export const whoThisIsForContent = {
  sectionTitle: "Why Book This Villa?",
  sectionSubtitle: "Everything you need for an unforgettable Marrakech experience",
  
  audiences: [
    {
      title: "5 star sports facilities",
      description: "Padel court, basketball court, and fully-equipped gym.",
      icon: "Trophy"
    },
    {
      title: "Only 20mins from Medina",
      description: "Close to Marrakech's souks and culture, far enough for privacy.",
      icon: "MapPin"
    },
    {
      title: "Maid, Cook & 24/7 Security",
      description: "Fresh breakfast daily, housekeeping, and professional security.",
      icon: "Shield"
    },
    {
      title: "Spacious Living Area",
      description: "6 double bedrooms for families or groups up to 12 guests.",
      icon: "Home"
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
    "Play a padel match before your <strong>cook-prepared breakfast</strong>.",
    "Train in your private gym while your friends shoot hoops.",
    "Watch the <strong>sunset over the Atlas Mountains</strong> — from your heated pool."
  ],
  
  closingStatement: ""
};

// ==========================================
// OUR TEAM SECTION
// ==========================================
export const ourTeamContent = {
  sectionTitle: "Why Book With Us?",
  sectionSubtitle: "Experience and service you can trust",
  
  benefits: [
    {
      title: "Marrakech Specialists",
      description: "10+ years experience in luxury villa rentals.",
      icon: "Award"
    },
    {
      title: "Personal Concierge",
      description: "Airport transfers & activities covered.",
      icon: "Headphones"
    },
    {
      title: "Instant WhatsApp Response",
      description: "No waiting days for replies.",
      icon: "MessageCircle"
    },
    {
      title: "UK & Marrakech Teams",
      description: "High service all the way through.",
      icon: "Users"
    },
    {
      title: "Best Price Guarantee",
      description: "Found it cheaper? We'll match it.",
      icon: "BadgeCheck"
    },
    {
      title: "Trusted by 1000+ Guests",
      description: "5-star reviews and repeat bookings.",
      icon: "Star"
    }
  ]
};

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================
export const socialLinks = {
  instagram: "https://www.instagram.com/thevipgroups",
  website: "https://www.vipatmarrakech.com"
};

// ==========================================
// PRICING SECTION
// ==========================================
export const pricingContent = {
  sectionTitle: "Pricing & Availability",
  
  guestCount: 12,
  
  seasons: [
    {
      name: "Low Season",
      regularPrice: "£750",
      onlinePrice: "£600",
      savings: "£150"
    },
    {
      name: "Mid Season",
      regularPrice: "£850",
      onlinePrice: "£700",
      savings: "£150"
    },
    {
      name: "High Season",
      regularPrice: "£950",
      onlinePrice: "£800",
      savings: "£150"
    }
  ],
  
  features: [
    "6 double bedrooms",
    "Padel & basketball court",
    "Heated pool",
    "Outdoor TV & Gym",
    "Cook & Maid service",
  ],
  
  badges: [
    { text: "Dates are going quickly", icon: "Calendar" },
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
  phoneNumber: "+447789915588",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};
