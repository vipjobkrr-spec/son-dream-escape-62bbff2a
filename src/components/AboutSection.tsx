import { TreePine, Mountain, Sunrise, Wind } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import territory1 from "@/assets/territory-1.webp";
import territory2 from "@/assets/territory-2.webp";

const highlights = [
  { icon: TreePine, text: "Первозданная природа и тишина вдали от города" },
  { icon: Mountain, text: "Горы и море — всё в шаговой доступности" },
  { icon: Sunrise, text: "Закаты и рассветы как на ладони" },
  { icon: Wind, text: "Место, где дышится полной грудью" },
];

const AboutSection = () => (
  <section className="relative">
    {/* Full-width parallax hero image */}
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <img
        src={territory1}
        alt="Территория базы отдыха Сон"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "translateZ(0)" }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />

      <div className="absolute inset-0 flex items-center justify-center">
        <ScrollReveal className="text-center px-5">
          <p className="text-secondary font-medium text-sm mb-3 tracking-widest uppercase">
            Откройте для себя
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-primary-foreground leading-tight mb-4">
            Что такое база «Сон»?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Это загородная база отдыха в духе природного лагеря. Вы будете жить на лоне природы
            и чувствовать себя комфортно, как дома.
          </p>
        </ScrollReveal>
      </div>
    </div>

    {/* Content block */}
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Text side */}
          <ScrollReveal>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Посвятите время себе и своему здоровью. Насладитесь чистой природой
                и свежим воздухом, наполненным ароматом трав и хвои.
                Прогуляйтесь по лесным тропинкам, покупайтесь в море
                и почувствуйте, как отпуск наполняет вас новой энергией.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <h.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{h.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium text-sm hover:underline underline-offset-4 transition-all"
              >
                Смотреть фотогалерею →
              </a>
            </div>
          </ScrollReveal>

          {/* Image side */}
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={territory2}
                  alt="Дорожка между домиками базы Сон"
                  className="w-full h-80 md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg">
                <p className="font-display text-2xl font-semibold">12</p>
                <p className="text-xs text-primary-foreground/80">уютных домиков</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
