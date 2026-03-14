import { useState } from "react";
import { CalendarDays, Users, Check, Bed, ArrowRight, Crown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_BASE = "https://max.me/79001234567";

const seasons = [
  {
    id: "spring",
    period: "01.03 — 15.06",
    label: "Весна",
    price: 6500,
    tag: "Лучшая цена",
    tagColor: "bg-primary",
  },
  {
    id: "early-summer",
    period: "16.06 — 27.06",
    label: "Начало лета",
    price: 8500,
  },
  {
    id: "peak",
    period: "28.06 — 24.08",
    label: "Высокий сезон",
    price: 12000,
    tag: "Популярный",
    tagColor: "bg-secondary",
  },
  {
    id: "velvet",
    period: "25.08 — 14.09",
    label: "Бархатный сезон",
    price: 9000,
    tag: "Рекомендуем",
    tagColor: "bg-primary",
  },
  {
    id: "autumn",
    period: "15.09 — 31.10",
    label: "Осень",
    price: 7000,
  },
  {
    id: "vip",
    period: "Круглый год",
    label: "VIP",
    price: 16999,
    tag: "VIP",
    tagColor: "bg-amber-500",
    isVip: true,
  },
];

const formatPrice = (n: number) =>
  n.toLocaleString("ru-RU") + " ₽";

const PricesSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [extraBed, setExtraBed] = useState(false);
  const [nights, setNights] = useState(3);

  const activeSeason = seasons.find((s) => s.id === selected);
  const totalPerNight = activeSeason
    ? activeSeason.price + (extraBed ? 1000 : 0)
    : 0;
  const total = totalPerNight * nights;

  const buildMaxUrl = () => {
    const extra = extraBed ? "да" : "нет";
    const text = `Здравствуйте! Хочу забронировать домик «Сон» на ${nights} ночей (${activeSeason?.period ?? "___"}). Гостей: ${guests}. Доп. место: ${extra}. Итого ≈ ${formatPrice(total)}. Подтвердите, пожалуйста!`;
    return `${MAX_BASE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="prices" className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Цены на проживание
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-base">
            Выберите сезон — рассчитайте стоимость и забронируйте
          </p>
        </ScrollReveal>

        {/* Season cards */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto mb-6">
            {seasons.map((s) => {
              const isActive = selected === s.id;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setSelected(isActive ? null : s.id)}
                  className={`relative rounded-2xl p-4 md:p-5 text-left transition-all duration-300 border-2 cursor-pointer group ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                      : "border-transparent bg-popover shadow-card hover:shadow-lg hover:border-primary/20"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {s.tag && (
                    <span
                      className={`absolute -top-2.5 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold text-primary-foreground ${
                        isActive ? "bg-primary-foreground/20 backdrop-blur" : s.tagColor
                      }`}
                    >
                      {s.tag}
                    </span>
                  )}
                  <div
                    className={`text-xs font-medium mb-1 ${
                      isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                    {formatPrice(s.price)}
                  </div>
                  <div
                    className={`text-[11px] mt-1 ${
                      isActive ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {s.period}
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center"
                    >
                      <Check className="w-3 h-3" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Extra info */}
        <div className="text-center text-sm text-muted-foreground mb-4">
          Единый тариф на все 8 домиков • Доп. место +1 000 ₽/сут
        </div>

        {/* Calculator panel */}
        <AnimatePresence>
          {activeSeason && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ScrollReveal>
                <div className="max-w-2xl mx-auto bg-popover rounded-2xl shadow-card p-5 md:p-8 mt-2">
                  <div className="flex items-center gap-2 mb-5">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold">
                      {activeSeason.label} — {activeSeason.period}
                    </h3>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <Users className="w-3.5 h-3.5 inline mr-1" />
                        Гостей
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            onClick={() => setGuests(n)}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                              guests === n
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                        Ночей
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setNights(Math.max(1, nights - 1))}
                          className="w-10 h-10 rounded-lg bg-muted text-muted-foreground font-semibold hover:bg-muted/80 transition-colors"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center font-display text-xl font-semibold">
                          {nights}
                        </span>
                        <button
                          onClick={() => setNights(Math.min(30, nights + 1))}
                          className="w-10 h-10 rounded-lg bg-muted text-muted-foreground font-semibold hover:bg-muted/80 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <Bed className="w-3.5 h-3.5 inline mr-1" />
                        Доп. место
                      </label>
                      <button
                        onClick={() => setExtraBed(!extraBed)}
                        className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all border ${
                          extraBed
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
                        }`}
                      >
                        {extraBed ? "✓ +1 000 ₽" : "Нет"}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-muted/50 rounded-xl p-4 md:p-5 mb-5">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span className="text-muted-foreground">
                        {formatPrice(activeSeason.price)} × {nights}{" "}
                        {nights === 1 ? "ночь" : nights < 5 ? "ночи" : "ночей"}
                      </span>
                      <span>{formatPrice(activeSeason.price * nights)}</span>
                    </div>
                    {extraBed && (
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-muted-foreground">
                          Доп. место × {nights}
                        </span>
                        <span>{formatPrice(1000 * nights)}</span>
                      </div>
                    )}
                    <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
                      <span className="font-medium">Итого</span>
                      <span className="font-display text-2xl md:text-3xl font-semibold text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildMaxUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Забронировать
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={buildMaxUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 border border-primary/30 text-primary rounded-xl text-sm font-medium text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                    >
                      <img
                        src={maxLogo}
                        alt="MAX"
                        className="w-5 h-5 rounded-full"
                      />
                      Уточнить в MAX
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PricesSection;
