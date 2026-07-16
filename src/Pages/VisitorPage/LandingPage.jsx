import { useEffect, useState } from "react";
import Papa from "papaparse";
import DiscordCard from "../../Components/HomeComponents/Discordcard";

const TEAM_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLiZZJKJV_Z8grC-XL3dRakvDtCmyzhY6-G2OpnonhIceiIeHBW9d_olssQJ3EoPp5ptwpFelfMZ6f/pub?gid=1932849059&single=true&output=csv";

const getImageUrl = (url) => {
  if (!url) return "";

  const fileId = url.match(/\/d\/([^/]+)/)?.[1];

  return fileId
    ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    : url;
};

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
      <section className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-400">
        Failed to load team information.
      </section>
    );
  }

  if (!team) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed25,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#9333ea20,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
              {team.Tagline || "Rise Together"}
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              {team["Nama Team"] || "SHIGE CREW"}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 lg:mx-0">
              {team.Deskripsi || "Professional esports community."}
            </p>

           <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
  <a
    href="https://discord.gg/2ckrxv9yGQ"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
  >
    Join Discord
  </a>

  <a
    href="https://sociabuzz.com/shige/tribe"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-purple-500 hover:text-purple-400"
  >
    Mabar with SHIGE
  </a>

  <a
    href="https://shigepedia.id"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-purple-500 hover:text-purple-400"
  >
    Top Up Game
  </a>
</div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-purple-600/20 blur-3xl" />

              {team["Logo URL"] ? (
                <img
                  src={getImageUrl(team["Logo URL"])}
                  alt={team["Nama Team"]}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="relative z-10 h-64 w-64 select-none object-contain sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"
                />
              ) : (
                <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-6xl font-black text-purple-500 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                  LOGO
                </div>
              )}

              <DiscordCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}