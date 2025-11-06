import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components
const VisualTour = lazy(() => import("@/components/VisualTour"));
const WhoThisIsFor = lazy(() => import("@/components/WhoThisIsFor"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const OurTeamSection = lazy(() => import("@/components/OurTeamSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const ContactFormSection = lazy(() => import("@/components/ContactFormSection"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <VisualTour />
        <WhoThisIsFor />
        <PricingSection />
        <OurTeamSection />
        <TestimonialsSection />
        <FinalCTA />
        <ContactFormSection />
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </div>
  );
}
