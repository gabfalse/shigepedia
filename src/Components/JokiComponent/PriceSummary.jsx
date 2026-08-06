export default function PriceSummary({ price }) {
  if (!price) return null;

  return (
    <div className="summary-card">
      <h3 className="form-title">
        Ringkasan Harga
      </h3>

      {/* Harga Normal */}
      <div className="summary-row">
        <span>Harga Normal</span>

        <span>
          Rp{" "}
          {price.normalPrice.toLocaleString("id-ID")}
        </span>
      </div>

      {/* Diskon Produk */}
      <div className="summary-row">
        <span>
          Diskon Produk
          {price.productPromo.enabled &&
            ` (${price.productPromo.discount}%)`}
        </span>

        <span className="text-green-400">
          - Rp{" "}
          {price.productDiscountAmount.toLocaleString(
            "id-ID"
          )}
        </span>
      </div>

      {/* Harga Setelah Promo Produk */}
      <div className="summary-row">
        <span>Setelah Promo Produk</span>

        <span>
          Rp{" "}
          {price.afterProductPromo.toLocaleString(
            "id-ID"
          )}
        </span>
      </div>

      {/* Promo Manual */}
      {price.manualPromo && (
        <>
          <div className="summary-row">
            <span>
              Promo ({price.manualPromo.code})
            </span>

            <span className="text-green-400">
              - Rp{" "}
              {price.manualDiscountAmount.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>
        </>
      )}

      {/* Breakdown */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
          Detail Perhitungan
        </h4>

        <div className="space-y-3">
          {price.breakdown.map((item) => (
            <div
              key={item.rank}
              className="summary-row"
            >
              <span className="capitalize">
                {item.rank} ({item.stars} ⭐)
              </span>

              <span>
                Rp{" "}
                {(item.price ?? 0).toLocaleString(
                  "id-ID"
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="summary-total">
        <span>Total Bayar</span>

        <span className="text-violet-400">
          Rp{" "}
          {price.finalPrice.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}