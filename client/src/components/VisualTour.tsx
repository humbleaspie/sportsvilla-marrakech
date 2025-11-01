import { useState } from "react";
import { galleryImages, visualTourContent } from "@/data/villa-content";

export default function VisualTour() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="pt-1 pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-foreground">
            {visualTourContent.sectionTitle}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {visualTourContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover-elevate active-elevate-2"
              onClick={() => setSelectedImage(index)}
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.caption}
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
          ))}
        </div>
      </div>
      
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-6xl w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].caption}
            </p>
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-white/70 transition-colors"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
