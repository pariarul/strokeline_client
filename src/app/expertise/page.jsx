import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchContent } from "@/lib/supabase";
import ExpertiseClient from "./ExpertiseClient";

export default async function Expertise() {
  const [stats, contact, expertise] = await Promise.all([
    fetchContent("site_stats"),
    fetchContent("site_contact"),
    fetchContent("site_expertise")
  ]);

  const data = {
    contact,
    expertise: expertise || {},
    accuracy_min: stats?.accuracy_min ?? "99.98%",
    accuracy_max: stats?.accuracy_max ?? "99.99%",
  };

  return <ExpertiseClient data={data} />;
}
