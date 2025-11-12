import { lazy, Suspense, useEffect, useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import FeaturedReview from "@/components/FeaturedReview";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PricingSection from "@/components/PricingSection";
import OurTeamSection from "@/components/OurTeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

// Lazy load contact form for better performance
const ContactFormSection = lazy(() => import("@/components/ContactFormSection"));

function LazyContactForm() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect(); // Stop observing after load
        }
      },
      { rootMargin: "200px" }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={formRef}>
      {shouldLoad ? (
        <Suspense fallback={<div className="py-12 md:py-16 lg:py-20 bg-background" />}>
          <ContactFormSection />
        </Suspense>
      ) : (
        <div className="py-12 md:py-16 lg:py-20 bg-background" />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <FeaturedReview />
      <PricingSection />
      {/* <WhoThisIsFor /> */}
      <OurTeamSection />
      <TestimonialsSection />
      <FinalCTA />
      <LazyContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
