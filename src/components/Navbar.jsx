"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Expertise", href: "/expertise" },
  ];

  return (
<div className="fixed top-6 left-0 w-full z-50 px-6 sm:px-10 flex justify-center">
  <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", damping: 20, stiffness: 100 }}
    className={`w-full max-w-6xl glass-nav rounded-full px-6 sm:px-10 py-3 flex items-center justify-between transition-all duration-500 ${
      scrolled ? "max-w-5xl py-2 mt-[-4px]" : ""
    }`}
  >

    {/* LEFT LOGO */}
    <Link href="/" className="flex items-center gap-3 group">
      <img
        src="/Strokeline_logo.png"
        alt="Strokeline Logo"
        className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-orange dark:text-zinc-400 dark:hover:text-brand-orange transition-colors"
        >
          {link.name}
        </Link>
      ))}

      <Link
        href="/contact"
        className="group bg-brand-black dark:bg-brand-white text-white dark:text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white transition-all"
      >
        Connect
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden text-zinc-900 dark:text-white p-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>

    {/* MOBILE DROPDOWN */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="absolute top-full left-0 w-full mt-4 p-4 md:hidden"
        >
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-zinc-900 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="w-full text-center bg-brand-orange text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.nav>
</div>
  );
};

export default Navbar;
