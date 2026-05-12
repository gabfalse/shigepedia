import { useNavigate } from "react-router-dom";
import {
  Gamepad2,
  Users,
  Coins,
  Radio
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-purple-400">
          SHIGEPEDIA
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() =>
              navigate("/login")
            }
            className="px-5 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-800"
          >
            Login
          </button>

          <button
            onClick={() =>
              navigate("/register")
            }
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700"
          >
            Join Crew
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-purple-400 mb-3">
            🔥 Komunitas Live SHIGE
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Mabar,
            <br />
            Support,
            <br />
            & Community
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            Join komunitas SHIGE,
            Booking Mabar VIP,
            interactive live tools,
            top up Mobile Legends,
            dan leaderboard supporter.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() =>
                navigate("/register")
              }
              className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-2xl font-semibold"
            >
              Join SHIGEPEDIA
            </button>

            <button
              onClick={() =>
                navigate("/login")
              }
              className="border border-zinc-700 hover:bg-zinc-800 px-6 py-4 rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="grid gap-4">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <Gamepad2 className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold">
              Mabar VIP
            </h3>
            <p className="text-zinc-400 mt-2">
              Main bareng SHIGE,
              queue realtime,
              challenge, dan fun match.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <Radio className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold">
              Interactive Live
            </h3>
            <p className="text-zinc-400 mt-2">
              Vote hero, challenge,
              leaderboard, dan support
              realtime.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <Users className="text-purple-400 mb-4" />
              <h3 className="font-bold">
                Community
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <Coins className="text-purple-400 mb-4" />
              <h3 className="font-bold">
                Top Up
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 text-center py-6 text-zinc-500">
        © 2026 SHIGEPEDIA • Built for SHIGE Crew 🔥
      </footer>
    </div>
  );
}