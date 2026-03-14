import { useState } from "react";
import { Home, ChevronLeft, ChevronRight, Sun, Flame, Wind, BedDouble, ShowerHead, UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";

import poolRound from "@/assets/cabins/pool-round.png";
import poolRect from "@/assets/cabins/pool-rect.png";
import territoryView from "@/assets/cabins/territory-view.png";
import cabinsExterior from "@/assets/cabins/cabins-exterior.png";

const slides = [
  { src: cabinsExterior, alt: "Домики базы отдыха Сон — вид снаружи" },
  { src: poolRect, alt: "Бассейн с шезлонгами" },
  { src: territoryView, alt: "Территория базы с видом на горы" },
  { src: poolRound, alt: "Круглый бассейн на территории" },
];

const CabinsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <section id="cabins" className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Домики
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Наши домики в Тенгинке — это современные одноэтажные домики у моря для семьи или небольшой компании в Краснодарском крае. В каждом домике: кухонная зона, санузел с душем, кондиционер, Wi‑Fi, терраса и своя зона барбекю; до моря и пляжей побережья Чёрного моря — несколько минут на машине.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Photo Slider */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[3/4] md:aspect-[4/5]">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.img
                  key={index}
                  src={slides[index].src}
                  alt={slides[index].alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Controls */}
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-popover/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-popover transition-colors shadow-md z-10"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-popover/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-popover transition-colors shadow-md z-10"
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === index ? "bg-primary-foreground w-6" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                    }`}
                    aria-label={`Фото ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 bg-popover/70 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full z-10">
                {index + 1} / {slides.length}
              </div>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg mb-6">
                <Home className="w-5 h-5" />
                <span className="font-display text-xl font-semibold">8 домиков и баня</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Sun, title: "Терраса", desc: "Стол и стулья для завтраков" },
                  { icon: Flame, title: "Зона барбекю", desc: "Индивидуальный мангал" },
                  { icon: UtensilsCrossed, title: "Кухня", desc: "Холодильник, плита, посуда" },
                  { icon: BedDouble, title: "Кровать + диван", desc: "Ортопедические матрасы" },
                  { icon: ShowerHead, title: "Санузел", desc: "Душевая и полотенца" },
                  { icon: Wind, title: "Кондиционер", desc: "Комфорт в любую погоду" },
                ].map((a) => (
                  <div key={a.title} className="bg-muted/50 rounded-xl p-3 flex flex-col gap-1.5">
                    <a.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm text-foreground">{a.title}</span>
                    <span className="text-xs text-muted-foreground">{a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CabinsSection;
