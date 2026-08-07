import { useState } from "react";
import OrderForm from "../../Components/JokiComponents/OrderForm";
import OrderSummary from "../../Components/JokiComponents/OrderSummary";
import FloatingWhatsapp from "../../Components/JokiComponents/FloatingWhatsapp";

const promotions = [
  {
    code: "WELCOME15",
    title: "Diskon 5%",
    discount_type: "percent",
    discount_value: 10,
    minimum_star: 1,
    active: true,
  }
];

export default function ProductPage() {
  const [summary, setSummary] = useState(null);

  const [promoCode, setPromoCode] = useState("");
  const [promo, setPromo] = useState(null);

  const handleApplyPromo = () => {
    const found = promotions.find(
      (item) =>
        item.code.toUpperCase() === promoCode.toUpperCase() &&
        item.active
    );

    if (!found) {
      alert("Kode promo tidak ditemukan.");
      setPromo(null);
      return;
    }

    setPromo(found);
  };

  return (
    <div className="container section">
      <div className="grid gap-6 lg:grid-cols-2">
        <OrderForm
          onChange={setSummary}
          promo={promo}
        />

        <OrderSummary
          summary={summary}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          onApplyPromo={handleApplyPromo}
        />
      </div>
      <FloatingWhatsapp/>
    </div>
  );
}