export default function PromoInput({
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label className="form-label">
        Kode Promo
      </label>

      <input
        type="text"
        className="input"
        placeholder="Masukkan kode promo"
        value={value}
        onChange={(e) =>
          onChange(e.target.value.toUpperCase())
        }
      />

      <p className="mt-2 text-xs text-zinc-500">
        Kosongkan jika tidak memiliki kode promo.
      </p>
    </div>
  );
}