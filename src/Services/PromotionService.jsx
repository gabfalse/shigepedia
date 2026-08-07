import { supabase } from "../Libs/supabase";

export async function getPromotion(code) {
  const { data, error } = await supabase
    .from("promotions")
    .select("*")
    .eq("code", code)
    .eq("active", true)
    .single();

  if (error) return null;

  return data;
}