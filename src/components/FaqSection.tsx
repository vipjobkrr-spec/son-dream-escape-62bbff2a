import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { id: "01", q: "Сколько человек вмещает домик?", a: "Оптимально 4 человека, максимально — 5 (с учётом дополнительного места)." },
  { id: "02", q: "Что такое «дополнительное место» и сколько стоит?", a: "Это евро-раскладушка с комплектом постельного белья. Стоимость — 1 000 ₽ в сутки." },
  { id: "03", q: "Как подтвердить бронь?", a: "После согласования дат вы вносите предоплату за 1 сутки. Мы присылаем подтверждение в WhatsApp." },
  { id: "04", q: "Когда возвращается предоплата?", a: "При отмене за 30 дней и более — возврат 100%. Менее 30 дней — предоплата не возвращается." },
  { id: "05", q: "Что есть в домике?", a: "Терраса, зона барбекю, кухня (холодильник, плита, посуда), кровать, диван-кровать, ортопедические матрасы, санузел с душем, кондиционер, Wi-Fi." },
  { id: "06", q: "Можно ли с детьми?", a: "Конечно! Мы ориентированы на тихий семейный отдых." },
  { id: "07", q: "Время заезда и выезда?", a: "Заезд с 14:00, выезд до 12:00." },
  { id: "08", q: "Можно ли с животными?", a: "Размещение с питомцами обсуждается индивидуально — зависит от породы и размера. Напишите нам заранее." },
  { id: "09", q: "Есть ли парковка?", a: "Да, на территории предусмотрена бесплатная охраняемая парковка для гостей." },
  { id: "10", q: "Как далеко до моря?", a: "Около 5 минут на машине или 15–20 минут пешком." },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-10">
            Вопросы и ответы
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none bg-popover rounded-lg shadow-soft px-5 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline gap-4 text-left">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground shrink-0">
                      {faq.id}
                    </span>
                    <span className="font-medium text-sm">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground pl-9">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
