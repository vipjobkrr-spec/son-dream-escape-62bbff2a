import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!";

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
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              +7 (900) 123-45-67
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors"
            >
              <img src={maxLogo} alt="MAX" className="w-4 h-4 rounded-full shrink-0" />
              MAX
            </a>
            <a
              href="https://wa.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp
            </a>
            <a
              href="https://t.me/son_rest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors"
            >
              <Send className="w-4 h-4 shrink-0" />
              Telegram
            </a>
            <a
              href="mailto:info@son-rest.ru"
              className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              info@son-rest.ru
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
          <a
            href="https://yandex.ru/maps/?text=Тенгинка+ул+Кооперативная+39"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            Построить маршрут →
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} База отдыха «Сон». Все права защищены.
        </p>
        <div className="flex gap-4">
          <a
            href="/privacy"
            className="text-xs hover:text-primary-foreground transition-colors"
          >
            Политика конфиденциальности
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs hover:text-primary-foreground transition-colors"
          >
            Наверх ↑
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
