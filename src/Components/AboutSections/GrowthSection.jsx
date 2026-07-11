import {
  Trophy,
  Swords,
  Video,
  Calendar,
  TrendingUp,
} from "lucide-react";

const opportunities = [
  {
    icon: Trophy,
    title: "Roster Turnamen",
  },
  {
    icon: Swords,
    title: "Latihan & Scrim",
  },
  {
    icon: Video,
    title: "Content Creator",
  },
  {
    icon: Calendar,
    title: "Event Komunitas",
  },
  {
    icon: TrendingUp,
    title: "Personal Branding",
  },
];

export default function GrowthSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        Growth
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Kesempatan Berkembang
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-12">

        {opportunities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center"
            >
              <Icon className="mx-auto text-purple-400" size={34} />

              <h3 className="mt-5 font-bold">
                {item.title}
              </h3>
            </div>
          );
        })}

      </div>

    </section>
  );
}