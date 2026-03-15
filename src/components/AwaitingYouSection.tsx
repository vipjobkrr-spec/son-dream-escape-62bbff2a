import {
  Home,
  Waves,
  Flame,
  TreePine,
  Baby,
  Wifi,
  Car,
  Bath,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Home, title: "Уютные домики", sub: "с кухней и террасой" },
  { icon: Waves, title: "Бассейн", sub: "на территории" },
  { icon: Flame, title: "Зона барбекю", sub: "у каждого домика" },
  { icon: TreePine, title: "Горы и природа", sub: "реки и ущелья рядом" },
  { icon: Baby, title: "Для детей", sub: "безопасная территория" },
  { icon: Wifi, title: "Wi‑Fi", sub: "во всех домиках" },
  { icon: Car, title: "Парковка", sub: "бесплатная" },
  { icon: Bath, title: "Баня", sub: "по запросу" },
];

const AwaitingYouSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-4">
            Вас ждут
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Всё для спокойного семейного отдыха на одной территории
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3 p-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AwaitingYouSection;
