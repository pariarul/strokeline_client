"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Linkedin, href: data?.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: data?.instagram, label: "Instagram" },
    { Icon: Twitter, href: data?.twitter, label: "Twitter" },
    { Icon: MessageCircle, href: data?.whatsapp, label: "WhatsApp" },
  ].filter(link => link.href); // Only show if URL exists

  return (
    <footer className="bg-brand-black text-white pt-32 pb-16 overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-9 h-9  flex items-center justify-center rounded-xl shadow-[0_8px_16px_-4px_rgba(255,138,0,0.4)] group-hover:rotate-12 transition-transform">
                <img
                  src="/logo.png"
                  alt="Company Logo"
                  className="w-18 h-18 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none">
                  STROKELINE
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                  Design Boutique
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
              One of the fastest developing service delivery companies in India. Adaptive innovation in typesetting, language services, and data conversion.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-500"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Expertise"].map((item) => (
                  <li key={item}>
                    <Link href={`${item === 'Home' ? '/' : `/${item.toLowerCase()}`}`} className="text-sm font-bold text-zinc-400 hover:text-brand-orange transition-colors flex items-center group">
                      {item} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-8">Expertise</h4>
              <ul className="space-y-4">
                {["Conversion", "Financial Publishing", "Localization", "Graphic Design"].map((item) => (
                  <li key={item}>
                    <span className="text-sm font-bold text-zinc-400 cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-8">Registered Office</h4>
              <div className="space-y-4 text-xs font-bold text-zinc-400 leading-relaxed">
                <p>{data?.registered_office || "Chirala, Andhra Pradesh, India"}</p>
                <p className="text-[8px] uppercase tracking-widest text-zinc-600 block pt-4">Delivery Centers</p>
                <p>{data?.delivery_centers || "Coimbatore & Erode, India"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
            © {currentYear} Strokeline Design Services Private Limited
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
