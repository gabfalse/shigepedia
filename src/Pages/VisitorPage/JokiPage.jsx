import { useState } from "react";

import HeroSection from "../../Components/JokiComponent/HeroSection";
import PriceTable from "../../Components/JokiComponent/PriceTable";
import ProductCard from "../../Components/JokiComponent/ProductCard";
import OrderModal from "../../Components/JokiComponent/OrderModal";

const JokiPages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="bg-grid" />
      <div className="bg-top-glow" />
      <div className="bg-bottom-glow" />

      <div className="section-page space-y-24">
        <HeroSection />

        <PriceTable />

        <ProductCard onSelectProduct={handleSelectProduct} />
      </div>

      <OrderModal
        isOpen={isOpen}
        product={selectedProduct}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default JokiPages;