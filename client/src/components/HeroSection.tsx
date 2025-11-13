import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home, Play } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
  };

  // Attempt autoplay, show button if blocked
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let retryCount = 0;
    const maxRetries = 3;

    // Ensure video is muted for autoplay
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Function to attempt playback
    const attemptPlay = () => {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video autoplay successful');
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch((error) => {
            console.log('Autoplay blocked:', error.name);
            retryCount++;
            
            if (retryCount >= maxRetries) {
              // Show play button after max retries
              setShowPlayButton(true);
              console.log('Showing manual play button');
            } else {
              // Retry a few times
              setTimeout(attemptPlay, 1000);
            }
          });
      }
    };

    // Try to play after a short delay
    const timer = setTimeout(attemptPlay, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleManualPlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        console.error('Manual play failed:', error);
      });
    }
  };

  return (
    <section id="home" className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Video Background - Full Screen */}
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="metadata"
            poster={heroContent.videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
          
          {/* Play Button Overlay - Shows when autoplay is blocked */}
          {showPlayButton && !isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button
                onClick={handleManualPlay}
                size="lg"
                variant="default"
                className="bg-white/90 hover:bg-white text-black backdrop-blur-md shadow-2xl"
                data-testid="button-play-video"
              >
                <Play className="w-6 h-6 mr-2" />
                Play Video
              </Button>
            </div>
          )}
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
            <p className="text-xs md:text-sm lg:text-base text-white/90 mt-1 drop-shadow-md whitespace-pre-line">
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
                  const IconComponent = badge.icon === 'MapPin' ? MapPin : badge.icon === 'Users' ? Users : badge.icon === 'Home' ? Home : null;
                  return (
                    <div key={index} className="flex items-center gap-0.5 text-white flex-shrink-0">
                      {IconComponent && <IconComponent className="w-3 h-3" />}
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
                className="w-full text-xs md:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]"
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
