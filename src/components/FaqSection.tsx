import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Сколько человек вмещает домик?", a: "Оптимально 4 человека, максимально — 5 (с учётом дополнительного места)." },
  { q: "Что такое «дополнительное место» и сколько стоит?", a: "Это евро-раскладушка с комплектом постельного белья. Стоимость — 1 000 ₽ в сутки." },
  { q: "Как подтвердить бронь?", a: "После согласования дат вы вносите предоплату за 1 сутки. Мы присылаем подтверждение в WhatsApp." },
  { q: "Когда возвращается предоплата?", a: "При отмене за 30 дней и более — возврат 100%. Менее 30 дней — предоплата не возвращается." },
  { q: "Что есть в домике?", a: "Терраса, зона барбекю, кухня (холодильник, плита, посуда), кровать, диван-кровать, ортопедические матрасы, санузел с душем, кондиционер, Wi-Fi." },
  { q: "Можно ли с детьми?", a: "Конечно! Мы ориентированы на тихий семейный отдых." },
  { q: "Время заезда и выезда?", a: "Заезд с 14:00, выезд до 12:00." },
  { q: "Можно ли с животными?", a: "Размещение с питомцами обсуждается индивидуально — зависит от породы и размера. Напишите нам заранее." },
  { q: "Есть ли парковка?", a: "Да, на территории предусмотрена бесплатная охраняемая парковка для гостей." },
  { q: "Как далеко до моря?", a: "Около 5 минут на машине или 15–20 минут пешком." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-10">
            Вопросы и ответы
          </h2>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="bg-popover rounded-lg shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: open === i ? "200px" : "0",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
