import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function VerifyEmailPage() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {

    const verifyEmail = async () => {

      if (!token) {
        setStatus("error");
        setMessage("Token tidak ditemukan");
        return;
      }

      try {

        const res = await fetch(
          "https://shigepedia.my.id/auth/verify-email.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
          }
        );

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setStatus("success");
        setMessage(data.message || "Email berhasil diverifikasi");

        // redirect setelah sukses
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);

      } catch (err) {

        setStatus("error");
        setMessage(
          err.message || "Gagal verifikasi email"
        );

      }

    };

    verifyEmail();

  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-md text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        {/* Icon */}
        <div className="flex justify-center mb-6">

          {status === "loading" && (
            <Loader2 className="animate-spin text-purple-400" size={48} />
          )}

          {status === "success" && (
            <CheckCircle className="text-green-400" size={48} />
          )}

          {status === "error" && (
            <XCircle className="text-red-400" size={48} />
          )}

        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-3">
          {status === "loading" && "Memverifikasi Email..."}
          {status === "success" && "Verifikasi Berhasil"}
          {status === "error" && "Verifikasi Gagal"}
        </h1>

        {/* Message */}
        <p className="text-zinc-400 text-sm">
          {message}
        </p>

        {/* Info */}
        {status === "success" && (
          <p className="text-zinc-500 text-xs mt-4">
            Kamu akan diarahkan ke halaman login...
          </p>
        )}

        {status === "error" && (
          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-2xl"
          >
            Kembali ke Login
          </button>
        )}

      </div>

    </div>
  );
}