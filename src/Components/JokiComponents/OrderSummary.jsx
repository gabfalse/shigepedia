import { generateWhatsapp } from "../../Utils/GenerateWhatsapp";

const ADMIN_NUMBER = "6285162651533";

export default function OrderSummary({
  summary,
  promoCode,
  setPromoCode,
  onApplyPromo,
}) {
  if (!summary) return null;

  const handleOrder = () => {
    try {
      if (!summary.order) {
        alert("Data order belum tersedia.");
        return;
      }

      console.log("SUMMARY :", summary);
      console.log("ORDER :", summary.order);

      const message = generateWhatsapp(summary.order, summary);

      console.log("MESSAGE :", decodeURIComponent(message));

      const url = `https://wa.me/${ADMIN_NUMBER}?text=${message}`;

      console.log("URL :", url);

      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Order Error :", error);
      alert("Terjadi kesalahan. Silakan lihat Console (F12).");
    }
  };

  return (
    <div className="card space-y-5">
      <h2 className="heading">Ringkasan</h2>

      {/* Detail Harga */}
      <div className="space-y-3">
        {summary.detail.map((item) => (
          <div
            key={item.tier}
            className="flex items-center justify-between text-sm"
          >
            <span>
              {item.tier} ({item.stars}⭐)
            </span>

            <span>
              Rp {item.subtotal.toLocaleString("id-ID")}
            </span>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Promo */}
      <div className="space-y-2">
        <label className="label">Kode Promo</label>

        <div className="flex gap-2">
          <input
            className="input flex-1"
            type="text"
            placeholder="Masukkan kode promo"
            value={promoCode}
            onChange={(e) =>
              setPromoCode(e.target.value.toUpperCase())
            }
          />

          <button
            type="button"
            className="btn btn-outline"
            onClick={onApplyPromo}
          >
            Gunakan
          </button>
        </div>

        {summary.appliedPromo && (
          <p className="text-sm text-green-400">
            ✓ Promo aktif: <strong>{summary.appliedPromo.code}</strong>
          </p>
        )}
      </div>

      <div className="divider" />

      {/* Ringkasan */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp {summary.subtotal.toLocaleString("id-ID")}</span>
        </div>

        <div className="flex justify-between text-green-400">
          <span>Diskon Otomatis</span>
          <span>
            - Rp {(summary.autoDiscount ?? 0).toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between text-green-400">
          <span>Diskon Promo</span>
          <span>
            - Rp {(summary.promoDiscount ?? 0).toLocaleString("id-ID")}
          </span>
        </div>

        <div className="divider" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Rp {summary.total.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-full"
        onClick={handleOrder}
      >
        Pesan Sekarang
      </button>
    </div>
  );
}