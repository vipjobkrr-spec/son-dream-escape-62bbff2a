import { Clock, CreditCard, Banknote, CalendarX, UserCheck, PawPrint } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL = "https://max.me/79898397000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const items = [
  { icon: Clock, title: "Заезд и выезд", desc: "Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд — по согласованию." },
  { icon: CreditCard, title: "Оплата", desc: "Наличные и банковская карта. Гарантийный залог при заезде возвращается при выселении." },
  { icon: Banknote, title: "Предоплата", desc: "Бронь подтверждается предоплатой в размере одних суток проживания." },
  { icon: CalendarX, title: "Отмена брони", desc: "Возврат предоплаты осуществляется за 30 дней до даты заезда." },
  { icon: UserCheck, title: "Размещение", desc: "Паспорт при заселении, соблюдение тишины после 23:00, некурящие номера." },
  { icon: PawPrint, title: "Животные", desc: "Размещение с животными возможно по предварительному согласованию." },
];

const BookingTerms = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-4 mb-12">
          <Badge variant="outline">Бронирование</Badge>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center">
            Условия бронирования
          </h2>
          <p className="text-muted-foreground text-center max-w-xl">
            Всё, что нужно знать перед бронированием домика на базе отдыха «Сон».
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={0.05 * (i + 1)}>
            <div className="bg-popover rounded-xl p-6 shadow-soft h-full flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.35}>
        <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
          <img src={maxLogo} alt="MAX" className="w-8 h-8 rounded-full shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-2">Чтобы забронировать</p>
            <p className="text-muted-foreground text-sm mb-3">
              Напишите в MAX и укажите даты заезда/выезда и количество гостей. Мы уточним наличие мест и вышлем реквизиты для предоплаты.
            </p>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
              Написать в MAX
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BookingTerms;
