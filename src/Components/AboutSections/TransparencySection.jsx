import { ShieldCheck } from "lucide-react";

export default function TransparencySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        Transparency
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Transparansi Organisasi
      </h2>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <ShieldCheck className="text-purple-400" size={36} />

        <p className="mt-6 text-zinc-400 leading-8">
          SHIGE CREW berkomitmen membangun komunitas yang transparan dan
          profesional. Setiap kebijakan mengenai kegiatan tim, penggunaan dana
          operasional, sponsor, maupun pembagian hadiah turnamen akan
          disampaikan kepada anggota sesuai kebutuhan organisasi.
        </p>

        <div className="mt-8 rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
          <strong className="text-purple-300">
            Kepercayaan dibangun melalui komunikasi yang terbuka dan tanggung
            jawab bersama.
          </strong>
        </div>

      </div>

    </section>
  );
}