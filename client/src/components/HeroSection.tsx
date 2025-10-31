import { Button } from "@/components/ui/button";
import { MapPin, Users, Home } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";

export default function HeroSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          {heroContent.title}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium mb-4">
          {heroContent.subtitle}
        </p>
        
        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          "{heroContent.description}"
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {heroContent.badges.map((badge, index) => {
            const IconComponent = badge.icon === 'MapPin' ? MapPin : badge.icon === 'Users' ? Users : Home;
            return (
              <div key={index} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <IconComponent className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="text-base md:text-lg px-8 py-6 bg-white/95 backdrop-blur-sm text-foreground hover:bg-white border border-white/30"
            data-testid="button-whatsapp-hero"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {heroContent.ctaText}
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
