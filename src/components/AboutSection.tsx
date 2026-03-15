import { useState, useEffect, useCallback, useRef } from "react";
import { TreePine, Mountain, Sunrise, Wind, Home, Waves, UtensilsCrossed, Heart, MapPin, Users, Bath, Wifi, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import territory1 from "@/assets/territory-1.webp";
import territory2 from "@/assets/territory-2.webp";
import poolImg from "@/assets/pool-1.jpg";
import terraceImg from "@/assets/terrace.jpg";
import poolTerritory from "@/assets/about/pool-territory.webp";
import poolFull from "@/assets/about/pool-full.webp";
import bedroomInterior from "@/assets/about/bedroom-interior.webp";
import poolLoungers from "@/assets/about/pool-loungers.webp";
import territoryWalkway from "@/assets/about/territory-walkway.webp";

import aboutBbq from "@/assets/about/bbq-friends.jpg";
import aboutBbq2 from "@/assets/about/bbq-friends-2.jpg";
import aboutPoolGirl from "@/assets/about/pool-girl.jpg";
import aboutPoolWalk from "@/assets/about/pool-walk.jpg";
import aboutPoolWalk2 from "@/assets/about/pool-walk-2.jpg";
import aboutFamily from "@/assets/about/family-pool.jpg";
import aboutPoolGirls from "@/assets/about/pool-girls.jpg";
import aboutPoolGroup from "@/assets/about/pool-group.png";
import aboutTerritory from "@/assets/about/territory-sun.webp";
import aboutTerritory2 from "@/assets/about/territory-sun-2.webp";

import natureRiverCanyon from "@/assets/nature/river-canyon.webp";
import natureRiverTree from "@/assets/nature/river-tree.webp";
import natureRiverRocks from "@/assets/nature/river-rocks.webp";
import natureSeaSunset from "@/assets/nature/sea-sunset.webp";
import natureSeaClouds from "@/assets/nature/sea-clouds.webp";
import natureMountainStream from "@/assets/nature/mountain-stream.webp";
import banyaImg from "@/assets/services/banya.jpg";

const heroSlides = [
  { src: aboutTerritory, alt: "Территория базы отдыха Сон — домики и бассейн" },
  { src: aboutTerritory2, alt: "Территория базы с видом на горы" },
  { src: aboutPoolWalk, alt: "Прогулка у бассейна на базе Сон" },
  { src: aboutPoolWalk2, alt: "У бассейна на территории базы Сон" },
  { src: aboutFamily, alt: "Семейный отдых в бассейне" },
  { src: aboutPoolGroup, alt: "Купание в бассейне с друзьями" },
  { src: aboutBbq2, alt: "Барбекю с друзьями на базе Сон" },
  { src: aboutPoolGirl, alt: "Отдых у бассейна с видом на горы" },
  { src: aboutPoolGirls, alt: "Купание в бассейне на базе Сон" },
];

const natureGallery = [
  { src: natureRiverCanyon, alt: "Горная река в каньоне у Тенгинки" },
  { src: natureSeaSunset, alt: "Чёрное море на закате" },
  { src: natureRiverTree, alt: "Река с прозрачной водой и деревьями" },
  { src: banyaImg, alt: "Баня на территории базы Сон" },
  { src: natureSeaClouds, alt: "Волны Чёрного моря" },
  { src: natureRiverRocks, alt: "Горная река у скал" },
  { src: natureMountainStream, alt: "Горный ручей среди скал и зелени" },
];

const tabs = [
  {
    id: "nature",
    icon: TreePine,
    title: "Природа",
    heading: "Первозданная природа вокруг",
    text: "Посвятите время себе и своему здоровью. Насладитесь чистой природой и свежим воздухом, наполненным ароматом трав и хвои. Прогуляйтесь по лесным тропинкам, покупайтесь в море и почувствуйте, как отпуск наполняет вас новой энергией.",
    image: territory1,
    hasGallery: true,
    highlights: [
      { icon: Mountain, text: "Горы и море — всё в шаговой доступности" },
      { icon: Wind, text: "Место, где дышится полной грудью" },
    ],
  },
  {
    id: "comfort",
    icon: Home,
    title: "Комфорт",
    heading: "Домашний уют на природе",
    text: "8 уютных домиков и баня с полным оснащением: кондиционер, кухня, душ, Wi-Fi. Вы будете жить на лоне природы и чувствовать себя комфортно, как дома. Свежее постельное бельё, полотенца и всё необходимое — уже в домике.",
    image: territory2,
    highlights: [
      { icon: Home, text: "8 полностью оборудованных домиков и баня" },
      { icon: Sunrise, text: "Закаты и рассветы как на ладони" },
    ],
  },
  {
    id: "activities",
    icon: Waves,
    title: "Активности",
    heading: "Море, горы и приключения",
    text: "Чёрное море в 10 минутах, горные реки и водопады — рядом. Прокат велосипедов, SUP-бордов, экскурсии к дольменам и каньонам. Каждый день — новое открытие, и не нужно далеко ехать.",
    image: poolImg,
    highlights: [
      { icon: Waves, text: "Пляжи и морские прогулки" },
      { icon: Mountain, text: "Треки и экскурсии по горам" },
    ],
  },
  {
    id: "relax",
    icon: Heart,
    title: "Отдых",
    heading: "Расслабление и вкусная еда",
    text: "Бассейн с шезлонгами, Навес у каждого домика, уютная атмосфера для завтраков. Закажите доставку фермерских продуктов — и готовьте на природе.",
    image: terraceImg,
    highlights: [
      { icon: UtensilsCrossed, text: "Своя зона барбекю у каждого домика" },
      { icon: Heart, text: "Бассейн, гамаки и полная тишина" },
    ],
  },
];

const useSwipe = (onLeft: () => void, onRight: () => void, threshold = 50) => {
  const touchStart = useRef<number | null>(null);
  const onLeftRef = useRef(onLeft);
  const onRightRef = useRef(onRight);
  
  useEffect(() => {
    onLeftRef.current = onLeft;
    onRightRef.current = onRight;
  }, [onLeft, onRight]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff > threshold) onRightRef.current();
    else if (diff < -threshold) onLeftRef.current();
    touchStart.current = null;
  }, [threshold]);
  return { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd };
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [natureSlide, setNatureSlide] = useState(0);
  const current = tabs[activeTab];

  const nextSlide = useCallback(() => {
    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const nextNature = useCallback(() => {
    setNatureSlide((prev) => (prev + 1) % natureGallery.length);
  }, []);

  const prevNature = useCallback(() => {
    setNatureSlide((prev) => (prev - 1 + natureGallery.length) % natureGallery.length);
  }, []);

  const heroSwipe = useSwipe(nextSlide, prevSlide);
  const natureSwipe = useSwipe(nextNature, prevNature);

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  }, []);
  const prevTab = useCallback(() => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  }, []);
  const tabSwipe = useSwipe(nextTab, prevTab);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="about" className="relative">
      {/* Hero slider */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden touch-pan-y" {...heroSwipe}>
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlide}
            src={heroSlides[heroSlide].src}
            alt={heroSlides[heroSlide].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            draggable={false}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all"
          aria-label="Предыдущее фото"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all"
          aria-label="Следующее фото"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === heroSlide
                  ? "bg-primary-foreground w-6"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal className="text-center px-5">
            <p className="text-secondary font-medium text-sm mb-3 tracking-widest uppercase">
              Откройте для себя
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-primary-foreground leading-tight">
              Что такое база «Сон»?
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Description block */}
      <div className="bg-background">
        <div className="container py-12 md:py-16">
          <ScrollReveal>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-10 md:mb-12">
              База отдыха «Сон» расположена в селе Тенгинка, Туапсинский район, Краснодарский край — курортный посёлок между Краснодаром и Сочи на берегу Чёрного моря. Это небольшая семейная база с 8 домиками и баней, где можно отдохнуть в тишине, но при этом оставаться в удобной доступности от Туапсе и Сочи.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto text-center mb-10">
              База отдыха «Сон» подойдёт тем, кто живёт в Краснодаре, Сочи, Туапсе и ищет тихие домики у моря на выходные или отпуск без толпы туристов. До Тенгинки легко доехать на машине по трассе из Краснодара или Сочи, а сама деревня остаётся спокойной даже в высокий сезон.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[
                { icon: MapPin, label: "Тенгинка", sub: "Туапсинский район" },
                { icon: Home, label: "8 домиков", sub: "и баня" },
                { icon: Users, label: "Семейный", sub: "формат отдыха" },
                { icon: Waves, label: "10 мин", sub: "до моря" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Tabbed content */}
      <div className="bg-muted/30">
        <div className="container py-14 md:py-20">
          {/* Tab switcher */}
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap items-center gap-1 rounded-2xl border bg-card p-1.5 shadow-sm">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              {...tabSwipe}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="touch-pan-y"
            >
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto items-center">
                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mb-5 text-foreground">
                    {current.heading}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {current.text}
                  </p>

                  <div className="space-y-3">
                    {current.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <h.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {h.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 mt-8 text-primary font-medium text-sm hover:underline underline-offset-4 transition-all"
                  >
                    Смотреть фотогалерею →
                  </a>
                </div>

                {/* Image / Gallery */}
                <div className="relative">
                  {current.hasGallery ? (
                    <div className="space-y-3">
                      {/* Main nature image with slider */}
                      <div className="relative rounded-2xl overflow-hidden shadow-card" {...natureSwipe}>
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={natureSlide}
                            src={natureGallery[natureSlide].src}
                            alt={natureGallery[natureSlide].alt}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-64 md:h-[350px] object-cover"
                            loading="lazy"
                          />
                        </AnimatePresence>
                        {/* Slide arrows */}
                        <button
                          onClick={() => setNatureSlide((p) => (p - 1 + natureGallery.length) % natureGallery.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/50 transition-all"
                          aria-label="Назад"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setNatureSlide((p) => (p + 1) % natureGallery.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/50 transition-all"
                          aria-label="Вперёд"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        {/* Caption */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-3">
                          <p className="text-primary-foreground text-xs text-center">{natureGallery[natureSlide].alt}</p>
                        </div>
                      </div>
                      {/* Thumbnail strip */}
                      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {natureGallery.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setNatureSlide(i)}
                            className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                              i === natureSlide ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-90"
                            }`}
                          >
                            <img src={img.src} alt={img.alt} className="w-14 h-14 md:w-16 md:h-16 object-cover" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-card">
                      <motion.img
                        key={current.image}
                        src={current.image}
                        alt={current.heading}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-72 md:h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="absolute -bottom-4 -left-4 md:-left-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg">
                    <p className="font-display text-2xl font-semibold">8</p>
                    <p className="text-xs text-primary-foreground/80">
                      домиков и баня
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
