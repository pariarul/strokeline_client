import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Uses service role key for bypass RLS if needed, or anon key if RLS allows inserts
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("site_inquiries")
      .insert([{ name, email, message }])
      .select();

    if (error) {
      console.error("Supabase Inquiry Error:", error);
      return NextResponse.json({ message: "Failed to send inquiry" }, { status: 500 });
    }

    return NextResponse.json({ message: "Inquiry sent successfully", data }, { status: 200 });
  } catch (error) {
    console.error("API Inquiry Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
