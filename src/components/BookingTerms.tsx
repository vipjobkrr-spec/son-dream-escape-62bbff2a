import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const BookingTerms = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container max-w-3xl">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-10">
          Условия бронирования
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        <ScrollReveal delay={0.05}>
          <div className="bg-popover rounded-lg p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold mb-2">Предоплата</h3>
            <p className="text-muted-foreground">
              Бронь подтверждается предоплатой в размере одних суток проживания.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-popover rounded-lg p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold mb-2">Отмена бронирования</h3>
            <p className="text-muted-foreground">
              Возврат предоплаты осуществляется за 30 дней до даты заезда.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-primary/5 border border-primary/15 rounded-lg p-6 flex flex-col sm:flex-row items-start gap-4">
            <MessageCircle className="w-8 h-8 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-2">Чтобы забронировать</p>
              <p className="text-muted-foreground text-sm mb-3">
                Напишите в WhatsApp и укажите даты заезда/выезда и количество гостей. Мы уточним наличие мест и вышлем реквизиты для предоплаты.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default BookingTerms;
