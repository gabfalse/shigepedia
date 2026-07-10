import { useEffect, useState } from "react";
import {
  Users,
  Trophy,
  Newspaper,
  UserPlus,
  Calendar,
  Image,
  Handshake,
  Shield,
  ChevronRight,
} from "lucide-react";
import Papa from "papaparse";

const TEAM_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLiZZJKJV_Z8grC-XL3dRakvDtCmyzhY6-G2OpnonhIceiIeHBW9d_olssQJ3EoPp5ptwpFelfMZ6f/pub?gid=1932849059&single=true&output=csv";

export default function LandingPage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    Papa.parse(TEAM_CSV, {
      download: true,
      header: true,
      complete: (results) => {
        setTeam(results.data[0]);
      },
    });
  }, []);

  const features = [
    {
      title: "Roster",
      desc: "Daftar pemain SHIGE CREW.",
      icon: Users,
    },
    {
      title: "Staff",
      desc: "Coach, manager, dan official.",
      icon: Shield,
    },
    {
      title: "Recruitment",
      desc: "Pendaftaran pemain baru.",
      icon: UserPlus,
    },
    {
      title: "Articles",
      desc: "Berita dan artikel tim.",
      icon: Newspaper,
    },
    {
      title: "Achievements",
      desc: "Prestasi yang telah diraih.",
      icon: Trophy,
    },
    {
      title: "Gallery",
      desc: "Dokumentasi kegiatan tim.",
      icon: Image,
    },
    {
      title: "Schedule",
      desc: "Jadwal scrim dan turnamen.",
      icon: Calendar,
    },
    {
      title: "Sponsors",
      desc: "Partner resmi SHIGE CREW.",
      icon: Handshake,
    },
  ];

  if (!team) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="bg-zinc-950 text-white">

    <section className="relative overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed22,transparent_45%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#9333ea22,transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto px-6 py-28">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">

          {team.Tagline || "Rise Together"}

        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-none">

          {team["Nama Team"]}

        </h1>

        <p className="mt-8 max-w-xl text-zinc-400 text-lg leading-8">

          {team.Deskripsi ||
            "Website resmi SHIGE CREW sedang dalam tahap pengembangan. Nantikan roster, artikel, prestasi, jadwal, dan berbagai fitur menarik lainnya."}

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSc402BDS4XHutOvUiNLi3d7hO_b-UT7mTlFqvRkdeyX-3U64g/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-semibold transition-colors"
>
  Open Recruitment
</a>

          <button
            disabled
            className="border border-zinc-700 px-8 py-4 rounded-2xl opacity-60 cursor-not-allowed"
          >
            Roster Coming Soon
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex justify-center">

        <div className="relative">

          <div className="absolute -inset-6 rounded-full bg-purple-600/20 blur-3xl" />

          {team["Logo URL"] ? (

            <img
              src={team["Logo URL"]}
              alt={team["Nama Team"]}
              className="relative w-80 h-80 object-contain"
            />

          ) : (

            <div className="relative w-80 h-80 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-7xl font-black text-purple-500">

              SHIGE

            </div>

          )}

        </div>

      </div>

    </div>

  </div>

</section>

     {/* ABOUT */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="flex items-center justify-between mb-10">

    <div>

      <h2 className="text-4xl font-bold">

        Team Information

      </h2>

      <p className="text-zinc-500 mt-2">

        Official information about SHIGE CREW.

      </p>

    </div>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <InfoCard
      title="Team"
      value={team["Nama Team"]}
    />

    <InfoCard
      title="Tagline"
      value={team.Tagline}
    />

    <InfoCard
      title="Founded"
      value={team.Berdiri}
    />

    <InfoCard
      title="Region"
      value={team.Region}
    />

  </div>

</section>

      {/* EXPLORE */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">
          Explore
        </h2>

        <p className="text-zinc-500 mt-3 max-w-xl">
        Kami sedang mengembangkan berbagai fitur agar website menjadi pusat informasi resmi SHIGE CREW.
    </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-8 opacity-60 cursor-not-allowed"
              >

                <span className="absolute top-4 right-4 text-xs bg-purple-600 px-2 py-1 rounded-full">
                  Coming Soon
                </span>

               <Icon
    size={34}
    className="text-purple-400 group-hover:scale-110 transition"
/>
                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {item.desc}
                </p>

                <ChevronRight className="mt-8 text-zinc-500" />

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}
function InfoCard({ title, value }) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm p-6 hover:border-purple-500 transition">
      

      <p className="text-xs uppercase tracking-[0.25em] text-purple-400">

        {title}

      </p>

      <p className="mt-4 text-2xl font-bold">

        {value || "-"}

      </p>

    </div>
  );
}