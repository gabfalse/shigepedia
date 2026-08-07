import { ShieldCheck } from "lucide-react";

import Loading from "../CommonComponents/Loading";
import useBenefits from "../../Hooks/useBenefits";

export default function BenefitSection() {
  const { benefits, loading } = useBenefits();

  if (loading) {
    return (
      <section className="section" id="benefit">
        <Loading text="Memuat benefit..." />
      </section>
    );
  }

  return (
    <section
      id="benefit"
      className="section"
    >
      <div className="container stack-lg">
        <div className="max-content text-center stack-sm">
          <span className="badge badge-primary">
            Kenapa Memilih Kami
          </span>

          <h2 className="title-lg">
            Benefit
            <span className="gradient-text">
              {" "}
              Minshi Joki
            </span>
          </h2>

          <p className="subtitle">
            Kami mengutamakan keamanan akun, kecepatan
            pengerjaan, dan pelayanan terbaik.
          </p>
        </div>

        <div className="grid-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="card hover text-center stack-sm"
            >
              <div className="flex-center">
                <div className="flex-center h-16 w-16 rounded-full bg-violet-500/10">
                  <ShieldCheck
                    size={30}
                    className="text-violet-400"
                  />
                </div>
              </div>

              <h3 className="title">
                {benefit.title}
              </h3>

              <p className="subtitle">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}