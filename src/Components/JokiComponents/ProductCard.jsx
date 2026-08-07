import { ArrowRight, ShieldCheck } from "lucide-react";

import usePriceRules from "../../Hooks/usePriceRules";

export default function ProductCard({ product }) {

  const {
    priceRules = [],
  } = usePriceRules();


  console.group("📦 ProductCard");
  console.log("Product:", product);
  console.log("Price Rules:", priceRules);
  console.groupEnd();



  const lowestPrice = priceRules.length
    ? Math.min(
        ...priceRules.map(
          (item) => item.price
        )
      )
    : 0;



  const badge = product.popular
    ? "Terlaris"
    : product.type === "package_5"
    ? "5 Bintang"
    : product.type === "package_10"
    ? "10 Bintang"
    : product.type === "rank_up"
    ? "Naik Rank"
    : "Joki";



  const description = {

    per_star:
      "Joki berdasarkan jumlah bintang yang ingin dinaikkan.",

    grading:
      "Joki Mythic Placement untuk menentukan rank Mythic.",

    package_5:
      "Paket hemat naik 5 bintang.",

    package_10:
      "Paket hemat naik 10 bintang.",

    rank_up:
      "Naik rank dari tier awal sampai target.",

  }[product.type] 
  ?? "Layanan joki Mobile Legends.";



  return (

    <article className="card hover stack">


      <div className="flex-between">

        <span className="badge badge-primary">
          {badge}
        </span>


        <ShieldCheck
          size={20}
          className="text-violet-400"
        />

      </div>



      <div className="stack-xs">

        <h3 className="title">
          {product.name}
        </h3>


        <p className="subtitle">
          {description}
        </p>

      </div>



      <div className="divider" />



      <div className="flex-between">


        <div>

          <p className="text-sm text-zinc-500">
            Mulai dari
          </p>


          <h2 className="text-xl font-bold text-violet-400">

            Rp {lowestPrice.toLocaleString("id-ID")}

          </h2>


        </div>



        <button className="btn btn-primary btn-md">

          Pesan

          <ArrowRight size={18} />

        </button>


      </div>


    </article>

  );
}