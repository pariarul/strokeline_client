"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ icon: Icon, title, description, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.1 }}
      className={`group relative p-8 premium-card rounded-[2.5rem] overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div>
        <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-black mb-3 text-brand-black dark:text-brand-white group-hover:text-brand-orange transition-colors uppercase tracking-tight">
          {title}
        </h3>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">
          {description}
        </p>
      </div>
      
      <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">View Expertise</span>
        <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-white dark:group-hover:text-black transition-all">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
