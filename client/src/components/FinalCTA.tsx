import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { whatsappConfig, emailConfig } from "@/data/villa-content";

export default function FinalCTA() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(emailConfig.subject);
  const emailBody = encodeURIComponent(emailConfig.defaultMessage);
  const emailLink = `mailto:${emailConfig.emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-6 text-foreground">
          Ready to Book?
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="text-sm md:text-base px-6 md:px-8 w-full sm:w-auto"
            data-testid="button-whatsapp-cta"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Get Quote Via WhatsApp
            </a>
          </Button>
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="text-sm md:text-base px-6 md:px-8 w-full sm:w-auto"
            data-testid="button-email-cta"
          >
            <a href={emailLink}>
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Not ready to chat? Email us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
