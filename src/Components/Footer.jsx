
import {
  useNavigate,
} from "react-router-dom";

export default function Footer() {

  const navigate =
    useNavigate();

  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-black text-purple-400">
              SHIGEPEDIA
            </h2>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Ecosystem resmi
              SHIGE Crew untuk
              mabar, support,
              top up, leaderboard,
              dan komunitas.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="font-semibold text-white mb-4">
              Quick Access
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <button
                onClick={() =>
                  navigate(
                    "/profile"
                  )
                }
                className="text-left hover:text-purple-400 transition"
              >
                Interactive Live
              </button>

              <button
                onClick={() =>
                  navigate(
                    "/stall"
                  )
                }
                className="text-left hover:text-purple-400 transition"
              >
                TopUp & Lapak
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://sociabuzz.com/shige/tribe",
                    "_blank"
                  )
                }
                className="text-left hover:text-purple-400 transition"
              >
                Mabar VIP
              </button>

            </div>

          </div>

          {/* Community */}
          <div>

            <h3 className="font-semibold text-white mb-4">
              Community
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <button
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029VbCMACH1dAwBXkr1md1k",
                    "_blank"
                  )
                }
                className="text-left hover:text-purple-400 transition"
              >
                Whatsapp Channel
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://sociabuzz.com/shige",
                    "_blank"
                  )
                }
                className="text-left hover:text-purple-400 transition"
              >
                Support SHIGE
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 SHIGEPEDIA •
            Built for SHIGE Crew 🔥
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">

            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            All systems online

          </div>

        </div>

      </div>

    </footer>
  );
}

