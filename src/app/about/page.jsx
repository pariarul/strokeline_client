import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { fetchContent } from "@/lib/supabase";
import { Users, Target, Rocket, Award, CheckCircle2 } from "lucide-react";
import AboutClient from "./AboutClient";

export default async function About() {
  const [content, contact] = await Promise.all([
    fetchContent("site_about"),
    fetchContent("site_contact")
  ]);

  const data = {
    contact,
    founded_year: content?.founded_year ?? "2022",
    founded_location: content?.founded_location ?? "Vankayalapadu, Inkollu, India",
    headquarters: content?.headquarters ?? "Andhra Pradesh, India",
    hubs: content?.hubs ?? "Chirala, Andhra Pradesh",
    accuracy: content?.accuracy ?? "99.98% - 99.99%",
    intro_description: content?.intro_description ?? "Strokeline Design Services Private Limited (originally Strokeline Services) is a trusted partner for the publishing and language service industry.",
    overview_text1: content?.overview_text1 ?? "Founded in 2022 in Vankayalapadu, Inkollu, India, we have steadily evolved into a trusted partner for the publishing and language service industry.",
    overview_text2: content?.overview_text2 ?? "Due to our commitment to excellence, we have expanded our operations across Andhra Pradesh, ensuring closer collaboration and better service for our growing global clientele.",
    leadership_description: content?.leadership_description ?? "At the heart of Strokeline's success is leadership with over a decade of experience in the pre-press industry.",
    commitment_text: content?.commitment_text ?? "We believe success lies in the perfect balance of innovation, expertise, and operational excellence.",
  };

  return <AboutClient data={data} />;
}
