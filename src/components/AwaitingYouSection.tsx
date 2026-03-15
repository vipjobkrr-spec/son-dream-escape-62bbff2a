import ScrollReveal from "./ScrollReveal";
import bathIcon from "@/assets/bath-icon.webp";
import fireIcon from "@/assets/fire-icon.svg";
import homeIcon from "@/assets/icons/home-icon.svg";
import poolIcon from "@/assets/icons/pool-icon.svg";
import mountainIcon from "@/assets/icons/mountain-icon.svg";
import babyIcon from "@/assets/icons/baby-icon.svg";
import wifiIcon from "@/assets/icons/wifi-icon.svg";
import parkingIcon from "@/assets/icons/parking-icon.svg";

const items = [
  { image: homeIcon, title: "Уютные домики", sub: "с кухней и террасой" },
  { image: poolIcon, title: "Бассейн", sub: "на территории" },
  { image: fireIcon, title: "Зона барбекю", sub: "у каждого домика" },
  { image: mountainIcon, title: "Горы и природа", sub: "реки и ущелья рядом" },
  { image: babyIcon, title: "Для детей", sub: "безопасная территория" },
  { image: wifiIcon, title: "Wi‑Fi", sub: "во всех домиках" },
  { image: parkingIcon, title: "Парковка", sub: "бесплатная" },
  { image: bathIcon, title: "Баня", sub: "по запросу" },
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
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
