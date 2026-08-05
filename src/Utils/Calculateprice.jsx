import { PRODUCT_DATA } from "../Components/Data/ProductData";
import { PROMO_DATA } from "../Components/Data/PromoData";
import {
  tierToPosition,
  getPriceByPosition,
  positionToTier,
} from "./positionHelper";

/**
 * Hitung total harga order joki
 */
export const calculatePrice = ({
  productId,

  currentTier,
  currentStar = 0,

  targetTier,
  targetStar = 0,

  promoCode = "",
}) => {
  const startPosition = tierToPosition(
    currentTier,
    Number(currentStar)
  );

  const endPosition = tierToPosition(
    targetTier,
    Number(targetStar)
  );

  if (endPosition <= startPosition) {
    return {
      success: false,
      message: "Target rank harus lebih tinggi.",
    };
  }

  const totalStars = endPosition - startPosition;

  // Cari produk
  const product =
    PRODUCT_DATA.find((item) => item.id === productId) ?? null;

  /**
   * Validasi produk
   */

  // Paket 10 bintang
  if (productId === "package10" && totalStars !== 10) {
    return {
      success: false,
      message: "Paket ini hanya berlaku untuk tepat 10 bintang.",
    };
  }

  // Paket naik rank
  if (productId === "rankup") {
    const startTier = positionToTier(startPosition);
    const endTier = positionToTier(endPosition);

    if (startTier.tierId === endTier.tierId) {
      return {
        success: false,
        message: "Target harus naik ke tier berikutnya.",
      };
    }
  }

  /**
   * Hitung subtotal
   */

  let subtotal = 0;

  const breakdown = [];

  for (
    let position = startPosition;
    position < endPosition;
    position++
  ) {
    const price = getPriceByPosition(position);

    subtotal += price;

    breakdown.push({
      position,
      price,
    });
  }

  /**
   * Diskon Produk
   */

  const productDiscount =
    subtotal * ((product?.discount ?? 0) / 100);

  const afterProductDiscount =
    subtotal - productDiscount;

  /**
   * Promo
   */

  let promoDiscount = 0;

  const promo = PROMO_DATA.find(
    (item) =>
      item.code.toLowerCase() ===
      promoCode.trim().toLowerCase()
  );

  if (promo) {
    if (promo.type === "percent") {
      promoDiscount =
        afterProductDiscount *
        (promo.value / 100);
    }

    if (promo.type === "nominal") {
      promoDiscount = promo.value;
    }
  }

  const total = Math.max(
    0,
    afterProductDiscount - promoDiscount
  );

  return {
    success: true,

    totalStars,

    subtotal,

    productDiscount,

    promoDiscount,

    total,

    breakdown,

    product,

    promo,
  };
};