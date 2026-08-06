import { PROMO } from "../../Config/Promo";

/* =========================
   Promo Produk
========================= */

export function getProductPromo(type) {
  return (
    PROMO.product[type] ?? {
      enabled: false,
      discount: 0,
    }
  );
}

/* =========================
   Cari Promo Manual
========================= */

export function getManualPromo(code) {
  if (!code) return null;

  return (
    PROMO.manual.find(
      (promo) =>
        promo.active &&
        promo.code.toUpperCase() === code.toUpperCase()
    ) ?? null
  );
}

/* =========================
   Hitung Promo Manual
========================= */

export function getManualDiscount(price, code) {
  const promo = getManualPromo(code);

  if (!promo) {
    return {
      promo: null,
      discount: 0,
    };
  }

  if (promo.type === "percent") {
    return {
      promo,
      discount: Math.floor(price * promo.value / 100),
    };
  }

  return {
    promo,
    discount: promo.value,
  };
}