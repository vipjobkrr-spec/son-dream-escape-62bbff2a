import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import heroPoolWalk from "@/assets/hero-pool-walk.jpg";
import heroFamilyPool from "@/assets/hero-family-pool.jpg";
import heroPoolGirls from "@/assets/hero-pool-girls.jpg";
import heroTerraceSunset from "@/assets/hero-terrace-sunset.jpg";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79898397000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const images = [
  { src: heroPoolWalk, alt: "Прогулка у бассейна базы отдыха Сон" },
  { src: heroFamilyPool, alt: "Семейный отдых в бассейне" },
  { src: heroPoolGirls, alt: "Отдых у бассейна" },
  { src: heroTerraceSunset, alt: "Терраса домика на закате" },
];

const keyPoints: React.ReactNode[] = [
  "Домики под ключ с кухней, санузлом, кондиционером и Wi‑Fi",
  <><span className="font-semibold text-white">До моря 10–15 минут</span> на авто, рядом реки и ущелья для прогулок</>,
  "Семейная атмосфера: хозяева живут на месте и помогают с любыми вопросами",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(true);
  const touchStart = useRef<number | null>(null);

  const goNext = useCallback(() => setIndex((p) => (p + 1) % images.length), []);
  const goPrev = useCallback(() => setIndex((p) => (p - 1 + images.length) % images.length), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff < -50) goNext();
    else if (diff > 50) goPrev();
    touchStart.current = null;
  }, [goNext, goPrev]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden touch-pan-y flex items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          loading="eager"
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto text-center px-4 py-24 md:py-32">
        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Черноморское побережье • между Туапсе и Сочи
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Спокойный отдых в домиках
          <br />
          у моря в <span className="text-secondary">Тенгинке</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/75 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Малая семейная база из 8 домиков с бассейном и баней: тишина, горы, море
          и безопасная территория для отдыха с детьми.{" "}
          <span className="font-semibold text-white">От 6 500 ₽/сутки.</span>
        </motion.p>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="flex flex-col items-start gap-2.5 max-w-xl mx-auto mb-10 text-left"
        >
          {keyPoints.map((point) => (
            <div key={point} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm md:text-base leading-snug">{point}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
        >
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition-all hover:shadow-lg"
          >
            Проверить свободные домики
          </button>
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border border-white/30 text-white rounded-xl text-sm md:text-base font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
            Задать вопрос в MAX
          </a>
        </motion.div>

        {/* Microcopy under CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="text-white/45 text-xs md:text-sm mb-8"
        >
          Ответим в течение 15 минут и подтвердим бронь. Предоплата — 1 сутки проживания.
        </motion.p>

        {/* Image dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center gap-2 mb-6"
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Фото ${i + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: showScroll ? 1 : 0, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          onClick={() => document.getElementById("why-here")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/60 hover:text-white/90 transition-colors"
          style={{ pointerEvents: showScroll ? "auto" : "none" }}
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
