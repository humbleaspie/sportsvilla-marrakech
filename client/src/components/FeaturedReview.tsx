import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function FeaturedReview() {
  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <Card className="p-6 md:p-10 lg:p-12 text-center border-2 border-primary/20">
          <div className="flex justify-center gap-1 mb-4 md:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 md:w-6 md:h-6 fill-primary text-primary" 
                data-testid={`star-${i + 1}`}
              />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif font-medium text-card-foreground mb-4 md:mb-6">
            "Best Crew and Best Service"
          </blockquote>
          
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            R Shah
          </p>
        </Card>
      </div>
    </section>
  );
}
