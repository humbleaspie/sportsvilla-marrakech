import { Card } from "@/components/ui/card";
import { Users, Trophy, Palmtree, Crown } from "lucide-react";

const targetAudiences = [
  {
    icon: Users,
    title: "Family trips with active teens",
    description: "Give your family the perfect blend of relaxation and adventure with world-class sports facilities"
  },
  {
    icon: Trophy,
    title: "Sports teams or corporate retreats",
    description: "Train, bond, and perform at your best in a private setting designed for champions"
  },
  {
    icon: Palmtree,
    title: "Groups of friends who want sun, fun, and total privacy",
    description: "Experience the ultimate getaway with your crew — no compromises, no crowds"
  },
  {
    icon: Crown,
    title: "Clients used to Dubai-style service — but at ⅓ of the price",
    description: "Enjoy five-star luxury and concierge service without the premium Dubai price tag"
  }
];

export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-card-foreground">
            Who This Villa Is For
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for those who demand excellence and won't settle for ordinary
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetAudiences.map((audience, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2"
              data-testid={`card-audience-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <audience.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-card-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
