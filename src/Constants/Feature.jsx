import { FEATURES } from "../constants/features";
import useTeam from "../hooks/useTeam";
import Loading from "../components/common/Loading";
import { ChevronRight } from "lucide-react";

export default function LandingPage() {
  const { team, loading } = useTeam();

  if (loading) return <Loading />;

  return (
    <main className="bg-zinc-950 text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">

          {team.Tagline}

        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

          {team["Nama Team"]}

        </h1>

        <p className="mt-8 max-w-3xl text-zinc-400 text-lg leading-8">

          {team.Deskripsi}

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="#about"
            className="
            bg-purple-600
            hover:bg-purple-700
            px-8
            py-4
            rounded-2xl
            font-semibold
            "
          >
            About Team
          </a>

          <button
            disabled
            className="
            border
            border-zinc-700
            px-8
            py-4
            rounded-2xl
            opacity-50
            cursor-not-allowed
            "
          >
            Recruitment (Coming Soon)
          </button>

          <button
            disabled
            className="
            border
            border-zinc-700
            px-8
            py-4
            rounded-2xl
            opacity-50
            cursor-not-allowed
            "
          >
            View Roster (Coming Soon)
          </button>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <h2 className="text-4xl font-bold">

              About SHIGE

            </h2>

            <p className="mt-8 leading-8 text-zinc-400">

              {team.About}

            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <InfoCard
              title="Game"
              value={team.Game}
            />

            <InfoCard
              title="Region"
              value={team.Region}
            />

            <InfoCard
              title="Founded"
              value={team.Founded}
            />

            <InfoCard
              title="Status"
              value={team.Status}
            />

          </div>

        </div>

      </section>

      {/* EXPLORE */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-end justify-between">

          <div>

            <h2 className="text-4xl font-bold">

              Explore

            </h2>

            <p className="text-zinc-500 mt-3">

              More features are currently under development.

            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          {FEATURES.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                relative
                rounded-3xl
                bg-zinc-900
                border
                border-zinc-800
                p-8
                opacity-60
                cursor-not-allowed
                "
              >

                <span
                  className="
                  absolute
                  top-4
                  right-4
                  rounded-full
                  bg-purple-600
                  px-3
                  py-1
                  text-xs
                  "
                >

                  Coming Soon

                </span>

                <Icon
                  size={34}
                  className="text-purple-400"
                />

                <h3 className="font-bold text-xl mt-6">

                  {feature.title}

                </h3>

                <p className="mt-3 text-zinc-400">

                  {feature.description}

                </p>

                <ChevronRight
                  className="mt-8 text-zinc-600"
                />

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
    <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">

      <p className="text-sm uppercase tracking-wider text-purple-400">

        {title}

      </p>

      <p className="mt-3 text-xl font-bold">

        {value || "-"}

      </p>

    </div>
  );
}