import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PricingSection from "@/components/PricingSection";
import OurTeamSection from "@/components/OurTeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import ContactFormSection from "@/components/ContactFormSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <PricingSection />
      {/* <WhoThisIsFor /> */}
      <OurTeamSection />
      <TestimonialsSection />
      <FinalCTA />
      <ContactFormSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
