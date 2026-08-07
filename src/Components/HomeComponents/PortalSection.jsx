import { portals } from "../../Data/Portals";

export default function PortalSection() {
  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-4 text-center">
        <h2 className="title">Portal SHIGE</h2>
        
      </div>

      <div className="space-y-4">
        {portals.map((portal) => (
          <a
            key={portal.title}
            href={portal.url}
            target={portal.external ? "_blank" : undefined}
            rel={portal.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
                {portal.icon}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {portal.title}
                </h3>

                {portal.description && (
                  <p className="mt-1 text-sm text-zinc-400">
                    {portal.description}
                  </p>
                )}
              </div>
            </div>

            <span className="text-xl text-zinc-500 transition group-hover:translate-x-1 group-hover:text-violet-400">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}