"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import {
  Server,
  Lock,
  Globe2,
  Zap
} from "lucide-react";

const iconMap = {
  Server,
  Lock,
  Globe2
};

export default function ExpertiseClient({ data }) {
  const exp = data.expertise || {};

  const languages = exp.languages || [
    "Arabic", "Armenian", "Azerbaijani", "Bulgarian", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "Estonian",
    "Finnish", "French", "Farsi", "German", "Greek", "Hungarian", "Italian", "Indonesian", "Japanese", "Khmer",
    "Korean", "Latvian", "Lithuanian", "Norwegian", "Polish", "Portuguese", "Romanian", "Russian", "Slovak",
    "Slovenian", "Spanish", "Swedish", "Turkish", "Ukrainian", "Vietnamese"
  ];

  const stacks = exp.stacks || [
    { name: "Automation", icon_name: "Server", items: ["Server-based platform", "Single Source System", "Multi-output Logic"] },
    { name: "Security", icon_name: "Lock", items: ["Full document security", "Controlled workflows", "Secure delivery"] },
    { name: "Linguistics", icon_name: "Globe2", items: ["Specialized Template Dev", "Dedicated DTP Teams", "30+ Global Languages"] }
  ];

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />

      {/* Header */}
      <section className="pt-48 pb-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8 space-y-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">{exp.header_subtitle || "Technical Core"}</span>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                  {exp.header_title_main || "Proprietary"} <br /> <span className="text-gradient italic">{exp.header_title_italic || "Science."}</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-4 lg:pl-10">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-zinc-500 font-medium">
                {exp.accuracy_description || `Our server-based automation platforms and deep workflow understanding are the keys to our accuracy of ${data.accuracy_min} to ${data.accuracy_max}.`}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section className="py-32 bg-zinc-900 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-5xl font-black text-white uppercase leading-none">{exp.lang_section_title || "Global Language Support."}</h2>
              <p className="text-zinc-400 font-medium">{exp.lang_section_desc || "We specialize in a massive array of foreign language localization typesetting, ensuring your brand resonates globally."}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <motion.span key={lang} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.02 }} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 hover:border-brand-orange/50 transition-colors">
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle subtitle={exp.stack_section_subtitle || "The Stack"} title={exp.stack_section_title || "Digital Infrastructure"} description={exp.stack_section_desc || "Our server-based technology provides multiple outputs especially in financial typesetting."} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stacks.map((stack, i) => {
              const Icon = iconMap[stack.icon_name] || Server;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8 group hover:border-brand-orange/50 transition-colors">
                  <div className="w-14 h-14 bg-zinc-50 dark:bg-black rounded-2xl flex items-center justify-center text-brand-orange shadow-lg transition-transform group-hover:-rotate-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{stack.name}</h3>
                  <ul className="space-y-3">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer data={data.contact} />
    </main>
  );
}
