import { useEffect, useState }
  from "react";

import {
  Mail,
  X,
} from "lucide-react";

import {
  sendVerification,
  resendVerification,
  verifyEmailOtp,
} from "../../Utils/Api/Auth";

export default function VerifyEmailModal() {

  const [open, setOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [
    verifyLoading,
    setVerifyLoading,
  ] = useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [
    cooldown,
    setCooldown,
  ] = useState(0);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const email =
    user?.email || "";

  // =====================
  // Countdown resend
  // =====================
  useEffect(() => {

    if (
      cooldown <= 0
    ) return;

    const timer =
      setInterval(() => {

        setCooldown(
          (prev) =>
            prev - 1
        );

      }, 1000);

    return () =>
      clearInterval(
        timer
      );

  }, [cooldown]);

  // =====================
  // Kirim OTP pertama
  // =====================
  const handleSendOtp =
    async () => {

      setError("");
      setSuccess("");

      if (!email) {

        setError(
          "Akun belum memiliki email"
        );

        return;
      }

      try {

        setLoading(
          true
        );

        const response =
          await sendVerification({
            email,
          });

        if (
          !response.success
        ) {

          throw new Error(
            response.message
          );
        }

        setSuccess(
          response.message
        );

        setCooldown(
          60
        );

      } catch (
        err
      ) {

        setError(
          err.response
            ?.data
            ?.message ||

          err.message ||

          "Gagal mengirim OTP"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  // =====================
  // Resend OTP
  // =====================
  const handleResend =
    async () => {

      try {

        setLoading(
          true
        );

        const response =
          await resendVerification({
            email,
          });

        if (
          !response.success
        ) {

          throw new Error(
            response.message
          );
        }

        setSuccess(
          response.message
        );

        setCooldown(
          60
        );

      } catch (
        err
      ) {

        setError(
          err.response
            ?.data
            ?.message ||

          err.message ||

          "Gagal resend OTP"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  // =====================
  // Verify OTP
  // =====================
  const handleVerify =
    async () => {

      setError("");
      setSuccess("");

      if (
        otp.length !== 6
      ) {

        setError(
          "OTP harus 6 digit"
        );

        return;
      }

      try {

        setVerifyLoading(
          true
        );

        const response =
          await verifyEmailOtp({
            email,
            otp,
          });

        if (
          !response.success
        ) {

          throw new Error(
            response.message
          );
        }

        setSuccess(
          "Email berhasil diverifikasi 🎉"
        );

        // update local user
        const updatedUser =
          {
            ...user,
            email_verified:
              1,
          };

        localStorage.setItem(
          "user",
          JSON.stringify(
            updatedUser
          )
        );

        setTimeout(() => {

          setOpen(
            false
          );

          window.location.reload();

        }, 1500);

      } catch (
        err
      ) {

        setError(
          err.response
            ?.data
            ?.message ||

          err.message ||

          "OTP salah"
        );

      } finally {

        setVerifyLoading(
          false
        );
      }
    };

  // =====================
  // Open modal
  // =====================
  const handleOpen =
    () => {

      setOpen(
        true
      );

      setOtp("");

      handleSendOtp();
    };

  return (
    <>
      {/* Trigger */}
    {!user?.email_verified && (
  <span
    onClick={
      handleOpen
    }
    className="text-purple-400 cursor-pointer hover:underline"
  >
    Verifikasi Email
  </span>
)}

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-5">

          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() =>
                setOpen(
                  false
                )
              }
              className="absolute right-5 top-5 text-zinc-400 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center mb-6">

              <div className="bg-purple-600 p-4 rounded-2xl mb-4">

                <Mail
                  size={28}
                />

              </div>

              <h2 className="text-2xl font-bold text-white">
                Verifikasi Email
              </h2>

              <p className="text-zinc-400 text-sm text-center mt-2">
                Masukkan kode OTP
                yang dikirim ke
              </p>

              <p className="text-purple-400 font-medium mt-1 break-all">
                {email}
              </p>

            </div>

            {/* Alert */}
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-3 rounded-xl mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-500/10 border border-green-500 text-green-400 text-sm p-3 rounded-xl mb-4">
                {success}
              </div>
            )}

            {/* OTP Input */}
            <input
              type="text"
              value={otp}
              maxLength={6}
              onChange={(
                e
              ) =>
                setOtp(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              placeholder="123456"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-4 text-center text-2xl tracking-[10px] text-white outline-none focus:border-purple-500 mb-4"
            />

            {/* Verify */}
            <button
              onClick={
                handleVerify
              }
              disabled={
                verifyLoading
              }
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-3 font-semibold text-white disabled:opacity-50"
            >
              {verifyLoading
                ? "Memverifikasi..."
                : "Verifikasi OTP"}
            </button>

            {/* Resend */}
            <button
              onClick={
                handleResend
              }
              disabled={
                cooldown >
                  0 ||
                loading
              }
              className="w-full mt-3 text-sm text-zinc-400 hover:text-purple-400 transition disabled:opacity-50"
            >
              {cooldown >
              0
                ? `Kirim ulang OTP (${cooldown}s)`
                : "Tidak menerima email? Kirim ulang"}
            </button>

          </div>
        </div>
      )}
    </>
  );
}