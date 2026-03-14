import { MapPin, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const LocationSection = () => (
  <section id="location" className="py-16 md:py-24 bg-muted/40">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
          Как добраться
        </h2>
        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
          База отдыха «Сон» находится в селе Тенгинка, Туапсинский район, Краснодарский край — между Туапсе и Сочи. К нам удобно добираться на автомобиле из Краснодара, Туапсе и Сочи, на поезде до Туапсе или Сочи с последующим трансфером до Тенгинки.
        </p>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-2xl mx-auto">
          Из Краснодара до базы «Сон» в Тенгинке дорога занимает около нескольких часов, маршрут проходит по живописной части Краснодарского края. Из Сочи и Туапсе можно добраться как на личном автомобиле, так и на общественном транспорте, а дальше — на такси или трансфере до домиков.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="rounded-lg overflow-hidden shadow-card mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11789.258!2d38.91!3d44.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f4f8c0c0c0c0c1%3A0x0!2z0KLQtdC90LPQuNC90LrQsA!5e0!3m2!1sru!2sru!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения базы отдыха Сон"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Адрес</p>
                <p className="text-muted-foreground text-sm">Краснодарский край, Туапсинский район, с. Тенгинка</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              На территории предусмотрена бесплатная охраняемая парковка для гостей.
            </p>
          </div>
          <a
            href="https://yandex.ru/maps/?text=Тенгинка+Туапсинский+район"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            <Navigation className="w-4 h-4" />
            Построить маршрут
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default LocationSection;
