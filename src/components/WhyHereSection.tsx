import { Home, ShieldCheck, Car, Wifi, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    icon: Home,
    text: "Небольшая семейная база: всего 8 домиков, без шума больших отелей и чужих компаний.",
  },
  {
    icon: ShieldCheck,
    text: "Закрытая, ухоженная территория с бассейном, баней, мангалами и местами для отдыха.",
  },
  {
    icon: Wifi,
    text: "Домики под ключ: кухня, санузел, кондиционер, Wi‑Fi, терраса — всё для самостоятельного и комфортного отдыха.",
  },
  {
    icon: Car,
    text: "Удобно добираться из Краснодара, Туапсе и Сочи: приехали на машине — и вы уже у моря.",
  },
  {
    icon: MapPin,
    text: "Рядом море, реки, ущелья и горы — можно чередовать пляжный отдых с прогулками и поездками.",
  },
];

const WhyHereSection = () => (
  <section id="why-here" className="py-12 md:py-16 bg-card">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-8">
          Почему гости выбирают «Сон у Моря»
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={0.05 * (i + 1)}>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/30">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyHereSection;
