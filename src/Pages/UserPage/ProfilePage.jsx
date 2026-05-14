import CrewRankModal
  from "../../Components/General/CrewRankModal";

import TikTokVerifyModal
  from "../../Components/Auth/TiktokVerifyModal";

import {
  useEffect,
  useState
} from "react";

import {
  User,
  Gamepad2,
  Shield,
  Star,
  Trophy,
  ChevronRight,
  CheckCircle,
  Heart,
} from "lucide-react";

import {
  getProfile
} from "../../Utils/Api/Profile";

export default function ProfilePage() {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [open, setOpen] =
    useState(false);

  const [openRank, setOpenRank] =
    useState(false);

  // ======================
  // FETCH PROFILE
  // ======================
  useEffect(() => {

    const fetchProfile =
      async () => {

        try {

          setLoading(true);

          const savedUser =
            JSON.parse(
              localStorage.getItem(
                "user"
              )
            );

          if (!savedUser?.id) {

            setError(
              "User tidak ditemukan"
            );

            return;
          }

          const response =
            await getProfile(
              savedUser.id
            );

          if (
            !response.success
          ) {

            throw new Error(
              response.message
            );
          }

          setUser(
            response.user
          );

        } catch (err) {

          console.error(err);

          setError(

            err.response
              ?.data
              ?.message ||

            err.message ||

            "Gagal mengambil profile"
          );

        } finally {

          setLoading(false);
        }
      };

    fetchProfile();

  }, []);

  // ======================
  // REFRESH AFTER VERIFY
  // ======================
  const handleVerified =
    async () => {

      const savedUser =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      const response =
        await getProfile(
          savedUser.id
        );

      if (
        response.success
      ) {

        setUser(
          response.user
        );
      }

      setOpen(false);
    };

  // ======================
  // LOADING
  // ======================
  if (loading) {

    return (
      <div className="
        min-h-screen
        bg-zinc-950
        text-white
        flex
        items-center
        justify-center
      ">
        <p className="
          text-zinc-400
        ">
          Memuat profile...
        </p>
      </div>
    );
  }

  // ======================
  // ERROR
  // ======================
  if (error) {

    return (
      <div className="
        min-h-screen
        bg-zinc-950
        text-white
        flex
        items-center
        justify-center
        p-5
      ">
        <div className="
          bg-red-500/10
          border
          border-red-500
          text-red-400
          rounded-2xl
          p-5
        ">
          {error}
        </div>
      </div>
    );
  }

  return (

    <div className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
      flex
      items-center
      justify-center
    ">

      {/* VERIFY MODAL */}
      <TikTokVerifyModal
        isOpen={open}
        onClose={() =>
          setOpen(false)
        }
        user={user}
        onVerified={
          handleVerified
        }
      />

      {/* CREW RANK MODAL */}
      <CrewRankModal
        isOpen={openRank}
        onClose={() =>
          setOpenRank(false)
        }
      />

      <div className="
        w-full
        max-w-3xl
        bg-zinc-900
        border
        border-zinc-800
        rounded-[2rem]
        p-8
        shadow-2xl
      ">

        {/* HEADER */}
        <div className="
          flex
          flex-col
          items-center
          text-center
        ">

          <div className="
            w-28
            h-28
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            flex
            items-center
            justify-center
            mb-5
          ">

            <User
              size={46}
              className="
                text-purple-400
              "
            />

          </div>

          <h1 className="
            text-3xl
            font-black
          ">
            {user?.name}
          </h1>

          {user?.tiktok_verified ? (

            <div className="
              mt-3
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-green-500/10
              border
              border-green-500/20
              text-green-400
              text-sm
            ">

              <CheckCircle
                size={16}
              />

              TikTok Verified

            </div>

          ) : (

            <div className="
              mt-3
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-zinc-700/40
              border
              border-zinc-600
              text-zinc-400
              text-sm
            ">
              Not Verified
            </div>
          )}

          <div className="
            mt-4
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-400
            capitalize
          ">

            <Shield
              size={16}
            />

            {user?.role}

          </div>

        </div>

        {/* STATS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mt-8
        ">

          <StatCard
            icon={
              <Trophy className="text-yellow-400" />
            }
            title="Total Point"
            value={
              user?.loyalty_points || 0
            }
            color="text-yellow-400"
          />

          <StatCard
            icon={
              <Heart className="text-pink-400" />
            }
            title="Total Live Like"
            value={
              user?.total_live_like || 0
            }
            color="text-pink-400"
          />

          <StatCard
            icon={
              <Gamepad2 className="text-purple-400" />
            }
            title="Total Like"
            value={
              user?.total_like || 0
            }
            color="text-purple-400"
          />

        </div>

        {/* CREW + VERIFY */}
        <div className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        ">

          {/* CREW RANK */}
          <button
            onClick={() =>
              setOpenRank(true)
            }
            className="
              bg-zinc-800
              border
              border-zinc-700
              rounded-3xl
              p-5
              text-left
              hover:border-purple-500/40
              hover:bg-zinc-800/70
              transition-all
            "
          >

            <div className="
              flex
              justify-between
              items-start
            ">

              <div>

                <div className="
                  flex
                  items-center
                  gap-2
                  text-zinc-400
                  text-sm
                  mb-2
                ">
                  <Star size={18} />
                  Crew Rank
                </div>

                {!user?.tiktok_verified ? (

                  <>
                    <p className="
                      text-lg
                      font-bold
                      text-zinc-400
                    ">
                      🔒 Locked
                    </p>

                    <p className="
                      text-xs
                      text-zinc-500
                      mt-1
                    ">
                      Verify TikTok
                      to unlock
                      Crew Rank
                    </p>
                  </>

                ) : (

                  <>
                    <p className={`
                      text-2xl
                      font-black
                      ${user?.crew_color}
                    `}>
                      {user?.crew_title}
                    </p>

                    {user?.next_crew && (
                      <div className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        text-zinc-400
                        mt-2
                      ">
                        Next:
                        {user?.next_crew}
                      </div>
                    )}
                  </>

                )}

              </div>

              <ChevronRight
                className="
                  text-zinc-500
                "
              />

            </div>

          </button>

          {/* TIKTOK VERIFY */}
          <button
            onClick={() =>
              setOpen(true)
            }
            className={`
              border
              rounded-3xl
              p-5
              text-left
              transition-all
              ${
                user?.tiktok_verified
                  ? `
                    bg-green-500/10
                    border-green-500/20
                    hover:border-green-400
                  `
                  : `
                    bg-zinc-800
                    border-zinc-700
                    hover:border-pink-500/40
                    hover:bg-zinc-800/70
                  `
              }
            `}
          >

            <div className="
              flex
              justify-between
              items-start
            ">

              <div>

                <div className="
                  flex
                  items-center
                  gap-2
                  text-zinc-400
                  text-sm
                  mb-2
                ">
                  <CheckCircle size={18} />
                  TikTok Status
                </div>

                {user?.tiktok_verified ? (

                  <>
                    <p className="
                      text-2xl
                      font-black
                      text-green-400
                    ">
                      Verified
                    </p>

                    <p className="
                      text-xs
                      text-zinc-400
                      mt-1
                    ">
                      @{user?.tiktok_username}
                    </p>
                  </>

                ) : (

                  <>
                    <p className="
                      text-2xl
                      font-black
                      text-pink-400
                    ">
                      Verify Now
                    </p>

                    <p className="
                      text-xs
                      text-zinc-500
                      mt-1
                    ">
                      Connect your TikTok
                      account
                    </p>
                  </>

                )}

              </div>

              <ChevronRight
                className="
                  text-zinc-500
                "
              />

            </div>

          </button>

        </div>

      </div>

    </div>
  );
}

// ======================
// STAT CARD
// ======================
function StatCard({
  icon,
  title,
  value,
  color
}) {

  return (

    <div className="
      bg-zinc-800
      border
      border-zinc-700
      rounded-3xl
      p-5
    ">

      <div className="
        flex
        items-center
        justify-between
      ">

        <div>

          <p className="
            text-zinc-400
            text-sm
          ">
            {title}
          </p>

          <h3 className={`
            text-2xl
            font-black
            mt-2
            ${color}
          `}>
            {value}
          </h3>

        </div>

        <div>
          {icon}
        </div>

      </div>

    </div>
  );
}