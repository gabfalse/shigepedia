import { PRICE } from "../../Config/Price";
import { getStarBreakdown } from "./RankEngine";
import {
  getProductPromo,
  getManualDiscount,
} from "./PromoEngine";

/* =========================
   Hitung Harga Normal
========================= */

export function getNormalPrice(breakdown) {
  return breakdown.reduce((total, item) => {
    const price = PRICE[item.rank] ?? 0;
    return total + (price * item.stars);
  }, 0);
}

/* =========================
   Hitung Harga Produk
========================= */

export function calculatePrice({
  type,
  currentTier,
  currentStars,
  targetTier,
  targetStars,
  promoCode = "",
}) {
  // Detail bintang per rank
  const breakdown = getStarBreakdown(
    currentTier,
    currentStars,
    targetTier,
    targetStars
  );

  // Harga normal
  const normalPrice = getNormalPrice(breakdown);

  // Promo bawaan produk
  const productPromo = getProductPromo(type);

  const productDiscountAmount = productPromo.enabled
    ? Math.floor(normalPrice * productPromo.discount / 100)
    : 0;

  const afterProductPromo =
    normalPrice - productDiscountAmount;

  // Promo manual
  const manual = getManualDiscount(
    afterProductPromo,
    promoCode
  );

  const finalPrice = Math.max(
    0,
    afterProductPromo - manual.discount
  );

  return {
    breakdown,

    normalPrice,

    productPromo,

    productDiscountAmount,

    afterProductPromo,

    manualPromo: manual.promo,

    manualDiscountAmount: manual.discount,

    finalPrice,
  };
}