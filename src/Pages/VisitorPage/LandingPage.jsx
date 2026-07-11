import { useEffect, useState } from "react";
import Papa from "papaparse";

const TEAM_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLiZZJKJV_Z8grC-XL3dRakvDtCmyzhY6-G2OpnonhIceiIeHBW9d_olssQJ3EoPp5ptwpFelfMZ6f/pub?gid=1932849059&single=true&output=csv";

const RECRUITMENT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc402BDS4XHutOvUiNLi3d7hO_b-UT7mTlFqvRkdeyX-3U64g/viewform?usp=publish-editor";

export default function LandingHero() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
  Papa.parse(TEAM_CSV, {
    download: true,
    header: true,
    complete: (results) => {
      console.log("=== CSV RESULTS ===");
      console.log(results);

      console.log("=== FIRST ROW ===");
      console.log(results.data[0]);

      console.log("=== COLUMN NAMES ===");
      console.log(Object.keys(results.data[0]));

      console.log("=== LOGO URL ===");
      console.log(results.data[0]["Logo URL"]);

      setTeam(results.data[0]);
    },
    error: (err) => {
      console.error("CSV ERROR:", err);
    },
  });
}, []);

  const getImageUrl = (url) => {
  if (!url) return "";

  const fileId = url.match(/\/d\/([^/]+)/)?.[1];

  const finalUrl = fileId
    ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    : url;

  console.log("Final URL:", finalUrl);

  return finalUrl;
};

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

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
<div className="text-center lg:text-left">

  <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
    {team.Tagline || "Rise Together"}
  </span>

  <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
    {team["Nama Team"]}
  </h1>

  <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-zinc-400 text-lg leading-8">
    {team.Deskripsi}
  </p>

  <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

    <a
      href="/about"
      className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:border-purple-500 hover:text-purple-400 transition"
    >
      Tentang SHIGE CREW
    </a>

    <a
      href={RECRUITMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl bg-purple-600 hover:bg-purple-700 px-6 py-3 font-semibold transition"
    >
      Join Team
    </a>

    <a
      href="https://shigepedia.id"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:border-purple-500 hover:text-purple-400 transition"
    >
      Top Up Game
    </a>

    <a
      href="https://sociabuzz.com/shige/tribe"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:border-purple-500 hover:text-purple-400 transition"
    >
      Mabar VIP SHIGE
    </a>

  </div>


          </div>

         {/* RIGHT */}
<div className="flex justify-center mt-12 lg:mt-0">

  <div className="relative">

    <div className="absolute -inset-10 rounded-full bg-purple-600/20 blur-3xl" />

    {team["Logo URL"] ? (
      <img
        src={getImageUrl(team["Logo URL"])}
        alt={team["Nama Team"]}
        className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-contain select-none"
        draggable={false}
      />
    ) : (
      <div className="relative z-10 flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-zinc-800 bg-zinc-900 text-6xl font-black text-purple-500">
        LOGO
      </div>
    )}

  </div>

</div>

        </div>

      </div>

    </section>
    
  );
}