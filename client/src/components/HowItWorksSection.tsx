import { Card } from "@/components/ui/card";
import { ArrowRight, Trophy, MapPin, Shield, Home } from "lucide-react";
import { whoThisIsForContent } from "@/data/villa-content";

export default function HowItWorksSection() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Trophy> = {
      Trophy,
      MapPin,
      Shield,
      Home
    };
    return icons[iconName] || Trophy;
  };

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-foreground">
            How It Works
          </h2>
          <p className="text-xs md:text-base text-muted-foreground">
            Booking is simple:
          </p>
        </div>
        
        <Card className="p-2 md:p-6 mb-4 md:mb-8">
          <div className="flex flex-row items-center justify-between gap-1 md:gap-4">
            <div className="flex items-center flex-1">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] md:text-sm font-bold text-primary-foreground">1</span>
                </div>
                <p className="text-[9px] md:text-sm text-card-foreground text-center md:text-left">
                  Choose your travel dates and group size
                </p>
              </div>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-primary flex-shrink-0" />
            
            <div className="flex items-center flex-1">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] md:text-sm font-bold text-primary-foreground">2</span>
                </div>
                <p className="text-[9px] md:text-sm text-card-foreground text-center md:text-left">
                  Pay a deposit based on your length of stay
                </p>
              </div>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-primary flex-shrink-0" />
            
            <div className="flex items-center flex-1">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] md:text-sm font-bold text-primary-foreground">3</span>
                </div>
                <p className="text-[9px] md:text-sm text-card-foreground text-center md:text-left">
                  Final balance is due 30 days before arrival
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mb-3 md:mb-4">
          <h3 className="font-serif text-lg md:text-2xl font-semibold text-foreground">
            {whoThisIsForContent.sectionTitle}
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
          {whoThisIsForContent.audiences.map((audience, index) => {
            const IconComponent = getIcon(audience.icon);
            return (
              <div 
                key={index}
                className="flex items-start gap-2 md:gap-3"
                data-testid={`item-reason-${index}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-0.5">
                    {audience.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
