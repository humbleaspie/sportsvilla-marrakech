import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ExperienceSection from "@/components/ExperienceSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <WhoThisIsFor />
      <ExperienceSection />
      <PricingSection />
      <TestimonialsSection />
      <WhatsAppButton />
    </div>
  );
}
