import { useRef } from "react";
import {
  ChevronRight,
  Star,
  Crown,
  Flame,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

import { SERVICES } from "../../Data/Service";
import { BENEFITS } from "../../Data/Benefit";

import ServiceCard from "../../Components/JokiComponent/ServiceCartd";
import BenefitCard from "../../Components/JokiComponent/BenefitCard";
import OrderForm from "../../Components/JokiComponent/OrderForm";

export default function JokiMobileLegend() {
  const orderRef = useRef(null);

  const serviceIcons = {
    star: <Star className="h-8 w-8 text-yellow-400" />,
    pack10: <Flame className="h-8 w-8 text-orange-400" />,
    rank: <Crown className="h-8 w-8 text-cyan-400" />,
  };

  const benefitIcons = {
    shield: <ShieldCheck className="h-6 w-6 text-violet-400" />,
    clock: <Clock3 className="h-6 w-6 text-violet-400" />,
    badge: <BadgeCheck className="h-6 w-6 text-violet-400" />,
    headphones: <Headphones className="h-6 w-6 text-violet-400" />,
  };

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="container-page overflow-hidden">
        <div className="bg-grid" />
        <div className="bg-top-glow" />
        <div className="bg-bottom-glow" />
        <div className="hero-glow" />

        <div className="relative z-10 flex w-full flex-col items-center text-center">
          <div className="logo-frame">
            <img
              src="../src/assets/logoUngu.png"
              alt="Mobile Legends"
              className="mt-5 h-50 w-50 object-contain"
            />
          </div>

          <span className="badge mt-8">
            MOBILE LEGENDS BOOST
          </span>

          <h1 className="hero-title mt-6">
            Push Rank Lebih Cepat
          </h1>

          <p className="hero-sub">
            Jasa Joki Mobile Legends terpercaya,
            aman, cepat, transparan, dan bergaransi.
          </p>

          <button
            className="primary-btn mt-10"
            onClick={() =>
              orderRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Order Sekarang
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ================= LAYANAN ================= */}

      <section className="section-page">
        <p className="section-title">
          PILIH LAYANAN
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              icon={serviceIcons[service.id]}
            />
          ))}
        </div>
      </section>

      {/* ================= BENEFIT ================= */}

      <section className="section-page-sm">
        <p className="section-title">
          KENAPA MEMILIH KAMI
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              icon={benefitIcons[benefit.icon]}
            />
          ))}
        </div>
      </section>

      {/* ================= ORDER ================= */}

      <section ref={orderRef}>
        <OrderForm />
      </section>

      {/* ================= CTA ================= */}

      <section className="section-page">
        <div className="glass-lg relative overflow-hidden text-center">
          <div className="bg-top-glow" />

          <div className="relative z-10">
            <h2 className="hero-title text-3xl lg:text-5xl">
              Siap Push Rank Hari Ini?
            </h2>

            <p className="hero-sub mx-auto">
              Pilih layanan yang sesuai dengan kebutuhanmu
              dan rasakan proses joki yang cepat, aman,
              dan profesional.
            </p>

            <button
              className="primary-btn mx-auto mt-10"
              onClick={() =>
                orderRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Mulai Order
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}