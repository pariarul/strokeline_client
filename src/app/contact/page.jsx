import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchContent } from "@/lib/supabase";
import ContactClient from "./ContactClient";

export default async function Contact() {
  const content = await fetchContent("site_contact");

  const data = {
    registered_office: content?.registered_office ?? "Vankayalapadu, Andhra Pradesh, India",
    delivery_centers: content?.delivery_centers ?? "Coimbatore & Erode, India",
    email: content?.email ?? "contact@strokeline.com",
    whatsapp: content?.whatsapp ?? "",
    linkedin: content?.linkedin ?? "LinkedIn",
    twitter: content?.twitter ?? "Twitter",
    instagram: content?.instagram ?? "Instagram",
    page_subtitle: content?.page_subtitle ?? "Reach out to our registered office in Andhra Pradesh or our delivery hubs in Tamil Nadu.",
  };

  return <ContactClient data={data} />;
}
