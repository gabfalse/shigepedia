import { useEffect, useState } from "react";
import { TIERS } from "../../Data/Tier";
import { calculatePerStar } from "../../Utils/CalculatePrice";

const dummyPrices = [
  { tier: "Master", price: 3000 },
  { tier: "Grandmaster", price: 4000 },
  { tier: "Epic", price: 5000 },
  { tier: "Legend", price: 8000 },
  { tier: "Mythic", price: 10000 },
  { tier: "Honor", price: 15000 },
  { tier: "Glory", price: 18000 },
  { tier: "Immortal", price: 20000 },
];

export default function OrderForm({ onChange, promo }) {
  const [tier, setTier] = useState("Epic");
  const [division, setDivision] = useState("I");
  const [star, setStar] = useState(1);
  const [quantity, setQuantity] = useState(1);



  const currentTier = TIERS.find((t) => t.name === tier);

  useEffect(() => {
    const result = calculatePerStar(
      {
        tier,
        division,
        star,
      },
      quantity,
      dummyPrices,
      promo
    );

    onChange({
      ...result,
      order: {
        product: "Joki Per Bintang",
      
        tier,
        division,
        star,
        quantity,
      },
    });
  }, [
    tier,
    division,
    star,
    quantity,
   
    promo,
    onChange,
  ]);

  return (
    <div className="card space-y-6">
      <h2 className="heading">Form Order</h2>

      {/* Rank Saat Ini */}
      <div className="space-y-4">
        <h3 className="font-semibold">Rank Saat Ini</h3>

        <select
          className="input"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
        >
          {TIERS.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {currentTier.divisions.length > 0 && (
          <select
            className="input"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            {currentTier.divisions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}

        <input
          className="input"
          type="number"
          min={1}
          max={currentTier.maxStars}
          value={star}
          onChange={(e) => setStar(Number(e.target.value))}
        />
      </div>

      {/* Jumlah Pembelian */}
      <div className="space-y-4">
        <h3 className="font-semibold">Jumlah Pembelian</h3>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() =>
              setQuantity((prev) => Math.max(1, prev - 1))
            }
          >
            -
          </button>

          <input
            className="input text-center"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {quantity >= 10 && (
          <p className="text-sm text-green-400">
            ✓ Diskon otomatis 5% aktif
          </p>
        )}

        {promo && (
          <p className="text-sm text-violet-400">
            ✓ Promo <strong>{promo.code}</strong> diterapkan
          </p>
        )}
      </div>

     
    </div>
  );
}