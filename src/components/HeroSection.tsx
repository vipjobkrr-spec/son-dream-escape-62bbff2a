import { useState, useEffect } from "react";
import { Sun, Flame, Wind, Wifi, CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from "@/components/ui/hero-gallery-scroll-animation";

import heroImg from "@/assets/atmosphere.webp";
import poolImg from "@/assets/pool-2.webp";
import territoryImg from "@/assets/territory-1.webp";
import terraceImg from "@/assets/terrace.jpg";
import pool3Img from "@/assets/pool-3.webp";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const features = [
  { icon: Sun, label: "Терраса" },
  { icon: Flame, label: "Барбекю" },
  { icon: Wind, label: "Кондиционер" },
  { icon: Wifi, label: "Wi‑Fi" },
];

const images = [
  { src: heroImg, alt: "Атмосфера базы отдыха Сон" },
  { src: poolImg, alt: "Бассейн базы отдыха" },
  { src: territoryImg, alt: "Территория базы" },
  { src: terraceImg, alt: "Терраса домика" },
  { src: pool3Img, alt: "Зона отдыха у бассейна" },
];

const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContainerScroll>
      {/* Bento gallery background */}
      <BentoGrid className="h-full p-4 md:p-6">
        {images.map((img, i) => (
          <BentoCell key={i} isMain={i === 0}>
            {i === 0 ? (
              <div className="relative h-full w-full">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={heroIndex}
                    src={images[heroIndex].src}
                    alt={images[heroIndex].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    loading="eager"
                  />
                </AnimatePresence>
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </BentoCell>
        ))}
      </BentoGrid>

      {/* Overlay text — scales away on scroll */}
      <ContainerScale>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="bg-foreground/40 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-2xl">
            <p className="text-secondary font-medium text-sm mb-3 tracking-wider uppercase">
              Черноморское побережье • Тенгинка
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary-foreground leading-[1.1] mb-4">
              База отдыха
              <br />
              <span className="text-secondary">«Сон»</span>
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl mb-6 max-w-lg mx-auto leading-relaxed">
              12 уютных домиков на 4–5 человек. Терраса, барбекю, кондиционер,
              Wi‑Fi&nbsp;— всё для спокойного отдыха.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mb-8">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <f.icon className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Inline booking bar */}
            <div className="bg-popover/95 backdrop-blur-md rounded-2xl shadow-card p-4 md:p-5">
              <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                Гарантированная лучшая цена при прямом бронировании
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex-1 flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs text-muted-foreground mb-1">
                      Заезд
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2.5 rounded-lg bg-muted border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-muted-foreground mb-1">
                      Выезд
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2.5 rounded-lg bg-muted border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-2">
                  <button
                    onClick={scrollToBooking}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <CalendarDays className="w-4 h-4" />
                    Забронировать
                  </button>
                  <a
                    href={MAX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 border border-primary/30 text-primary rounded-lg text-sm font-medium text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <img
                      src={maxLogo}
                      alt="MAX"
                      className="w-5 h-5 rounded-full"
                    />
                    MAX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
};

export default HeroSection;
