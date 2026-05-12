import { useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import {
  Eye,
  EyeOff,
  Gamepad2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  registerUser,
} from "../../Utils/Api/Auth";

export default function RegisterPage() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      ml_id: "",
      email: "",
      password: "",
    });

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleChange = (
    e
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleRegister =
    async (e) => {
      e.preventDefault();

      setError("");
      setSuccess("");

      try {
        setLoading(true);

        // Generate device fingerprint
        const fp =
          await FingerprintJS.load();

        const result =
          await fp.get();

        const device_id =
          result.visitorId;

        // Register API
        const response =
          await registerUser({
            ...form,
            device_id,
          });

        setSuccess(
          response.message ||
            "Registrasi berhasil!"
        );

        // Reset form
        setForm({
          name: "",
          ml_id: "",
          email: "",
          password: "",
        });

        // Redirect login
        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } catch (err) {
        setError(
          err.response?.data
            ?.message ||
            err.response?.data
              ?.error ||
            "Terjadi kesalahan"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-600 p-4 rounded-2xl mb-4">
            <Gamepad2
              size={32}
            />
          </div>

          <h1 className="text-3xl font-bold">
            SHIGEPEDIA
          </h1>

          <p className="text-zinc-400 text-sm mt-2">
            Join komunitas
            SHIGE 🔥
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

        {/* Form */}
        <form
          onSubmit={
            handleRegister
          }
          className="space-y-4"
        >

          {/* Name */}
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Nama
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={
                handleChange
              }
              placeholder="Masukkan nama kamu"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* ML ID */}
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Mobile
              Legends ID
              <span className="text-zinc-500">
                {" "}
                (opsional)
              </span>
            </label>

            <input
              type="text"
              name="ml_id"
              value={
                form.ml_id
              }
              onChange={
                handleChange
              }
              placeholder="Contoh: 123456789"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Email
              <span className="text-zinc-500">
                {" "}
                (opsional)
              </span>
            </label>

            <input
              type="email"
              name="email"
              value={
                form.email
              }
              onChange={
                handleChange
              }
              placeholder="Masukkan email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={
                  form.password
                }
                onChange={
                  handleChange
                }
                placeholder="Minimal 6 karakter"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 pr-12 outline-none focus:border-purple-500"
                required
                minLength={6}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
              >
                {showPassword ? (
                  <EyeOff
                    size={20}
                  />
                ) : (
                  <Eye
                    size={20}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-3 font-semibold disabled:opacity-50"
          >
            {loading
              ? "Mendaftarkan..."
              : "Daftar Sekarang"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Sudah punya akun?{" "}
          <span
            onClick={() =>
              navigate(
                "/login"
              )
            }
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}