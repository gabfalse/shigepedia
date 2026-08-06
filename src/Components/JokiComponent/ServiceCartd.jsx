import { ChevronRight } from "lucide-react";

export default function ServiceCard({
  service,
  icon,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="feature-card w-full text-left"
    >
      <div className="gradient-line" />

      <div className="game-icon mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {service.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-violet-300">
          Pilih Layanan
        </span>

        <ChevronRight
          size={20}
          className="text-violet-400"
        />
      </div>
    </button>
  );
}