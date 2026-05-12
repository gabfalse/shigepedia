import Navbar from "../../Components/Navbar";
import { Mail } from "lucide-react";
import VerifyEmailModal from "../../Components/Auth/VerifyEmailModal";

export default function HomePage() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="flex items-center justify-center min-h-screen p-6">

        <div className="w-full max-w-3xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center mt-12 gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full mb-10">
            🔥 SHIGEPEDIA Community Hub
          </div>

          {/* Greeting */}
          <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
            Halo,{" "}
            <span className="text-purple-400">
              {user?.name || "Crew"}
            </span>
            👋
          </h1>

          {/* Main Text */}
          <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
            Selamat bergabung dan menjadi bagian dari SHIGE CREW.
            <br />
            Semua fitur, event, dan aktivitas berada dalam satu tempat.
          </p>

          <p className="text-zinc-500 mt-5 text-lg">
            Nikmati pengalaman terbaikmu bersama SHIGE Crew.
          </p>

          {/* Email Info */}
          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-zinc-400">

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-400" />
              Informasi penting akan dikirim ke email kamu
            </div>

            <VerifyEmailModal />

          </div>

          {/* Feature Card */}
          <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-left">

            <h3 className="text-2xl font-bold mb-6 text-center">
              Fitur SHIGEPEDIA
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-zinc-300">

              <div className="bg-zinc-800/50 p-4 rounded-2xl">
                🎮 Booking Mabar VIP System
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-2xl">
                ⚡ Interactive Live Tools
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-2xl">
                💎 Top Up Mobile Legends
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-2xl">
                🏆 Crew Level & Ranking
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-2xl md:col-span-2 text-center">
                🔥 Live Leaderboard Support System
              </div>

            </div>
          </div>

          {/* Footer */}
          <p className="text-zinc-600 text-sm mt-10">
            SHIGEPEDIA • SHIGE Crew Ecosystem
          </p>

        </div>
      </div>
    </div>
  );
}