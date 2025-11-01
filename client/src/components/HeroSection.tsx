import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home, Volume2, VolumeX } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Video Background - Full Screen */}
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
          
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-200 hover:scale-110"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            data-testid="button-video-mute"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
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
            <h1 className="font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white leading-tight drop-shadow-lg">
              {heroContent.title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-white/90 mt-1 drop-shadow-md">
              {heroContent.subtitle}
            </p>
          </div>
        </div>

        {/* Info Card - Desktop: Right Side, Mobile: Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-auto md:left-auto md:translate-x-0 md:flex-shrink-0">
          {/* Info Card */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
              {/* Feature Badges */}
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 overflow-x-auto">
                {heroContent.badges.map((badge, index) => {
                  const IconComponent = badge.icon === 'MapPin' ? MapPin : badge.icon === 'Users' ? Users : Home;
                  return (
                    <div key={index} className="flex items-center gap-1 text-white flex-shrink-0">
                      <IconComponent className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm font-medium whitespace-nowrap">{badge.text}</span>
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
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {heroContent.ctaText}
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
