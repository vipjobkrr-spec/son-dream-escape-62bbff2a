import { Sun, Flame, Wind, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/atmosphere.webp";

const WHATSAPP_URL = "https://wa.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

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
    <section className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden">
      <img
        src={heroImg}
        alt="База отдыха Сон — бассейн и домики"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2s]"
        style={{ transform: loaded ? "scale(1)" : "scale(1.08)" }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />

      <div className="container relative z-10 pb-16 pt-32 md:py-24">
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
            className="flex flex-col sm:flex-row gap-3 mb-10 transition-all duration-700 ease-out delay-300"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-medium hover:opacity-90 transition-all hover:shadow-lg"
            >
              Проверить даты
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-popover/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 rounded-lg text-base font-medium text-center hover:bg-popover/25 transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>

          <div
            className="flex flex-wrap gap-6 transition-all duration-700 ease-out delay-500"
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
