import {
  useEffect,
  useState
} from "react";

import {
  Trophy,
  Heart,
  Users,
  Radio,
  Crown
} from "lucide-react";

export default function InteractiveLivePage() {

  const [loading, setLoading] =
    useState(true);

  const [data, setData] =
    useState(null);

  const [error, setError] =
    useState("");

  // ======================
  // FETCH DASHBOARD
  // ======================
  const fetchDashboard =
    async () => {

      try {

        const response =
          await fetch(
            "https://rutee.id/api-sp/live/get-live-dashboard.php"
          );

        const result =
          await response.json();

        if (
          !result.success
        ) {

          throw new Error(
            result.message
          );
        }

        setData(result);

      } catch (err) {

        console.error(err);

        setError(
          err.message ||
          "Gagal mengambil data"
        );

      } finally {

        setLoading(false);
      }
    };

  // ======================
  // AUTO REFRESH
  // ======================
  useEffect(() => {

    fetchDashboard();

    const interval =
      setInterval(
        fetchDashboard,
        3000
      );

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const formatNumber =
    (num = 0) => {

      return new Intl.NumberFormat(
        "id-ID"
      ).format(num);
    };

  if (loading) {

    return (
      <div className="
        min-h-screen
        bg-zinc-950
        flex
        items-center
        justify-center
        text-zinc-400
      ">
        Memuat Live Dashboard...
      </div>
    );
  }

  if (error) {

    return (
      <div className="
        min-h-screen
        bg-zinc-950
        flex
        items-center
        justify-center
      ">
        <div className="
          bg-red-500/10
          border
          border-red-500
          text-red-400
          p-5
          rounded-3xl
        ">
          {error}
        </div>
      </div>
    );
  }

  const live =
    data?.live_status;

  return (

    <div className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* HEADER */}
        <div className="
          mb-8
        ">

          <h1 className="
            text-4xl
            font-black
          ">
            Interactive Live
          </h1>

          <p className="
            text-zinc-400
            mt-2
          ">
            Realtime TikTok Live Dashboard
          </p>

        </div>

        {/* LIVE STATUS */}
        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-[2rem]
          p-6
          mb-8
        ">

          <div className="
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
          ">

            <div>

              <div className="
                flex
                items-center
                gap-3
              ">

                <div className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                  flex
                  items-center
                  gap-2
                  ${
                    live?.is_live
                      ? `
                        bg-red-500/20
                        text-red-400
                        animate-pulse
                      `
                      : `
                        bg-zinc-700
                        text-zinc-400
                      `
                  }
                `}>

                  <Radio size={16} />

                  {
                    live?.is_live
                      ? "LIVE NOW"
                      : "OFFLINE"
                  }

                </div>

              </div>

              <h2 className="
                text-3xl
                font-black
                mt-4
              ">
                {
                  live?.is_live
                    ? "Streaming..."
                    : "Tidak Sedang Live"
                }
              </h2>

            </div>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-4
            ">

              <StatCard
                icon={
                  <Users />
                }
                title="Viewer"
                value={
                  formatNumber(
                    live?.viewer_count
                  )
                }
              />

              <StatCard
                icon={
                  <Heart />
                }
                title="Live Like"
                value={
                  formatNumber(
                    live?.total_live_like
                  )
                }
              />

              <StatCard
                icon={
                  <Trophy />
                }
                title="Live ID"
                value={
                  live?.current_live_id
                    || "-"
                }
              />

            </div>

          </div>

        </div>

        {/* LEADERBOARD */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-5
        ">

          {/* TOTAL LIKE */}
          <LeaderboardCard
            title="Top Like Total"
            icon={<Trophy />}
            data={
              data?.top_total_like
            }
            valueKey="
              total_tiktok_like
            "
          />

          {/* CURRENT LIVE */}
          <LeaderboardCard
            title="Top Current Live"
            icon={<Heart />}
            data={
              data?.top_current_live
            }
            valueKey="
              total_like
            "
          />

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
  value
}) {

  return (

    <div className="
      bg-zinc-800
      border
      border-zinc-700
      rounded-3xl
      p-4
      min-w-[140px]
    ">

      <div className="
        flex
        justify-between
      ">

        <div>

          <p className="
            text-sm
            text-zinc-400
          ">
            {title}
          </p>

          <h3 className="
            text-2xl
            font-black
            mt-2
          ">
            {value}
          </h3>

        </div>

        {icon}

      </div>

    </div>
  );
}

// ======================
// LEADERBOARD CARD
// ======================
function LeaderboardCard({
  title,
  icon,
  data,
  valueKey
}) {

  const formatNumber =
    (num = 0) => {

      return new Intl.NumberFormat(
        "id-ID"
      ).format(num);
    };

  return (

    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-[2rem]
      p-6
    ">

      <div className="
        flex
        items-center
        gap-3
        mb-5
      ">

        {icon}

        <h2 className="
          text-2xl
          font-black
        ">
          {title}
        </h2>

      </div>

      <div className="
        space-y-3
      ">

        {
          data?.length > 0
            ? data.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                      bg-zinc-800
                      border
                      border-zinc-700
                      rounded-3xl
                      p-4
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div className="
                      flex
                      items-center
                      gap-4
                    ">

                      <div className="
                        w-10
                        h-10
                        rounded-full
                        bg-zinc-700
                        flex
                        items-center
                        justify-center
                        font-black
                      ">

                        {
                          index === 0
                          ? (
                            <Crown className="
                              text-yellow-400
                            " />
                          )
                          : (
                            index + 1
                          )
                        }

                      </div>

                      <div>

                        <h3 className="
                          font-bold
                        ">
                          {item.name}
                        </h3>

                        <p className="
                          text-sm
                          text-zinc-400
                        ">
                          @
                          {
                            item
                            .tiktok_username
                          }
                        </p>

                      </div>

                    </div>

                    <div className="
                      text-right
                    ">

                      <h3 className="
                        text-xl
                        font-black
                        text-pink-400
                      ">
                        {
                          formatNumber(
                            item[
                              valueKey
                                .trim()
                            ]
                          )
                        }
                      </h3>

                      <p className="
                        text-xs
                        text-zinc-500
                      ">
                        likes
                      </p>

                    </div>

                  </div>
                )
              )
            : (
              <div className="
                text-zinc-500
                text-center
                py-10
              ">
                Belum ada data
              </div>
            )
        }

      </div>

    </div>
  );
}