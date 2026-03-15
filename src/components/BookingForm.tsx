import { useState, type FormEvent } from "react";
import { Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_BASE = "https://max.me/79898397000";
const WHATSAPP_URL = "https://wa.me/79898397000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA...";

const steps = [
  { icon: MessageCircle, title: "Оставьте заявку", desc: "Вы оставляете заявку на сайте или пишете нам в мессенджер с желаемыми датами и количеством гостей." },
  { icon: Clock, title: "Подтверждение", desc: "Мы в ближайшее время проверяем свободные домики и подтверждаем бронь." },
  { icon: ShieldCheck, title: "Предоплата", desc: "Вы вносите предоплату за 1 сутки — и мы закрепляем домик за вами." },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.checkIn || !form.checkOut) e.dates = "Выберите даты заезда и выезда";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      e.phone = "Введите корректный номер телефона";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast.success("Открываем MAX для подтверждения брони...");
    window.open(buildMaxUrl(), "_blank");
  };

  const buildMaxUrl = () => {
    const parts = [
      `Здравствуйте! Хочу забронировать домик «Сон».`,
      `Даты: ${form.checkIn || "___"} – ${form.checkOut || "___"}.`,
      `Гостей: ${form.guests}.`,
      form.name ? `Имя: ${form.name}.` : "",
      form.phone ? `Телефон: ${form.phone}.` : "",
      form.comment ? `Комментарий: ${form.comment}` : "",
      `Подскажите наличие и стоимость.`,
    ].filter(Boolean).join(" ");
    return `${MAX_BASE}?text=${encodeURIComponent(parts)}`;
  };

  const set = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-popover border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="booking" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Как забронировать домик
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            Оставьте заявку — подтвердим бронь за 15 минут. Без скрытых доплат.
          </p>
        </ScrollReveal>

        {/* 3 Steps */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-popover border border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{step.title}</span>
                <span className="text-xs text-muted-foreground leading-snug">{step.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-popover rounded-lg p-6 md:p-8 shadow-card space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5">Дата заезда</label>
                <input type="date" value={form.checkIn} onChange={(e) => set("checkIn", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5">Дата выезда</label>
                <input type="date" value={form.checkOut} onChange={(e) => set("checkOut", e.target.value)} className={inputClass} />
              </div>
            </div>
            {errors.dates && <p className="text-destructive text-xs -mt-3">{errors.dates}</p>}

            <div>
              <label className="block text-xs font-medium mb-1.5">Количество гостей</label>
              <select value={form.guests} onChange={(e) => set("guests", e.target.value)} className={inputClass}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Телефон или мессенджер</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "");
                  if (val.startsWith("8")) val = "7" + val.slice(1);
                  if (val.length > 0) {
                    let formatted = "+7";
                    if (val.length > 1) formatted += ` (${val.slice(1, 4)}`;
                    if (val.length > 4) formatted += `) ${val.slice(4, 7)}`;
                    if (val.length > 7) formatted += `-${val.slice(7, 9)}`;
                    if (val.length > 9) formatted += `-${val.slice(9, 11)}`;
                    val = formatted;
                  }
                  set("phone", val);
                }}
                placeholder="+7 (___) ___-__-__"
                className={inputClass}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Комментарий</label>
              <textarea
                value={form.comment}
                onChange={(e) => set("comment", e.target.value)}
                placeholder="Дополнительные пожелания"
                rows={3}
                className={inputClass + " resize-none"}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
              Отправить заявку — подтвердим за 15 мин
            </button>

            <p className="text-[11px] text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy" className="underline hover:text-foreground">политикой конфиденциальности</a>.
              Предоплата не списывается автоматически — мы свяжемся для подтверждения.
            </p>
          </form>
        </ScrollReveal>

        {/* Alternative contacts */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
            <a
              href={`${MAX_BASE}?text=${encodeURIComponent("Здравствуйте! Хочу забронировать домик «Сон».")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
              Написать в MAX
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground/70 rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>
        </ScrollReveal>

        {/* Inline rules */}
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Заезд после 14:00, выезд до 12:00
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingForm;
