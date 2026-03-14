import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Phone, Mountain, Waves, Ship, TreePine, Flame, Utensils, Camera, MapPin } from "lucide-react";

import sea1 from "@/assets/leisure/sea-1.webp";
import lake from "@/assets/leisure/lake.webp";
import sea2 from "@/assets/leisure/sea-2.webp";
import flowers from "@/assets/leisure/flowers.webp";
import river1 from "@/assets/leisure/river-1.webp";
import river2 from "@/assets/leisure/river-2.webp";
import sunset from "@/assets/leisure/sunset.webp";
import river3 from "@/assets/leisure/river-3.webp";
import sea3 from "@/assets/leisure/sea-3.webp";
import river4 from "@/assets/leisure/river-4.webp";

const heroImages = [sea1, sunset, river2, lake, sea3];

const services = [
  {
    icon: Waves,
    title: "Пляжи Чёрного моря",
    description:
      "Галечные пляжи в 10–15 минутах от базы. Чистое открытое море, живописные бухты и уединённые места. Мы подскажем лучшие маршруты и поможем организовать трансфер.",
    image: sea2,
    price: "Бесплатно для гостей",
  },
  {
    icon: Mountain,
    title: "Горные реки и ущелья",
    description:
      "Прозрачные реки с изумрудной водой, скальные каньоны и природные купели. Идеально для жаркого дня — освежиться в горной реке среди нетронутой природы Кавказа.",
    image: river1,
    price: "Бесплатно / экскурсия от 1 500 ₽",
  },
  {
    icon: Ship,
    title: "Морские прогулки",
    description:
      "Прогулки на катере вдоль побережья, рыбалка в открытом море, снорклинг в чистейших бухтах. Незабываемые закаты с воды и купание в открытом море.",
    image: sunset,
    price: "от 2 000 ₽ / чел.",
  },
  {
    icon: TreePine,
    title: "Пешие маршруты",
    description:
      "Маршруты разной сложности по горам Туапсинского района: от лёгких прогулок к водопадам до серьёзных треков с панорамными видами на море и горы.",
    image: river4,
    price: "Бесплатно / с гидом от 1 000 ₽",
  },
  {
    icon: Flame,
    title: "Барбекю и мангал",
    description:
      "У каждого домика — своя зона барбекю. Мы предоставляем мангал, решётку и уголь. Готовьте на свежем воздухе под звуки природы. Продукты можно заказать у нас.",
    image: flowers,
    price: "Бесплатно для гостей",
  },
  {
    icon: Camera,
    title: "Экскурсии по окрестностям",
    description:
      "Дольмены, водопады, горные перевалы и старинные крепости — Туапсинский район полон достопримечательностей. Организуем индивидуальные и групповые экскурсии.",
    image: river3,
    price: "от 1 500 ₽ / чел.",
  },
];

const extras = [
  {
    icon: Utensils,
    title: "Доставка продуктов",
    desc: "Закажите свежие продукты, и мы доставим их прямо к вашему домику.",
  },
  {
    icon: MapPin,
    title: "Трансфер",
    desc: "Организуем трансфер от аэропорта / вокзала Туапсе или Краснодара.",
  },
  {
    icon: Waves,
    title: "Аренда оборудования",
    desc: "Велосипеды, SUP-борды, удочки и снаряжение для активного отдыха.",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Услуги — База отдыха Сон, Тенгинка";
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={lake}
            alt="Природа рядом с базой отдыха Сон"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>
        <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto">
          <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-widest mb-4">
            База отдыха «Сон»
          </p>
          <h1 className="text-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Услуги и досуг
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Море, горы, реки и природа Кавказа — добавьте впечатлений к вашему отдыху
          </p>
          <a href="tel:+79001234567">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 gap-2">
              <Phone className="w-4 h-4" />
              Узнать подробности
            </Button>
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-semibold mb-4">
              Чем заняться
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Мы поможем организовать ваш отдых — от расслабленного пляжного дня до горных приключений
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isReversed = i % 2 !== 0;

              return (
                <ScrollReveal key={service.title}>
                  <div
                    className={`flex flex-col ${
                      isReversed ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-8 md:gap-12 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                      <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Icon className="w-4 h-4" />
                        {service.price}
                      </div>
                      <h3 className="text-display text-2xl md:text-3xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </p>
                      <a href="tel:+79001234567">
                        <Button variant="outline" className="rounded-full mt-2 gap-2">
                          <Phone className="w-4 h-4" />
                          Забронировать
                        </Button>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-display text-3xl md:text-4xl font-semibold text-center mb-12">
            Дополнительные услуги
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {extras.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-8 shadow-card text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-display text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={sea1}
              alt="Чёрное море"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 flex items-center">
              <div className="px-8 md:px-16 max-w-xl">
                <h2 className="text-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Готовы к отдыху мечты?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Свяжитесь с нами, и мы поможем спланировать идеальный отпуск
                </p>
                <a href="tel:+79001234567">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 gap-2">
                    <Phone className="w-4 h-4" />
                    +7 (900) 123-45-67
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
