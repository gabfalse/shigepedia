import DiscordCard from "./DiscordCard";

export default function CommunitySection() {
  return (
    <section className="mt-10 w-full">
      <h2 className="section-title">
        Community
      </h2>

      <div className="glass-lg p-3 shadow-lg shadow-black/20 transition hover:border-purple-500/30">
        <DiscordCard />
      </div>
    </section>
  );
}