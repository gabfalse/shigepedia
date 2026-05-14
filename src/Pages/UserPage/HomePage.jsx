import FloatingWhatsappButton
    from "../../Components/General/FloatingWhatsappButton";

import Navbar
    from "../../Components/Navbar";

import Footer
    from "../../Components/Footer";

import VerifyEmailModal
    from "../../Components/Auth/VerifyEmailModal";

import {
    Mail,
    Gamepad2,
    Coins,
    Radio,
    Users,
    ChevronRight,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";

export default function
HomePage() {

    const navigate =
        useNavigate();

    const user =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        );

    const menus = [

        {
            title:
                "Mabar VIP",

            desc:
                "Booking mabar bareng SHIGE",

            icon:
                Gamepad2,

            action:
                () =>
                    window.open(
                        "https://sociabuzz.com/shige/tribe",
                        "_blank"
                    ),
        },

        {
            title:
                "Interactive Live",

            desc:
                "Point, title & support",

            icon:
                Radio,

            action:
                () =>
                    navigate(
                        "/profile"
                    ),
        },

        {
            title:
                "Toko Game",

            desc:
                "Top up & kebutuhan game",

            icon:
                Coins,

            action:
                () =>
                    navigate("#"),
        },

        {
            title:
                "Whatsapp Channel",

            desc:
                "Info terbaru SHIGE",

            icon:
                Users,

            action:
                () =>
                    window.open(
                        "https://whatsapp.com/channel/0029VbCMACH1dAwBXkr1md1k",
                        "_blank"
                    ),
        },
    ];

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
                            🔥 SHIGEPEDIA Community Hub
                        </div>

                        <h1 className="
                            text-4xl
                            md:text-6xl
                            font-black
                            leading-tight
                        ">
                            Halo,{" "}

                            <span className="
                                text-purple-400
                            ">
                                {
                                    user?.name ||
                                    "Crew"
                                }
                            </span>

                            👋
                        </h1>

                        <p className="
                            mt-5
                            text-zinc-300
                            text-base
                            md:text-lg
                            leading-relaxed
                            max-w-2xl
                        ">
                            Semua aktivitas
                            SHIGE Crew
                            berada di satu
                            tempat. Booking
                            mabar, support
                            live, leaderboard,
                            dan top up game.
                        </p>

                        {/* EMAIL */}
                        <div className="
                            mt-8
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-900/60
                            p-5
                        ">

                            <div className="
                                flex
                                items-start
                                gap-3
                            ">

                                <div className="
                                    mt-1
                                ">
                                    <Mail
                                        size={20}
                                        className="
                                            text-purple-400
                                        "
                                    />
                                </div>

                                <div>

                                    <h3 className="
                                        font-semibold
                                    ">
                                        Email
                                        Verification
                                    </h3>

                                    <p className="
                                        text-sm
                                        text-zinc-400
                                        mt-1
                                    ">
                                        Informasi
                                        penting
                                        akun dan
                                        event akan
                                        dikirim ke
                                        email kamu.
                                    </p>

                                </div>

                            </div>

                            {!user?.
                                email_verified && (

                                <div className="
                                    mt-4
                                ">
                                    <VerifyEmailModal />
                                </div>
                            )}

                        </div>

                    </div>

                </section>

                {/* MENU */}
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
                            Explore
                            SHIGEPEDIA
                        </h2>

                        <span className="
                            text-sm
                            text-zinc-500
                        ">
                            Crew Features
                        </span>

                    </div>

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-4
                        gap-5
                    ">

                        {menus.map(
                            (
                                item,
                                index
                            ) => {

                                const Icon =
                                    item.icon;

                                return (

                                    <button
                                        key={
                                            index
                                        }
                                        onClick={
                                            item.action
                                        }
                                        className="
                                            group
                                            h-full
                                            rounded-[28px]
                                            border
                                            border-zinc-800
                                            bg-zinc-900
                                            p-6
                                            text-left
                                            transition-all
                                            hover:border-purple-500/40
                                            hover:-translate-y-1
                                        "
                                    >

                                        <div className="
                                            flex
                                            items-center
                                            justify-between
                                        ">

                                            <div className="
                                                rounded-2xl
                                                bg-purple-500/10
                                                p-4
                                            ">

                                                <Icon
                                                    size={28}
                                                    className="
                                                        text-purple-400
                                                    "
                                                />

                                            </div>

                                            <ChevronRight
                                                className="
                                                    text-zinc-600
                                                    transition
                                                    group-hover:text-purple-400
                                                "
                                            />

                                        </div>

                                        <h3 className="
                                            mt-5
                                            text-lg
                                            font-bold
                                        ">
                                            {
                                                item.title
                                            }
                                        </h3>

                                        <p className="
                                            mt-2
                                            text-sm
                                            text-zinc-400
                                        ">
                                            {
                                                item.desc
                                            }
                                        </p>

                                    </button>
                                );
                            }
                        )}

                    </div>

                </section>

                {/* COMING SOON */}
                <section className="
                    mt-10
                ">

                    <div className="
                        rounded-[36px]
                        border
                        border-zinc-800
                        bg-zinc-900
                        p-6
                        md:p-8
                    ">

                        <h3 className="
                            text-2xl
                            font-bold
                            mb-6
                        ">
                            🚀 Coming Soon
                        </h3>

                        <div className="
                            grid
                            md:grid-cols-2
                            gap-4
                        ">

                            {[
                                "🎁 Daily Reward",
                                "⚔ Crew Mission",
                                "🏆 Support Battle",
                                "🎫 VIP Event",
                            ].map(
                                (
                                    item
                                ) => (

                                    <div
                                        key={
                                            item
                                        }
                                        className="
                                            rounded-2xl
                                            bg-zinc-800/50
                                            border
                                            border-zinc-800
                                            p-5
                                            text-zinc-300
                                        "
                                    >
                                        {item}
                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

            <FloatingWhatsappButton />

        </div>
    );
}