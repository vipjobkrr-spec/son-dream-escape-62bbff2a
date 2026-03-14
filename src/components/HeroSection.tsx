import { Sun, Flame, Wind, Wifi } from "lucide-react";
import heroImg from "@/assets/atmosphere.webp";

const WHATSAPP_URL = "https://wa.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const features = [
  { icon: Sun, label: "Терраса" },
  { icon: Flame, label: "Барбекю" },
  { icon: Wind, label: "Кондиционер" },
  { icon: Wifi, label: "Wi‑Fi" },
];

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-end md:items-center overflow-hidden">
      <img
        src={heroImg}
        alt="База отдыха Сон — бассейн и домики"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

      <div className="container relative z-10 pb-16 pt-32 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary-foreground leading-tight mb-4">
            База отдыха «Сон»
            <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">в&nbsp;Тенгинке</span>
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            12 уютных домиков на 4–5 человек. Терраса, барбекю, кондиционер, Wi‑Fi&nbsp;— всё для спокойного отдыха.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
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

          <div className="flex flex-wrap gap-6">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-primary-foreground/80">
                <f.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
