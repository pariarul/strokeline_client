import { fetchContent, fetchList } from "@/lib/supabase";
import HomeClient from "./HomeClient";

export default async function Home() {
  const [hero, about, stats, services, contact] = await Promise.all([
    fetchContent("site_hero"),
    fetchContent("site_about"),
    fetchContent("site_stats"),
    fetchList("site_services"),
    fetchContent("site_contact")
  ]);

  const data = {
    hero: hero || {
      tagline: "Global Business Service",
      headline: "Modern",
      headline_highlight: "Excellence.",
      description: "We engineer high-fidelity digital solutions for the world's leading financial and publishing institutions. Precision in every stroke.",
      cta_text: "Explore Our Craft",
      accuracy_stat: "99.9%",
      accuracy_label: "Accuracy Benchmark",
    },
    aboutIntro: about?.intro_description ?? "Strokeline Design Services Private Limited (originally Strokeline Services) is a trusted partner for the publishing and language service industry.",
    stats: stats || {
      accuracy_min: "99.98%",
      accuracy_max: "99.99%",
      turnaround_label: "Quick",
      turnaround_sublabel: "TURNAROUND",
      accuracy_sublabel: "ACCURACY MIN",
      reliability_headline: "State-of-the-Art",
      reliability_highlight: "Reliability.",
      reliability_description: "Our server-based automation platforms provide multiple outputs with 99.98% to 99.99% accuracy, ensuring we exceed global client expectations every time.",
      automation_title: "Automation Platforms",
      automation_desc: "Server-based technology providing multiple outputs, specifically for financial typesetting.",
      workflow_title: "Adaptive Workflows",
      workflow_desc: "Innovative and adaptive approach ensuring in-depth state-of-the-art results.",
    },
    services: services.length > 0 ? services : [
      { title: "Financial Publishing", description: "Complete SEC-EDGAR conversion and typesetting with single-source security." },
      { title: "Language Localization", description: "Culturally precise adaptations across a massive array of foreign languages." }
    ],
    contact: contact || {
      registered_office: "Vankayalapadu, Andhra Pradesh, India",
      delivery_centers: "Coimbatore & Erode, India",
      email: "contact@strokeline.com",
      whatsapp: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    }
  };

  return <HomeClient data={data} />;
}
