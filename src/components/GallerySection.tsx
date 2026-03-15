import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import pool1 from "@/assets/pool-1.jpg";
import kitchen from "@/assets/kitchen.jpg";
import territory1 from "@/assets/territory-1.webp";
import pool2 from "@/assets/pool-2.webp";
import pool3 from "@/assets/pool-3.webp";
import atmosphere from "@/assets/atmosphere.webp";
import territory2 from "@/assets/territory-2.webp";
import bedroom from "@/assets/interior-bedroom.jpg";
import terrace from "@/assets/terrace.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bbq from "@/assets/bbq.jpg";
import bbq2 from "@/assets/about/bbq-friends-2.jpg";
import poolGroup from "@/assets/about/pool-group.png";
import poolWalk2 from "@/assets/about/pool-walk-2.jpg";
import territorySun2 from "@/assets/about/territory-sun-2.webp";

const images = [
  { src: pool1, alt: "Бассейн с шезлонгами", category: "Территория" },
  { src: terrace, alt: "Терраса с кофе и видом на горы", category: "Терраса" },
  { src: bedroom, alt: "Спальня с кроватью и диваном", category: "Интерьер" },
  { src: bbq, alt: "Зона барбекю вечером", category: "Барбекю" },
  { src: bathroom, alt: "Санузел с душевой кабиной", category: "Санузел" },
  { src: kitchen, alt: "Кухня в домике", category: "Интерьер" },
  { src: atmosphere, alt: "Атмосфера базы отдыха", category: "Атмосфера" },
  { src: territory1, alt: "Территория базы и бассейн", category: "Территория" },
  { src: pool2, alt: "Бассейн и домик", category: "Территория" },
  { src: pool3, alt: "Зона отдыха у бассейна", category: "Территория" },
  { src: territory2, alt: "Дорожка между домиками", category: "Территория" },
];

const categories = ["Все", "Терраса", "Барбекю", "Интерьер", "Санузел", "Территория", "Атмосфера"];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все" ? images : images.filter((i) => i.category === activeCategory);

  const navLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-6">
            Фотогалерея
          </h2>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="shrink-0 w-72 snap-center rounded-lg overflow-hidden shadow-soft"
            >
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" loading="lazy" />
              <div className="px-3 py-2 text-xs text-muted-foreground">{img.category}</div>
            </button>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className={`rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1 duration-300 w-full ${
                  i === 0 && filtered.length > 3 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i === 0 && filtered.length > 3 ? "h-full" : "h-56"}`}
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {lightbox > 0 && (
            <button
              className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {lightbox < filtered.length - 1 && (
            <button
              className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Thumbnail indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === lightbox ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
