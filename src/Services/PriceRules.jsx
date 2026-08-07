import { supabase } from "../Libs/supabase";

export async function getPriceRules() {

  console.log("🚀 Calling price_rules API");

  const { data, error } = await supabase
    .from("price_rules")
    .select("*")
    .order("id", {
      ascending: true,
    });


  console.log("📦 Price Rules Response:", {
    data,
    error,
  });


  if (error) {
    throw error;
  }


  return data ?? [];
}