import {
  Sun, Flame, Wind, Wifi, UtensilsCrossed, BedDouble, ShowerHead, Armchair
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const amenities = [
  { icon: Sun, title: "Крытый навес", desc: "Уютная обеденная зона под навесом — завтраки и ужины на свежем воздухе в любую погоду" },
  { icon: Flame, title: "Бассейн", desc: "Открытый бассейн с чистой водой и шезлонгами — идеальное место для отдыха в жаркий день" },
  { icon: Wind, title: "Кондиционер", desc: "Комфортная температура в любую погоду" },
  { icon: BedDouble, title: "Удобные кровати", desc: "Ортопедические матрасы для крепкого сна" },
  { icon: Armchair, title: "Диван-кровать", desc: "Дополнительное спальное место" },
  { icon: ShowerHead, title: "Санузел с душем", desc: "Душевая кабина и свежие полотенца" },
  { icon: UtensilsCrossed, title: "Кухня", desc: "Холодильник, плита и вся необходимая посуда" },
  { icon: Wifi, title: "Бесплатный Wi‑Fi", desc: "На всей территории базы" },
];

const AmenitiesSection = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
          В каждом домике
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Всё необходимое для комфортного отдыха уже включено
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
        {amenities.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.06}>
            <div className="bg-popover rounded-lg p-5 shadow-soft text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <a.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold mb-1">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
