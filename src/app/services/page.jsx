import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchList, fetchContent } from "@/lib/supabase";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const [servicesData, contact] = await Promise.all([
    fetchList("site_services"),
    fetchContent("site_contact")
  ]);

  // Fallback to initial data if DB is empty
  const services = servicesData.length > 0 ? servicesData : [
    {
      title: "Word Conversion Service",
      description: "From XML, HTML, Word, and PPT to complex databases, we transform documents into clean, usable formats ready for any platform.",
      features: ["XML/HTML/Word/PPT Transformation", "Translation-Ready Outputs", "OCR Expertise", "Tailored DTD Solutions", "Web Publication Prep"],
      benefit: "Clarity & Consistency."
    },
    {
      title: "Financial Publishing",
      description: "Specialized typesetting for financial documentation, handling recreation projects at scale with precision and efficiency.",
      features: ["Versatility at Scale", "Streamlined Workflow", "Custom Template Development", "SEC-EDGAR Compliance", "10-K, 10-Q & Proxy Statements"],
      benefit: "Polished & Professional."
    }
  ];

  return <ServicesClient services={services} />;
}
