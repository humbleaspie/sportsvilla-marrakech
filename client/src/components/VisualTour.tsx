import { useState } from "react";
import poolImage from "@assets/generated_images/Bali_stone_pool_loungers_57cd748d.png";
import padelImage from "@assets/generated_images/Pristine_padel_court_sunset_48cbb9e6.png";
import basketballImage from "@assets/generated_images/Basketball_court_dramatic_lighting_3860707c.png";
import outdoorTvImage from "@assets/generated_images/Outdoor_TV_entertainment_area_b52a60cb.png";
import chefImage from "@assets/generated_images/Private_chef_plating_gourmet_103305f4.png";
import bedroomImage from "@assets/generated_images/Luxury_ensuite_bedroom_1ba22fc6.png";
import mercedesImage from "@assets/generated_images/Mercedes_Vito_luxury_transfer_39ea95cd.png";
import gymImage from "@assets/generated_images/Luxury_home_gym_equipment_91ef8979.png";

const galleryImages = [
  {
    src: poolImage,
    caption: "Your own heated Bali stone pool — 30° year-round"
  },
  {
    src: padelImage,
    caption: "Play padel under the Moroccan sun"
  },
  {
    src: basketballImage,
    caption: "Full-size basketball court with dramatic lighting"
  },
  {
    src: outdoorTvImage,
    caption: "Stream Netflix poolside or catch the match outdoors"
  },
  {
    src: chefImage,
    caption: "Private chef preparing gourmet meals daily"
  },
  {
    src: gymImage,
    caption: "Fully-equipped gym with Atlas Mountain views"
  },
  {
    src: bedroomImage,
    caption: "6 beautiful ensuite bedrooms with premium linens"
  },
  {
    src: mercedesImage,
    caption: "Mercedes Vito airport transfers included"
  }
];

export default function VisualTour() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Experience Luxury at Every Turn
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From sunrise workouts to sunset pool sessions — discover what makes this villa extraordinary
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
