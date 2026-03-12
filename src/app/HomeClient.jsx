"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import {
  BarChart3,
  Globe2,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Plus,
  PenTool,
  Monitor
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap = {
  "Financial Publishing": BarChart3,
  "Language Localization": Globe2,
  "PowerPoint Design": Monitor,
  "Graphic Design": PenTool,
  "Automation Platforms": Cpu,
  "Adaptive Workflows": Layers,
};

export default function HomeClient({ data }) {
  // Map services to layout grid
  const services = data.services.slice(0, 4).map((s, i) => ({
    icon: iconMap[s.title] || BarChart3,
    title: s.title,
    description: s.description,
    size: i === 0 ? "lg:col-span-1 lg:row-span-2" : i === 1 ? "lg:col-span-2 lg:row-span-1" : "lg:col-span-1 lg:row-span-1"
  }));

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />

      <Hero data={data.hero} />

      {/* Editorial Intro Section */}
      <section className="py-32 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 self-start">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">Heritage</span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white">
                  Defined by <br /> <span className="italic text-zinc-400 font-light">Innovation.</span>
                </h2>
              </motion.div>
            </div>
            <div className="lg:col-span-8 lg:pl-12 italic">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-8">
                <p className="text-2xl md:text-3xl text-zinc-500 font-medium leading-relaxed">
                  {data.aboutIntro}
                </p>
                <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-900"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <SectionTitle subtitle="Our Services" title="Expert Craftsmanship" description="Adaptive digital services engineered for global impact and quick turnaround." centered={false} />
            <Link href="/services" className="group mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-brand-orange transition-colors">
              All Services <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={index} className={service.size} />
            ))}

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-2 lg:row-span-1 bg-brand-black dark:bg-brand-white p-10 rounded-[2.5rem] flex flex-col justify-between group">
              <h3 className="text-2xl font-black text-white dark:text-black uppercase leading-tight">
                Hallmarked <br /> by <br /> <span className="text-brand-orange italic underline decoration-white/20">Innovation.</span>
              </h3>
              <Link href="/about" className="flex items-center gap-4 text-brand-orange font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                Our Journey <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accuracy Parallax Stats */}
      <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-zinc-900 rounded-[4rem] p-16 md:p-24 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/10 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="inline-block p-4 bg-brand-orange text-white rounded-[2rem] shadow-2xl shadow-brand-orange/40">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9]">
                  {data.stats.reliability_headline} <br /><span className="text-gradient hover:italic transition-all">{data.stats.reliability_highlight}</span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                  {data.stats.reliability_description}
                </p>
                <div className="flex gap-8">
                  <div className="space-y-1">
                    <span className="text-3xl font-black text-white tracking-tighter">{data.stats.accuracy_min}</span>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{data.stats.accuracy_sublabel}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-black text-white tracking-tighter">{data.stats.turnaround_label}</span>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{data.stats.turnaround_sublabel}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <Cpu className="text-brand-orange mb-4" size={32} />
                  <h4 className="font-black text-white uppercase tracking-widest text-xs mb-2">{data.stats.automation_title}</h4>
                  <p className="text-zinc-500 text-sm">{data.stats.automation_desc}</p>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <Layers className="text-brand-orange mb-4" size={32} />
                  <h4 className="font-black text-white uppercase tracking-widest text-xs mb-2">{data.stats.workflow_title}</h4>
                  <p className="text-zinc-500 text-sm">{data.stats.workflow_desc}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer data={data.contact} />
    </main>
  );
}
