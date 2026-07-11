import {
  Gamepad2,
  MapPin,
  Calendar,
  Globe,
 
  Users,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-black text-white">
              SHIGE
              <span className="text-purple-500"> CREW</span>
            </h2>

            <p className="mt-5 leading-8">
              Rise Together. Play Beyond.
            </p>

            <p className="mt-4 text-sm leading-7">
              Komunitas dan tim esports di bawah naungan
              <span className="text-white font-semibold">
                {" "}Shigepedia {" "}
              </span>
              yang berfokus pada pengembangan pemain melalui latihan,
              kompetisi, dan komunitas yang positif.
            </p>

          </div>

          {/* Organization */}

          <div>

            <h3 className="font-bold text-white text-lg">
              Organization
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <Users size={18} className="text-purple-400 mt-1" />
                <div>
                  <p className="text-white">Founder</p>
                  <p>Gabriel Mohammad (SHIGE)</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Gamepad2 size={18} className="text-purple-400 mt-1" />
                <div>
                  <p className="text-white">Organization</p>
                  <p>Shigepedia</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Calendar size={18} className="text-purple-400 mt-1" />
                <div>
                  <p className="text-white">Founded</p>
                  <p>2026</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-purple-400 mt-1" />
                <div>
                  <p className="text-white">Region</p>
                  <p>Indonesia (Online Community)</p>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="font-bold text-white text-lg">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              <a href="/" className="hover:text-purple-400 transition">
                Home
              </a>

              <a href="/about" className="hover:text-purple-400 transition">
                About Us
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc402BDS4XHutOvUiNLi3d7hO_b-UT7mTlFqvRkdeyX-3U64g/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Join SHIGE CREW
              </a>

              <a
                href="https://shigepedia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Top Up Game
              </a>

              <a
                href="https://sociabuzz.com/shige/tribe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Mabar VIP
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-white text-lg">
              Official Links
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="https://shigepedia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <Globe size={18} />
                shigepedia.id
                <ExternalLink size={14} />
              </a>

             

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between gap-4">

          <p>
            © {new Date().getFullYear()} SHIGE CREW.
            All Rights Reserved.
          </p>

          <p>
            Powered by
            <span className="text-purple-400 font-semibold">
              {" "}Shigepedia
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}