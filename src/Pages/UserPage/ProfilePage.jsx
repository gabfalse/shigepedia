import {
  useEffect,
  useState,
} from "react";

import {
  User,
  Mail,
  Gamepad2,
  Shield,
  Star,
  Trophy,
  ChevronRight,
} from "lucide-react";

import {
  getProfile,
} from "../../Utils/Api/Profile";

export default function ProfilePage() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        setLoading(true);

        const savedUser =
          JSON.parse(localStorage.getItem("user"));

        if (!savedUser?.id) {
          setError("User tidak ditemukan");
          return;
        }

        const response =
          await getProfile(savedUser.id);

        if (!response.success) {
          throw new Error(response.message);
        }

        setUser(response.user);

      } catch (err) {

        console.error(err);

        setError(
          err.response?.data?.message ||
          err.message ||
          "Gagal mengambil profile"
        );

      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-zinc-400">Memuat profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-5">
        <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-2xl p-5">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-5 flex items-center justify-center">

      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 shadow-2xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center">

          <div className="w-28 h-28 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
            <User size={46} className="text-purple-400" />
          </div>

          <h1 className="text-3xl font-black">
            {user?.name}
          </h1>

          <p className={`mt-2 font-semibold text-lg ${user?.crew_color}`}>
            {user?.crew_title}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 capitalize">
            <Shield size={16} />
            {user?.role}
          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-4 mt-10">

          {/* Email */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-5">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
              <Mail size={18} />
              Email
            </div>
            <p className="font-semibold break-all">
              {user?.email || "Belum ditambahkan"}
            </p>
          </div>

          {/* ML ID */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-5">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
              <Gamepad2 size={18} />
              ML ID
            </div>
            <p className="font-semibold">
              {user?.ml_id || "Belum ditambahkan"}
            </p>
          </div>

          {/* Crew Rank */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-5">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
              <Star size={18} />
              Crew Rank
            </div>

            <p className={`text-2xl font-black ${user?.crew_color}`}>
              {user?.crew_title}
            </p>

            {user?.next_crew && (
              <div className="flex items-center gap-1 text-xs text-zinc-400 mt-3">
                <ChevronRight size={14} />
                Next: {user?.next_crew}
              </div>
            )}
          </div>

          {/* Win Together */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-5">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
              <Trophy size={18} />
              Win Together
            </div>

            <p className="text-2xl font-black text-yellow-400">
              {(user?.win_together || 0).toLocaleString()}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}