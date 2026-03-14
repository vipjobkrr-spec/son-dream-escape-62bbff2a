import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeisureHeroBlock from '@/components/LeisureHeroBlock';

import river3 from '@/assets/leisure/river-3.webp';
import sea3 from '@/assets/leisure/sea-3.webp';
import river4 from '@/assets/leisure/river-4.webp';

const activities = [
  {
    title: 'Пляжи Чёрного моря',
    description: 'Галечные и песчаные пляжи в 15 минутах езды. Чистое море, живописные бухты и уединённые места для отдыха.',
    image: sea3,
  },
  {
    title: 'Горные реки и ущелья',
    description: 'Прозрачные горные реки с изумрудной водой, скальные каньоны и природные купели — идеально для жаркого дня.',
    image: river3,
  },
  {
    title: 'Пешие прогулки',
    description: 'Маршруты по горам Кавказа разной сложности: от лёгких прогулок до серьёзных треков с панорамными видами.',
    image: river4,
  },
];

const Leisure = () => {
  useEffect(() => {
    document.title = 'Досуг — База отдыха Сон, Тенгинка';
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LeisureHeroBlock />

        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-display text-3xl md:text-4xl font-semibold text-center mb-12">
              Чем заняться
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((act) => (
                <div key={act.title} className="group rounded-2xl overflow-hidden shadow-card bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-display text-xl font-semibold mb-2">{act.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{act.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Leisure;
