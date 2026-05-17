import Navbar
    from "../../Components/Navbar";

import Footer
    from "../../Components/Footer";

export default function
ShopPage() {

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
                flex
                items-center
                justify-center
                px-4
            ">

                <div className="
                    w-full
                    max-w-xl
                    rounded-[36px]
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-8
                    text-center
                ">

                    <h1 className="
                        text-3xl
                        font-black
                    ">
                        🎮 Toko Game
                    </h1>

                    <p className="
                        mt-3
                        text-zinc-400
                        leading-relaxed
                    ">
                        Halaman ini
                        berisi kebutuhan
                        game SHIGEPEDIA.
                        Beberapa layanan
                        masih dalam tahap
                        pengembangan.
                    </p>

                    <div className="
                        mt-8
                        flex
                        flex-col
                        gap-4
                    ">

                        {/* TOP UP GAME */}
                        <button
                            disabled
                            className="
                                w-full
                                rounded-2xl
                                bg-zinc-800
                                border
                                border-zinc-700
                                py-4
                                text-zinc-500
                                cursor-not-allowed
                            "
                        >
                            TOP UP GAME
                            (Sedang Dalam
                            Pengembangan)
                        </button>

                        {/* AKUN MOBILE LEGEND */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/drive/folders/1NHPT6c849LCMmXa9Cgx2eRQi2tp_5EVH?usp=drive_link",
                                    "_blank"
                                )
                            }
                            className="
                                w-full
                                rounded-2xl
                                bg-purple-600
                                hover:bg-purple-500
                                transition
                                py-4
                                font-semibold
                            "
                        >
                            AKUN MOBILE LEGEND
                        </button>

                        {/* AKUN TORAM ONLINE */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/drive/folders/19k4BkGs9B_6ELroAQPgaT1gT__iY-Djr?usp=drive_link",
                                    "_blank"
                                )
                            }
                            className="
                                w-full
                                rounded-2xl
                                bg-zinc-800
                                hover:bg-zinc-700
                                transition
                                py-4
                                font-semibold
                            "
                        >
                            AKUN TORAM ONLINE
                        </button>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}