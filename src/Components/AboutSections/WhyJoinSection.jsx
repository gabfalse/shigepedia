import {
  Users,
  Trophy,
  HeartHandshake,
  TrendingUp,
  Gamepad2,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Komunitas Positif",
    desc: "Belajar bersama pemain lain dalam lingkungan yang suportif.",
  },
  {
    icon: Trophy,
    title: "Turnamen",
    desc: "Berkesempatan mengikuti scrim dan turnamen resmi.",
  },
  {
    icon: Gamepad2,
    title: "Latihan Rutin",
    desc: "Mengembangkan kemampuan individu maupun tim.",
  },
  {
    icon: TrendingUp,
    title: "Pengembangan Diri",
    desc: "Meningkatkan skill, komunikasi, dan mental kompetitif.",
  },
  {
    icon: HeartHandshake,
    title: "Networking",
    desc: "Membangun relasi dengan pemain dari berbagai daerah.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 font-semibold uppercase tracking-widest">
        Why Join
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Mengapa Bergabung?
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">

        {reasons.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7"
            >
              <Icon className="text-purple-400" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400 leading-7">
                {item.desc}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}