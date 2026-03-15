import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { feature: "Приватность", son: "Максимум 8 семей, свой двор", hotel: "200+ номеров, общий пляж" },
  { feature: "Цена за семью", son: "от 6 500 ₽ / сутки за домик", hotel: "от 8 000 ₽ / номер без кухни" },
  { feature: "Своя кухня", son: "Полноценная кухня в каждом домике", hotel: "Только ресторан или доставка" },
  { feature: "Бассейн", son: "Без очереди за лежак", hotel: "Общий, 50+ человек" },
  { feature: "Барбекю", son: "Личная зона у каждого домика", hotel: "Нет или платная" },
  { feature: "Природа и тишина", son: "Горы, река, лес — в шаговой доступности", hotel: "Шум трассы и стройки" },
  { feature: "Хозяева рядом", son: "Помогут с маршрутами и бытом", hotel: "Обезличенный сервис" },
  { feature: "Парковка", son: "Бесплатная у домика", hotel: "Платная или далеко" },
];

const WhyNotHotelSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
            Почему не отель в Сочи?
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Сравните сами — и поймёте, почему наши гости возвращаются
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1.5fr_1.5fr] bg-primary text-primary-foreground font-display text-sm md:text-base font-semibold">
              <div className="p-3 md:p-4" />
              <div className="p-3 md:p-4 text-center">База «Сон»</div>
              <div className="p-3 md:p-4 text-center opacity-70">Отель в Сочи</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1.5fr_1.5fr] text-sm md:text-base ${
                  i % 2 === 0 ? "bg-background" : "bg-muted/40"
                }`}
              >
                <div className="p-3 md:p-4 font-medium text-foreground flex items-center">
                  {row.feature}
                </div>
                <div className="p-3 md:p-4 text-center flex items-center justify-center gap-1.5 text-primary font-medium">
                  <Check className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{row.son}</span>
                  <span className="sm:hidden text-xs">{row.son.split(",")[0]}</span>
                </div>
                <div className="p-3 md:p-4 text-center flex items-center justify-center gap-1.5 text-muted-foreground">
                  <X className="w-4 h-4 shrink-0 text-destructive/60" />
                  <span className="hidden sm:inline">{row.hotel}</span>
                  <span className="sm:hidden text-xs">{row.hotel.split(",")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-muted-foreground mt-8 text-sm italic">
            * Сравнение с типичным 3-звёздочным отелем на побережье Большого Сочи в высокий сезон
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyNotHotelSection;
