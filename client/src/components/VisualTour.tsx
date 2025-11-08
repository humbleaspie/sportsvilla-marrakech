import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { galleryImages, visualTourContent } from "@/data/villa-content";
import { Button } from "@/components/ui/button";

export default function VisualTour() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="pt-8 pb-0 md:pt-10 md:pb-1 lg:pt-12 lg:pb-1 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-3 md:mb-6">
        <div className="text-center">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-foreground">
            {visualTourContent.sectionTitle}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {visualTourContent.sectionSubtitle}
          </p>
        </div>
      </div>
      
      {/* Full-width carousel container on mobile, constrained on desktop */}
      <div className="relative w-screen left-0 md:w-full md:left-auto md:max-w-7xl md:mx-auto md:px-6">
        <div className="relative w-screen md:w-full md:mx-14">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-0 md:gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.33rem)] min-w-0"
                >
                  <div
                    className="group relative aspect-[4/3] overflow-hidden cursor-pointer hover-elevate active-elevate-2 md:rounded-lg"
                    onClick={() => setSelectedImage(index)}
                    data-testid={`image-gallery-${index}`}
                  >
                    <img
                      srcSet={`${image.srcMobile} 800w, ${image.src} 3200w`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={image.src}
                      alt={image.caption}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      {...({ fetchpriority: "low" } as any)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm md:text-base font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - smaller on mobile to prevent overlap */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-9 md:h-9 md:left-2 md:-translate-x-full bg-white/95 backdrop-blur-sm border-white/30 shadow-lg p-1"
            onClick={scrollPrev}
            aria-label="Previous slide"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
          
          <Button
            size="icon"
            variant="outline"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-9 md:h-9 md:right-2 md:translate-x-full bg-white/95 backdrop-blur-sm border-white/30 shadow-lg p-1"
            onClick={scrollNext}
            aria-label="Next slide"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-overlay"
        >
          {/* Close button - positioned relative to fixed overlay */}
          <button
            className="fixed top-4 right-4 z-10 text-white text-4xl hover:text-white/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            data-testid="button-close-lightbox"
          >
            ×
          </button>
          
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              srcSet={`${galleryImages[selectedImage].srcMobile} 800w, ${galleryImages[selectedImage].src} 3200w`}
              sizes="(max-width: 768px) 100vw, 90vw"
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].caption}
              width={galleryImages[selectedImage].width}
              height={galleryImages[selectedImage].height}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
