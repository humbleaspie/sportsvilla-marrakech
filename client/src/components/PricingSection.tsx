import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Gift, Sparkles } from "lucide-react";
import { whatsappConfig, pricingContent, heroContent } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('pricing_section');
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Calendar> = {
      Calendar,
      Gift,
      Sparkles
    };
    return icons[iconName] || Calendar;
  };

  return (
    <section id="pricing" className="pt-2 pb-6 md:pt-3 md:pb-10 lg:pt-3 lg:pb-12 bg-card below-fold-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-card-foreground">
            {pricingContent.sectionTitle}
          </h2>
          <h3 className="text-xs md:text-base lg:text-lg font-medium text-card-foreground mt-1 md:mt-2">
            Limited Dates Available – Book Direct & Save
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-6">
          {pricingContent.seasons.map((season, index) => (
            <Card key={index} className="p-2 md:p-6 border-2 border-primary/20">
              <div className="text-center">
                <h3 className="font-semibold text-xs md:text-xl mb-1 md:mb-3 text-card-foreground">
                  {season.name}
                </h3>
                
                <div className="mb-1 md:mb-3">
                  <div className="text-[10px] md:text-sm text-muted-foreground line-through mb-0.5 md:mb-1">
                    {season.regularPrice}
                  </div>
                  <div className="text-[9px] md:text-xs text-primary font-bold mb-0.5">
                    Special Online Rate
                  </div>
                  <div className="flex items-baseline justify-center gap-0.5 md:gap-2">
                    <span className="text-base md:text-3xl font-bold text-primary">{season.onlinePrice}</span>
                    <span className="text-[10px] md:text-base text-muted-foreground">/nt</span>
                  </div>
                  <div className="text-[9px] md:text-sm text-primary font-semibold mt-0.5 md:mt-1">
                    Save {season.savings}
                  </div>
                </div>
                
                <p className="text-[9px] md:text-sm text-muted-foreground">
                  Sleeps {pricingContent.guestCount}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-3 md:p-8 border-2 border-primary/20">
          <div className="space-y-2 md:space-y-3 mb-2 md:mb-4">
            {pricingContent.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-1.5 md:gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-base text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center mb-2 md:mb-4">
            {pricingContent.badges.map((badge, index) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <Badge key={index} variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-sm">
                  <IconComponent className="w-2.5 h-2.5 md:w-3 md:h-3 mr-0.5 md:mr-1" />
                  {badge.text}
                </Badge>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <Button 
              asChild
              size="default"
              className="flex-1 text-xs md:text-base bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]"
              data-testid="button-whatsapp-pricing"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                Check Dates & Get Instant Quote
              </a>
            </Button>
            <Button 
              asChild
              size="default"
              className="flex-1 text-xs md:text-base"
              data-testid="button-enquiry-form-pricing"
            >
              <a href="#contact">
                More info on this / other villas? Fill in form
              </a>
            </Button>
          </div>
          
          <p className="text-center text-[10px] md:text-sm text-muted-foreground mt-2 md:mt-3">
            {pricingContent.bonusText}
          </p>
        </Card>
      </div>
    </section>
  );
}
