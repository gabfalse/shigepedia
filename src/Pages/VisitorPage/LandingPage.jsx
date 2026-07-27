import { useEffect, useState } from "react";
import Papa from "papaparse";
import DiscordCard from "../../Components/HomeComponents/Discordcard";

const TEAM_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLiZZJKJV_Z8grC-XL3dRakvDtCmyzhY6-G2OpnonhIceiIeHBW9d_olssQJ3EoPp5ptwpFelfMZ6f/pub?gid=1932849059&single=true&output=csv";

export default function LandingHero() {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Papa.parse(TEAM_CSV, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: ({ data }) => {
        if (data?.length) {
          setTeam(data[0]);
        } else {
          setError(true);
        }
      },
      error: () => setError(true),
    });
  }, []);

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-400">
        Failed to load team information.
      </section>
    );
  }

  if (!team) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed25,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#9333ea20,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
              {team.Tagline || "Rise Together"}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              {team["Nama Team"] || "SHIGE CREW"}
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-zinc-400 lg:mx-0 lg:text-lg">
              {team.Deskripsi ||
                "Professional esports community that grows together, competes together, and creates unforgettable gaming experiences."}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
  {/* Join Team */}
  <a
    href="/about"
    className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 sm:w-auto"
  >
    Join Team
  </a>

  {/* Mabar */}
  <a
    href="https://sociabuzz.com/shige/tribe"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full items-center justify-center rounded-2xl border border-sky-500 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-white sm:w-auto"
  >
    🎮 Mabar VIP
  </a>

  {/* Top Up */}
  <a
    href="https://shigepedia.id"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full items-center justify-center rounded-2xl border border-pink-500 bg-pink-500/10 px-6 py-3 text-sm font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white sm:w-auto"
  >
    💎 Top Up Game
  </a>

  {/* Joki */}
  <a
    href="/joki"
    className="inline-flex w-full items-center justify-center rounded-2xl border border-amber-500 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black sm:w-auto"
  >
    🏆 Joki MLBB
  </a>

  {/* Contact */}
  <a
    href="https://wa.me/6285162651533"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full items-center justify-center rounded-2xl border border-emerald-500 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-white sm:w-auto"
  >
    💬 Contact Admin
  </a>
</div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-purple-600/20 blur-3xl" />

              {/* Discord Card */}
              <div className="relative transition duration-500 hover:-translate-y-1">
                <DiscordCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}