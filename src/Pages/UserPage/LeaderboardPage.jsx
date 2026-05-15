import FloatingWhatsappButton
    from "../../Components/General/FloatingWhatsappButton";

import Navbar
    from "../../Components/Navbar";

import Footer
    from "../../Components/Footer";

import {
    Trophy,
    Heart,
    Crown,
    Medal,
    Sparkles,
    ChevronRight,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

export default function
LeaderboardPage() {

    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        leaderboard,
        setLeaderboard
    ] = useState([]);

    useEffect(() => {

        fetchLeaderboard();

    }, []);

    async function
    fetchLeaderboard() {

        try {

            const res =
                await fetch(
                    "https://rutee.id/api-sp/leaderboard/top-liker.php"
                );

            const data =
                await res.json();

            if (
                data.success
            ) {

                setLeaderboard(
                    data.leaderboard || []
                );
            }

        } catch (
            err
        ) {

            console.error(err);

        } finally {

            setLoading(false);
        }
    }

    function
    getRankIcon(rank) {

        if (rank === 1) {

            return (
                <Crown
                    size={20}
                    className="
                        text-yellow-400
                    "
                />
            );
        }

        if (rank === 2) {

            return (
                <Medal
                    size={20}
                    className="
                        text-zinc-300
                    "
                />
            );
        }

        if (rank === 3) {

            return (
                <Medal
                    size={20}
                    className="
                        text-orange-400
                    "
                />
            );
        }

        return (
            <span className="
                text-zinc-500
                font-bold
                text-sm
            ">
                #{rank}
            </span>
        );
    }

    return (

        <div className="
            min-h-screen
            bg-zinc-950
            text-white
            flex
            flex-col
        ">

            <Navbar />

            <main className="
                flex-1
                max-w-7xl
                w-full
                mx-auto
                px-4
                md:px-6
                py-6
                md:py-10
            ">

                {/* HERO */}
                <section className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-purple-500/20
                    bg-gradient-to-br
                    from-purple-700/20
                    via-zinc-900
                    to-zinc-950
                    p-6
                    md:p-10
                ">

                    <div className="
                        absolute
                        top-0
                        right-0
                        w-[300px]
                        h-[300px]
                        bg-purple-600/20
                        blur-[120px]
                    " />

                    <div className="
                        relative
                        z-10
                        max-w-3xl
                    ">

                        <div className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-purple-500/20
                            bg-purple-500/10
                            px-4
                            py-2
                            text-sm
                            text-purple-300
                            mb-5
                        ">
                            🏆 SHIGEPEDIA Leaderboard
                        </div>

                        <h1 className="
                            text-4xl
                            md:text-6xl
                            font-black
                            leading-tight
                        ">
                            Top{" "}

                            <span className="
                                text-purple-400
                            ">
                                Supporter
                            </span>

                            🔥
                        </h1>

                        <p className="
                            mt-5
                            text-zinc-300
                            text-base
                            md:text-lg
                            leading-relaxed
                            max-w-2xl
                        ">
                            Leaderboard
                            supporter TikTok
                            live paling aktif
                            di komunitas
                            SHIGE Crew.
                            Kumpulkan like,
                            naik ranking,
                            dan tunjukkan
                            support terbaikmu.
                        </p>

                    </div>

                </section>

                {/* TOP 3 */}
                {!loading &&
                    leaderboard.length > 0 && (

                    <section className="
                        mt-10
                    ">

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-3
                            gap-5
                        ">

                            {leaderboard
                                .slice(0, 3)
                                .map(
                                    (
                                        item
                                    ) => (

                                        <div
                                            key={
                                                item.id
                                            }
                                            className="
                                                relative
                                                overflow-hidden
                                                rounded-[30px]
                                                border
                                                border-purple-500/20
                                                bg-zinc-900
                                                p-6
                                            "
                                        >

                                            <div className="
                                                absolute
                                                top-0
                                                right-0
                                                w-32
                                                h-32
                                                bg-purple-500/10
                                                blur-3xl
                                            " />

                                            <div className="
                                                relative
                                                z-10
                                            ">

                                                <div className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                ">

                                                    <div className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                    ">

                                                        {
                                                            getRankIcon(
                                                                item.rank
                                                            )
                                                        }

                                                        <span className="
                                                            text-sm
                                                            text-zinc-400
                                                        ">
                                                            Rank
                                                            {" "}
                                                            {
                                                                item.rank
                                                            }
                                                        </span>

                                                    </div>

                                                    <Sparkles
                                                        size={18}
                                                        className="
                                                            text-purple-400
                                                        "
                                                    />

                                                </div>

                                                <div className="
                                                    mt-6
                                                    flex
                                                    items-center
                                                    gap-4
                                                ">

                                                    <img
                                                        src={
                                                            item.profile_picture ||
                                                            "https://ui-avatars.com/api/?name=" +
                                                            item.fullname
                                                        }
                                                        alt=""
                                                        className="
                                                            w-16
                                                            h-16
                                                            rounded-2xl
                                                            object-cover
                                                            border
                                                            border-zinc-700
                                                        "
                                                    />

                                                    <div>

                                                        <h3 className="
                                                            font-bold
                                                            text-lg
                                                        ">
                                                            {
                                                                item.fullname
                                                            }
                                                        </h3>

                                                        <p className="
                                                            text-sm
                                                            text-zinc-400
                                                        ">
                                                            @
                                                            {
                                                                item.tiktok_username
                                                            }
                                                        </p>

                                                    </div>

                                                </div>

                                                <div className="
                                                    mt-6
                                                    grid
                                                    grid-cols-2
                                                    gap-3
                                                ">

                                                    <div className="
                                                        rounded-2xl
                                                        bg-zinc-800/60
                                                        p-4
                                                    ">

                                                        <div className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            text-pink-400
                                                        ">
                                                            <Heart
                                                                size={16}
                                                            />

                                                            <span className="
                                                                text-xs
                                                            ">
                                                                Total Like
                                                            </span>

                                                        </div>

                                                        <h4 className="
                                                            mt-2
                                                            text-xl
                                                            font-black
                                                        ">
                                                            {
                                                                Number(
                                                                    item.total_tiktok_like
                                                                ).toLocaleString()
                                                            }
                                                        </h4>

                                                    </div>

                                                    <div className="
                                                        rounded-2xl
                                                        bg-zinc-800/60
                                                        p-4
                                                    ">

                                                        <div className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            text-yellow-400
                                                        ">
                                                            <Trophy
                                                                size={16}
                                                            />

                                                            <span className="
                                                                text-xs
                                                            ">
                                                                Points
                                                            </span>

                                                        </div>

                                                        <h4 className="
                                                            mt-2
                                                            text-xl
                                                            font-black
                                                        ">
                                                            {
                                                                Number(
                                                                    item.loyalty_points
                                                                ).toLocaleString()
                                                            }
                                                        </h4>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )
                                )}

                        </div>

                    </section>
                )}

                {/* LIST */}
                <section className="
                    mt-10
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-5
                    ">

                        <h2 className="
                            text-2xl
                            font-bold
                        ">
                            Global Ranking
                        </h2>

                        <span className="
                            text-sm
                            text-zinc-500
                        ">
                            Top 100 Supporter
                        </span>

                    </div>

                    <div className="
                        space-y-4
                    ">

                        {loading && (

                            <div className="
                                rounded-3xl
                                border
                                border-zinc-800
                                bg-zinc-900
                                p-10
                                text-center
                                text-zinc-400
                            ">
                                Loading leaderboard...
                            </div>
                        )}

                        {!loading &&
                            leaderboard.map(
                                (
                                    item
                                ) => (

                                    <div
                                        key={
                                            item.id
                                        }
                                        className="
                                            group
                                            rounded-[28px]
                                            border
                                            border-zinc-800
                                            bg-zinc-900
                                            p-5
                                            transition-all
                                            hover:border-purple-500/30
                                        "
                                    >

                                        <div className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                        ">

                                            <div className="
                                                flex
                                                items-center
                                                gap-4
                                            ">

                                                <div className="
                                                    w-12
                                                    flex
                                                    justify-center
                                                ">
                                                    {
                                                        getRankIcon(
                                                            item.rank
                                                        )
                                                    }
                                                </div>

                                                <img
                                                    src={
                                                        item.profile_picture ||
                                                        "https://ui-avatars.com/api/?name=" +
                                                        item.fullname
                                                    }
                                                    alt=""
                                                    className="
                                                        w-14
                                                        h-14
                                                        rounded-2xl
                                                        object-cover
                                                        border
                                                        border-zinc-700
                                                    "
                                                />

                                                <div>

                                                    <h3 className="
                                                        font-bold
                                                    ">
                                                        {
                                                            item.fullname
                                                        }
                                                    </h3>

                                                    <p className="
                                                        text-sm
                                                        text-zinc-400
                                                    ">
                                                        @
                                                        {
                                                            item.tiktok_username
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="
                                                flex
                                                items-center
                                                gap-6
                                            ">

                                                <div className="
                                                    text-right
                                                ">

                                                    <p className="
                                                        text-xs
                                                        text-zinc-500
                                                    ">
                                                        Total Like
                                                    </p>

                                                    <h4 className="
                                                        font-black
                                                        text-pink-400
                                                    ">
                                                        {
                                                            Number(
                                                                item.total_tiktok_like
                                                            ).toLocaleString()
                                                        }
                                                    </h4>

                                                </div>

                                                <div className="
                                                    text-right
                                                ">

                                                    <p className="
                                                        text-xs
                                                        text-zinc-500
                                                    ">
                                                        Points
                                                    </p>

                                                    <h4 className="
                                                        font-black
                                                        text-yellow-400
                                                    ">
                                                        {
                                                            Number(
                                                                item.loyalty_points
                                                            ).toLocaleString()
                                                        }
                                                    </h4>

                                                </div>

                                                <ChevronRight
                                                    className="
                                                        text-zinc-600
                                                        group-hover:text-purple-400
                                                    "
                                                />

                                            </div>

                                        </div>

                                    </div>
                                )
                            )}

                    </div>

                </section>

            </main>

            <Footer />

            <FloatingWhatsappButton />

        </div>
    );
}