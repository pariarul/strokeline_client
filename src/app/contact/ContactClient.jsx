"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Send, MapPin, Building2, Mail, ArrowUpRight } from "lucide-react";

export default function ContactClient({ data }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });
    
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Something went wrong");

      setStatus({ loading: false, success: true, error: "" });
      setFormData({ name: "", email: "", message: "" });
      alert("Inquiry received. Strokeline Design Services will respond shortly.");
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
      alert("Failed to send inquiry: " + err.message);
    }
  };

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />

      <section className="pt-48 pb-24 bg-white dark:bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">Contact HQ</span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                Our <br /> <span className="text-gradient italic">Presence.</span>
              </h1>
            </motion.div>
            <div className="space-y-4">
              <p className="text-xl font-medium text-zinc-500">
                {data.page_subtitle}
              </p>
              <div className="w-12 h-[1px] bg-brand-orange"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form Side */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-zinc-900 p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-black/5 border border-zinc-100 dark:border-zinc-800">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Identity</label>
                    <input className="w-full px-8 py-5 rounded-3xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-brand-orange transition-all font-bold text-zinc-900 dark:text-zinc-100" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Reach</label>
                    <input className="w-full px-8 py-5 rounded-3xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-brand-orange transition-all font-bold text-zinc-900 dark:text-zinc-100" placeholder="Email Address" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Vision</label>
                    <textarea className="w-full px-8 py-5 rounded-3xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-brand-orange transition-all font-bold h-40 resize-none text-zinc-900 dark:text-zinc-100" placeholder="Briefly describe your project requirements..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button 
                    disabled={status.loading}
                    className="w-full group bg-brand-black dark:bg-brand-white text-white dark:text-black py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white transition-all shadow-xl shadow-brand-orange/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Sending..." : "Send Inquiry"} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-12 self-center">
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-white dark:bg-black rounded-[2rem] flex items-center justify-center text-brand-orange shadow-xl transition-transform group-hover:rotate-6">
                    <Building2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Registered Office</h4>
                    <p className="text-xl font-black text-zinc-900 dark:text-white leading-tight">{data.registered_office}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-white dark:bg-black rounded-[2rem] flex items-center justify-center text-brand-orange shadow-xl transition-transform group-hover:rotate-6">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Delivery Centers</h4>
                    <p className="text-xl font-black text-zinc-900 dark:text-white leading-tight">{data.delivery_centers}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-white dark:bg-black rounded-[2rem] flex items-center justify-center text-brand-orange shadow-xl transition-transform group-hover:rotate-6">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Hub</h4>
                    <p className="text-xl font-black text-zinc-900 dark:text-white leading-tight hover:text-brand-orange cursor-pointer">{data.email}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Connect Digitally</p>
                <div className="flex justify-center gap-8">
                  {["LinkedIn", "WhatsApp", "Twitter", "Instagram"].map((s) => (
                    <a key={s} href={(data[s.toLowerCase()] && data[s.toLowerCase()].startsWith('http')) ? data[s.toLowerCase()] : '#'} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-zinc-900 dark:text-white hover:text-brand-orange cursor-pointer uppercase tracking-widest transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer data={data} />
    </main>
  );
}
