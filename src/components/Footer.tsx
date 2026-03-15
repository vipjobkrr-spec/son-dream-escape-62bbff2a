import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79898397000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!";

/* ── Inline SVG icons for socials & payments ── */

const VkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403H2.453a.5.5 0 0 0-.472.667C3.076 10.56 6.513 17.5 11.176 17.5h1.148c.55 0 .996-.445.996-.996v-1.053c0-.55.475-.963 1.017-.896 1.554.192 2.49 1.55 2.49 1.55a.6.6 0 0 0 .517.295h2.76a1 1 0 0 0 .852-1.51c-.426-.7-1.835-2.343-1.835-2.343a.67.67 0 0 1 .056-.79C19.806 11.025 21.99 8.07 22 8.063a.727.727 0 0 0-.453-1.063Z"/>
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13v-3.5a6.37 6.37 0 0 0-.88-.07 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 3.76.92V6.69Z"/>
  </svg>
);

const Footer = () => (
  <footer className="py-12 pb-28 md:pb-12 bg-foreground text-primary-foreground/70">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-primary-foreground font-semibold mb-2">
            База отдыха «Сон»
          </p>
          <p className="text-sm leading-relaxed">
            8 уютных домиков и баня для спокойного семейного отдыха на черноморском побережье
          </p>
        </div>

        {/* Contacts */}
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Контакты</p>
          <div className="space-y-2.5">
            <a href="tel:+79898397000" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 shrink-0" /> +7 989 839-70-00
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <img src={maxLogo} alt="MAX" className="w-4 h-4 rounded-full shrink-0" /> MAX
            </a>
            <a href="https://wa.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
            </a>
            <a href="https://t.me/son_rest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Send className="w-4 h-4 shrink-0" /> Telegram
            </a>
            <a href="mailto:info@son-rest.ru" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 shrink-0" /> info@son-rest.ru
            </a>
          </div>
        </div>

        {/* Address & Map */}
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Адрес</p>
          <div className="flex items-start gap-2 text-sm mb-3">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Краснодарский край, Туапсинский район, с.&nbsp;Тенгинка, ул.&nbsp;Кооперативная,&nbsp;д.&nbsp;39</span>
          </div>
          <div className="rounded-lg overflow-hidden mb-3">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Тенгинка+ул+Кооперативная+39&z=14&l=map"
              width="100%"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              title="Карта — база отдыха Сон"
            />
          </div>
          <a href="https://yandex.ru/maps/?text=Тенгинка+ул+Кооперативная+39" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-secondary hover:text-secondary/80 transition-colors">
            Построить маршрут →
          </a>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-xs text-primary-foreground/50 mr-1">Мы в соцсетях:</span>
        <a href="https://vk.com/son_rest" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="ВКонтакте">
          <VkIcon className="w-4 h-4" />
        </a>
        <a href="https://t.me/son_rest" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Telegram">
          <Send className="w-4 h-4" />
        </a>
        <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
          <MessageCircle className="w-4 h-4" />
        </a>
        <a href="https://www.tiktok.com/@son_rest" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="TikTok">
          <TikTokIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Payment icons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-primary-foreground/50 mr-1">Принимаем к оплате:</span>
        {["Visa", "MasterCard", "МИР", "СБП"].map((name) => (
          <span key={name} className="px-2.5 py-1 rounded bg-primary-foreground/10 text-[10px] font-semibold tracking-wide text-primary-foreground/60 uppercase">
            {name}
          </span>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} База отдыха «Сон». Все права защищены.
        </p>
        <div className="flex gap-4">
          <a href="/privacy" className="text-xs hover:text-primary-foreground transition-colors">
            Политика конфиденциальности
          </a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs hover:text-primary-foreground transition-colors">
            Наверх ↑
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
