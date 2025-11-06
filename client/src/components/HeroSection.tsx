import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
  };

  // Load and play video AFTER initial render (after LCP)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Delay video loading until after LCP to prioritize poster
      const timer = setTimeout(() => {
        video.preload = "auto";
        video.load();
        video.play().catch(() => {
          // Autoplay was prevented, silently fail
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section id="home" className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Video Background - Full Screen */}
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="none"
            poster={heroContent.videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
        </div>
      )}
      
      {/* Content Layout - Split Design */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="font-serif font-bold text-base md:text-2xl lg:text-3xl text-white leading-tight drop-shadow-lg">
              {heroContent.title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-white/90 mt-1 drop-shadow-md">
              {heroContent.subtitle}
            </p>
          </div>
        </div>

        {/* Info Card - Desktop: Right Side, Mobile: Bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:relative md:bottom-auto md:left-auto md:translate-x-0 md:flex-shrink-0">
          {/* Info Card */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-2 md:p-3 border border-white/20">
              {/* Feature Badges */}
              <div className="flex items-center justify-center gap-1 md:gap-1.5 mb-2 overflow-x-auto">
                {heroContent.badges.map((badge, index) => {
                  const IconComponent = badge.icon === 'MapPin' ? MapPin : badge.icon === 'Users' ? Users : Home;
                  return (
                    <div key={index} className="flex items-center gap-0.5 text-white flex-shrink-0">
                      <IconComponent className="w-3 h-3" />
                      <span className="text-xs font-medium whitespace-nowrap">{badge.text}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* WhatsApp CTA */}
              <Button 
                asChild
                variant="outline"
                size="default"
                className="w-full text-xs md:text-sm bg-white/95 backdrop-blur-sm text-foreground hover:bg-white border-white/30"
                data-testid="button-whatsapp-hero"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                  {heroContent.ctaText}
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
