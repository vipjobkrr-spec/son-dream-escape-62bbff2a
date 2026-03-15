import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_BASE = "https://max.me/79001234567";

const steps = [
  { icon: MessageCircle, text: "Заполните форму — мы получим заявку" },
  { icon: Clock, text: "Подтвердим наличие в течение 15 минут" },
  { icon: ShieldCheck, text: "Предоплата 30% — остаток за 7 дней до заезда" },
  { icon: CheckCircle2, text: "Готово — домик ваш, ждём вас!" },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    extraBed: false,
    name: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.checkIn || !form.checkOut) e.dates = "Выберите даты заезда и выезда";
    if (!form.name.trim()) e.name = "Укажите имя";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      e.phone = "Введите корректный номер телефона";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Открываем MAX для подтверждения брони...");
    window.open(buildMaxUrl(), "_blank");
  };

  const buildMaxUrl = () => {
    const extraText = form.extraBed ? "да" : "нет";
    const parts = [
      `Здравствуйте! Хочу забронировать домик «Сон».`,
      `Даты: ${form.checkIn || "___"} – ${form.checkOut || "___"}.`,
      `Гостей: ${form.guests}. Доп. место: ${extraText}.`,
      form.name ? `Имя: ${form.name}.` : "",
      form.phone ? `Телефон: ${form.phone}.` : "",
      form.comment ? `Комментарий: ${form.comment}` : "",
      `Подскажите итоговую стоимость и условия предоплаты.`,
    ].filter(Boolean).join(" ");
    return `${MAX_BASE}?text=${encodeURIComponent(parts)}`;
  };

  const set = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-popover border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="booking" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Забронировать домик
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
            Оставьте заявку — подтвердим бронь за 15 минут. Без скрытых доплат.
          </p>
        </ScrollReveal>

        {/* Process steps */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-popover border border-border/30">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-foreground/70 leading-snug">{step.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-popover rounded-lg p-6 md:p-8 shadow-card space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5">Дата заезда</label>
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => set("checkIn", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5">Дата выезда</label>
                <input
                  type="date"
                  value={form.checkOut}
                  onChange={(e) => set("checkOut", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            {errors.dates && <p className="text-destructive text-xs -mt-3">{errors.dates}</p>}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={(e) => set("guests", e.target.value)}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end pb-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={form.extraBed}
                    onChange={(e) => set("extraBed", e.target.checked)}
                    className="w-4 h-4 rounded border-input text-primary focus:ring-primary/30"
                  />
                  Доп. кровать (+1 000 ₽)
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Имя</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Ваше имя"
                className={inputClass}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Телефон</label>
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
              Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="underline hover:text-foreground">политикой конфиденциальности</a>. Предоплата не списывается автоматически — мы свяжемся для подтверждения.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingForm;
