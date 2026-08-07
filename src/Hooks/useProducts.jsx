import { useEffect, useState } from "react";
import { getProducts } from "../Services/ProductService";


export default function useProducts(){

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);


  useEffect(()=>{

    async function fetchProducts(){

      try{

        console.log("🚀 CALLING PRODUCTS API");


        const data = await getProducts();


        console.log(
          "📦 PRODUCTS FROM HOOK:",
          data
        );


        setProducts(data);


      }catch(err){

        console.error(
          "❌ PRODUCTS ERROR:",
          err
        );

        setError(err);

      }finally{

        setLoading(false);

      }

    }


    fetchProducts();


  },[]);



  return {
    products,
    loading,
    error
  };

}