import { useMemo, useState } from "react";

import useProducts from "../../Hooks/useProducts";
import usePriceRules from "../../Hooks/usePriceRules";

import Loading from "../CommonComponents/Loading";

import ProductGrid from "./ProductGrid";
import ProductTabs from "./ProductTabs";

export default function ProductSection() {

  const {
    products = [],
    loading: productLoading,
    error: productError,
  } = useProducts();


  const {
    priceRules = [],
    loading: priceLoading,
    error: priceError,
  } = usePriceRules();



  const [activeTab, setActiveTab] = useState("popular");



  const tabs = [
    {
      id: "popular",
      label: "🔥 Terlaris",
    },
    {
      id: "package_5",
      label: "⭐ Paket 5",
    },
    {
      id: "package_10",
      label: "⭐⭐ Paket 10",
    },
    {
      id: "rank_up",
      label: "🏆 Naik Rank",
    },
  ];



  const filteredProducts = useMemo(() => {

    console.log("🔍 Filtering Products");
    console.log("Active Tab:", activeTab);
    console.log("Products:", products);


    switch (activeTab) {


      case "popular":

        return products.filter(
          (item) =>
            item.popular === true
        );



      case "package_5":

        return products.filter(
          (item) =>
            item.type === "package_5"
        );



      case "package_10":

        return products.filter(
          (item) =>
            item.type === "package_10"
        );



      case "rank_up":

        return products.filter(
          (item) =>
            item.type === "rank_up"
        );



      default:

        return products;

    }


  }, [
    products,
    activeTab,
  ]);




  console.group("📦 PRODUCT SECTION");

  console.log(
    "All Products:",
    products
  );

  console.log(
    "Filtered Products:",
    filteredProducts
  );

  console.log(
    "💰 Price Rules:",
    priceRules
  );

  console.log(
    "Product Error:",
    productError
  );

  console.log(
    "Price Error:",
    priceError
  );

  console.groupEnd();




  if(productLoading || priceLoading){

    return (
      <section className="section">

        <Loading text="Memuat layanan..." />

      </section>
    );

  }




  if(productError || priceError){

    return (

      <section className="section">

        <div className="container">

          <div className="alert alert-danger">

            Gagal memuat layanan.

          </div>

        </div>

      </section>

    );

  }





  return (

    <section
      id="product"
      className="section"
    >


      <div className="container stack-lg">


        <div className="text-center stack-sm">


          <span className="badge badge-primary">
            Layanan
          </span>



          <h2 className="title-lg">

            Pilih Layanan

            <br />

            <span className="gradient-text">
              Joki Mobile Legends
            </span>

          </h2>



          <p className="subtitle">

            Pilih layanan sesuai kebutuhanmu.
            Sistem akan menghitung harga otomatis.

          </p>


        </div>





        <ProductTabs

          tabs={tabs}

          activeTab={activeTab}

          onChange={setActiveTab}

        />





        {
          filteredProducts.length > 0 ? (

            <ProductGrid

              products={filteredProducts}

              priceRules={priceRules}

            />


          ) : (


            <div className="card text-center">

              <p className="subtitle">

                Belum ada layanan tersedia.

              </p>

            </div>


          )

        }



      </div>


    </section>

  );

}