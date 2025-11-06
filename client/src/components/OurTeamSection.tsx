import { Card } from "@/components/ui/card";
import { Award, Headphones, MessageCircle, Users, BadgeCheck, Star } from "lucide-react";
import { ourTeamContent } from "@/data/villa-content";

export default function OurTeamSection() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Award> = {
      Award,
      Headphones,
      MessageCircle,
      Users,
      BadgeCheck,
      Star
    };
    return icons[iconName] || Award;
  };

  const filteredBenefits = ourTeamContent.benefits.filter(
    benefit => benefit.title !== "Instant WhatsApp Response" && benefit.title !== "Trusted by 1000+ Guests" && benefit.title !== "UK & Marrakech Teams"
  );

  return (
    <section id="team" className="py-6 md:py-10 lg:py-12 bg-card below-fold-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-card-foreground">
            {ourTeamContent.sectionTitle}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            {ourTeamContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {filteredBenefits.map((benefit, index) => {
            const IconComponent = getIcon(benefit.icon);
            return (
              <Card 
                key={index} 
                className="p-3 md:p-6 hover-elevate active-elevate-2"
                data-testid={`benefit-${index}`}
              >
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-1 text-card-foreground leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-base text-muted-foreground leading-snug md:leading-relaxed">
                      {benefit.description}
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
