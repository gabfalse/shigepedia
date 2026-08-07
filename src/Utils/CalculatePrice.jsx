import { travelRank } from "./RankEngine";

/**
 * Menghitung harga Joki Per Bintang
 *
 * @param {Object} currentRank
 * @param {Number} quantity
 * @param {Array} priceRules
 * @param {Object|null} promo
 */
export function calculatePerStar(
  currentRank,
  quantity,
  priceRules,
  promo = null
) {
  const journey = travelRank(currentRank, quantity);

  const summary = {};

  // Hitung jumlah bintang setiap tier
  journey.forEach((item) => {
    summary[item.tier] = (summary[item.tier] || 0) + 1;
  });

  // Detail harga
  const detail = Object.entries(summary).map(([tier, stars]) => {
    const rule = priceRules.find((p) => p.tier === tier);

    const price = rule?.price || 0;

    return {
      tier,
      stars,
      price,
      subtotal: stars * price,
    };
  });

  const subtotal = detail.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  // Diskon otomatis (>=10 bintang)
  let autoDiscount = 0;

  if (quantity >= 10) {
    autoDiscount = subtotal * 0.05;
  }

  // Diskon promo
  let promoDiscount = 0;

  if (
    promo &&
    promo.active &&
    quantity >= (promo.minimum_star || 0)
  ) {
    if (promo.discount_type === "percent") {
      promoDiscount =
        subtotal * (promo.discount_value / 100);
    }

    if (promo.discount_type === "fixed") {
      promoDiscount = promo.discount_value;
    }
  }

  const discount = autoDiscount + promoDiscount;

  return {
    detail,
    subtotal,

    autoDiscount,
    promoDiscount,
    discount,

    total: Math.max(0, subtotal - discount),

    appliedPromo: promo
      ? {
          code: promo.code,
          title: promo.title,
        }
      : null,
  };
}