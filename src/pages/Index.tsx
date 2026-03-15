import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyHereSection from "@/components/WhyHereSection";
import AboutSection from "@/components/AboutSection";
import CabinsSection from "@/components/CabinsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import PricesSection from "@/components/PricesSection";
import WhyNotHotelSection from "@/components/WhyNotHotelSection";
import GallerySection from "@/components/GallerySection";
import LeisureHeroBlock from "@/components/LeisureHeroBlock";
import ReviewsSection from "@/components/ReviewsSection";
import BookingForm from "@/components/BookingForm";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import GiftCertificateSection from "@/components/GiftCertificateSection";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import MaxFab from "@/components/MaxFab";
import RoomTourSection from "@/components/RoomTourSection";

import poolImg from "@/assets/pool-2.webp";
import bbqImg from "@/assets/bbq.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "База отдыха Сон — отдых на Чёрном море, Тенгинка";
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyHereSection />
      <AboutSection />
      <CabinsSection />
      <RoomTourSection />
      <AmenitiesSection />
      <ParallaxDivider
        image={poolImg}
        alt="Бассейн базы отдыха Сон"
        text="Отдых, о котором мечтали"
        subtext="Бассейн, барбекю и тишина — всё в одном месте"
      />
      <PricesSection />
      <WhyNotHotelSection />
      <GallerySection />
      <LeisureHeroBlock />
      <ReviewsSection />
      <ParallaxDivider
        image={bbqImg}
        alt="Вечерняя зона барбекю"
        text="Вечера у мангала"
        subtext="Каждый домик — со своей зоной барбекю"
      />
      <BookingForm />
      <LocationSection />
      <FaqSection />
      <GiftCertificateSection />
      <Footer />
      <StickyBookingBar />
      <MaxFab />
    </>
  );
};

export default Index;
