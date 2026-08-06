import { portals } from "../../Data/Portals";

const colorClass = {
  sky: "hover:border-sky-400 hover:bg-sky-500/10",
  pink: "hover:border-pink-400 hover:bg-pink-500/10",
  amber: "hover:border-amber-400 hover:bg-amber-500/10",
  emerald: "hover:border-emerald-400 hover:bg-emerald-500/10",
  purple: "hover:border-purple-400 hover:bg-purple-500/10",
};

export default function PortalSection() {
  return (
    <section className="mt-10 w-full">
      <h2 className="section-title">Portal SHIGE</h2>

      <div className="flex flex-col gap-4">
        {portals.map((portal) => (
          <a
            key={portal.title}
            href={portal.url}
            target={portal.external ? "_blank" : undefined}
            rel={portal.external ? "noopener noreferrer" : undefined}
            className={`portal-btn group ${colorClass[portal.color] || ""}`}
          >
            <span className="flex items-center gap-3 font-medium">
              <span className="text-xl">{portal.icon}</span>
              {portal.title}
            </span>

            <span className="portal-btn-arrow group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}