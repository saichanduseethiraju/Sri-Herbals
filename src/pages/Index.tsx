import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoapsSection from "@/components/SoapsSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SoapsSection />
    <ProductsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
