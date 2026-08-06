import { useMemo, useState } from "react";

import { calculatePrice } from "../Engine/PriceEngine";
import { generateWhatsappLink } from "../Engine/WhatappEngine";

import ProductSelector from "./ProductSelector";
import TierSelector from "./TierSelector";
import StarSelector from "./StarSelector";
import PromoInput from "./PromoInput";
import PriceSummary from "./PriceSummary";
import OrderButton from "./OrderButton";

export default function OrderForm() {
  /* =========================
     Product
  ========================= */

  const [product, setProduct] = useState("star");

  /* =========================
     Current
  ========================= */

  const [currentTier, setCurrentTier] = useState("");

  const [currentStars, setCurrentStars] = useState(1);

  /* =========================
     Target
  ========================= */

  const [targetTier, setTargetTier] = useState("");

  const [targetStars, setTargetStars] = useState(1);

  /* =========================
     Promo
  ========================= */

  const [promoCode, setPromoCode] = useState("");

  /* =========================
     Price
  ========================= */

  const price = useMemo(() => {
    if (!currentTier || !targetTier) {
      return null;
    }

    return calculatePrice({
      type: product,

      currentTier,
      currentStars,

      targetTier,
      targetStars,

      promoCode,
    });
  }, [
    product,

    currentTier,
    currentStars,

    targetTier,
    targetStars,

    promoCode,
  ]);

  /* =========================
     Order
  ========================= */

  function handleOrder() {
    if (!price) return;

    const url = generateWhatsappLink({
      product,

      currentTier,
      currentStars,

      targetTier,
      targetStars,

      ...price,
    });

    window.open(url, "_blank");
  }

  return (
    <section className="section-page">
      <div className="form-card">

        <h2 className="form-title">
          Order Joki Mobile Legends
        </h2>

        <p className="form-subtitle">
          Pilih produk yang diinginkan, kemudian isi rank saat ini dan target rank.
        </p>

        <ProductSelector
          value={product}
          onChange={setProduct}
        />

        <div className="input-row">

          <div>

            <TierSelector
              label="Tier Saat Ini"
              value={currentTier}
              onChange={setCurrentTier}
            />

            <StarSelector
              label="Bintang Saat Ini"
              tier={currentTier}
              value={currentStars}
              onChange={setCurrentStars}
            />

          </div>

          <div>

            <TierSelector
              label="Target Tier"
              value={targetTier}
              onChange={setTargetTier}
            />

            <StarSelector
              label="Target Bintang"
              tier={targetTier}
              value={targetStars}
              onChange={setTargetStars}
            />

          </div>

        </div>

        <PromoInput
          value={promoCode}
          onChange={setPromoCode}
        />

        <PriceSummary
          price={price}
        />

        <OrderButton
          disabled={!price}
          onClick={handleOrder}
        />

      </div>
    </section>
  );
}