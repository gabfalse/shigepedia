import { useState } from "react";
import {
  Menu,
  X,
  Gamepad2,
  ArrowUpRight,
} from "lucide-react";

const RECRUITMENT_URL =
  "https://discord.gg/2ckrxv9yGQ";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Top Up",
    href: "https://shigepedia.id",
    external: true,
  },
  {
    title: "Mabar VIP",
    href: "https://sociabuzz.com/shige/tribe",
    external: true,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600">
            <Gamepad2 size={22} className="text-white" />
          </div>

          <div>
            <h2 className="font-black text-xl text-white">
              SHIGE CREW
            </h2>

            <p className="text-xs text-zinc-500">
              Rise Together. Play Beyond.
            </p>
          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="text-zinc-300 hover:text-purple-400 transition"
            >
              {item.title}
            </a>
          ))}

        </nav>

        {/* Desktop Button */}

        <div className="hidden lg:block">

          <a
            href="/about"
           
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition px-5 py-3 font-semibold"
          >
            Join Team

            <ArrowUpRight size={18} />

          </a>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="text-zinc-300 hover:text-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ))}

            <a
              href={RECRUITMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold hover:bg-purple-700 transition"
            >
              Join Team
            </a>

          </div>

        </div>
      )}

    </header>
  );
}