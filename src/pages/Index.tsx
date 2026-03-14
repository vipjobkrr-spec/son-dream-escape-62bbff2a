import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PricesSection from "@/components/PricesSection";
import BookingTerms from "@/components/BookingTerms";
import CabinsSection from "@/components/CabinsSection";
import RoomTourSection from "@/components/RoomTourSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import BookingForm from "@/components/BookingForm";
import StickyBookingBar from "@/components/StickyBookingBar";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <PricesSection />
      <BookingTerms />
      <CabinsSection />
      <AmenitiesSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <FaqSection />
      <BookingForm />
      <Footer />
      <StickyBookingBar />
      <WhatsAppFab />
    </>
  );
};

export default Index;
