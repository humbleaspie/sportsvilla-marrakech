import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import OurTeamSection from "@/components/OurTeamSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <PricingSection />
      <HowItWorksSection />
      <OurTeamSection />
      <TestimonialsSection />
      <FinalCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
