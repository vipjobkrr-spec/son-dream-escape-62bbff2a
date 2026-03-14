import { Home } from "lucide-react";
import poolImg from "@/assets/pool-1.jpg";
import ScrollReveal from "./ScrollReveal";

const CabinsSection = () => (
  <section id="cabins" className="py-16 md:py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
          Домики
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Все домики идентичны и рассчитаны на комфортное размещение 4–5 человек. Единый тариф — без сюрпризов.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <ScrollReveal>
          <div className="rounded-lg overflow-hidden shadow-card">
            <img
              src={poolImg}
              alt="Домик базы отдыха Сон с бассейном"
              className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg mb-6">
              <Home className="w-5 h-5" />
              <span className="font-display text-xl font-semibold">Всего 12 домиков</span>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "Открытая терраса со столом и стульями для завтраков",
                "Индивидуальная зона барбекю с мангалом",
                "Полноценная кухня: холодильник, плита, посуда",
                "Кровать + удобный диван-кровать",
                "Ортопедические матрасы для крепкого сна",
                "Санузел с душевой кабиной и полотенцами",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CabinsSection;
