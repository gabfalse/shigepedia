import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileLegend() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // =========================
  // FETCH PRODUCT
  // =========================
  useEffect(() => {

    axios
      .get(
        "https://rutee.id/api-sp/product/get-product.php?t=" + Date.now()
      )
      .then((res) => {

        if (res.data.success) {

          const data = res.data.products || [];

          setProducts(data);

          // auto select first product (WDP)
          if (data.length > 0) {
            setSelectedProduct(data[0]);
          }
        }

      })
      .catch(() => {
        alert("Gagal load product");
      })
      .finally(() => setFetching(false));

  }, []);

  // =========================
  // CONTINUE (CREATE ORDER)
  // =========================
  const handleContinue = async () => {

    if (loading) return;

    if (!userId || !zoneId || !selectedProduct || !isChecked) {
      alert("Lengkapi data terlebih dahulu");
      return;
    }

    setLoading(true);

    try {

      const res = await axios.post(
        "https://rutee.id/api-sp/order/create-order.php",
        {
          userId,
          zoneId,
          productId: selectedProduct.id
        }
      );

      if (res.data.success) {

        const invoice = res.data.invoice;

        // 🔥 arahkan ke verification page dengan invoice
        navigate(`/topup/verification/${invoice}`);

      } else {
        alert(res.data.message || "Gagal membuat order");
      }

    } catch (err) {
      alert("Server error saat membuat order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      <Navbar />

      <main className="flex-1 px-4 py-10">

        <div className="max-w-3xl mx-auto">

          {/* INPUT */}
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 mb-6">

            <h2 className="text-xl font-bold mb-4">
              Data Akun MLBB
            </h2>

            <input
              className="w-full mb-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <input
              className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800"
              placeholder="Zone ID"
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value)}
            />
          </div>

          {/* PRODUCT LIST */}
          <div className="space-y-4 mb-6">

            {fetching ? (
              <p className="text-zinc-400">Loading product...</p>
            ) : products.length === 0 ? (
              <p className="text-red-400">Product tidak tersedia</p>
            ) : (
              products.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className={`p-5 rounded-3xl border cursor-pointer transition
                    ${selectedProduct?.id === item.id
                      ? "border-purple-500 bg-purple-600/10"
                      : "border-zinc-800 bg-zinc-900"
                    }
                  `}
                >

                  <div className="flex justify-between">

                    <div>
                      <h3 className="font-bold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </div>

                    {selectedProduct?.id === item.id && (
                      <CheckCircle2 className="text-green-400" />
                    )}

                  </div>

                  <p className="mt-2 text-purple-400 font-bold">
                    {item.price_format}
                  </p>

                </div>
              ))
            )}

          </div>

          {/* CHECKBOX */}
          <label className="flex gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />

            <span className="text-sm text-zinc-400">
              Saya memastikan User ID & Zone ID sudah benar
            </span>
          </label>

          {/* BUTTON */}
          <button
            onClick={handleContinue}
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold transition
              ${loading
                ? "bg-zinc-700 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-500"
              }
            `}
          >
            {loading ? "MEMPROSES ORDER..." : "LANJUTKAN PEMBAYARAN"}
          </button>

        </div>

      </main>

      <Footer />
    </div>
  );
}