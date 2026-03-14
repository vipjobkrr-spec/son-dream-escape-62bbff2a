import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_BASE = "https://max.me/79001234567";

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
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  const buildMaxUrl = () => {
    const extraText = form.extraBed ? "да" : "нет";
    const text = `Здравствуйте! Хочу забронировать домик «Сон». Даты: ${form.checkIn || "___"} – ${form.checkOut || "___"}. Гостей: ${form.guests}. Нужно доп. место: ${extraText}. Подскажите, пожалуйста, итоговую стоимость и условия предоплаты.`;
    return `${MAX_BASE}?text=${encodeURIComponent(text)}`;
  };

  const set = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-popover border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="booking" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Забронировать домик
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Заполните форму или напишите нам в MAX
          </p>
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
                  Доп. кровать
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
                onChange={(e) => set("phone", e.target.value)}
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

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg"
                >
                  Отправить заявку
                </button>
                <a
                  href={buildMaxUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 border border-primary text-primary rounded-lg text-sm font-medium text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                >
                  <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
                  Написать в MAX
                </a>
              </div>
              <a
                href="https://travel.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-accent text-accent-foreground border border-input rounded-lg text-sm font-medium text-center hover:bg-accent/80 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Забронировать на Яндекс Путешествиях
              </a>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingForm;
