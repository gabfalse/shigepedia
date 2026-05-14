import {
  HeartHandshake,
  Gift,
  Trophy,
  Send,
  Crown,
  Sword,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getProfile,
} from "../../Utils/Api/Profile";

export default function SupportPage() {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [name, setName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [
    selectedPackage,
    setSelectedPackage
  ] = useState("");

  useEffect(() => {

    const fetchProfile =
      async () => {

        try {

          const savedUser =
            JSON.parse(
              localStorage.getItem(
                "user"
              )
            );

          if (
            !savedUser?.id
          ) return;

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

        } catch (err) {

          console.error(
            err
          );

        } finally {

          setLoading(
            false
          );
        }
      };

    fetchProfile();

  }, []);

  const handleDonate =
    () => {

      if (!amount) {

        return alert(
          "Pilih paket atau isi nominal support"
        );
      }

      let autoMessage =
        message;

      if (
        selectedPackage
        === "1match"
      ) {

        autoMessage =
          `[MABAR VIP 1 MATCH] ${message}`;
      }

      if (
        selectedPackage
        === "4match"
      ) {

        autoMessage =
          `[MABAR VIP 4 MATCH] ${message}`;
      }

      const finalMessage =
        `ID-${user?.id} ${autoMessage}`;

      const donateUrl =
        `https://sociabuzz.com/shige/support`
        +
        `?message=${encodeURIComponent(
          finalMessage
        )}`
        +
        `&amount=${amount}`
        +
        `&name=${encodeURIComponent(
          name || "Anonymous"
        )}`;

      window.open(
        donateUrl,
        "_blank"
      );
    };

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
        Memuat...
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
    ">

      <div className="
        w-full
        max-w-2xl
        mt-20
      ">

        {/* HEADER */}
        <div className="
          text-center
          mb-8
        ">

          <div className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-pink-500/10
            border
            border-pink-500/20
            flex
            items-center
            justify-center
            mb-5
          ">

            <HeartHandshake
              size={42}
              className="
                text-pink-400
              "
            />

          </div>

          <h1 className="
            text-4xl
            font-black
          ">
            Support
            <span className="
              text-purple-400
            ">
              {" "}
              SHIGEPEDIA
            </span>
          </h1>

          <p className="
            text-zinc-400
            mt-3
          ">
            Support creator
            dan dapatkan
            loyalty point ✨
          </p>

        </div>

        {/* MABAR VIP */}
        <div className="
          bg-gradient-to-br
          from-yellow-500/10
          to-purple-500/10
          border
          border-yellow-500/20
          rounded-[2rem]
          p-6
          mb-6
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-4
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
            ">

              <Crown
                size={28}
                className="
                  text-yellow-400
                "
              />

            </div>

            <div>

              <h2 className="
                text-2xl
                font-black
              ">
                Mabar VIP 🎮
              </h2>

              <p className="
                text-zinc-400
                text-sm
              ">
                Main bareng SHIGEPEDIA
              </p>

            </div>

          </div>

          <div className="
            grid
            md:grid-cols-2
            gap-4
          ">

            {/* 1 MATCH */}
            <button
              onClick={() => {

                setAmount(
                  "3000"
                );

                setSelectedPackage(
                  "1match"
                );
              }}
              className={`
                bg-zinc-900
                border
                rounded-3xl
                p-5
                text-left
                transition
                hover:scale-[1.02]

                ${
                  selectedPackage
                  === "1match"
                    ? `
                      border-pink-500
                      ring-2
                      ring-pink-500/30
                    `
                    : `
                      border-zinc-700
                    `
                }
              `}
            >

              <div className="
                flex
                items-center
                gap-2
                mb-3
              ">

                <Sword
                  size={20}
                  className="
                    text-pink-400
                  "
                />

                <span className="
                  font-bold
                ">
                  1 Match
                </span>

              </div>

              <h3 className="
                text-3xl
                font-black
                text-pink-400
              ">
                Rp3.000
              </h3>

              <p className="
                text-zinc-400
                text-sm
                mt-2
              ">
                Mabar VIP 1 match
              </p>

            </button>

            {/* 4 MATCH */}
            <button
              onClick={() => {

                setAmount(
                  "10000"
                );

                setSelectedPackage(
                  "4match"
                );
              }}
              className={`
                relative
                rounded-3xl
                p-5
                text-left
                transition
                hover:scale-[1.02]
                bg-gradient-to-br
                from-yellow-500/10
                to-orange-500/10

                ${
                  selectedPackage
                  === "4match"
                    ? `
                      border
                      border-yellow-400
                      ring-2
                      ring-yellow-400/30
                    `
                    : `
                      border
                      border-yellow-500/30
                    `
                }
              `}
            >

              <div className="
                absolute
                top-4
                right-4
                px-3
                py-1
                rounded-full
                bg-yellow-500
                text-black
                text-xs
                font-bold
              ">
                BEST DEAL
              </div>

              <div className="
                flex
                items-center
                gap-2
                mb-3
              ">

                <Crown
                  size={20}
                  className="
                    text-yellow-400
                  "
                />

                <span className="
                  font-bold
                ">
                  4 Match
                </span>

              </div>

              <h3 className="
                text-3xl
                font-black
                text-yellow-400
              ">
                Rp10.000
              </h3>

              <p className="
                text-zinc-400
                text-sm
                mt-2
              ">
                Hemat untuk 4x mabar VIP
              </p>

            </button>

          </div>

        </div>

        {/* FORM */}
        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-[2rem]
          p-6
          shadow-xl
        ">

          <div className="
            space-y-4
          ">

            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-2xl
                p-4
                outline-none
              "
            />

            <input
              type="number"
              placeholder="Nominal Support"
              value={amount}
              onChange={(e) => {

                setAmount(
                  e.target.value
                );

                setSelectedPackage(
                  ""
                );
              }}
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-2xl
                p-4
                outline-none
              "
            />

            <textarea
              rows={4}
              placeholder="Pesan support..."
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-2xl
                p-4
                outline-none
                resize-none
              "
            />

          </div>

          {/* REWARD */}
          <div className="
            grid
            md:grid-cols-2
            gap-4
            mt-6
          ">

            <div className="
              bg-zinc-800
              border
              border-zinc-700
              rounded-3xl
              p-5
              text-center
            ">

              <Gift
                className="
                  mx-auto
                  text-pink-400
                  mb-3
                "
                size={30}
              />

              <p className="
                text-zinc-400
                text-sm
              ">
                Point Reward
              </p>

              <h3 className="
                text-2xl
                font-black
                text-pink-400
              ">
                Rp1.000 = 100 Point
              </h3>

            </div>

            <div className="
              bg-zinc-800
              border
              border-zinc-700
              rounded-3xl
              p-5
              text-center
            ">

              <Trophy
                className="
                  mx-auto
                  text-yellow-400
                  mb-3
                "
                size={30}
              />

              <p className="
                text-zinc-400
                text-sm
              ">
                Total Support
              </p>

              <h3 className="
                text-2xl
                font-black
                text-yellow-400
              ">
                Rp
                {(user?.total_sociabuzz_donate || 0)
                  .toLocaleString()}
              </h3>

            </div>

          </div>

          <button
            onClick={
              handleDonate
            }
            className="
              mt-6
              w-full
              flex
              items-center
              justify-center
              gap-2
              py-4
              rounded-3xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              hover:scale-[1.02]
              transition
              font-bold
              text-lg
            "
          >

            <Send size={20} />

            Kirim

          </button>

        </div>

      </div>

    </div>
  );
}