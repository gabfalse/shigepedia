import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center">

      {/* Badge */}
      <span className="badge mb-6">
        JOKI MOBILE LEGENDS
      </span>

      {/* Logo */}
      <div className="logo-frame mb-8">
        <img
          src="/images/mobile-legends-logo.png"
          alt="Mobile Legends"
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
        Push Rank Lebih Cepat
        <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Tanpa Ribet
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
        Jasa Joki Mobile Legends terpercaya dengan proses cepat,
        aman, dan dikerjakan oleh player berpengalaman.
        Tersedia layanan per bintang, paket 10 bintang,
        hingga paket naik rank dengan harga transparan.
      </p>

      {/* Feature */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">

        <span className="glass rounded-full px-4 py-2 text-sm">
          ⚡ Proses Cepat
        </span>

        <span className="glass rounded-full px-4 py-2 text-sm">
          🛡️ Aman
        </span>

        <span className="glass rounded-full px-4 py-2 text-sm">
          💯 Bergaransi
        </span>

      </div>

      {/* CTA */}
      <button className="primary-btn mt-10 gap-4">
        <span>Lihat Harga</span>

        <FaArrowRight />
      </button>

    </section>
  );
};

export default HeroSection;