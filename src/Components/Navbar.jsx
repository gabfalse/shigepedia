import LogoUngu from "../../src/assets/Logo Ungu.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-purple-500/10 bg-zinc-950/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-0 cursor-pointer select-none">

          {/* Logo Image */}
          <img
  src={LogoUngu}
  alt="SHIGEPEDIA Logo"
  className="w-16 h-16 mt-2 object-contain"
/>

          {/* Logo Text */}
          <h1 className="text-2xl font-black tracking-wide text-white">
            SHIGE
            <span className="text-purple-400">
              PEDIA
            </span>
          </h1>

        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium">

         
          <a
            href="#"
            className="hover:text-purple-400 transition"
          >
            Features
          </a>

          <a
            href="#"
            className="hover:text-purple-400 transition"
          >
            Community
          </a>
          <a
            href="/profile"
            className="hover:text-purple-400 transition"
          >
            Profile
          </a>

        </div>

        {/* Button */}
        {/* <button className="px-5 py-2 rounded-2xl bg-purple-500 hover:bg-purple-400 transition text-white font-semibold shadow-lg shadow-purple-500/20">
          Join Crew
        </button> */}

      </div>

    </nav>
  );
}