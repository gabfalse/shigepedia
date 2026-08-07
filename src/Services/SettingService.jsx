import { supabase } from "../Libs/supabase";

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*");

  if (error) throw error;

  return data;
}