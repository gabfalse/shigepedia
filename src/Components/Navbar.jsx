import LogoUngu
  from "../../src/assets/Logo Ungu.png";

import {
  LogOut,
  Menu,
  X,
  Trophy,
  LayoutGrid,
  User,
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

export default function Navbar() {

  const navigate =
    useNavigate();

  const [
    openMenu,
    setOpenMenu
  ] = useState(false);

  // ======================
  // Logout
  // ======================
  const handleLogout =
    () => {

      localStorage.removeItem(
        "user"
      );

      localStorage.removeItem(
        "token"
      );

      navigate(
        "/login"
      );
    };

  const menus = [

    // {
    //   title:
    //     "Features",

    //   icon:
    //     LayoutGrid,

    //   action:
    //     () => {

    //       navigate("/");

    //       setOpenMenu(false);
    //     }
    // },

    {
      title:
        "Leaderboard",

      icon:
        Trophy,

      action:
        () => {

          navigate(
            "/leaderboard"
          );

          setOpenMenu(false);
        }
    },

    {
      title:
        "Profile",

      icon:
        User,

      action:
        () => {

          navigate(
            "/profile"
          );

          setOpenMenu(false);
        }
    },
  ];

  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-purple-500/10
      bg-zinc-950/70
      backdrop-blur-xl
    ">

      <div className="
        max-w-7xl
        mx-auto
        h-16
        px-4
        md:px-6
        flex
        items-center
        justify-between
      ">

        {/* Logo */}
        <div
          onClick={() =>
            navigate("/")
          }
          className="
            flex
            items-center
            gap-0
            cursor-pointer
            select-none
          "
        >

          <img
            src={LogoUngu}
            alt="SHIGEPEDIA Logo"
            className="
              w-14
              h-14
              md:w-16
              md:h-16
              mt-2
              object-contain
            "
          />

          <h1 className="
            text-xl
            md:text-2xl
            font-black
            tracking-wide
            text-white
          ">
            SHIGE

            <span className="
              text-purple-400
            ">
              PEDIA
            </span>
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="
          hidden
          md:flex
          items-center
          gap-8
          text-zinc-300
          font-medium
        ">

          {menus.map(
            (
              item,
              index
            ) => (

              <button
                key={index}
                onClick={
                  item.action
                }
                className="
                  hover:text-purple-400
                  transition
                "
              >
                {
                  item.title
                }
              </button>
            )
          )}

        </div>

        {/* Right Side */}
        <div className="
          flex
          items-center
          gap-3
        ">

          {/* Logout Desktop */}
          <button
            onClick={
              handleLogout
            }
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              text-red-400
              hover:bg-red-500/20
              transition
            "
          >

            <LogOut
              size={18}
            />

            <span className="
              font-medium
            ">
              Logout
            </span>

          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setOpenMenu(
                !openMenu
              )
            }
            className="
              md:hidden
              w-11
              h-11
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900
              flex
              items-center
              justify-center
              text-zinc-300
            "
          >

            {openMenu ? (

              <X size={22} />

            ) : (

              <Menu size={22} />

            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {openMenu && (

        <div className="
          md:hidden
          border-t
          border-zinc-800
          bg-zinc-950/95
          backdrop-blur-xl
          px-4
          py-4
          space-y-2
        ">

          {menus.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <button
                  key={index}
                  onClick={
                    item.action
                  }
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-4
                    py-4
                    text-left
                    text-zinc-300
                    hover:border-purple-500/30
                    hover:text-purple-400
                    transition-all
                  "
                >

                  <Icon
                    size={20}
                  />

                  <span className="
                    font-medium
                  ">
                    {
                      item.title
                    }
                  </span>

                </button>
              );
            }
          )}

          {/* Logout Mobile */}
          <button
            onClick={
              handleLogout
            }
            className="
              w-full
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-4
              text-left
              text-red-400
              hover:bg-red-500/20
              transition-all
            "
          >

            <LogOut
              size={20}
            />

            <span className="
              font-medium
            ">
              Logout
            </span>

          </button>

        </div>
      )}

    </nav>
  );
}