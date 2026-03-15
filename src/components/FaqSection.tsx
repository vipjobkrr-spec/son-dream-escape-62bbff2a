import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { id: "01", q: "Сколько человек помещается в одном домике?", a: "Оптимально 2 взрослых и 2 ребёнка. При необходимости можем добавить одно дополнительное место по предварительному согласованию." },
  { id: "02", q: "Можно ли приезжать с животными?", a: "Да, по предварительному согласованию. Важно, чтобы питомец был приучен к дому, а хозяева бережно относились к мебели и территории." },
  { id: "03", q: "Как далеко море и как до него добраться?", a: "Море находится в нескольких минутах на машине. Гости обычно добираются на своём авто: мы подскажем удобный маршрут и места для парковки." },
  { id: "04", q: "Есть ли парковка для машин?", a: "На территории есть парковка для гостей. Места хватает для всех домиков, заранее бронировать парковку не нужно." },
  { id: "05", q: "Как устроен заезд и выезд?", a: "Заезд после 14:00, выезд до 12:00 (при необходимости подстройки по времени можно договориться заранее)." },
  { id: "06", q: "Нужна ли предоплата при бронировании?", a: "Да, после подтверждения наличия свободного домика мы попросим внести предоплату за 1 сутки проживания. Остальную сумму вы оплачиваете при заселении." },
  { id: "07", q: "Что включено в стоимость проживания?", a: "В стоимость входит проживание в домике, пользование бассейном, мангалами и общей территорией, Wi‑Fi, парковка. Баня и некоторые дополнительные услуги могут оплачиваться отдельно." },
  { id: "08", q: "Есть ли поблизости магазины и кафе?", a: "Рядом есть продуктовые магазины и кафе. По приезде мы подскажем, где удобнее всего закупиться и вкусно поесть." },
  { id: "09", q: "Подходит ли у вас для отдыха с маленькими детьми?", a: "Да, к нам часто приезжают семьи с детьми. Закрытая территория, бассейн и спокойная обстановка делают отдых комфортным для родителей и безопасным для детей." },
  { id: "10", q: "Можно ли работать удалённо во время отдыха?", a: "Да, в домиках есть Wi‑Fi, розетки и спокойная обстановка. Многие гости совмещают работу за ноутбуком днём и отдых у моря и бассейна вечером." },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 font-sans">
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
                    <span className="font-medium text-[15px]">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[14px] leading-relaxed text-muted-foreground pl-9">
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
