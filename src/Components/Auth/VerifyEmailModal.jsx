import { useState }
  from "react";

import {
  Mail,
  X,
} from "lucide-react";

import {
  sendVerification,
} from "../../Utils/Api/Auth";

export default function VerifyEmailModal() {

  const [open, setOpen] =
    useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    success,
    setSuccess,
  ] = useState("");

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const email =
    user?.email || "";

  const handleVerify =
    async () => {

      setError("");
      setSuccess("");

      if (!email) {

        setError(
          "Akun ini belum memiliki email terdaftar"
        );

        return;
      }

      try {

        setLoading(true);

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
          response.message ||
            "Email verifikasi berhasil dikirim"
        );

        // auto close
        setTimeout(() => {

          setOpen(false);

          setSuccess("");

        }, 1500);

      } catch (err) {

        console.error(
          err
        );

        setError(
          err.response?.data
            ?.message ||

          err.response?.data
            ?.error ||

          err.message ||

          "Gagal mengirim email"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <>
      {/* Trigger */}
      <span
        onClick={() =>
          setOpen(true)
        }
        className="text-purple-400 cursor-pointer hover:underline"
      >
        Verifikasi Email
      </span>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-5">

          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() =>
                setOpen(false)
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
                Email verifikasi
                akan dikirim ke
              </p>

              <p className="text-purple-400 font-medium mt-1 break-all">
                {email ||
                  "Tidak ada email"}
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

            {/* Button */}
            <button
              onClick={
                handleVerify
              }
              disabled={
                loading
              }
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-3 font-semibold text-white disabled:opacity-50"
            >
              {loading
                ? "Mengirim..."
                : "Kirim Verifikasi"}
            </button>

          </div>
        </div>
      )}
    </>
  );
}