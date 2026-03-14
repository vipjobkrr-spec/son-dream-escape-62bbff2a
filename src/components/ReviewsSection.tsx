import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Анна К.",
    date: "Август 2025",
    rating: 5,
    text: "Прекрасное место для семейного отдыха! Чистые домики, ухоженная территория, бассейн — дети были в восторге. Обязательно вернёмся!",
  },
  {
    name: "Дмитрий П.",
    date: "Июль 2025",
    rating: 5,
    text: "Тихо, спокойно, всё продумано. Терраса с видом — отдельный кайф. Барбекю каждый вечер. Рекомендую всем, кто устал от шумных отелей.",
  },
  {
    name: "Елена М.",
    date: "Июнь 2025",
    rating: 5,
    text: "Отдыхали с мужем и двумя детьми. Домик просторный, кухня оборудована всем необходимым. Wi-Fi работает отлично. Хозяева — чудесные люди!",
  },
  {
    name: "Сергей В.",
    date: "Сентябрь 2025",
    rating: 4,
    text: "Хорошая база, всё чисто и аккуратно. До моря недалеко. Единственное — хотелось бы чуть больше тени на территории. В остальном — отлично.",
  },
];

const ReviewsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
          Отзывы гостей
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Что говорят наши гости о базе «Сон»
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-popover rounded-lg p-6 shadow-soft h-full flex flex-col">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${
                      si < r.rating
                        ? "text-secondary fill-secondary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 flex-1 mb-4 leading-relaxed">
                «{r.text}»
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{r.name}</span>
                <span>{r.date}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
