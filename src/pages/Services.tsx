import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Flame, Mountain, Bike, Ship, TreePine, MapPin, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

import banyaImg from "@/assets/services/banya.jpg";
import quadImg from "@/assets/services/quad.jpg";
import horseImg from "@/assets/services/horse.jpg";
import supImg from "@/assets/services/sup.jpg";
import hikingImg from "@/assets/services/hiking.jpg";
import transferImg from "@/assets/services/transfer.jpg";
import bbqImg from "@/assets/bbq.jpg";
import sea1 from "@/assets/leisure/sea-1.webp";

const MAX_BASE = "https://max.me/79001234567";

const buildMaxUrl = (service: string) => {
  const text = `Здравствуйте! Хочу заказать услугу «${service}» на базе отдыха «Сон». Подскажите стоимость и наличие.`;
  return `${MAX_BASE}?text=${encodeURIComponent(text)}`;
};

const services = [
  {
    icon: Flame,
    title: "Русская баня",
    description:
      "Настоящая дровяная баня из сибирского кедра с купелью. Берёзовые и дубовые веники, травяные чаи. Идеально после активного дня — расслабьтесь и восстановите силы.",
    details: ["Вместимость до 6 человек", "Веники и чай включены", "Бронирование по часам"],
    price: "от 2 000 ₽ / час",
    image: banyaImg,
  },
  {
    icon: Mountain,
    title: "Квадроциклы",
    description:
      "Захватывающие маршруты по горным тропам Туапсинского района. Прокатитесь по бездорожью с видом на горы и море — незабываемые впечатления для любителей приключений.",
    details: ["Маршруты 1–3 часа", "Инструктор включён", "Экипировка предоставляется"],
    price: "от 3 500 ₽ / чел.",
    image: quadImg,
  },
  {
    icon: TreePine,
    title: "Конные прогулки",
    description:
      "Прогулки верхом по живописным горным тропам и лугам. Подходит для начинающих — инструктор обучит основам верховой езды. Дети от 6 лет в сопровождении взрослых.",
    details: ["Продолжительность 1–2 часа", "Для новичков и опытных", "Дети от 6 лет"],
    price: "от 2 500 ₽ / чел.",
    image: horseImg,
  },
  {
    icon: Ship,
    title: "SUP-борды и каякинг",
    description:
      "Аренда SUP-бордов для прогулок по морю и каяков для речных маршрутов. Спокойное утреннее море или бодрящие горные реки — выбирайте своё приключение.",
    details: ["SUP-борд на весь день", "Спасательные жилеты", "Инструктаж для новичков"],
    price: "от 1 500 ₽ / день",
    image: supImg,
  },
  {
    icon: Bike,
    title: "Пешие экскурсии с гидом",
    description:
      "Маршруты к водопадам, дольменам и горным смотровым площадкам. Опытный гид расскажет историю края и проведёт по самым красивым тропам Туапсинского района.",
    details: ["Маршруты 2–5 часов", "Группы от 2 человек", "Вода и перекус включены"],
    price: "от 1 500 ₽ / чел.",
    image: hikingImg,
  },
  {
    icon: Sparkles,
    title: "Барбекю и мангал",
    description:
      "У каждого домика — собственная зона барбекю с мангалом. Закажите набор для барбекю с мясом и овощами — мы подготовим всё, вам останется только готовить и наслаждаться.",
    details: ["Мангал бесплатно для гостей", "Готовые наборы для BBQ", "Дрова и уголь включены"],
    price: "Набор от 2 500 ₽",
    image: bbqImg,
  },
  {
    icon: MapPin,
    title: "Трансфер",
    description:
      "Комфортный трансфер из аэропорта Краснодара, вокзала Туапсе или любой точки побережья. Встретим вас с табличкой и довезём прямо до домика.",
    details: ["Из Туапсе — 30 мин", "Из Краснодара — 3 часа", "Детские кресла по запросу"],
    price: "от 1 500 ₽",
    image: transferImg,
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Услуги — База отдыха Сон, Тенгинка";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Дополнительные услуги базы отдыха Сон: баня, квадроциклы, конные прогулки, SUP-борды, экскурсии, трансфер. Забронируйте через MAX.");
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={sea1} alt="Услуги базы отдыха Сон" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/40" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Главная</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">Услуги</span>
          </nav>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-4 leading-tight drop-shadow-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Добавьте впечатлений
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">
            Баня, квадроциклы, конные прогулки и многое другое — прямо на базе
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:gap-12">
            {services.map((item, i) => {
              const Icon = item.icon;
              const isReversed = i % 2 !== 0;

              return (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div
                    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center bg-card rounded-2xl shadow-card overflow-hidden`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Icon className="w-4 h-4" />
                        {item.price}
                      </div>
                      <h2
                        className="text-2xl md:text-3xl font-semibold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={buildMaxUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg"
                      >
                        <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
                        Заказать в MAX
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Не нашли нужную услугу?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Напишите нам в MAX — подберём экскурсию, организуем трансфер или поможем с любым другим запросом
            </p>
            <a
              href={buildMaxUrl("Индивидуальный запрос")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg"
            >
              <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
              Написать в MAX
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
