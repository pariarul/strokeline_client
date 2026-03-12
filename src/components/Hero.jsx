"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, BarChart3, FileJson } from "lucide-react";
import Link from "next/link";

const Hero = ({ data }) => {
  // Fallback to defaults if data not provided
  const tagline = data?.tagline ?? "Global Business Service";
  const headline = data?.headline ?? "Modern";
  const headlineHighlight = data?.headline_highlight ?? "Excellence.";
  const description = data?.description ?? "We engineer high-fidelity digital solutions for the world's leading financial and publishing institutions. Precision in every stroke.";
  const ctaText = data?.cta_text ?? "Explore Our Craft";
  const accuracyStat = data?.accuracy_stat ?? "99.9%";
  const accuracyLabel = data?.accuracy_label ?? "Accuracy Benchmark";

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden mesh-gradient">
      {/* Background Large Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.02] dark:opacity-[0.05]">
        <h2 className="text-[30vw] font-black leading-none">STROKELINE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-brand-orange"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">
                  {tagline}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter text-brand-black dark:text-brand-white">
                {headline} <br />
                <span className="text-gradient">{headlineHighlight}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed font-medium">
                {description}
              </p>

              <div className="flex flex-col gap-6 w-full md:w-auto">
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-black dark:bg-brand-white text-white dark:text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></span>
                  <span className="relative font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:text-white">
                    {ctaText} <ArrowUpRight size={16} />
                  </span>
                </Link>
                <div className="flex items-baseline gap-2 pl-4">
                  <span className="text-brand-orange font-black text-2xl">{accuracyStat}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">{accuracyLabel}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Visual Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[3/4] rounded-[4rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end gap-8">
                {[
                  { icon: BarChart3, title: "Fin-Publishing", link: "/services" },
                  { icon: Globe2, title: "Localization", link: "/services" },
                  { icon: FileJson, title: "Data-Conversion", link: "/services" }
                ].map((item, i) => (
                  <Link key={i} href={item.link}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black shadow-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                        <item.icon size={20} />
                      </div>
                      <span className="font-black uppercase tracking-widest text-[10px] text-zinc-800 dark:text-zinc-200">
                        {item.title}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-black text-zinc-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
