import { supabase } from "../Libs/supabase";


export async function getProducts(){

  console.log("🚀 PRODUCTS SERVICE");


  const {
    data,
    error
  } = await supabase
    .from("products")
    .select("*")
    .order(
      "sort_order",
      {
        ascending:true
      }
    );


  console.log(
    "📦 PRODUCTS RESPONSE:",
    data
  );


  console.log(
    "❌ PRODUCTS ERROR:",
    error
  );


  if(error){
    throw error;
  }


  return data ?? [];

}