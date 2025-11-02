import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials, testimonialsContent } from "@/data/villa-content";

export default function TestimonialsSection() {
  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-foreground">
            {testimonialsContent.sectionTitle}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            {testimonialsContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-2 md:p-6 relative hover-elevate active-elevate-2"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-4 h-4 md:w-8 md:h-8 text-primary/20 mb-1 md:mb-2" />
              <p className="text-[9px] md:text-base italic mb-1 md:mb-4 text-card-foreground leading-snug md:leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-1 md:gap-2">
                <Avatar className="w-6 h-6 md:w-10 md:h-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-[10px] md:text-sm">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[9px] md:text-base text-card-foreground">{testimonial.name}</p>
                  <p className="text-[8px] md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
