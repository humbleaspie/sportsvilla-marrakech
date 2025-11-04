import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";

export default function FinalCTA() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-6 text-foreground">
          Ready to Book?
        </h2>
        <Button 
          asChild 
          size="lg"
          className="text-sm md:text-base px-6 md:px-8"
          data-testid="button-final-cta"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Get Instant Quote Via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
