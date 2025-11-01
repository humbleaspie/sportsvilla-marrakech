import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ExperienceSection from "@/components/ExperienceSection";
import OurTeamSection from "@/components/OurTeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <WhoThisIsFor />
      <ExperienceSection />
      <OurTeamSection />
      <PricingSection />
      <TestimonialsSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
