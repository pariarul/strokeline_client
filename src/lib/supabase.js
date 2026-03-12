import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to fetch a single-row settings table
export async function fetchContent(table) {
  try {
    const { data, error } = await supabase.from(table).select("*").limit(1).single();
    if (error) {
      // If table doesn't exist, return null silently to allow fallbacks
      if (error.code === 'PGRST116' || error.message?.includes("not find the table")) return null;
      console.error(`Supabase fetch error [${table}]:`, error.message);
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}

// Helper to fetch all rows (e.g. services)
export async function fetchList(table, orderBy = "sort_order") {
  try {
    const { data, error } = await supabase.from(table).select("*").order(orderBy, { ascending: true });
    if (error) {
      if (error.message?.includes("not find the table")) return [];
      console.error(`Supabase list error [${table}]:`, error.message);
      return [];
    }
    return data || [];
  } catch (e) {
    return [];
  }
}
