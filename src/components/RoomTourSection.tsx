import { useState, useEffect, useCallback } from "react";
import { Bed, CookingPot, Sofa, Bath, RotateCcw, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import bedroom1 from "@/assets/tour/bedroom-1.jpg";
import bedroom2 from "@/assets/tour/bedroom-2.jpg";
import bedroom3 from "@/assets/tour/bedroom-3.jpg";
import kitchen1 from "@/assets/tour/kitchen-1.jpg";
import kitchen2 from "@/assets/tour/kitchen-2.jpg";
import kitchen3 from "@/assets/tour/kitchen-3.jpg";
import living1 from "@/assets/tour/living-1.jpg";
import living2 from "@/assets/tour/living-2.jpg";
import bathroom1 from "@/assets/tour/bathroom-1.jpg";

const zones = [
  {
    id: "bedroom",
    label: "Спальня",
    icon: Bed,
    description: "Уютная спальня с кроватью, шкафом и мягким освещением",
    images: [bedroom1, bedroom2, bedroom3],
  },
  {
    id: "kitchen",
    label: "Кухня",
    icon: CookingPot,
    description: "Полностью оборудованная кухня со столовой зоной",
    images: [kitchen1, kitchen2, kitchen3],
  },
  {
    id: "living",
    label: "Гостиная",
    icon: Sofa,
    description: "Просторная гостиная с мягкой мебелью для отдыха",
    images: [living1, living2],
  },
  {
    id: "bathroom",
    label: "Санузел",
    icon: Bath,
    description: "Современный санузел с душевой кабиной",
    images: [bathroom1],
  },
];

const RoomTourSection = () => {
  const [activeZone, setActiveZone] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const zone = zones[activeZone];

  const handleZoneChange = (idx: number) => {
    setActiveZone(idx);
    setActiveImage(0);
  };

  // Auto-advance every 4s when lightbox is closed
  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % zones[activeZone].images.length);
  }, [activeZone]);

  useEffect(() => {
    if (lightbox !== null) return;
    const timer = setInterval(nextImage, 4000);
    return () => clearInterval(timer);
  }, [nextImage, lightbox, activeImage]);

  return (
    <section id="tour" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
              <RotateCcw className="w-4 h-4" />
              Виртуальный тур
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-3">
              Загляните внутрь домика
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Исследуйте каждую комнату — выберите зону и рассмотрите детали
            </p>
          </div>
        </ScrollReveal>

        {/* Zone tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-2 justify-center mb-6 md:mb-8 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {zones.map((z, i) => {
              const Icon = z.icon;
              return (
                <button
                  key={z.id}
                  onClick={() => handleZoneChange(i)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-3 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                    activeZone === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-background text-muted-foreground hover:bg-background/80 shadow-soft"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {z.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main viewer */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-4xl mx-auto">
            {/* Hero image with 3D perspective */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-card group"
              style={{ perspective: "1000px" }}
            >
              <div
                className="transition-transform duration-500 ease-out md:group-hover:[transform:rotateY(1deg)_rotateX(-1deg)_scale(1.01)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <button
                  onClick={() => setLightbox(activeImage)}
                  className="relative aspect-[4/3] md:aspect-[16/10] bg-muted w-full cursor-zoom-in"
                >
                  {zone.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${zone.label} — ракурс ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        i === activeImage ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                    />
                  ))}
                  <div className="absolute top-4 left-4 bg-foreground/50 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5" />
                    Открыть
                  </div>
                </button>

                {/* Zone label overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 md:p-6">
                  <p className="text-primary-foreground font-display text-lg md:text-2xl font-semibold">
                    {zone.label}
                  </p>
                  <p className="text-primary-foreground/80 text-xs md:text-sm mt-0.5 md:mt-1">
                    {zone.description}
                  </p>
                </div>

                {/* Image counter */}
                {zone.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-foreground/50 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {activeImage + 1} / {zone.images.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail strip */}
            {zone.images.length > 1 && (
              <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 justify-center">
                {zone.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      i === activeImage
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-card"
                        : "opacity-60 hover:opacity-90 hover:scale-105"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${zone.label} — миниатюра ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-8">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Забронировать этот домик
              </a>
            </div>
          </div>
        </ScrollReveal>
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
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {lightbox < zone.images.length - 1 && (
            <button
              className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          <img
            src={zone.images[lightbox]}
            alt={`${zone.label} — фото ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {zone.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {zone.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === lightbox ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default RoomTourSection;
