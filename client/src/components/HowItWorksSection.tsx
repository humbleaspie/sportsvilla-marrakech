import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl font-semibold mb-1 md:mb-2 text-foreground">
            🧭 How It Works
          </h2>
          <p className="text-xs md:text-base text-muted-foreground">
            Booking is simple:
          </p>
        </div>
        
        <Card className="p-2 md:p-6">
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
      </div>
    </section>
  );
}
