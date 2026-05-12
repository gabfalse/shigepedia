


import Navbar from "../../Components/Navbar"
import { useNavigate }
  from "react-router-dom";

import {
  LogOut,
  Mail,
} from "lucide-react";

import VerifyEmailModal
  from "../../Components/Auth/VerifyEmailModal";

export default function HomePage() {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const handleLogout =
    () => {

      localStorage.removeItem(
        "user"
      );

      navigate(
        "/login"
      );
    };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6 relative">
<Navbar />
      {/* Logout Button */}
      <button
        onClick={
          handleLogout
        }
        className="absolute top-5 right-5 flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-4 py-2 rounded-2xl transition"
      >
        <LogOut size={18} />
        Logout
      </button>

      <div className="w-full max-w-2xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full mb-8">
          🚧 SHIGEPEDIA Development
        </div>

        {/* Greeting */}
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Halo,{" "}
          <span className="text-purple-400">
            {user?.name ||
              "Crew"}
          </span>
          👋
        </h1>

        {/* Main Text */}
        <p className="text-zinc-300 text-xl leading-relaxed">
          Website{" "}
          <span className="font-bold text-purple-400">
            SHIGEPEDIA
          </span>{" "}
          sedang dalam
          development.
        </p>

        <p className="text-zinc-500 mt-4 text-lg">
          Jika sudah selesai,
          kami akan
          menghubungi kamu
          melalui{" "}
          <span className="text-white font-semibold">
            email terdaftar
          </span>
          .
        </p>

        {/* Verify Email */}
        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-zinc-400">

          <Mail
            size={16}
            className="text-purple-400"
          />

          <span>
            Belum menerima
            email atau belum
            verifikasi?
          </span>

          <VerifyEmailModal />

        </div>

        {/* Card */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-left">

          <h3 className="text-xl font-bold mb-5">
            Yang akan hadir di
            SHIGEPEDIA 🔥
          </h3>

          <div className="space-y-4 text-zinc-400">

            <div className="flex items-center gap-3">
              🎮 Booking
              Mabar VIP
            </div>

            <div className="flex items-center gap-3">
              ⚡ Interactive
              Live Tools
            </div>

            <div className="flex items-center gap-3">
              💎 Top Up
              Mobile Legends
            </div>

            <div className="flex items-center gap-3">
              🏆 Crew Level &
              Loyalty
            </div>

            <div className="flex items-center gap-3">
              🔥 Live
              Leaderboard
            </div>

          </div>
        </div>

        {/* Footer */}
        <p className="text-zinc-600 text-sm mt-8">
          Thank you for
          joining SHIGE Crew ❤️
        </p>

      </div>
    </div>
  );
}