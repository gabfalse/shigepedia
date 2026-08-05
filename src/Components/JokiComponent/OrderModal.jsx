import { useEffect, useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { POSITION_DATA } from "../Data/PositionData";
import { calculatePrice } from "../../Utils/Calculateprice"
import { formatCurrency } from "../../Utils/Formatter";

const ADMIN_NUMBER = "6285162651533";

const OrderModal = ({ isOpen, onClose, product }) => {

  const [form, setForm] = useState({
    currentTier: "",
    currentStar: 0,

    targetTier: "",
    targetStar: 0,

    promoCode: "",
  });


  /**
   * Reset form ketika modal dibuka
   */
  useEffect(() => {

    if (isOpen) {
      setForm({
        currentTier: "",
        currentStar: 0,

        targetTier: "",
        targetStar: 0,

        promoCode: "",
      });
    }

  }, [isOpen]);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        name.includes("Star")
          ? Number(value)
          : value,
    }));

  };


  /**
   * Maksimal bintang berdasarkan tier
   */
  const getMaxStar = (tierId) => {

    const tier = POSITION_DATA.find(
      (item) => item.id === tierId
    );


    if (!tier) return 0;


    if (tier.id === "immortal") {
      return 300;
    }


    return tier.stars ?? 0;

  };


  /**
   * Kalkulasi harga realtime
   */
  const result = useMemo(() => {

    if (!product) return null;


    if (
      !form.currentTier ||
      !form.targetTier
    ) {
      return null;
    }


    return calculatePrice({

      productId: product.id,

      currentTier: form.currentTier,
      currentStar: form.currentStar,

      targetTier: form.targetTier,
      targetStar: form.targetStar,

      promoCode: form.promoCode,

    });


  }, [

    product,

    form.currentTier,
    form.currentStar,

    form.targetTier,
    form.targetStar,

    form.promoCode,

  ]);



  /**
   * Submit order WhatsApp
   */
  const handleSubmit = (e) => {

    e.preventDefault();


    if (!result?.success) {

      alert(
        result?.message ??
        "Data belum lengkap."
      );

      return;

    }



    const currentLabel =
      POSITION_DATA.find(
        (x) => x.id === form.currentTier
      )?.label ?? "-";



    const targetLabel =
      POSITION_DATA.find(
        (x) => x.id === form.targetTier
      )?.label ?? "-";



    const message = `
*ORDER JOKI MOBILE LEGENDS*

📦 Produk :
${product.title}

🎮 Rank Saat Ini :
${currentLabel}
⭐ ${form.currentStar}

🎯 Target Rank :
${targetLabel}
⭐ ${form.targetStar}

🎁 Promo :
${form.promoCode || "-"}

━━━━━━━━━━━━━━

⭐ Total Bintang :
${result.totalStars}

💰 Subtotal :
${formatCurrency(result.subtotal)}

🏷 Diskon Produk :
-${formatCurrency(result.productDiscount)}

🎫 Diskon Promo :
-${formatCurrency(result.promoDiscount)}

━━━━━━━━━━━━━━

💵 TOTAL :
${formatCurrency(result.total)}
`;



    window.open(

      `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(
        message
      )}`,

      "_blank"

    );

  };



  if (!isOpen || !product) return null;
    return (

    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">

      <div className="flex min-h-screen items-center justify-center p-4">


        <div className="glass-lg relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden">


          {/* Header */}

          <div className="border-b border-white/10 p-6">


            <button

              type="button"

              onClick={onClose}

              className="absolute right-6 top-6 text-xl text-zinc-400 transition hover:text-white"

            >

              <FaTimes />

            </button>



            <p className="section-title mb-2">

              Pemesanan

            </p>



            <h2 className="text-3xl font-bold">

              Form Order Joki

            </h2>



            <p className="mt-2 text-zinc-400">

              Lengkapi data di bawah ini.

            </p>


          </div>




          {/* Content */}

          <div className="flex-1 overflow-y-auto p-6">


            <form

              onSubmit={handleSubmit}

              className="space-y-5"

            >



              {/* Produk */}

              <div>

                <label className="mb-2 block text-sm text-zinc-400">

                  Produk

                </label>


                <input

                  readOnly

                  value={product.title}

                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"

                />

              </div>





              {/* Rank Saat Ini */}

              <div className="grid gap-5 md:grid-cols-2">


                <div>


                  <label className="mb-2 block text-sm text-zinc-400">

                    Rank Saat Ini

                  </label>



                  <select

                    name="currentTier"

                    value={form.currentTier}

                    onChange={handleChange}

                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3"

                  >


                    <option value="">

                      Pilih Rank

                    </option>



                    {POSITION_DATA.map((tier) => (

                      <option

                        key={tier.id}

                        value={tier.id}

                      >

                        {tier.label}

                      </option>

                    ))}


                  </select>


                </div>





                <div>


                  <label className="mb-2 block text-sm text-zinc-400">

                    Bintang Saat Ini

                  </label>



                  <input

                    type="number"

                    name="currentStar"

                    min={0}

                    max={getMaxStar(form.currentTier)}

                    value={form.currentStar}

                    onChange={handleChange}

                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"

                  />


                </div>


              </div>






              {/* Target Rank */}

              <div className="grid gap-5 md:grid-cols-2">


                <div>


                  <label className="mb-2 block text-sm text-zinc-400">

                    Target Rank

                  </label>



                  <select

                    name="targetTier"

                    value={form.targetTier}

                    onChange={handleChange}

                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3"

                  >


                    <option value="">

                      Pilih Rank

                    </option>



                    {POSITION_DATA.map((tier) => (

                      <option

                        key={tier.id}

                        value={tier.id}

                      >

                        {tier.label}

                      </option>

                    ))}


                  </select>


                </div>





                <div>


                  <label className="mb-2 block text-sm text-zinc-400">

                    Target Bintang

                  </label>



                  <input

                    type="number"

                    name="targetStar"

                    min={0}

                    max={getMaxStar(form.targetTier)}

                    value={form.targetStar}

                    onChange={handleChange}

                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"

                  />


                </div>


              </div>






              {/* Promo */}

              <div>


                <label className="mb-2 block text-sm text-zinc-400">

                  Kode Promo

                </label>



                <input

                  type="text"

                  name="promoCode"

                  value={form.promoCode}

                  onChange={handleChange}

                  placeholder="Masukkan kode promo"

                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"

                />


              </div>







              {/* Breakdown Harga */}

              <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">


                <div className="flex justify-between">

                  <span>

                    Total Bintang

                  </span>


                  <span>

                    {result?.totalStars ?? 0}

                  </span>


                </div>




                <div className="flex justify-between">

                  <span>

                    Subtotal

                  </span>


                  <span>

                    {formatCurrency(result?.subtotal ?? 0)}

                  </span>


                </div>




                <div className="flex justify-between">


                  <span>

                    Diskon Produk

                  </span>



                  <span className="text-green-400">

                    -{formatCurrency(result?.productDiscount ?? 0)}

                  </span>


                </div>




                <div className="flex justify-between">


                  <span>

                    Diskon Promo

                  </span>



                  <span className="text-green-400">

                    -{formatCurrency(result?.promoDiscount ?? 0)}

                  </span>


                </div>






                <div className="flex justify-between border-t border-white/10 pt-3">


                  <span className="text-lg font-bold">

                    Total

                  </span>



                  <span className="text-2xl font-bold text-purple-400">

                    {formatCurrency(result?.total ?? 0)}

                  </span>


                </div>



              </div>







              {/* Error */}

              {result && !result.success && (


                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">


                  {result.message}


                </div>


              )}







              {/* Button */}


              <button

                type="submit"

                disabled={!result?.success}

                className="primary-btn w-full disabled:cursor-not-allowed disabled:opacity-50"

              >

                Pesan Sekarang

              </button>





            </form>


          </div>


        </div>


      </div>


    </div>

  );

};


export default OrderModal;