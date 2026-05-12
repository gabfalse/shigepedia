import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Gamepad2,
  Users,
  Coins,
  Radio
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  // 🔒 AUTO REDIRECT IF LOGGED IN
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-purple-400">
          SHIGEPEDIA
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-800"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
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
            Mabar,<br />Support,<br />& Community
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            Join komunitas SHIGE, Booking Mabar VIP,
            interactive live tools, top up Mobile Legends,
            dan leaderboard supporter.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/register")}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-2xl font-semibold"
            >
              Join SHIGEPEDIA
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-zinc-700 hover:bg-zinc-800 px-6 py-4 rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4">

          {/* Mabar VIP */}
          <a
            href="https://sociabuzz.com/shige/tribe"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:bg-zinc-800 transition"
          >
            <Gamepad2 className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold">
              Mabar VIP
            </h3>
            <p className="text-zinc-400 mt-2">
              Main bareng SHIGE, queue realtime, challenge, dan fun match.
            </p>
          </a>

          {/* Interactive Live */}
          <div
            onClick={() => navigate("/profile")}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:bg-zinc-800 transition cursor-pointer"
          >
            <Radio className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold">
              Interactive Live
            </h3>
            <p className="text-zinc-400 mt-2">
              Periksa point, title, dan akumulasi dari perjalananmu.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            {/* WhatsApp Channel */}
            <a
              href="https://whatsapp.com/channel/0029VbCMACH1dAwBXkr1md1k"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:bg-zinc-800 transition"
            >
              <Users className="text-purple-400 mb-4" />
              <h3 className="font-bold">
                Whatsapp Channel
              </h3>
            </a>

            {/* TopUp & Lapak Akun */}
            <div
              onClick={() => navigate("/stall")}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:bg-zinc-800 transition cursor-pointer"
            >
              <Coins className="text-purple-400 mb-4" />
              <h3 className="font-bold">
                TopUp & Lapak
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