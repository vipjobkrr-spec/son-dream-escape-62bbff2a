import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import PricesSection from "@/components/PricesSection";
import BookingTerms from "@/components/BookingTerms";
import CabinsSection from "@/components/CabinsSection";
import RoomTourSection from "@/components/RoomTourSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import GiftCertificateSection from "@/components/GiftCertificateSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import BookingForm from "@/components/BookingForm";
import StickyBookingBar from "@/components/StickyBookingBar";
import MaxFab from "@/components/MaxFab";
import Footer from "@/components/Footer";

import poolImg from "@/assets/pool-2.webp";
import bbqImg from "@/assets/bbq.jpg";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <PricesSection />
      <CabinsSection />
      <RoomTourSection />
      <AmenitiesSection />
      <ParallaxDivider
        image={poolImg}
        alt="Бассейн базы отдыха Сон"
        text="Отдых, о котором мечтали"
        subtext="Бассейн, барбекю и тишина — всё в одном месте"
      />
      <GallerySection />
      <GiftCertificateSection />
      <ReviewsSection />
      <ParallaxDivider
        image={bbqImg}
        alt="Вечерняя зона барбекю"
        text="Вечера у мангала"
        subtext="Каждый домик — со своей зоной барбекю"
      />
      <LocationSection />
      <FaqSection />
      <BookingTerms />
      <BookingForm />
      <Footer />
      <StickyBookingBar />
      <MaxFab />
    </>
  );
};

export default Index;
