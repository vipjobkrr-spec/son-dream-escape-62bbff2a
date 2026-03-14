import { HeroSection } from '@/components/ui/feature-carousel';

import sea1 from '@/assets/leisure/sea-1.webp';
import lake from '@/assets/leisure/lake.webp';
import sea2 from '@/assets/leisure/sea-2.webp';
import flowers from '@/assets/leisure/flowers.webp';
import river1 from '@/assets/leisure/river-1.webp';
import river2 from '@/assets/leisure/river-2.webp';
import sunset from '@/assets/leisure/sunset.webp';

const images = [
  { src: sea1, alt: 'Чёрное море' },
  { src: lake, alt: 'Горное озеро с цветами' },
  { src: sea2, alt: 'Пляж Чёрного моря' },
  { src: flowers, alt: 'Полевые цветы' },
  { src: river1, alt: 'Горная река' },
  { src: river2, alt: 'Река в ущелье' },
  { src: sunset, alt: 'Закат на море' },
];

const LeisureHeroBlock = () => {
  const title = (
    <>
      Досуг <span className="text-secondary">рядом с нами</span>
    </>
  );

  return (
    <section id="leisure" className="py-12 md:py-20">
      <div className="container">
        <HeroSection
          title={title}
          subtitle="Море, горные реки, живописные ущелья и природа Кавказа — всё в шаговой доступности"
          images={images}
        />
      </div>
    </section>
  );
};

export default LeisureHeroBlock;
