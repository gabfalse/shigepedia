export default function BenefitCard({
  benefit,
  icon,
}) {
  return (
    <div className="glass-card">
      <div className="flex items-start gap-4">
        <div className="game-icon h-14 w-14 shrink-0">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            {benefit.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  );
}