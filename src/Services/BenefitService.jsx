import { supabase } from "../Libs/supabase";

export async function getBenefits() {
  console.group("🎁 BENEFITS API");

  const { data, error } = await supabase
    .from("benefits")
    .select("*")
    .order("sort_order", { ascending: true });

 



  if (error) throw error;

  return data ?? [];
}