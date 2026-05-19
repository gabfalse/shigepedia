import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VerificationPage() {

  const { invoice } = useParams();

  const [order, setOrder] = useState(null);
  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // =========================
  // FETCH ORDER FROM BE
  // =========================
  useEffect(() => {

    setFetching(true);

    axios
      .get(`https://rutee.id/api-sp/order/get-order.php?invoice=${invoice}`)
      .then((res) => {

        if (res.data.success) {
          setOrder(res.data.order);
        } else {
          alert(res.data.message || "Order tidak ditemukan");
        }

      })
      .catch(() => {
        alert("Gagal load order");
      })
      .finally(() => {
        setFetching(false);
      });

  }, [invoice]);

  // =========================
  // UPLOAD PAYMENT PROOF
  // =========================
  const handleSubmit = async () => {

    if (!proof) {
      alert("Upload bukti transfer dulu");
      return;
    }

    if (!order) {
      alert("Order belum tersedia");
      return;
    }

    setLoading(true);

    try {

      const formData = new FormData();

      formData.append("invoice", invoice);
      formData.append("amount", order.price);
      formData.append("proof", proof);

      const res = await axios.post(
        "https://rutee.id/api-sp/payment/create-payment.php",
        formData
      );

      if (res.data.success) {
        alert("Bukti berhasil dikirim, menunggu verifikasi admin");
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOADING STATE
  // =========================
  if (fetching) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Loading order...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Order tidak ditemukan
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">

      <div className="max-w-xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-4">
          Verification Order
        </h1>

        {/* ORDER INFO */}
        <p>User ID: {order.user_id_game}</p>
        <p>Zone ID: {order.zone_id}</p>

        <hr className="my-4 border-zinc-700" />

        {/* PRODUCT */}
        <h2 className="font-bold mb-2">Product</h2>

        <p>{order.product_name}</p>

        <p className="text-purple-400 font-bold">
          Rp {Number(order.price).toLocaleString("id-ID")}
        </p>

        {/* QRIS */}
        {order.qris_image ? (
          <img
            src={order.qris_image}
            className="mt-5 rounded-xl w-full"
            alt="QRIS"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <p className="text-red-400 mt-4">
            QRIS tidak tersedia
          </p>
        )}

        {/* UPLOAD PROOF */}
        <div className="mt-6">

          <p className="text-sm text-zinc-400 mb-2">
            Upload bukti transfer
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProof(e.target.files[0])}
            className="w-full"
          />

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl font-bold transition
            ${loading
              ? "bg-zinc-700 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-500"
            }
          `}
        >
          {loading ? "Mengirim..." : "Saya Sudah Transfer"}
        </button>

      </div>

    </div>
  );
}