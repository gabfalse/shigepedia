import { useEffect, useState }
    from "react";

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

    const [loading, setLoading] =
        useState(false);

    const [username, setUsername] =
        useState("");

    const [verifyCode,
        setVerifyCode] =
        useState("");

    const [step, setStep] =
        useState("username");

    const [message,
        setMessage] =
        useState("");

    // ==========================
    // Reset Modal State
    // ==========================
    useEffect(() => {

        if (!isOpen) return;

        setUsername(
            user?.
                tiktok_username || ""
        );

        setVerifyCode("");

        setMessage("");

        setStep(
            user?.
                tiktok_verified
                ? "verified"
                : "username"
        );

    }, [
        isOpen,
        user
    ]);

    if (!isOpen)
        return null;

    // ==========================
    // Generate Code
    // ==========================
    const handleGenerateCode =
        async () => {

            if (
                !username.trim()
            ) {

                setMessage(
                    "TikTok username wajib diisi"
                );

                return;
            }

            try {

                setLoading(true);

                setMessage("");

                const data =
                    await generateTikTokCode({

                        user_id:
                            user.id,

                        tiktok_username:
                            username
                    });

                if (
                    !data.success
                ) {

                    setMessage(
                        data.message
                    );

                    return;
                }

                setVerifyCode(
                    data.verify_code
                );

                setMessage(
                    data.instruction ||
                    "Code berhasil dibuat"
                );

                setStep(
                    "verify"
                );

            } catch (
                error
            ) {

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
    // Verify TikTok
    // ==========================
    const handleVerify =
        async () => {

            try {

                setLoading(true);

                setMessage("");

                const data =
                    await verifyTikTok({

                        user_id:
                            user.id
                    });

                if (
                    !data.success
                ) {

                    setMessage(
                        data.message
                    );

                    return;
                }

                onVerified?.();

                onClose();

            } catch (
                error
            ) {

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
        ">

            <div className="
                bg-zinc-900
                border border-zinc-700
                w-[420px]
                rounded-2xl
                p-5
                shadow-xl
                text-white
            ">

                {/* HEADER */}
                <div className="
                    flex
                    justify-between
                    items-center
                    mb-4
                ">

                    <h2 className="
                        text-lg
                        font-bold
                    ">
                        TikTok Verification
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            text-zinc-400
                            hover:text-white
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* VERIFIED */}
                {user?.
                    tiktok_verified ? (

                    <div className="
                        text-center
                        py-6
                    ">

                        <div className="
                            text-green-400
                            text-4xl
                            mb-2
                        ">
                            ✔
                        </div>

                        <h3 className="
                            font-bold
                            text-green-400
                        ">
                            TikTok Verified
                        </h3>

                        <p className="
                            text-sm
                            text-zinc-400
                            mt-1
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
                                mt-4
                                px-4 py-2
                                rounded-xl
                                border
                                border-green-500
                                text-green-400
                                hover:bg-green-500/10
                            "
                        >
                            Done
                        </button>

                    </div>

                ) : (

                    <div>

                        {/* STEP 1 */}
                        {step ===
                            "username" && (

                            <>

                                <p className="
                                    text-sm
                                    text-zinc-400
                                    mb-4
                                ">
                                    Enter your
                                    TikTok username
                                </p>

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
                                            : "Generate Code"
                                    }
                                </button>

                            </>
                        )}

                        {/* STEP 2 */}
                        {step ===
                            "verify" && (

                            <>

                                <div className="
                                    bg-zinc-800
                                    rounded-xl
                                    p-4
                                    text-center
                                    mb-4
                                ">

                                    <p className="
                                        text-zinc-400
                                        text-sm
                                        mb-2
                                    ">
                                        Add this code
                                        to your TikTok bio
                                    </p>

                                    <div className="
                                        text-2xl
                                        font-bold
                                    ">
                                        {
                                            verifyCode
                                        }
                                    </div>

                                </div>

                                <div className="
                                    text-sm
                                    text-zinc-400
                                    mb-4
                                    space-y-1
                                ">

                                    <p>
                                        1.
                                        Open TikTok
                                    </p>

                                    <p>
                                        2.
                                        Edit Profile
                                    </p>

                                    <p>
                                        3.
                                        Paste code
                                        in bio
                                    </p>

                                    <p>
                                        4.
                                        Click Verify
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

                            </>
                        )}

                        {/* MESSAGE */}
                        {message && (

                            <div className="
                                mt-4
                                text-sm
                                text-center
                                text-red-400
                            ">
                                {message}
                            </div>
                        )}

                    </div>
                )}

            </div>

        </div>
    );
}