import { X, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function CrewRankModal({
  isOpen,
  onClose,
}) {

  const ranks = [
    {
      min: 1000000,
      title: "🐉 Eternal King",
      color: "text-red-500",
    },
    {
      min: 500000,
      title: "👑 Sovereign",
      color: "text-yellow-400",
    },
    {
      min: 250000,
      title: "🔥 Warlord",
      color: "text-orange-400",
    },
    {
      min: 100000,
      title: "💠 Mythborn",
      color: "text-cyan-400",
    },
    {
      min: 50000,
      title: "⚔️ Champion",
      color: "text-purple-400",
    },
    {
      min: 10000,
      title: "🛡️ Guardian",
      color: "text-green-400",
    },
    {
      min: 3000,
      title: "🗡️ Adventurer",
      color: "text-blue-400",
    },
    {
      min: 0,
      title: "🍃 Wanderer",
      color: "text-zinc-400",
    },
  ];

  const [timeLeft, setTimeLeft] =
    useState({});

  useEffect(() => {

    const resetDate =
      new Date(
        "2026-08-12T00:00:00"
      );

    const timer =
      setInterval(() => {

        const now =
          new Date();

        const distance =
          resetDate - now;

        if (distance <= 0) {
          clearInterval(timer);
          return;
        }

        setTimeLeft({
          days:
            Math.floor(
              distance /
              (1000 * 60 * 60 * 24)
            ),

          hours:
            Math.floor(
              (
                distance %
                (
                  1000 *
                  60 *
                  60 *
                  24
                )
              ) /
              (
                1000 *
                60 *
                60
              )
            ),

          minutes:
            Math.floor(
              (
                distance %
                (
                  1000 *
                  60 *
                  60
                )
              ) /
              (
                1000 *
                60
              )
            ),

          seconds:
            Math.floor(
              (
                distance %
                (
                  1000 *
                  60
                )
              ) / 1000
            ),
        });

      }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  if (!isOpen)
    return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">

      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-3xl font-black mb-2">
          🏆 Crew Rank
        </h2>

        <p className="text-zinc-400 mb-6">
          Naik rank dengan aktif
          support live, tap tap,
          dan ikut event
          SHIGEPEDIA.
        </p>

        {/* Countdown */}
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-5 mb-6">

          <div className="flex items-center gap-2 text-purple-400 mb-3">
            <Clock size={18} />
            Season Reset
          </div>

          <div className="grid grid-cols-4 gap-3 text-center">

            {[
              [
                timeLeft.days,
                "Hari",
              ],
              [
                timeLeft.hours,
                "Jam",
              ],
              [
                timeLeft.minutes,
                "Menit",
              ],
              [
                timeLeft.seconds,
                "Detik",
              ],
            ].map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-2xl p-3"
                >
                  <div className="text-2xl font-black text-white">
                    {
                      item[0] ??
                      0
                    }
                  </div>

                  <div className="text-xs text-zinc-400">
                    {item[1]}
                  </div>
                </div>
              )
            )}

          </div>

          <div className="mt-4 text-sm text-zinc-300">
            ⚠ Reset rank dilakukan
            setiap <b>90 hari</b>.
            Crew mempertahankan
            <b> 20% total point</b>
            setelah reset.
          </div>

        </div>

        {/* Rank List */}
        <div className="space-y-3">

          {ranks.map(
            (
              rank,
              index
            ) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-3xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className={`font-bold text-lg ${rank.color}`}>
                    {rank.title}
                  </p>

                  <p className="text-zinc-400 text-sm">
                    {rank.min.toLocaleString()}+
                    points
                  </p>
                </div>
              </div>
            )
          )}

        </div>

      </div>
    </div>
  );
}