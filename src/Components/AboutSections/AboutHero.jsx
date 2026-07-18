import { ArrowRight, Gamepad2 } from "lucide-react";

const RECRUITMENT_URL =
  "https://discord.gg/2ckrxv9yGQ";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute top-52 -right-32 h-80 w-80 rounded-full bg-indigo-700/20 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">

          <Gamepad2 size={18} />

          About SHIGE CREW

        </div>

        {/* Title */}
        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
          Rise Together.
          <br />
          <span className="text-purple-500">
            Play Beyond.
          </span>
        </h1>

        {/* Description
        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
          SHIGE CREW merupakan komunitas dan tim esports di bawah naungan
          <span className="font-semibold text-white"> Shigepedia</span> yang
          berfokus pada pengembangan pemain, membangun komunitas yang sehat,
          serta menciptakan kesempatan bagi talenta muda untuk berkembang
          melalui latihan, kompetisi, dan kolaborasi.
        </p> */}

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={RECRUITMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-purple-600 hover:bg-purple-700 transition px-7 py-4 font-semibold"
          >
            Join SHIGE CREW

            <ArrowRight size={18} />

          </a>

          <a
            href="/"
            className="rounded-2xl border border-zinc-700 hover:border-purple-500 hover:text-purple-300 transition px-7 py-4 font-semibold"
          >
            Back to Home
          </a>

        </div>

      </div>

    </section>
  );
}