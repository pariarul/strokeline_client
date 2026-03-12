"use client";

import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title, description, centered = true }) => {
  return (
    <div className={`mb-20 space-y-6 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, x: centered ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 justify-center sm:justify-start"
      >
        <span className="w-8 h-[1px] bg-brand-orange"></span>
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400">
          {subtitle}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight uppercase"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
