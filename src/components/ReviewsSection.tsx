import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const reviews = [
  {
    name: "Анна К.",
    date: "Август 2025",
    rating: 5,
    text: "Прекрасное место для семейного отдыха! Чистые домики, ухоженная территория, бассейн — дети были в восторге. Обязательно вернёмся!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Дмитрий П.",
    date: "Июль 2025",
    rating: 5,
    text: "Тихо, спокойно, всё продумано. Терраса с видом — отдельный кайф. Барбекю каждый вечер. Рекомендую всем, кто устал от шумных отелей.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Елена М.",
    date: "Июнь 2025",
    rating: 5,
    text: "Отдыхали с мужем и двумя детьми. Домик просторный, кухня оборудована всем необходимым. Wi-Fi работает отлично. Хозяева — чудесные люди!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Сергей В.",
    date: "Сентябрь 2025",
    rating: 4,
    text: "Хорошая база, всё чисто и аккуратно. До моря недалеко. Единственное — хотелось бы чуть больше тени на территории. В остальном — отлично.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

const tooltipPeople = reviews.map((r, i) => ({
  id: i + 1,
  name: r.name,
  designation: r.date,
  image: r.image,
}));

const ReviewsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
          Отзывы гостей
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Что говорят наши гости о базе «Сон»
        </p>
        <div className="flex justify-center mb-10">
          <AnimatedTooltip items={tooltipPeople} />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-popover rounded-lg p-6 shadow-soft h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <span className="font-medium text-sm text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.date}</span>
                </div>
                <div className="flex items-center gap-0.5">
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
              </div>
              <p className="text-sm text-foreground/80 flex-1 leading-relaxed">
                «{r.text}»
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
