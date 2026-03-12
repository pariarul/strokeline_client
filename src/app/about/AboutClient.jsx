"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award, CheckCircle2 } from "lucide-react";

const valueIcons = [Target, Users, Rocket];

export default function AboutClient({ data }) {
  const values = [
    {
      icon: Target,
      title: "Innovative Hallmark",
      description: "Being innovative and adaptive in our services is our hallmark, ensuring we persistently exceed customer expectations."
    },
    {
      icon: Users,
      title: "Assortment of Experts",
      description: "Equipped with an exceptional assortment of experts from several fields specializing in typesetting and language services."
    },
    {
      icon: Rocket,
      title: "Automation Tech",
      description: "Our server-based automation technology platforms and deep workflow understanding are key to our global success."
    }
  ];

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-48 pb-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8 space-y-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">Est. {data.founded_year}</span>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                  Global <br /> <span className="text-gradient italic">Standards.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-4 lg:pl-10">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-zinc-500 font-medium">
                {data.intro_description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Expansion Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase leading-tight">Company <br /> <span className="text-brand-orange italic">Overview.</span></h2>
                <div className="w-20 h-[1px] bg-brand-orange"></div>
              </div>
              <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                <p>{data.overview_text1}</p>
                <p>{data.overview_text2}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-12 pt-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Headquarters</h4>
                  <p className="text-sm font-bold">{data.headquarters}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Hubs</h4>
                  <p className="text-sm font-bold">{data.hubs}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Accuracy</h4>
                  <p className="text-sm font-bold">{data.accuracy}</p>
                </div>
              </div>
            </motion.div>

            <div className="relative aspect-square rounded-[4rem] bg-zinc-900 overflow-hidden shadow-2xl flex items-center justify-center p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent"></div>
              <div className="relative space-y-8">
                <Award size={100} className="text-brand-orange mx-auto opacity-50" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">Commitment to <br /> Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <SectionTitle subtitle="Leadership" title="Seasoned Expertise" description="Guiding operations with industry best practices and a decade of specialized experience." centered={false} />
            </div>
            <div className="lg:col-span-7 space-y-8 pt-8">
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">{data.leadership_description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {["Qualitative Functional Performance", "Efficiency & Reliability", "Global Standards", "Client Confidence"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span className="font-bold text-sm tracking-tight uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Our Commitment</h2>
            <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed">{data.commitment_text}</p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle subtitle="Why Us" title="Operational Excellence" description="Our innovations enable swift turnaround times and top-notch quality outputs." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-50 dark:bg-zinc-900 p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8 group hover:border-brand-orange/50 transition-colors">
                <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-brand-orange shadow-lg transition-transform group-hover:-rotate-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{value.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer data={data.contact} />
    </main>
  );
}
