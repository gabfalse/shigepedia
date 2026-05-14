
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsappButton() {

  const handleChat = () => {

    const message =
      encodeURIComponent(
        "Halo Admin SHIGEPEDIA 👋"
      );

    window.open(
      `https://wa.me/6285162651533?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleChat}
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 bg-green-500 hover:bg-green-600 shadow-2xl px-5 py-4 rounded-full transition-all duration-300 hover:scale-105"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15">
        <MessageCircle
          size={24}
          className="text-white"
        />
      </div>

      {/* Text */}
      <div className="text-left leading-tight">
        <p className="text-white font-semibold text-sm">
          Hubungi Admin
        </p>

        <p className="text-white/80 text-xs">
          Fast Response
        </p>
      </div>
    </button>
  );
}
