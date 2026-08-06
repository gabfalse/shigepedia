const PHONE = "6285162651533";

export function generateWhatsappLink(order) {
  const {
    product,
    currentTier,
    currentStars,
    targetTier,
    targetStars,
    normalPrice,
    productDiscountAmount,
    manualPromo,
    manualDiscountAmount,
    finalPrice,
  } = order;

  const message = `
Halo Admin Shige 👋

Saya ingin melakukan pemesanan Joki Mobile Legends.

━━━━━━━━━━━━━━
📦 PRODUK
${product}

🎮 RANK SEKARANG
${currentTier}
⭐ ${currentStars}

🎯 TARGET
${targetTier}
⭐ ${targetStars}

━━━━━━━━━━━━━━
💰 RINCIAN HARGA

Harga Normal
Rp ${normalPrice.toLocaleString("id-ID")}

Diskon Produk
Rp ${productDiscountAmount.toLocaleString("id-ID")}

Kode Promo
${manualPromo ? manualPromo.code : "-"}

Diskon Promo
Rp ${manualDiscountAmount.toLocaleString("id-ID")}

━━━━━━━━━━━━━━
TOTAL

Rp ${finalPrice.toLocaleString("id-ID")}

Terima kasih.
`.trim();

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}