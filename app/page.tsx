import HeroSection from "./components/heroSection";
import ServicesSection from "./components/Services";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import ChatWidget from "./components/ChatWidget";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </>
  );
}
