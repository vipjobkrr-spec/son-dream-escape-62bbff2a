import { useState } from "react";
import { TreePine, Mountain, Sunrise, Wind, Home, Waves, UtensilsCrossed, Heart, MapPin, Users, Bath, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import territory1 from "@/assets/territory-1.webp";
import territory2 from "@/assets/territory-2.webp";
import poolImg from "@/assets/pool-1.jpg";
import terraceImg from "@/assets/terrace.jpg";

const tabs = [
  {
    id: "nature",
    icon: TreePine,
    title: "Природа",
    heading: "Первозданная природа вокруг",
    text: "Посвятите время себе и своему здоровью. Насладитесь чистой природой и свежим воздухом, наполненным ароматом трав и хвои. Прогуляйтесь по лесным тропинкам, покупайтесь в море и почувствуйте, как отпуск наполняет вас новой энергией.",
    image: territory1,
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
    text: "Бассейн с шезлонгами, зона барбекю у каждого домика, уютная терраса для завтраков. Закажите доставку фермерских продуктов — и готовьте на природе. Или просто полежите в гамаке с книгой.",
    image: terraceImg,
    highlights: [
      { icon: UtensilsCrossed, text: "Своя зона барбекю у каждого домика" },
      { icon: Heart, text: "Бассейн, гамаки и полная тишина" },
    ],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="about" className="relative">
      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={territory1}
          alt="Территория базы отдыха Сон"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "translateZ(0)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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

                {/* Image */}
                <div className="relative">
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
