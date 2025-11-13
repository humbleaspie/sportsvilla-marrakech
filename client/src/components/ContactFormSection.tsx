import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section 
      id="contact" 
      className="py-6 md:py-10 lg:py-12 bg-background below-fold-section"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-foreground">
            Get in Touch
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <p className="text-xs md:text-sm text-foreground">
              London team with a Marrakech office
            </p>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            (We will reply within 2hrs)
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
}
