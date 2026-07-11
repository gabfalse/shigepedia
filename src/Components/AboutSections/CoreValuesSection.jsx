import {
  Shield,
  HeartHandshake,
  TrendingUp,
  Flag,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Respect",
    desc: "Menghargai seluruh anggota, lawan, dan komunitas tanpa memandang rank maupun pengalaman.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Setiap anggota memiliki kesempatan untuk terus belajar dan berkembang.",
  },
  {
    icon: Shield,
    title: "Discipline",
    desc: "Konsisten hadir latihan, tepat waktu, dan bertanggung jawab terhadap tim.",
  },
  {
    icon: Flag,
    title: "Integrity",
    desc: "Bermain secara jujur, sportif, dan menjaga nama baik SHIGE CREW.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 font-semibold uppercase tracking-widest">
        Core Values
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Nilai yang Kami Junjung
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {values.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <Icon className="text-purple-400" size={34} />

              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-8">
                {item.desc}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}