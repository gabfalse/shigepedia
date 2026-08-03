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
      <section className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
          <p className="text-zinc-400">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0ea5e920,transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-5 py-16">

        {/* Logo */}
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

          {team.Logo ? (
            <img
              src={team.Logo}
              alt={team["Nama Team"]}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-4xl font-black">
              {team["Nama Team"]?.charAt(0)}
            </span>
          )}

        </div>

        {/* Tagline */}
        <span className="mt-6 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
          {team.Tagline || "Rise Together"}
        </span>

        {/* Team */}
        <h1 className="mt-5 bg-gradient-to-r from-white via-purple-200 to-sky-300 bg-clip-text text-center text-4xl font-black text-transparent sm:text-5xl">
          {team["Nama Team"] || "SHIGE CREW"}
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-md text-center leading-7 text-zinc-400">
          {team.Deskripsi ||
            "Professional esports community that grows together, competes together, and creates unforgettable gaming experiences."}
        </p>

        {/* ================= OPEN RECRUITMENT ================= */}

        <div className="mt-10 w-full">
          <a
            href="/about"
            className="group flex items-center justify-between rounded-3xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-5 shadow-xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-200">
                Open Recruitment
              </p>

              <h2 className="mt-1 text-lg font-bold">
                🚀 Join SHIGE CREW
              </h2>

              <p className="mt-1 text-sm text-purple-100/80">
                Bergabung bersama komunitas gamer & kreator terbaik.
              </p>
            </div>

            <span className="text-3xl transition group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* ================= PORTAL ================= */}

        <div className="mt-10 w-full">

          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Portal SHIGE
          </p>

          <div className="flex flex-col gap-4">

            <a
              href="https://sociabuzz.com/shige/tribe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition hover:border-sky-400 hover:bg-sky-500/10"
            >
              <span>🎮 Mabar VIP</span>
              <span>→</span>
            </a>

            <a
              href="https://shigepedia.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition hover:border-pink-400 hover:bg-pink-500/10"
            >
              <span>💎 Top Up Game</span>
              <span>→</span>
            </a>

                        <a
              href="/joki"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-400 hover:bg-amber-500/10"
            >
              <span>🏆 Joki MLBB</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://wa.me/6285162651533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10"
            >
              <span>💬 Contact Admin</span>
              <span className="text-lg">→</span>
            </a>

          </div>
        </div>

        {/* ================= COMMUNITY ================= */}

        <div className="mt-10 w-full">
          <div className="mb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Community
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-lg shadow-black/20 transition duration-300 hover:border-purple-500/30">
            <DiscordCard />
          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {team["Nama Team"]} • All Rights
            Reserved
          </p>

          <p className="mt-2 text-[11px] text-zinc-600">
            Made with ❤️ by SHIGE CREW
          </p>
        </div>

      </div>
    </section>
  );
}