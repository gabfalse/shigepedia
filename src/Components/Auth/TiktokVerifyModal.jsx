import {
    useEffect,
    useState
} from "react";

import {
    generateTikTokCode,
    verifyTikTok
} from "../../Utils/Api/Auth";

export default function
TikTokVerifyModal({

    isOpen,
    onClose,
    user,
    onVerified

}) {

    const [loading,
        setLoading] =
        useState(false);

    const [username,
        setUsername] =
        useState("");

    const [verifyCode,
        setVerifyCode] =
        useState("");

    const [step,
        setStep] =
        useState("username");

    const [message,
        setMessage] =
        useState("");

    const [messageType,
        setMessageType] =
        useState("error");

    // ==========================
    // RESET
    // ==========================
    useEffect(() => {

        if (!isOpen)
            return;

        setUsername(

            user?.
                tiktok_username ||

            ""
        );

        setVerifyCode(

            user?.
                tiktok_verify_code ||

            ""
        );

        setMessage("");

        setMessageType(
            "error"
        );

        // ==========================
        // VERIFIED
        // ==========================
        if (
            Number(
                user?.
                    tiktok_verified
            ) === 1
        ) {

            setStep(
                "verified"
            );

            return;
        }

        // ==========================
        // HAS CODE
        // ==========================
        if (
            user?.
                tiktok_verify_code
        ) {

            setStep(
                "verify"
            );

        } else {

            setStep(
                "username"
            );
        }

    }, [
        isOpen,
        user
    ]);

    if (!isOpen)
        return null;

    // ==========================
    // GENERATE CODE
    // ==========================
    const handleGenerateCode =
        async () => {

            if (
                !username.trim()
            ) {

                setMessageType(
                    "error"
                );

                setMessage(
                    "TikTok username wajib diisi"
                );

                return;
            }

            try {

                setLoading(
                    true
                );

                setMessage("");

                const data =
                    await generateTikTokCode({

                        user_id:
                            user.id,

                        tiktok_username:
                            username
                    });

                if (
                    !data?.success
                ) {

                    setMessageType(
                        "error"
                    );

                    setMessage(
                        data?.message ||
                        "Generate code gagal"
                    );

                    return;
                }

                setVerifyCode(
                    data?.
                        verify_code ||
                    ""
                );

                setMessageType(
                    "success"
                );

                setMessage(

                    data?.
                        instruction ||

                    "Code berhasil dibuat"
                );

                setStep(
                    "verify"
                );

            } catch (
                error
            ) {

                setMessageType(
                    "error"
                );

                setMessage(

                    error?.
                        response?.
                        data?.
                        message ||

                    "Failed to generate code"
                );

            } finally {

                setLoading(
                    false
                );
            }
        };

    // ==========================
    // VERIFY
    // ==========================
    const handleVerify =
        async () => {

            try {

                setLoading(
                    true
                );

                setMessage("");

                const data =
                    await verifyTikTok({

                        user_id:
                            user.id
                    });

                if (
                    !data?.success
                ) {

                    setMessageType(
                        "error"
                    );

                    setMessage(
                        data?.message ||
                        "Verification gagal"
                    );

                    return;
                }

                setMessageType(
                    "success"
                );

                setMessage(
                    data?.message ||
                    "TikTok berhasil diverifikasi"
                );

                onVerified?.();

                setTimeout(() => {

                    onClose();

                }, 1200);

            } catch (
                error
            ) {

                setMessageType(
                    "error"
                );

                setMessage(

                    error?.
                        response?.
                        data?.
                        message ||

                    "Verification failed"
                );

            } finally {

                setLoading(
                    false
                );
            }
        };

    return (

        <div className="
            fixed inset-0
            bg-black/70
            flex items-center
            justify-center
            z-50
            px-4
        ">

            <div className="
                bg-zinc-900
                border border-zinc-700
                w-full
                max-w-md
                rounded-2xl
                p-5
                shadow-2xl
                text-white
            ">

                {/* HEADER */}
                <div className="
                    flex
                    justify-between
                    items-center
                    mb-5
                ">

                    <div>

                        <h2 className="
                            text-xl
                            font-bold
                        ">
                            TikTok Verification
                        </h2>

                        <p className="
                            text-xs
                            text-zinc-500
                            mt-1
                        ">
                            Verify your TikTok account
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            text-zinc-500
                            hover:text-white
                            text-lg
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* VERIFIED */}
                {step ===
                    "verified" ? (

                    <div className="
                        text-center
                        py-6
                    ">

                        <div className="
                            text-5xl
                            mb-3
                        ">
                            ✅
                        </div>

                        <h3 className="
                            text-green-400
                            text-lg
                            font-bold
                        ">
                            TikTok Verified
                        </h3>

                        <p className="
                            text-zinc-400
                            mt-2
                            text-sm
                        ">
                            @
                            {
                                user?.
                                    tiktok_username
                            }
                        </p>

                        <button
                            onClick={() => {

                                onClose();

                                onVerified?.();
                            }}
                            className="
                                mt-5
                                w-full
                                py-3
                                rounded-xl
                                bg-green-500
                                text-white
                                font-semibold
                                hover:opacity-90
                            "
                        >
                            Done
                        </button>

                    </div>

                ) : (

                    <div>

                        {/* STEP USERNAME */}
                        {step ===
                            "username" && (

                            <>

                                <label className="
                                    text-sm
                                    text-zinc-400
                                    block
                                    mb-2
                                ">
                                    TikTok Username
                                </label>

                                <input
                                    type="text"
                                    value={
                                        username
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setUsername(

                                            e
                                                .target
                                                .value
                                        )
                                    }
                                    placeholder="@username"
                                    className="
                                        w-full
                                        px-4 py-3
                                        rounded-xl
                                        bg-zinc-800
                                        border
                                        border-zinc-700
                                        outline-none
                                        focus:border-pink-500
                                    "
                                />

                                <button
                                    onClick={
                                        handleGenerateCode
                                    }
                                    disabled={
                                        loading
                                    }
                                    className="
                                        mt-4
                                        w-full
                                        py-3
                                        rounded-xl
                                        bg-white
                                        text-black
                                        font-semibold
                                        hover:opacity-90
                                        disabled:opacity-50
                                    "
                                >
                                    {
                                        loading
                                            ? "Generating..."
                                            : "Generate Verify Code"
                                    }
                                </button>

                            </>
                        )}

                        {/* STEP VERIFY */}
                        {step ===
                            "verify" && (

                            <>

                                <div className="
                                    bg-zinc-800
                                    border
                                    border-zinc-700
                                    rounded-2xl
                                    p-5
                                    text-center
                                    mb-4
                                ">

                                    <p className="
                                        text-sm
                                        text-zinc-400
                                        mb-2
                                    ">
                                        Put this code in your TikTok bio
                                    </p>

                                    <div className="
                                        text-3xl
                                        font-black
                                        tracking-wider
                                        text-pink-400
                                    ">
                                        {
                                            verifyCode
                                        }
                                    </div>

                                </div>

                                <div className="
                                    bg-zinc-800/50
                                    rounded-xl
                                    p-4
                                    text-sm
                                    text-zinc-300
                                    space-y-2
                                    mb-4
                                ">

                                    <p>
                                        1. Open TikTok
                                    </p>

                                    <p>
                                        2. Edit profile
                                    </p>

                                    <p>
                                        3. Paste code into bio
                                    </p>

                                    <p>
                                        4. Save profile
                                    </p>

                                    <p>
                                        5. Click verify button
                                    </p>

                                </div>

                                <button
                                    onClick={
                                        handleVerify
                                    }
                                    disabled={
                                        loading
                                    }
                                    className="
                                        w-full
                                        py-3
                                        rounded-xl
                                        bg-pink-500
                                        text-white
                                        font-semibold
                                        hover:opacity-90
                                        disabled:opacity-50
                                    "
                                >
                                    {
                                        loading
                                            ? "Checking..."
                                            : "Verify TikTok"
                                    }
                                </button>

                                <button
                                    onClick={() => {

                                        setStep(
                                            "username"
                                        );
                                    }}
                                    className="
                                        mt-3
                                        w-full
                                        py-3
                                        rounded-xl
                                        border
                                        border-zinc-700
                                        text-zinc-300
                                        hover:bg-zinc-800
                                    "
                                >
                                    Change Username
                                </button>

                            </>
                        )}

                        {/* MESSAGE */}
                        {message && (

                            <div className={`
                                mt-4
                                text-sm
                                text-center
                                rounded-xl
                                p-3
                                border

                                ${messageType === "success"
                                    ? `
                                        bg-green-500/10
                                        border-green-500/30
                                        text-green-400
                                    `
                                    : `
                                        bg-red-500/10
                                        border-red-500/30
                                        text-red-400
                                    `
                                }
                            `}>
                                {message}
                            </div>
                        )}

                    </div>
                )}

            </div>

        </div>
    );
}