import { useState } from "react";
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
          <div className="flex gap-2 justify-center mb-8 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {zones.map((z, i) => {
              const Icon = z.icon;
              return (
                <button
                  key={z.id}
                  onClick={() => handleZoneChange(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeZone === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-background text-muted-foreground hover:bg-background/80 shadow-soft"
                  }`}
                >
                  <Icon className="w-4 h-4" />
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
                className="transition-transform duration-500 ease-out group-hover:[transform:rotateY(1deg)_rotateX(-1deg)_scale(1.01)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <button
                  onClick={() => setLightbox(activeImage)}
                  className="relative aspect-[16/10] bg-muted w-full cursor-zoom-in"
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
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                  <p className="text-primary-foreground font-display text-xl md:text-2xl font-semibold">
                    {zone.label}
                  </p>
                  <p className="text-primary-foreground/80 text-sm mt-1">
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
              <div className="flex gap-3 mt-4 justify-center">
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
    </section>
  );
};

export default RoomTourSection;
