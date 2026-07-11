import { CheckCircle2 } from "lucide-react";

const missions = [
  "Menyediakan lingkungan latihan yang konsisten dan positif.",
  "Membantu pemain mengembangkan kemampuan individu maupun kerja sama tim.",
  "Memberikan kesempatan mengikuti turnamen untuk menambah pengalaman kompetitif.",
  "Membangun komunitas yang saling mendukung dan menghargai.",
  "Mengembangkan talenta melalui konten, edukasi, dan aktivitas komunitas bersama Shigepedia.",
];

export default function MissionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 font-semibold uppercase tracking-widest">
        Mission
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Misi Kami
      </h2>

      <div className="mt-10 grid gap-5">

        {missions.map((mission) => (
          <div
            key={mission}
            className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />

            <p className="text-zinc-300">
              {mission}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}