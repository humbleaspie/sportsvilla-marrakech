// ==========================================
// VILLA CONTENT CONFIGURATION
// ==========================================
// Edit this file to customize all text, images, and videos for your landing page

// Import your own images here - replace these with your actual villa photos
// To add your own images: Place them in the 'attached_assets' folder and import like this:
// import myImage from "@assets/my-image.jpg";

import heroVideo from "@assets/generated_images/video.mp4";
import heroPoster from "@assets/generated_images/video_poster.jpg";
import poolImage from "@assets/generated_images/swimming_pool.webp";
import poolImageMobile from "@assets/generated_images/swimming_pool_mobile.webp";
import padelImage from "@assets/generated_images/Bali_stone_pool.webp";
import padelImageMobile from "@assets/generated_images/Bali_stone_pool_mobile.webp";
import basketballImage from "@assets/generated_images/Padel_court.webp";
import basketballImageMobile from "@assets/generated_images/Padel_court_mobile.webp";
import outdoorTvImage from "@assets/generated_images/Football_Pitch.webp";
import outdoorTvImageMobile from "@assets/generated_images/Football_Pitch_mobile.webp";
import chefImage from "@assets/generated_images/Basketball_Court.webp";
import chefImageMobile from "@assets/generated_images/Basketball_Court_mobile.webp";
import gymImage from "@assets/generated_images/Living_Area.webp";
import gymImageMobile from "@assets/generated_images/Living_Area_mobile.webp";
import spaImage from "@assets/generated_images/Kitchen.webp";
import spaImageMobile from "@assets/generated_images/Kitchen_mobile.webp";
import diningImage from "@assets/generated_images/Bedroom_3.webp";
import diningImageMobile from "@assets/generated_images/Bedroom_3_mobile.webp";
import loungeImage from "@assets/generated_images/Gym.webp";
import loungeImageMobile from "@assets/generated_images/Gym_mobile.webp";
import rooftopImage from "@assets/generated_images/Garden_3.webp";
import rooftopImageMobile from "@assets/generated_images/Garden_3_mobile.webp";

// ==========================================
// HERO SECTION
// ==========================================
export const heroContent = {
  // VIDEO OPTION: Set this to your video URL to use video instead of image
  // Example: videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID" or "/path/to/your/video.mp4"
  videoUrl: heroVideo, // Leave empty to use image instead
  videoPoster: heroPoster, // Poster image shown before video loads
  
  // IMAGE OPTION: Used when videoUrl is empty (not used when video is set)
  backgroundImage: "",
  
  title: "Marrakech's No.1 6 Bed Luxury Sports Villa",
  subtitle: "Sleeps 12 • Heated Pool • Private Padel Court • Fully Staffed\n⚡ Autumn Sale – Save £150/night This Week!",
  description: "",
  
  badges: [
    { text: "⚡ Autumn Sale ⚡", icon: "" },
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
    srcMobile: poolImageMobile,
    caption: "Enjoy your own private Bali stone pool",
    width: 3200,
    height: 2344
  },
  {
    src: padelImage,
    srcMobile: padelImageMobile,
    caption: "Relax in the heated pool after a padel match",
    width: 3200,
    height: 2344
  },
  {
    src: basketballImage,
    srcMobile: basketballImageMobile,
    caption: "Play Padel under the Moroccan sun",
    width: 3200,
    height: 2344
  },
  {
    src: outdoorTvImage,
    srcMobile: outdoorTvImageMobile,
    caption: "Train on your own football pitch",
    width: 3200,
    height: 2344
  },
  {
    src: chefImage,
    srcMobile: chefImageMobile,
    caption: "Shoot hoops on the half basketball court",
    width: 3200,
    height: 2344
  },
  {
    src: gymImage,
    srcMobile: gymImageMobile,
    caption: "Unwind in the spacious living area",
    width: 3200,
    height: 2344
  },
  {
    src: spaImage,
    srcMobile: spaImageMobile,
    caption: "Modern kitchen with all appliances",
    width: 3200,
    height: 2344
  },
  {
    src: diningImage,
    srcMobile: diningImageMobile,
    caption: "6 stunning double bedrooms for families and groups",
    width: 3200,
    height: 2344
  },
  {
    src: loungeImage,
    srcMobile: loungeImageMobile,
    caption: "Workout in your home gym before a sunset pool session",
    width: 3200,
    height: 2344
  },
  {
    src: rooftopImage,
    srcMobile: rooftopImageMobile,
    caption: "Enjoy the stunning grounds",
    width: 3200,
    height: 2344
  }
];

// ==========================================
// TESTIMONIALS
// ==========================================
// Edit, add, or remove testimonials as needed
export const testimonials = [
  {
    quote: "Best Crew and best service.",
    name: "Raj S.",
    location: "USA",
    initials: "RS"
  },
  {
    quote: "The VIP Group were brillant at organising everything for us.",
    name: "Gary K.",
    location: "UK",
    initials: "GK"
  },
  {
    quote: "Friendly and attentive service from start to finish!.",
    name: "Sophie S",
    location: "UK",
    initials: "SS"
  }
];

// ==========================================
// WHY THIS VILLA SECTION
// ==========================================
export const whoThisIsForContent = {
  sectionTitle: "Why this is our No.1 Villa",
  sectionSubtitle: "Everything you need for an unforgettable Marrakech experience",
  
  audiences: [
    {
      title: "5 star sports facilities",
      description: "Padel & basketball court, football pitch & home gym.",
      icon: "Trophy"
    },
    {
      title: "Only 20/25mins from Medina",
      description: "Close to Marrakech's souks and culture, far enough for privacy.",
      icon: "MapPin"
    },
    {
      title: "Maid & Cook Included",
      description: "No stress - let the staff take care of you.",
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
      description: "Our team can plan the perfect trip.",
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
      description: "Found it cheaper on AIRBNB? We'll match it.",
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
    "Sleep 12 across 6 double bedrooms",
    "Padel & basketball Court",
    "Bali stone pool (heating optional)",
    "Football Pitch, Gym & Outdoor TV",
    "20-25mins from city centre",
    "Cook & Maid service (included)",
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
  sectionSubtitle: "From sunrise workouts on your private padel court to sunset dips in your heated pool — there's no villa in Marrakech like this one. Perfect for groups up to 12 guests seeking the ultimate Marrakech sports villa experience"
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================
export const testimonialsContent = {
  sectionTitle: "What Our Guests Say",
  sectionSubtitle: "Real experiences from families, couples, and groups who've stayed with us"
};

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
export const whatsappConfig = {
  phoneNumber: "+447728586430",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};

// ==========================================
// EMAIL CONFIGURATION
// ==========================================
export const emailConfig = {
  emailAddress: "enquiry@vipatmarrakech.com",
  subject: "Sports Villa Inquiry",
  defaultMessage: "Hi! I'm interested in booking the Sports Villa. Could you please send me more information and availability?"
};
