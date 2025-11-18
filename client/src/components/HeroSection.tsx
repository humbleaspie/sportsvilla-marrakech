import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
  };

  // Play video on first user interaction (scroll, touch, click)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasInteracted) return;

    // Ensure video is properly configured for autoplay
    video.muted = true;
    video.volume = 0;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const attemptPlay = () => {
      if (hasInteracted) return;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing after interaction');
            setHasInteracted(true);
          })
          .catch((error) => {
            console.log('Play attempt failed:', error.name);
          });
      }
    };

    // Try immediate autoplay first (works on desktop)
    const tryImmediatePlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video autoplay successful');
            setHasInteracted(true);
          })
          .catch(() => {
            // Silent fail, will wait for user interaction
          });
      }
    };

    // Listen for ANY user interaction
    const handleInteraction = () => {
      attemptPlay();
    };

    // Try immediate play when ready
    if (video.readyState >= 3) {
      tryImmediatePlay();
    } else {
      video.addEventListener('canplay', tryImmediatePlay, { once: true });
    }

    // Set up interaction listeners
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      video.removeEventListener('canplay', tryImmediatePlay);
    };
  }, [hasInteracted]);

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
            preload="auto"
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
      
      {/* Black Friday Sale Banner - Top */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 border border-yellow-400/50">
          <p className="text-white text-sm md:text-base font-bold text-center whitespace-nowrap">
            ⚡ Black Friday Sale – Save £150/night ⚡
          </p>
        </div>
      </div>
      
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

      </div>
    </section>
  );
}
