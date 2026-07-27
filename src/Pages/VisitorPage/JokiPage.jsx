export default function JokiPage() {
  const prices = [
    { rank: "Master", oldPrice: "Rp2.500 / Star", price: "Rp2.000 / Star", discount: "20%" },
    { rank: "Grandmaster", oldPrice: "Rp3.500 / Star", price: "Rp3.000 / Star", discount: "14%" },
    { rank: "Epic", oldPrice: "Rp5.000 / Star", price: "Rp4.000 / Star", discount: "20%", badge: "BEST SELLER" },
    { rank: "Legend", oldPrice: "Rp6.000 / Star", price: "Rp5.000 / Star", discount: "17%" },
    { rank: "Mythic", oldPrice: "Rp10.000 / Star", price: "Rp8.000 / Star", discount: "20%" },
    { rank: "Honor", oldPrice: "Rp12.000 / Star", price: "Rp10.000 / Star", discount: "17%" },
    { rank: "Glory", oldPrice: "Rp18.000 / Star", price: "Rp15.000 / Star", discount: "17%" },
    { rank: "Immortal", oldPrice: "", price: "Hubungi Admin", discount: "" },
  ];

  const package10 = [
    { title: "Epic (10 Star)", oldPrice: "Rp40.000", price: "Rp36.000", discount: "10%", badge: "HEMAT" },
    { title: "Legend (10 Star)", oldPrice: "Rp50.000", price: "Rp45.000", discount: "10%" },
    { title: "Mythic (10 Star)", oldPrice: "Rp80.000", price: "Rp72.000", discount: "10%", badge: "POPULER" },
    { title: "Honor (10 Star)", oldPrice: "Rp100.000", price: "Rp90.000", discount: "10%" },
    { title: "Glory (10 Star)", oldPrice: "Rp150.000", price: "Rp135.000", discount: "10%" },
  ];

  const rankPackages = [
    { title: "Epic → Legend", oldPrice: "Rp125.000", price: "Rp100.000", discount: "20%" },
    { title: "Legend → Mythic", oldPrice: "Rp150.000", price: "Rp125.000", discount: "17%", badge: "BEST SELLER" },
    { title: "Mythic → Honor", oldPrice: "Rp240.000", price: "Rp200.000", discount: "17%" },
    { title: "Honor → Glory", oldPrice: "Rp300.000", price: "Rp250.000", discount: "17%" },
    { title: "Glory → Immortal", oldPrice: "", price: "Hubungi Admin", discount: "" },
  ];

  const features = [
    "⚡ Fast Process",
    "🔒 100% Aman",
    "🎮 Dikerjakan Player Berpengalaman",
    "🛡️ Garansi Sesuai Kesepakatan",
  ];

  const rules = [
    "Akun wajib memiliki akses login.",
    "Jangan login selama proses joki berlangsung.",
    "Harga dapat berubah sesuai tingkat kesulitan.",
    "Estimasi pengerjaan tergantung antrean.",
    "Garansi berlaku sesuai kesepakatan.",
    "Pembayaran dilakukan sebelum proses dimulai.",
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed20,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#9333ea20,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
            SHIGE CREW
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            JOKI BY SHIGE
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Naik rank lebih cepat bersama player berpengalaman.
            Aman, cepat, profesional, dan bergaransi.
          </p>

          <a
            href="https://wa.me/6285162651533"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-green-600 px-7 py-3 font-semibold transition hover:bg-green-700"
          >
            Order Sekarang
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center"
          >
            <h3 className="font-semibold text-purple-400">{item}</h3>
          </div>
        ))}
      </div>

      {/* Harga Per Star */}
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-10 text-center text-4xl font-black">
          Harga Per Star
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {prices.map((item) => (
            <div
              key={item.rank}
              className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500"
            >
              {item.discount && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{item.discount}
                </div>
              )}

              {item.badge && (
                <div className="mb-3 inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                  ⭐ {item.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-purple-400">
                {item.rank}
              </h3>

              {item.oldPrice && (
                <p className="mt-4 text-sm text-zinc-500 line-through">
                  {item.oldPrice}
                </p>
              )}

              <p className="text-3xl font-black">{item.price}</p>

              <span className="mt-4 inline-flex rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                Promo Terbatas
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Paket 10 Star */}
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="mb-10 text-center text-4xl font-black">
          Paket 10 Star
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {package10.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500"
            >
              <div className="absolute right-0 top-0 rounded-bl-xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                -{item.discount}
              </div>

              {item.badge && (
                <div className="mb-3 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  ⭐ {item.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-green-400">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-zinc-500 line-through">
                {item.oldPrice}
              </p>

              <p className="text-3xl font-black text-white">
                {item.price}
              </p>

              <span className="mt-4 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                Lebih Hemat
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Paket Rank */}
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="mb-10 text-center text-4xl font-black">
          Paket Naik Rank
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rankPackages.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-500"
            >
              {item.discount && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{item.discount}
                </div>
              )}

              {item.badge && (
                <div className="mb-3 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  ⭐ {item.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-amber-400">
                {item.title}
              </h3>

              {item.oldPrice && (
                <p className="mt-4 text-sm text-zinc-500 line-through">
                  {item.oldPrice}
                </p>
              )}

              <p className="text-3xl font-black">{item.price}</p>

              <span className="mt-4 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                Paket Rank
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div className="mx-auto max-w-5xl px-5 pb-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-3xl font-black">Rules Joki</h2>

          <ul className="space-y-4 text-zinc-300">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✔</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-5 pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-10 text-center">
          <h2 className="text-3xl font-black">
            Siap Push Rank?
          </h2>

          <p className="mt-4 text-purple-100">
            Hubungi admin sekarang dan dapatkan pelayanan cepat,
            aman, dan profesional.
          </p>

          <a
            href="https://wa.me/6285162651533"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-3 font-bold text-purple-700 transition hover:scale-105"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
