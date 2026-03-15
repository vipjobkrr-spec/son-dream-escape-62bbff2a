import { Users, Baby, RotateCcw, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Baby, value: "85%", text: "гостей приезжают с детьми" },
  { icon: RotateCcw, value: "30%", text: "возвращаются повторно" },
  { icon: Users, value: "8", text: "семей максимум одновременно" },
  { icon: ShieldCheck, value: "4.9", text: "рейтинг на Яндексе" },
];

const TrustBar = () => (
  <section className="bg-primary/5 border-y border-primary/10">
    <div className="container py-6">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-lg font-display font-bold text-foreground block leading-tight">{item.value}</span>
                <span className="text-xs text-muted-foreground leading-tight">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustBar;
