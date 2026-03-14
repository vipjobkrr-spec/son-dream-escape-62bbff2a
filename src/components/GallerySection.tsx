import { useState } from "react";
import { X } from "lucide-react";

import pool1 from "@/assets/pool-1.jpg";
import kitchen from "@/assets/kitchen.jpg";
import territory1 from "@/assets/territory-1.webp";
import pool2 from "@/assets/pool-2.webp";
import pool3 from "@/assets/pool-3.webp";
import atmosphere from "@/assets/atmosphere.webp";
import territory2 from "@/assets/territory-2.webp";

const images = [
  { src: pool1, alt: "Бассейн с шезлонгами", category: "Территория" },
  { src: atmosphere, alt: "Атмосфера базы отдыха", category: "Атмосфера" },
  { src: kitchen, alt: "Кухня в домике", category: "Интерьер" },
  { src: territory1, alt: "Территория базы и бассейн", category: "Территория" },
  { src: pool2, alt: "Бассейн и домик", category: "Территория" },
  { src: pool3, alt: "Зона отдыха у бассейна", category: "Территория" },
  { src: territory2, alt: "Дорожка между домиками", category: "Территория" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-10">
          Фотогалерея
        </h2>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="shrink-0 w-72 snap-center rounded-lg overflow-hidden shadow-soft"
            >
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-shadow ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${i === 0 ? "h-full" : "h-56"}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
