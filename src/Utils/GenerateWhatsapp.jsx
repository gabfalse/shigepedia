export function generateWhatsapp(order, summary) {
  const detail = summary.detail
    .map(
      (item) =>
        `• ${item.tier} (${item.stars}⭐) : Rp ${item.subtotal.toLocaleString(
          "id-ID"
        )}`
    )
    .join("\n");

  const promoText = summary.appliedPromo
    ? `🎁 Promo
${summary.appliedPromo.code}

`
    : "";

  const message = `🎮 *ORDER JOKI MOBILE LEGENDS*

━━━━━━━━━━━━━━

📦 *Produk*
${order.product}

📈 *Rank Saat Ini*
${order.tier}${
    order.division ? ` ${order.division}` : ""
  } (${order.star}⭐)

⭐ *Jumlah Pembelian*
${order.quantity} Bintang

━━━━━━━━━━━━━━

💰 *Rincian Harga*

${detail}

━━━━━━━━━━━━━━

Subtotal : Rp ${summary.subtotal.toLocaleString("id-ID")}

Diskon Otomatis : -Rp ${summary.autoDiscount.toLocaleString("id-ID")}

Diskon Promo : -Rp ${summary.promoDiscount.toLocaleString("id-ID")}

${promoText}━━━━━━━━━━━━━━

*TOTAL : Rp ${summary.total.toLocaleString("id-ID")}*

Terima kasih 🙏`;

  return encodeURIComponent(message);
}