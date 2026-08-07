export default function Background() {
  return (
    <>
      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_70%)]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-[radial-gradient(circle_at_bottom,#8b5cf615,transparent_70%)]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.8) .6px, transparent .6px)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
}