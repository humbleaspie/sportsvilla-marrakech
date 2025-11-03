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
    <section className="py-4 md:py-6 lg:py-8 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-2 md:mb-4">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
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
                  <h3 className="text-xs md:text-base font-semibold mb-0.5 text-card-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground">
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
