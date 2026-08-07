import { ChevronDown, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section relative"
    >
      <div className="container">
        <div className="grid-2 items-center gap-section">
          <div className="stack-lg">
            <span className="badge badge-primary w-fit">
              <ShieldCheck size={14} />
              Trusted Mobile Legends Boosting
            </span>

            <div className="stack">
              <h1 className="title-lg">
                Push Rank Lebih Cepat
                <br />

                Bersama{" "}
                <span className="gradient-text">
                  Minshi Joki
                </span>
              </h1>

              <p className="subtitle max-text">
                Jasa joki rank Mobile Legends aman,
                cepat, dan dikerjakan oleh booster
                berpengalaman. Hitung harga otomatis
                sesuai target rank, lalu langsung order
                melalui WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#product"
                className="btn btn-primary btn-lg"
              >
                Pesan Sekarang
              </a>

              <a
                href="#benefit"
                className="btn btn-outline btn-lg"
              >
                Lihat Benefit
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  className="text-yellow-400"
                />
                Booster Berpengalaman
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-green-400"
                />
                Garansi Aman
              </div>
            </div>
          </div>

          <div className="flex-center">
            <img
              src="/hero-rank.webp"
              alt="Mobile Legends Rank"
              className="img-contain max-h-[520px]"
            />
          </div>
        </div>

        <div className="mt-16 flex-center">
          <a
            href="#product"
            className="animate-bounce"
          >
            <ChevronDown
              size={34}
              className="text-zinc-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
}