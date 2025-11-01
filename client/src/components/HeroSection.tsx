import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home, Volume2, VolumeX, Instagram, Globe } from "lucide-react";
import { heroContent, whatsappConfig, socialLinks } from "@/data/villa-content";

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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
          
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            data-testid="button-video-mute"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
          
          {/* Social Media Links */}
          <div className="absolute top-6 left-6 z-20 flex gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our Instagram"
              data-testid="link-instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our website"
              data-testid="link-website"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
          
          {/* Social Media Links */}
          <div className="absolute top-6 left-6 z-20 flex gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our Instagram"
              data-testid="link-instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our website"
              data-testid="link-website"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
        <h1 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight">
          {heroContent.title}
        </h1>
        
        <p className="text-base md:text-lg font-medium mb-2">
          {heroContent.subtitle}
        </p>
        
        {heroContent.description && (
          <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed opacity-95">
            "{heroContent.description}"
          </p>
        )}
        
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-3xl mx-auto mb-6">
          {heroContent.badges.map((badge, index) => {
            const IconComponent = badge.icon === 'MapPin' ? MapPin : badge.icon === 'Users' ? Users : Home;
            return (
              <div key={index} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                <IconComponent className="w-3 h-3" />
                <span className="text-xs font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button 
            asChild
            size="default" 
            className="text-sm md:text-base px-6 bg-white/95 backdrop-blur-sm text-foreground hover:bg-white border border-white/30"
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
