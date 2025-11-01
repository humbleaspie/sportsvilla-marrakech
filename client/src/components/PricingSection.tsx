import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Gift, Sparkles } from "lucide-react";
import { whatsappConfig, pricingContent, heroContent } from "@/data/villa-content";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Calendar> = {
      Calendar,
      Gift,
      Sparkles
    };
    return icons[iconName] || Calendar;
  };

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-card-foreground">
            {pricingContent.sectionTitle}
          </h2>
          <Badge variant="default" className="mt-2">
            <Sparkles className="w-3 h-3 mr-1" />
            Special Online Discount - Save £150/night
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          {pricingContent.seasons.map((season, index) => (
            <Card key={index} className="p-4 md:p-6 border-2 border-primary/20">
              <div className="text-center">
                <h3 className="font-semibold text-lg md:text-xl mb-3 text-card-foreground">
                  {season.name}
                </h3>
                
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground line-through mb-1">
                    Regular: {season.regularPrice}
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-primary">{season.onlinePrice}</span>
                    <span className="text-sm md:text-base text-muted-foreground">/night</span>
                  </div>
                  <div className="text-xs md:text-sm text-primary font-semibold mt-1">
                    Save {season.savings}
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground">
                  Sleeps {pricingContent.guestCount}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-6 md:p-8 border-2 border-primary/20">
          <div className="space-y-2 mb-4">
            {pricingContent.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {pricingContent.badges.map((badge, index) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <Badge key={index} variant={index === pricingContent.badges.length - 1 ? "default" : "secondary"} className="px-3 py-1 text-xs md:text-sm">
                  <IconComponent className="w-3 h-3 mr-1" />
                  {badge.text}
                </Badge>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              asChild
              size="lg" 
              className="flex-1 text-sm md:text-base"
              data-testid="button-whatsapp-pricing"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {heroContent.ctaText}
              </a>
            </Button>
          </div>
          
          <p className="text-center text-xs md:text-sm text-muted-foreground mt-3">
            {pricingContent.bonusText}
          </p>
        </Card>
      </div>
    </section>
  );
}
