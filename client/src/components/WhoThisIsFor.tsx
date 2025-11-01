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
    <section className="py-8 md:py-10 lg:py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {whoThisIsForContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoThisIsForContent.audiences.map((audience, index) => {
            const IconComponent = getIcon(audience.icon);
            return (
              <Card 
                key={index} 
                className="p-4 hover-elevate active-elevate-2"
                data-testid={`card-reason-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-card-foreground">
                    {audience.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
