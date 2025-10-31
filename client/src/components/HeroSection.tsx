import { Button } from "@/components/ui/button";
import { MapPin, Users, Home } from "lucide-react";
import heroImage from "@assets/generated_images/Villa_hero_sunset_view_049ff5ba.png";

export default function HeroSection() {
  const whatsappNumber = "+447454454984";
  const whatsappMessage = encodeURIComponent("Hi! I saw the Sports Villa online — can I get a quote?");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Marrakesh's #1 Sports Villa Experience
        </h1>
        
        <p className="text-xl md:text-2xl font-medium mb-4">
          Private 6-Bedroom Villa with Padel Court, Heated Pool & Chef Service
        </p>
        
        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          "This villa is booked by athletes, influencers, and elite families who want to train, relax, and play — all in one place."
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">10 mins from Medina</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Users className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">Sleeps 12</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Home className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">From £850/night</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="text-base md:text-lg px-8 py-6 bg-white/95 backdrop-blur-sm text-foreground hover:bg-white border border-white/30"
            data-testid="button-whatsapp-hero"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat to our team via WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
