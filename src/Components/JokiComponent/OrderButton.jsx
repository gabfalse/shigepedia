import { MessageCircle } from "lucide-react";

export default function OrderButton({
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        order-btn
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:translate-y-0
      "
    >
      <MessageCircle size={20} />

      <span>
        Order via WhatsApp
      </span>
    </button>
  );
}