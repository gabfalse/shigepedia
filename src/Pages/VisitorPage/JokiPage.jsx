

import FloatingWhatsapp from "../../Components/JokiComponents/FloatingWhatsapp";

import Hero from "../../Components/JokiComponents/Hero";
import ProductSection from "../../Components/JokiComponents/ProductSection";
import BenefitSection from "../../Components/JokiComponents/BenefitSection";
import FAQSection from "../../Components/JokiComponents/FAQSection";

export default function JokiPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-grid" />
      <div className="bg-top-glow" />
      <div className="bg-bottom-glow" />

      
      <Hero />

      <ProductSection />

      <BenefitSection />

      <FAQSection />

      

      <FloatingWhatsapp />
    </main>
  );
}