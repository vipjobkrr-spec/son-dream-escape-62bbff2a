import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from '@/components/ui/hero-gallery-scroll-animation';
import {
  Phone,
  Mountain,
  Waves,
  Ship,
  TreePine,
  Flame,
  Camera,
  Utensils,
  MapPin,
  Bike,
  ChevronRight,
  Trees,
  Compass,
  Anchor,
} from 'lucide-react';

import sea1 from '@/assets/leisure/sea-1.webp';
import lake from '@/assets/leisure/lake.webp';
import sea2 from '@/assets/leisure/sea-2.webp';
import flowers from '@/assets/leisure/flowers.webp';
import river1 from '@/assets/leisure/river-clear.webp';
import river2 from '@/assets/leisure/river-2.webp';
import sunset from '@/assets/leisure/sunset.webp';
import river3 from '@/assets/leisure/river-3.webp';
import sea3 from '@/assets/leisure/sea-3.webp';
import river4 from '@/assets/leisure/river-4.webp';


const heroImages = [sea1, lake, river2, sea3, sunset];

const categories = [
  { icon: Trees, label: 'Природа', anchor: 'nature' },
  { icon: Anchor, label: 'Море', anchor: 'sea' },
  { icon: Compass, label: 'Приключения', anchor: 'adventures' },
];

const activities = [
  {
    id: 'sea',
    icon: Waves,
    title: 'Пляжи Чёрного моря',
    description:
      'Галечные пляжи всего в 10–15 минутах от базы. Чистое открытое море, живописные бухты и уединённые места для спокойного отдыха. Мы подскажем лучшие пляжи и организуем трансфер.',
    image: sea2,
    badge: 'Бесплатно для гостей',
  },
  {
    id: 'nature',
    icon: Mountain,
    title: 'Горные реки и ущелья',
    description:
      'Прозрачные реки с изумрудной водой, скальные каньоны и природные купели. Освежитесь в горной реке среди нетронутой природы Кавказа — идеально в жаркий летний день.',
    image: river1,
    badge: 'Бесплатно / экскурсия от 1 500 ₽',
  },
  {
    id: 'nature',
    icon: TreePine,
    title: 'Пешие маршруты и водопады',
    description:
      'Маршруты разной сложности по горам Туапсинского района: от лёгких прогулок к водопадам до серьёзных треков с панорамными видами на Чёрное море и горные хребты.',
    image: river4,
    badge: 'Бесплатно / с гидом от 1 000 ₽',
  },
  {
    id: 'adventures',
    icon: Bike,
    title: 'Велопрогулки по окрестностям',
    description:
      'Живописные велосипедные маршруты вдоль рек и через горные посёлки. Прокат велосипедов на базе — просто садитесь и наслаждайтесь природой.',
    image: flowers,
    badge: 'Прокат от 500 ₽ / день',
  },
  {
    id: 'sea',
    icon: Ship,
    title: 'Морские прогулки на катере',
    description:
      'Прогулки вдоль побережья, рыбалка в открытом море, снорклинг в чистейших бухтах. Незабываемые закаты с воды и купание вдали от берега.',
    image: sunset,
    badge: 'от 2 000 ₽ / чел.',
  },
  {
    id: 'adventures',
    icon: Camera,
    title: 'Экскурсии и достопримечательности',
    description:
      'Дольмены, водопады, горные перевалы и старинные крепости — Туапсинский район полон удивительных мест. Организуем индивидуальные и групповые экскурсии.',
    image: river3,
    badge: 'от 1 500 ₽ / чел.',
  },
  {
    id: 'adventures',
    icon: Flame,
    title: 'Барбекю на природе',
    description:
      'У каждого домика — своя зона барбекю с мангалом и всем необходимым. Готовьте на свежем воздухе под звуки реки и пение птиц. Продукты можно заказать прямо у нас.',
    image: '/lovable-uploads/01fe14e4-5fb9-4652-9c04-206e64db3eea.png',
    badge: 'Бесплатно для гостей',
  },
];

const extras = [
  {
    icon: MapPin,
    title: 'Трансфер',
    desc: 'Организуем встречу и трансфер из аэропорта, вокзала Туапсе или Краснодара.',
  },
  {
    icon: Waves,
    title: 'Аренда снаряжения',
    desc: 'Велосипеды, SUP-борды, удочки и снаряжение для активного отдыха на природе.',
  },
  {
    icon: Utensils,
    title: 'Доставка продуктов',
    desc: 'Закажите свежие продукты — мы доставим их прямо к вашему домику.',
  },
];

const Leisure = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollTo = (anchor: string) => {
    const el = sectionRefs.current[anchor];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO
        title="Досуг и развлечения — База отдыха Сон, Тенгинка"
        description="Море, горные реки, SUP-борды, пешие маршруты и природные достопримечательности рядом с базой отдыха Сон в Тенгинке."
        url="/leisure"
      />
      <Navbar />

      {/* ═══ Animated Hero Gallery ═══ */}
      <ContainerScroll>
        <BentoGrid className="h-full p-4">
          {heroImages.map((src, i) => (
            <BentoCell key={i}>
              <img
                src={src}
                alt={`Природа Кавказа ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale>
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative text-center px-4 max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-1.5 text-sm text-primary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Главная
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary-foreground">Досуг</span>
            </nav>

            <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight drop-shadow-lg">
              Добавьте впечатлений
              <span className="block text-secondary">к вашему отдыху</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 drop-shadow">
              Море, горы, реки и природа Кавказа — всё в шаговой доступности
            </p>
            <a href="tel:+79001234567">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 gap-2"
              >
                <Phone className="w-4 h-4" />
                Узнать подробности
              </Button>
            </a>
          </div>
        </ContainerScale>
      </ContainerScroll>

      {/* ═══ Category slider ═══ */}
      <section className="py-10 md:py-14 border-b border-border">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory md:justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.anchor}
                  onClick={() => scrollTo(cat.anchor)}
                  className="flex-shrink-0 snap-start flex flex-col items-center gap-3 px-8 py-5 rounded-2xl bg-card shadow-card hover:shadow-md transition-shadow cursor-pointer group min-w-[140px]"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Activities zigzag ═══ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-semibold mb-4">
              Чем заняться
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              От расслабленного пляжного дня до горных приключений — мы поможем организовать всё
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {activities.map((item, i) => {
              const Icon = item.icon;
              const isReversed = i % 2 !== 0;

              return (
                <ScrollReveal key={item.title}>
                  <div
                    ref={(el) => {
                      if (!sectionRefs.current[item.id]) sectionRefs.current[item.id] = el;
                    }}
                    className={`flex flex-col ${
                      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                    } gap-8 md:gap-14 items-center`}
                  >
                    <div className="w-full md:w-[55%]">
                      <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-[45%] space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Icon className="w-4 h-4" />
                        {item.badge}
                      </div>
                      <h3 className="text-display text-2xl md:text-3xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
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

      {/* ═══ Extras grid ═══ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-display text-3xl md:text-4xl font-semibold text-center mb-12">
              Дополнительные услуги
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {extras.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 shadow-card text-center space-y-4 h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-display text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA Banner ═══ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={sea1}
                alt="Чёрное море — база отдыха Сон"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/40 flex items-center">
                <div className="px-8 md:px-16 max-w-xl">
                  <h2 className="text-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Готовы к незабываемому отдыху?
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Свяжитесь с нами — поможем спланировать ваш идеальный отпуск на Кавказе
                  </p>
                  <a href="tel:+79001234567">
                    <Button
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +7 (900) 123-45-67
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Leisure;
