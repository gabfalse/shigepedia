import { useState } from "react";
import {
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";
import {
  useNavigate,
} from "react-router-dom";

import {
  loginUser,
} from "../../Utils/Api/Auth";

export default function LoginPage() {

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      login: "",
      password: "",
    });

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

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

  const handleChange =
    (e) => {

      setForm((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.value,
      }));
    };

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setError("");
      setSuccess("");

      try {

        setLoading(true);

        // Login API
        const data =
          await loginUser(
            form
          );

        // Backend validation
        if (
          !data.success
        ) {
          throw new Error(
            data.message
          );
        }

        // Save User
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );

        setSuccess(
          data.message ||
            "Login berhasil"
        );

        // Redirect
        setTimeout(() => {
          navigate(
            "/home"
          );
        }, 800);

      } catch (err) {

        console.error(
          "Login Error:",
          err
        );

        console.log(
          "Backend Response:",
          err.response
            ?.data
        );

        setError(
          err.response?.data
            ?.message ||

          err.response?.data
            ?.error ||

          err.message ||

          "Login gagal"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="bg-purple-600 p-4 rounded-2xl mb-4">
            <Shield
              size={32}
            />
          </div>

          <h1 className="text-3xl font-bold">
            SHIGEPEDIA
          </h1>

          <p className="text-zinc-400 text-sm mt-2">
            Login komunitas SHIGE 🔥
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 text-sm p-3 rounded-xl mb-4">
            {success}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={
            handleLogin
          }
          className="space-y-4"
        >

          {/* Login */}
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Email / ML ID
            </label>

            <input
              type="text"
              name="login"
              value={
                form.login
              }
              onChange={
                handleChange
              }
              placeholder="Masukkan email atau ML ID"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
              autoComplete="username"
              required
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
                placeholder="Masukkan password"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 pr-12 outline-none focus:border-purple-500"
                autoComplete="current-password"
                required
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
            disabled={
              loading
            }
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "Memproses..."
              : "Login"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Belum punya akun?{" "}

          <span
            onClick={() =>
              navigate(
                "/register"
              )
            }
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Daftar
          </span>
        </p>

      </div>
    </div>
  );
}