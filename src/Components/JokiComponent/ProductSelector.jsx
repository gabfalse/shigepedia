import { PRODUCT } from "../../Data/Product";

export default function ProductSelector({
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label className="form-label">
        Pilih Produk
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {PRODUCT.map((product) => {
          const active = value === product.id;

          return (
            <button
              key={product.id}
              type="button"
              onClick={() => onChange(product.id)}
              className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-violet-500 bg-violet-500/15"
                  : "border-white/10 bg-white/5 hover:border-violet-500/40"
              }`}
            >
              <h3 className="text-lg font-bold">
                {product.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {product.description}
              </p>

              {product.discount > 0 && (
                <span className="mt-4 inline-flex rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                  Diskon {product.discount}%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}