import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { CalendarDays, Users, Bed, ArrowRight, Crown, Flower2, Sun, Waves, Leaf, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import { PricingCard } from "./ui/pricing-card";
import maxLogo from "@/assets/max-logo.webp";

const MAX_BASE = "https://max.me/79001234567";

const seasons = [
  {
    id: "spring",
    label: "Весна",
    period: "01.03 — 15.06",
    price: 6500,
    tag: "Лучшая цена",
    isPopular: false,
    icon: Flower2,
    description: "Тихое море, мало людей, мягкая погода. Идеально для тех, кто хочет перезагрузиться и погулять по горам и ущельям без жары.",
    features: ["Тишина и минимум туристов", "Цветение природы", "5 ночей для семьи 2+2 — от 32 500 ₽"],
  },
  {
    id: "peak",
    label: "Лето",
    period: "16.06 — 24.08",
    price: 12000,
    tag: "Чаще всего выбирают",
    isPopular: true,
    icon: Sun,
    description: "Максимум солнца и моря, тёплые вечера у бассейна и мангала. Хороший вариант для семей с детьми школьного возраста и компаний друзей.",
    features: ["Самое тёплое море", "Все активности доступны", "5 ночей для семьи 2+2 — от 60 000 ₽"],
  },
  {
    id: "velvet",
    label: "Бархатный сезон",
    period: "25.08 — 14.10",
    price: 9000,
    tag: "Рекомендуем",
    icon: Sparkles,
    description: "Сентябрь и начало октября — море ещё тёплое, но нет летней жары и толпы. Часто выбирают семьи с маленькими детьми и те, кто может отдыхать не в пик сезона.",
    features: ["Тёплое море без жары", "Меньше людей", "5 ночей для семьи 2+2 — от 45 000 ₽"],
  },
  {
    id: "autumn",
    label: "Осень",
    period: "15.10 — 30.11",
    price: 7000,
    icon: Leaf,
    description: "Спокойный воздух у моря, красивые виды и комфорт для тех, кто любит тишину и прогулки. Можно работать удалённо и вечером отдыхать на природе.",
    features: ["Тишина и уединение", "Красивые виды", "5 ночей для семьи 2+2 — от 35 000 ₽"],
  },
  {
    id: "vip",
    label: "VIP домик",
    period: "Круглый год",
    price: 16999,
    tag: "VIP",
    isVip: true,
    icon: Crown,
    description: "Самый просторный домик с отдельной верандой, панорамным видом и улучшенной мебелью.",
    features: ["Площадь 45 м² (vs 30 м² стандарт)", "Панорамная веранда с видом на горы", "Кондиционер + тёплый пол", "Приоритетное бронирование"],
  },
];

const formatPrice = (n: number) =>
  n.toLocaleString("ru-RU") + " ₽";

/* Quick price hints */
const quickCalc = (price: number) => [
  { nights: 3, total: price * 3, label: "3 ночи (выходные)" },
  { nights: 5, total: price * 5, label: "5 ночей" },
  { nights: 7, total: price * 7, label: "7 ночей (неделя)" },
];

/* ── WebGL shader background ─────────────────────────────── */
const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `attribute vec2 aP;void main(){gl_Position=vec4(aP,0.,1.);}`;
    const fsSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iRes;
      mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
      float vary(vec2 v1,vec2 v2,float str,float spd){return sin(dot(normalize(v1),normalize(v2))*str+iTime*spd)/100.;}
      vec3 circle(vec2 uv,vec2 ctr,float r,float w){
        vec2 d=ctr-uv;float l=length(d);
        l+=vary(d,vec2(0.,1.),5.,2.);l-=vary(d,vec2(1.,0.),5.,2.);
        return vec3(smoothstep(r-w,r,l)-smoothstep(r,r+w,l));
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iRes;uv.x*=1.5;uv.x-=.25;
        float m=0.;vec2 c=vec2(.5);float r=.35;
        m+=circle(uv,c,r,.035).r;
        m+=circle(uv,c,r-.018,.01).r;
        m+=circle(uv,c,r+.018,.005).r;
        vec2 v=rot(iTime)*uv;
        vec3 fg=vec3(v.x*.3+.15,v.y*.25+.35,.22);
        vec3 bg=vec3(.96,.95,.93);
        vec3 col=mix(bg,fg,m);
        col=mix(col,vec3(1.),circle(uv,c,r,.003).r);
        gl_FragColor=vec4(col,1.);
      }`;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aP = gl.getAttribLocation(prog, "aP");
    gl.enableVertexAttribArray(aP);
    gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

    const iTime = gl.getUniformLocation(prog, "iTime");
    const iRes = gl.getUniformLocation(prog, "iRes");

    let raf: number;
    const render = (t: number) => {
      gl.uniform1f(iTime, t * 0.001);
      gl.uniform2f(iRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    const resize = () => {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      aria-hidden
    />
  );
};

/* ── Main section ────────────────────────────────────────── */
const PricesSection = () => {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [extraBed, setExtraBed] = useState(false);
  const [nights, setNights] = useState(3);

  const activeSeason = seasons.find((s) => s.id === selected);
  const totalPerNight = activeSeason
    ? activeSeason.price + (extraBed ? 1000 : 0)
    : 0;
  const total = totalPerNight * nights;

  const buildMaxUrl = () => {
    const extra = extraBed ? "да" : "нет";
    const text = `Здравствуйте! Хочу забронировать домик «Сон» на ${nights} ночей (${activeSeason?.period ?? "___"}). Гостей: ${guests}. Доп. место: ${extra}. Итого ≈ ${formatPrice(total)}. Подтвердите, пожалуйста!`;
    return `${MAX_BASE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="prices" className="relative py-16 md:py-24 overflow-hidden">
      {isMobile ? (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" aria-hidden />
      ) : (
        <ShaderCanvas />
      )}

      <div className="container relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
            Какой сезон подойдёт вам
          </h2>
          {/* Quick price comparison */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
              <Check className="w-3 h-3 text-secondary" />
              Весной 3 ночи — от 19 500 ₽ за домик
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
              <Check className="w-3 h-3 text-secondary" />
              Дешевле апартаментов в Лазаревском
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
              <Check className="w-3 h-3 text-secondary" />
              Предоплата 30% — остаток за 7 дней
            </span>
          </div>
        </ScrollReveal>

        {/* Season cards grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto mb-6">
            {seasons.map((s) => {
              const isActive = selected === s.id;
              return (
                <PricingCard
                  key={s.id}
                  title={s.label}
                  price={formatPrice(s.price)}
                  priceDescription={`/ сутки • ${s.period}`}
                  description={s.description}
                  features={s.features}
                  tag={s.tag}
                  isActive={isActive}
                  isPopular={s.isPopular}
                  isVip={s.isVip}
                  onClick={() => setSelected(isActive ? null : s.id)}
                />
              );
            })}
          </div>
        </ScrollReveal>

        {/* Quick price hints for selected season */}
        <AnimatePresence>
          {activeSeason && !activeSeason.isVip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-4"
            >
              {quickCalc(activeSeason.price).map((q) => (
                <button
                  key={q.nights}
                  onClick={() => setNights(q.nights)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                    nights === q.nights
                       ? "bg-primary/20 text-primary border-primary/40 shadow-md backdrop-blur-sm"
                      : "bg-popover/60 backdrop-blur-sm border-border/30 text-foreground/70 hover:border-primary/30"
                  }`}
                >
                  {q.label} — <span className="font-semibold">{formatPrice(q.total)}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Extra info */}
        <div className="text-center text-sm text-muted-foreground mb-4">
          Единый тариф на все 8 домиков • Доп. место +1 000 ₽/сут
        </div>

        {/* Calculator panel */}
        <AnimatePresence>
          {activeSeason && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ScrollReveal>
                <div className="max-w-2xl mx-auto backdrop-blur-xl bg-popover/70 rounded-2xl shadow-xl border border-border/30 p-5 md:p-8 mt-2">
                  <div className="flex items-center gap-2 mb-5">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold">
                      {activeSeason.label} — {activeSeason.period}
                    </h3>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <Users className="w-3.5 h-3.5 inline mr-1" />
                        Гостей
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            onClick={() => setGuests(n)}
                            aria-label={`${n} ${n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}`}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                              guests === n
                                ? "bg-primary/20 text-primary shadow-md backdrop-blur-sm"
                                : "bg-muted/60 text-muted-foreground hover:bg-muted/80 backdrop-blur-sm"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                        Ночей
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setNights(Math.max(1, nights - 1))}
                          aria-label="Уменьшить количество ночей"
                          className="w-10 h-10 rounded-lg bg-muted/60 text-muted-foreground font-semibold hover:bg-muted/80 transition-colors backdrop-blur-sm"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center font-display text-xl font-semibold">
                          {nights}
                        </span>
                        <button
                          onClick={() => setNights(Math.min(30, nights + 1))}
                          aria-label="Увеличить количество ночей"
                          className="w-10 h-10 rounded-lg bg-muted/60 text-muted-foreground font-semibold hover:bg-muted/80 transition-colors backdrop-blur-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        <Bed className="w-3.5 h-3.5 inline mr-1" />
                        Доп. место
                      </label>
                      <button
                        onClick={() => setExtraBed(!extraBed)}
                        className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all border ${
                          extraBed
                            ? "bg-primary/20 text-primary border-primary/40 shadow-md backdrop-blur-sm"
                            : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted/80 backdrop-blur-sm"
                        }`}
                      >
                        {extraBed ? "✓ +1 000 ₽" : "Нет"}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-5 border border-border/20">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span className="text-muted-foreground">
                        {formatPrice(activeSeason.price)} × {nights}{" "}
                        {nights === 1 ? "ночь" : nights < 5 ? "ночи" : "ночей"}
                      </span>
                      <span>{formatPrice(activeSeason.price * nights)}</span>
                    </div>
                    {extraBed && (
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-muted-foreground">
                          Доп. место × {nights}
                        </span>
                        <span>{formatPrice(1000 * nights)}</span>
                      </div>
                    )}
                    <div className="border-t border-border/30 mt-3 pt-3 flex justify-between items-center">
                      <span className="font-medium">Итого</span>
                      <span className="font-display text-2xl md:text-3xl font-semibold text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Предоплата 30% ({formatPrice(Math.round(total * 0.3))}) • остаток за 7 дней до заезда
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildMaxUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-primary/15 text-primary border border-primary/25 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-primary/25 hover:border-primary/40 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Забронировать — подтвердим за 15 мин
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={buildMaxUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 border border-primary/30 text-primary rounded-xl text-sm font-medium text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                      <img
                        src={maxLogo}
                        alt="MAX"
                        className="w-5 h-5 rounded-full"
                      />
                      Уточнить в MAX
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Footer CTA */}
        <ScrollReveal>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Напишите нам даты — подскажем, какой сезон лучше подойдёт именно вам.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricesSection;
