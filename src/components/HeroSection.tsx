import { useState, useEffect, useCallback } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import heroPoolWalk from "@/assets/hero-pool-walk.jpg";
import heroFamilyPool from "@/assets/hero-family-pool.jpg";
import heroPoolGirls from "@/assets/hero-pool-girls.jpg";
import heroTerraceSunset from "@/assets/hero-terrace-sunset.jpg";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const images = [
  { src: heroPoolWalk, alt: "Прогулка у бассейна базы отдыха Сон" },
  { src: heroFamilyPool, alt: "Семейный отдых в бассейне" },
  { src: heroPoolGirls, alt: "Отдых у бассейна" },
  { src: heroTerraceSunset, alt: "Терраса домика на закате" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(true);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

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

  const handleBooking = useCallback(() => {
    if (checkIn || checkOut) {
      const text = `Здравствуйте! Хочу забронировать домик «Сон». Даты: ${checkIn || "___"} – ${checkOut || "___"}. Подскажите наличие и стоимость.`;
      window.open(`${MAX_URL.split("?")[0]}?text=${encodeURIComponent(text)}`, "_blank");
    } else {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [checkIn, checkOut]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fullscreen background slideshow */}
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

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/70 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Черноморское побережье • Тенгинка
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          База отдыха
          <br />
          <span className="text-secondary">«Сон»</span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-lg mx-auto text-center mb-10"
        >
          <p
            className="text-white text-lg md:text-xl font-semibold tracking-wide mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Спокойный семейный отдых на Чёрном море
          </p>
          <p
            className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Тенгинка между Туапсе и Сочи. Восемь уютных домиков с бассейном и баней — комфортная альтернатива большим отелям Краснодара и Сочи.
          </p>
        </motion.div>

        {/* Image dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-2 mb-8"
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
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-4 text-white/60 hover:text-white/90 transition-colors"
          style={{ pointerEvents: showScroll ? "auto" : "none" }}
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </div>

      {/* Bottom booking bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-4 pb-6 md:pb-10">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-card p-4 md:p-5">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider text-center">
              Лучшая цена при прямом бронировании
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex gap-3 flex-1">
                <div className="flex-1">
                  <label className="block text-xs text-muted-foreground mb-1">
                    Заезд
                  </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-muted border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-muted-foreground mb-1">
                      Выезд
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-muted border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
              </div>
              <div className="flex gap-2 sm:flex-shrink-0">
                <button
                  onClick={handleBooking}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <CalendarDays className="w-4 h-4" />
                  Забронировать
                </button>
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                >
                  <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
                  MAX
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
