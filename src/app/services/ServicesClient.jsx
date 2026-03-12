"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import {
  FileJson,
  BarChart3,
  Globe2,
  PenTool,
  CheckCircle2,
  Zap,
} from "lucide-react";

const iconMap = {
  "Word Conversion Service": FileJson,
  "Financial Publishing": BarChart3,
  "Language Services": Globe2,
  "Graphics Services": PenTool,
  "PDF Accessibility": CheckCircle2,
  "Data Conversion": Zap,
};

export default function ServicesClient({ services, contact }) {
  const reasons = [
    { title: "Versatility", desc: "A wide spectrum of services under one roof." },
    { title: "Quality", desc: "Outputs aligned with client requirements and industry standards." },
    { title: "Efficiency", desc: "Streamlined processes for quick, reliable delivery." },
    { title: "Customization", desc: "Tailored designs that match your brand and vision." }
  ];

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />

      <section className="pt-48 pb-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <h2 className="text-[40vw] font-black text-brand-orange absolute -top-20 -left-10 select-none uppercase">Service</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-orange">Global Portfolio</span>
            <h1 className="text-6xl md:text-[100px] font-black leading-[0.8] tracking-tighter uppercase">
              Our <br /> <span className="text-gradient">Services.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = iconMap[service.title] || Zap;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-12 items-start pb-24 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
                  <div className="lg:col-span-2 text-brand-orange mb-8 lg:mb-0">
                    <Icon size={64} strokeWidth={1.5} />
                  </div>
                  <div className="lg:col-span-6 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase leading-none tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {service.features?.map((f, idx) => (
                        <span key={idx} className="px-5 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-4 lg:text-right pt-8 lg:pt-0">
                    <div className="inline-flex flex-col items-end gap-2">
                      <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Core Impact</span>
                      <span className="text-2xl font-black text-brand-orange uppercase leading-none">{service.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase leading-tight">Why Clients <br /> Choose <span className="text-brand-orange italic">StrokeLine.</span></h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {reasons.map((reason, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange">{reason.title}</h4>
                  <p className="text-lg text-zinc-500 font-medium">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer data={contact} />
    </main>
  );
}
