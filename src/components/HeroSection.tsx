import { Sun, Flame, Wind, Wifi, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/atmosphere.webp";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL = "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const features = [
  { icon: Sun, label: "Терраса" },
  { icon: Flame, label: "Барбекю" },
  { icon: Wind, label: "Кондиционер" },
  { icon: Wifi, label: "Wi‑Fi" },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">
      <img
        src={heroImg}
        alt="База отдыха Сон — бассейн и домики"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2s]"
        style={{ transform: loaded ? "scale(1)" : "scale(1.08)" }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />

      {/* Main content */}
      <div className="container relative z-10 flex-1 flex items-end md:items-center pb-44 md:pb-32 pt-32 md:py-24">
        <div className="max-w-2xl">
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="text-secondary font-medium text-sm mb-3 tracking-wider uppercase">
              Черноморское побережье • Тенгинка
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary-foreground leading-[1.1] mb-4">
              База отдыха
              <br />
              <span className="text-secondary">«Сон»</span>
            </h1>
          </div>

          <p
            className="text-primary-foreground/85 text-lg md:text-xl mb-8 max-w-lg leading-relaxed transition-all duration-700 ease-out delay-200"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
            }}
          >
            12 уютных домиков на 4–5 человек. Терраса, барбекю, кондиционер, Wi‑Fi&nbsp;— всё для спокойного отдыха.
          </p>

          <div
            className="flex flex-wrap gap-6 transition-all duration-700 ease-out delay-300"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
            }}
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-primary-foreground/80">
                <f.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline booking bar */}
      <div
        className="relative z-10 transition-all duration-700 ease-out delay-500"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div className="container pb-8 md:pb-10">
          <div className="bg-popover/95 backdrop-blur-md rounded-2xl shadow-card p-4 md:p-5 max-w-3xl">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
              Гарантированная лучшая цена при прямом бронировании
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-muted-foreground mb-1">Заезд</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 rounded-lg bg-muted border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-muted-foreground mb-1">Выезд</label>
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
                  <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
                  MAX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-primary-foreground/40 animate-bounce">
        <span className="text-xs">Листайте</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
