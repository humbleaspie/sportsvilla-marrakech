import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const ContactForm = lazy(() => import("@/components/ContactForm"));

export default function ContactFormSection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      className="py-6 md:py-10 lg:py-12 bg-background below-fold-section"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-foreground">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Have questions about the villa? Send us a message and we'll respond within 24 hours.
          </p>
        </div>
        
        {shouldLoad ? (
          <Suspense fallback={
            <Card className="p-8 flex items-center justify-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </Card>
          }>
            <ContactForm />
          </Suspense>
        ) : (
          <Card className="p-8 min-h-[400px]" />
        )}
      </div>
    </section>
  );
}
