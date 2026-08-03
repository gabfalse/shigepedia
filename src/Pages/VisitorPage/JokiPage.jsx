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
    {
      icon: "⚡",
      title: "Fast Process",
      desc: "Pengerjaan cepat sesuai antrean."
    },
    {
      icon: "🔒",
      title: "100% Safe",
      desc: "Akun aman & privasi terjaga."
    },
    {
      icon: "🎮",
      title: "Pro Player",
      desc: "Dikerjakan player berpengalaman."
    },
    {
      icon: "🛡️",
      title: "Warranty",
      desc: "Garansi sesuai kesepakatan."
    }
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
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb33,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#7c3aed33,transparent_45%)]" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[160px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      {/* ================= HERO ================= */}

      <div className="relative mx-auto max-w-7xl px-5 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-300">
            ⚔ SHIGE BOOSTING SERVICE
          </span>

          <h1 className="mt-8 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
            JOKI BY SHIGE
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Push rank lebih cepat bersama player berpengalaman.
            Aman, cepat, profesional, dan bergaransi dengan
            proses yang transparan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/6285162651533"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,.4)]"
            >
              ⚡ ORDER SEKARANG
            </a>

            <a
              href="#harga"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:border-cyan-400"
            >
              💎 Lihat Harga
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-5 sm:grid-cols-3">

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur">

              <h3 className="text-4xl font-black text-cyan-300">
                1000+
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Completed Orders
              </p>

            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur">

              <h3 className="text-4xl font-black text-violet-300">
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Online Support
              </p>

            </div>

            <div className="rounded-3xl border border-green-500/20 bg-white/5 p-6 backdrop-blur">

              <h3 className="text-4xl font-black text-green-300">
                100%
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Safe Service
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= FEATURES ================= */}

      <div className="relative mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => (

          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]"
          >

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="mt-5 text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* ================= HARGA PER STAR ================= */}

      <div
        id="harga"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <h2 className="mb-12 text-center text-5xl font-black">
          Harga Per Star
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {prices.map((item) => (
  <div
    key={item.rank}
    className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]"
  >
    {/* Glow */}
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

    {/* Discount */}
    {item.discount && (
      <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 text-xs font-black tracking-wider text-white">
        -{item.discount}
      </div>
    )}

    {/* Badge */}
    {item.badge && (
      <span className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-bold tracking-wider text-yellow-300">
        🏆 {item.badge}
      </span>
    )}

    <h3 className="mt-2 text-2xl font-black text-cyan-300">
      {item.rank}
    </h3>

    <p className="mt-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
      Current Price
    </p>

    {item.oldPrice && (
      <p className="mt-2 text-sm text-red-400/70 line-through">
        {item.oldPrice}
      </p>
    )}

    <p className="mt-2 text-4xl font-black text-white">
      {item.price}
    </p>

    <div className="mt-6 h-px bg-zinc-800" />

    <div className="mt-5 flex items-center justify-between">

      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
        Ready
      </span>

      <a
        href="https://wa.me/6285162651533"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        Order →
      </a>

    </div>

  </div>
))}
        </div>
      </div>

      {/* ================= PAKET 10 STAR ================= */}

      <div className="mx-auto max-w-7xl px-5 pb-24">

        <h2 className="mb-12 text-center text-5xl font-black">
          Paket 10 Star
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{package10.map((item) => (
  <div
    key={item.title}
    className="group relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,.25)]"
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400" />

    <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 text-xs font-black text-white">
      -{item.discount}
    </div>

    {item.badge && (
      <span className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-bold tracking-wider text-yellow-300">
        🏆 {item.badge}
      </span>
    )}

    <h3 className="text-2xl font-black text-green-300">
      {item.title}
    </h3>

    <p className="mt-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
      Bundle Price
    </p>

    <p className="mt-2 text-sm text-red-400/70 line-through">
      {item.oldPrice}
    </p>

    <p className="mt-2 text-4xl font-black text-white">
      {item.price}
    </p>

    <div className="mt-6 flex items-center justify-between">
      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
        Save More
      </span>

      <a
        href="https://wa.me/6285162651533"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-green-300 transition hover:text-green-200"
      >
        Order →
      </a>
    </div>
  </div>
))}        </div>
      </div>

      {/* ================= PAKET RANK ================= */}

      <div className="mx-auto max-w-7xl px-5 pb-24">

        <h2 className="mb-12 text-center text-5xl font-black">
          Paket Naik Rank
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{rankPackages.map((item) => (
  <div
    key={item.title}
    className="group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(251,191,36,.25)]"
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500" />

    {item.discount && (
      <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 text-xs font-black text-white">
        -{item.discount}
      </div>
    )}

    {item.badge && (
      <span className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-bold tracking-wider text-yellow-300">
        👑 {item.badge}
      </span>
    )}

    <h3 className="text-2xl font-black text-amber-300">
      {item.title}
    </h3>

    <p className="mt-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
      Package Price
    </p>

    {item.oldPrice && (
      <p className="mt-2 text-sm text-red-400/70 line-through">
        {item.oldPrice}
      </p>
    )}

    <p className="mt-2 text-4xl font-black text-white">
      {item.price}
    </p>

    <div className="mt-6 flex items-center justify-between">
      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
        Rank Boost
      </span>

      <a
        href="https://wa.me/6285162651533"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-amber-300 transition hover:text-amber-200"
      >
        Order →
      </a>
    </div>
  </div>
))}</div></div>

      {/* ================= RULES ================= */}

      <div className="mx-auto max-w-6xl px-5 pb-24">

        <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8">

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <h2 className="text-center text-4xl font-black">
            📜 Rules & Information
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Mohon membaca seluruh ketentuan sebelum melakukan order
            agar proses berjalan lancar.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {rules.map((rule) => (
              <div
                key={rule}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  ✔
                </div>

                <p className="leading-7 text-zinc-300">
                  {rule}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ================= CTA ================= */}

      <div className="mx-auto max-w-6xl px-5 pb-28">

        <div className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-10 md:p-14">

          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative text-center">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-100">
              Ready To Rank Up?
            </span>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              PUSH YOUR RANK
              <br />
              WITH SHIGE
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-100/90">
              Nikmati layanan joki profesional dengan proses cepat,
              aman, dan dikerjakan oleh player berpengalaman.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/6285162651533"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                ⚡ Order via WhatsApp
              </a>

              <a
                href="#harga"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                💎 Lihat Daftar Harga
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="border-t border-white/5 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} SHIGE CREW • Joki Service
          </p>

          <div className="flex items-center gap-3">

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              🟢 Online
            </span>

            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
              Secure Service
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}