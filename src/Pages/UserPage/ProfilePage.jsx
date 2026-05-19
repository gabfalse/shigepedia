import {
  useEffect,
  useState
} from "react";

import {
  User,
  Shield,
  Star,
  CheckCircle,
  ChevronRight
} from "lucide-react";

import CrewRankModal
  from "../../Components/General/CrewRankModal";

import TikTokVerifyModal
  from "../../Components/Auth/TiktokVerifyModal";

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

  const [openVerify, setOpenVerify] =
    useState(false);

  const [openRank, setOpenRank] =
    useState(false);

  // ======================
  // FETCH PROFILE
  // ======================
  useEffect(() => {

    fetchProfile();

  }, []);

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
            "User tidak ditemukan, silahkan login ulang"
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

          err?.response
            ?.data
            ?.message ||

          err?.message ||

          "Gagal mengambil profile"
        );

      } finally {

        setLoading(false);
      }
    };

  // ======================
  // AFTER VERIFIED
  // ======================
  const handleVerified =
    async () => {

      await fetchProfile();

      setOpenVerify(
        false
      );
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
        Memuat profile...
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
      justify-center
      items-center
    ">

      {/* VERIFY */}
      <TikTokVerifyModal
        isOpen={
          openVerify
        }
        onClose={() =>
          setOpenVerify(
            false
          )
        }
        user={user}
        onVerified={
          handleVerified
        }
      />

      {/* CREW */}
      <CrewRankModal
        isOpen={
          openRank
        }
        onClose={() =>
          setOpenRank(
            false
          )
        }
      />

      <div className="
        w-full
        max-w-xl
        bg-zinc-900
        border
        border-zinc-800
        rounded-[2rem]
        p-8
        shadow-2xl
      ">

        {/* PROFILE */}
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
            overflow-hidden
            bg-zinc-800
            border
            border-zinc-700
            flex
            items-center
            justify-center
          ">

            {user?.profile_url ? (

              <img
                src={
                  user.profile_url
                }
                alt="profile"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            ) : (

              <User
                size={42}
                className="
                  text-zinc-500
                "
              />

            )}

          </div>

          <h1 className="
            text-3xl
            font-black
            mt-5
          ">
            {user?.name}
          </h1>

          {/* TIKTOK */}
          <p className="
            text-zinc-400
            mt-2
          ">

            {user?.tiktok_username
              ? `@${user.tiktok_username}`
              : "Belum connect TikTok"}

          </p>

          {/* VERIFY STATUS */}
          {user?.tiktok_verified ? (

            <div className="
              mt-4
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-500/20
              text-green-400
            ">

              <CheckCircle
                size={16}
              />

              TikTok Verified

            </div>

          ) : (

            <div className="
              mt-4
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-zinc-800
              border
              border-zinc-700
              text-zinc-400
            ">
              Not Verified
            </div>

          )}

          {/* ROLE */}
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

        {/* ACTION CARD */}
        <div className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        ">

          {/* CREW */}
          <button
            onClick={() =>
              setOpenRank(
                true
              )
            }
            className="
              bg-zinc-800
              border
              border-zinc-700
              rounded-3xl
              p-5
              text-left
              hover:border-purple-500/40
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
                  <Star
                    size={18}
                  />
                  Crew Rank
                </div>

                <p className={`
                  text-xl
                  font-black
                  ${user?.crew_color}
                `}>
                  {user?.crew_title}
                </p>

                {user?.next_crew && (

                  <p className="
                    text-xs
                    text-zinc-500
                    mt-2
                  ">
                    Next:
                    {" "}
                    {user?.next_crew}
                  </p>

                )}

              </div>

              <ChevronRight
                className="
                  text-zinc-500
                "
              />

            </div>

          </button>

          {/* VERIFY */}
          <button
            onClick={() =>
              setOpenVerify(
                true
              )
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
                  `
                  : `
                    bg-zinc-800
                    border-zinc-700
                    hover:border-pink-500/40
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
                  <CheckCircle
                    size={18}
                  />
                  TikTok Status
                </div>

                {user?.tiktok_verified ? (

                  <>
                    <p className="
                      text-xl
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
                      @
                      {
                        user?.tiktok_username
                      }
                    </p>
                  </>

                ) : (

                  <>
                    <p className="
                      text-xl
                      font-black
                      text-pink-400
                    ">
                      Verify Sedang dalam perbaikan
                    </p>

                    <p className="
                      text-xs
                      text-zinc-500
                      mt-1
                    ">
                      Connect TikTok
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