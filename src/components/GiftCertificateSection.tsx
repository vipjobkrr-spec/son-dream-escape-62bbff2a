import { Gift } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79898397000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82";

const GiftCertificateSection = () => (
  <section className="py-16 md:py-20">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-primary-foreground/5" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Gift className="w-10 h-10" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl md:text-4xl font-semibold mb-3">
                Подарочный сертификат
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-6 max-w-lg">
                Подарите близким незабываемый отдых на природе. Оформите сертификат
                на проживание в базе «Сон» — идеальный подарок на любой праздник.
              </p>
              <a
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary rounded-xl font-medium text-sm hover:bg-primary-foreground/90 transition-colors shadow-lg"
              >
                <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
                Оформить сертификат
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GiftCertificateSection;
