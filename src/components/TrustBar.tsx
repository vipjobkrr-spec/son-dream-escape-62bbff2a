import { Shield, Users, CreditCard, RotateCcw } from "lucide-react";

const items = [
  { icon: Shield, text: "Тариф единый на все домики" },
  { icon: Users, text: "Доп. место возможно" },
  { icon: CreditCard, text: "Бронь по предоплате 1 суток" },
  { icon: RotateCcw, text: "Возврат за 30 дней до заезда" },
];

const TrustBar = () => (
  <section className="bg-primary/5 border-y border-primary/10">
    <div className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div key={item.text} className="flex items-start gap-3">
            <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-foreground/80">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
