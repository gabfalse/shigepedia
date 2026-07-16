import { useEffect, useState } from "react";

export default function DiscordCard() {
  const [server, setServer] = useState(null);

  useEffect(() => {
    fetch("https://discord.com/api/v10/invites/2ckrxv9yGQ?with_counts=true")
      .then((res) => res.json())
      .then(setServer);
  }, []);

  if (!server) return <p>Loading...</p>;

  return (
    <div className="rounded-xl bg-zinc-900 p-6 text-white">
      <img
        src={`https://cdn.discordapp.com/icons/${server.guild.id}/${server.guild.icon}.png`}
        alt=""
        className="w-16 h-16 rounded-full"
      />

      <h2 className="text-2xl font-bold mt-4">
        {server.guild.name}
      </h2>

      <p>Total Member: {server.approximate_member_count}</p>
      <p>Online: {server.approximate_presence_count}</p>

      <a
        href={server.invite_url ?? "https://discord.gg/2ckrxv9yGQ"}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2"
      >
        Join Discord
      </a>
    </div>
  );
}