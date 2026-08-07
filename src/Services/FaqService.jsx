import { supabase } from "../Libs/supabase";

export async function getFaq() {
  const { data, error } = await supabase
    .from("faq")
    .select("*")
    .order("sort_order");

  if (error) throw error;

  return data;
}