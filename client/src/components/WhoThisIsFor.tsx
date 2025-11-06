import { Card } from "@/components/ui/card";
import { Trophy, MapPin, ChefHat, Shield, Home } from "lucide-react";
import { whoThisIsForContent } from "@/data/villa-content";

export default function WhoThisIsFor() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Trophy> = {
      Trophy,
      MapPin,
      ChefHat,
      Shield,
      Home
    };
    return icons[iconName] || Trophy;
  };

  return (
    <section id="features" className="pt-2 pb-6 md:pt-4 md:pb-10 lg:pt-6 lg:pb-12 bg-card below-fold-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            {whoThisIsForContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {whoThisIsForContent.audiences.map((audience, index) => {
            const IconComponent = getIcon(audience.icon);
            return (
              <Card 
                key={index} 
                className="p-3 md:p-6 hover-elevate active-elevate-2"
                data-testid={`card-reason-${index}`}
              >
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-1 text-card-foreground leading-tight">
                      {audience.title}
                    </h3>
                    <p className="text-xs md:text-base text-muted-foreground leading-snug md:leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
