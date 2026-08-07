import { MessageCircle } from "lucide-react";

const phone = "6285162651533";

export default function FloatingWhatsapp() {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsapp}
      className="
      fixed
      bottom-5
      right-5
      z-50
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-green-500/20
      bg-green-600
      px-4
      py-3
      text-left
      shadow-lg
      transition
      hover:scale-105
      hover:bg-green-500
      "
    >
      <div className="flex-center h-12 w-12 rounded-full bg-white text-green-600">
        <MessageCircle size={24} />
      </div>

      <div className="hidden sm:block">
        <p className="text-xs text-green-100">
          Ada masalah?
        </p>

        <h4 className="font-semibold">
          Hubungi Minshi
        </h4>
      </div>
    </button>
  );
}