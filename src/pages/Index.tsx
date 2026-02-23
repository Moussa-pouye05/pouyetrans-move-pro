import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehicleSection from "@/components/VehicleSection";
import ServicesSection from "@/components/ServicesSection";
import SecuritySection from "@/components/SecuritySection";
import TransparencySection from "@/components/TransparencySection";
import CoverageSection from "@/components/CoverageSection";
import GallerySection from "@/components/GallerySection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <VehicleSection />
        <ServicesSection />
        <SecuritySection />
        <TransparencySection />
        <CoverageSection />
        <GallerySection />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
