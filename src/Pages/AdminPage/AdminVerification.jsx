import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminPaymentPage() {

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const PROOF_BASE = "https://rutee.id/image-sp/proof-image/";

  // =========================
  // FETCH PAYMENTS
  // =========================
  const fetchPayments = async () => {

    setLoading(true);

    try {
      const res = await axios.get(
        "https://rutee.id/api-sp/admin/get-payments.php?t=" + Date.now()
      );

      if (res.data.success) {
        setPayments(res.data.payments || []);
      }

    } catch (err) {
      alert("Gagal ambil data payment");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // =========================
  // VERIFY PAYMENT
  // =========================
  const handleVerify = async (id, action) => {

    try {
      const res = await axios.post(
        "https://rutee.id/api-sp/admin/admin-verification.php",
        {
          payment_id: id,
          action: action
        }
      );

      if (res.data.success) {
        alert("Berhasil " + action);
        fetchPayments();
        setSelected(null);
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Server error");
    }
  };

  // =========================
  // HELPERS (URL SAFE)
  // =========================
  const getProofImage = (img) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return PROOF_BASE + img;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      {/* LEFT LIST */}
      <div className="w-1/2 p-6 border-r border-zinc-800">

        <h1 className="text-2xl font-black mb-6">
          Payment Verification
        </h1>

        {loading ? (
          <p className="text-zinc-400">Loading...</p>
        ) : (
          <div className="space-y-4">

            {payments.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-purple-500"
              >
                <div className="flex justify-between">

                  <div>
                    <p className="font-bold">{p.invoice}</p>
                    <p className="text-sm text-zinc-400">
                      Rp {Number(p.amount).toLocaleString()}
                    </p>
                  </div>

                  <span className="text-yellow-400 text-sm">
                    {p.status}
                  </span>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

      {/* RIGHT DETAIL */}
      <div className="w-1/2 p-6">

        {!selected ? (
          <p className="text-zinc-500">
            Pilih payment untuk lihat detail
          </p>
        ) : (
          <div className="space-y-5">

            <h2 className="text-2xl font-black">
              Detail Payment
            </h2>

            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <p><b>Invoice:</b> {selected.invoice}</p>
              <p><b>Amount:</b> Rp {selected.amount}</p>
              <p><b>Status:</b> {selected.status}</p>
            </div>

            {/* QRIS */}
            {selected.qris_image && (
              <div>
                <p className="text-sm text-zinc-400 mb-2">QRIS</p>
                <img
                  src={selected.qris_image}
                  className="rounded-2xl border border-zinc-800"
                />
              </div>
            )}

            {/* PROOF */}
            {selected.proof_image && (
              <div>
                <p className="text-sm text-zinc-400 mb-2">
                  Bukti Transfer
                </p>

                <img
                  src={getProofImage(selected.proof_image)}
                  className="rounded-2xl border border-zinc-800"
                />
              </div>
            )}

            {/* ACTION */}
            <div className="flex gap-3 pt-4">

              <button
                onClick={() => handleVerify(selected.id, "success")}
                className="flex-1 bg-green-600 hover:bg-green-500 py-3 rounded-xl font-bold"
              >
                APPROVE
              </button>

              <button
                onClick={() => handleVerify(selected.id, "failed")}
                className="flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-xl font-bold"
              >
                REJECT
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}