import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, CreditCard, Gift } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-card-foreground">
            Pricing & Availability
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 border-2 border-primary/20">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl md:text-6xl font-bold text-card-foreground">£850</span>
              <span className="text-xl md:text-2xl text-muted-foreground">/night</span>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Sleeps 12 = <span className="font-semibold text-primary">£70 per person</span>
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-card-foreground">6 ensuite bedrooms with premium linens</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-card-foreground">Private padel court & basketball court</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-card-foreground">Heated Bali stone pool (30°C year-round)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-card-foreground">Private chef & full concierge service</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-card-foreground">Mercedes Vito airport transfers</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Only a few summer dates left!
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CreditCard className="w-4 h-4 mr-2" />
              Klarna available
            </Badge>
            <Badge variant="default" className="px-4 py-2 text-sm">
              <Gift className="w-4 h-4 mr-2" />
              £100 Amazon Voucher bonus
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="flex-1 text-base md:text-lg"
              data-testid="button-whatsapp-pricing"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat to our team via WhatsApp
              </a>
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Book this week and receive a £100 Amazon Voucher
          </p>
        </Card>
      </div>
    </section>
  );
}
