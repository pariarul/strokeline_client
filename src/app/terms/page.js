"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Gavel, FileCheck, AlertCircle, Scale } from "lucide-react";

export default function Terms() {
    const clauses = [
        {
            icon: FileCheck,
            title: "Service Agreement",
            content: "By engaging Strokeline Design Services, you agree to the terms of our service Level Agreements (SLAs). We commit to high accuracy (99.98%+) and timely delivery as specified in individual project contracts."
        },
        {
            icon: Scale,
            title: "Intellectual Property",
            content: "All original materials provided by the client remain the property of the client. Strokeline retains rights to any specialized automation tools or proprietary workflows used during the process unless otherwise agreed."
        },
        {
            icon: Gavel,
            title: "Liability",
            content: "Strokeline Design Services Private Limited shall not be liable for any indirect or consequential losses. Our total liability is limited to the value of the specific project service engaged."
        },
        {
            icon: AlertCircle,
            title: "Termination",
            content: "Either party may terminate services with written notice as per the terms defined in the project-specific agreement. Outstanding fees for work completed will be payable upon termination."
        }
    ];

    return (
        <main className="min-h-screen mesh-gradient">
            <Navbar />

            {/* Header */}
            <section className="pt-48 pb-24 bg-brand-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-orange">Contractual Terms</span>
                        <h1 className="text-6xl md:text-[100px] font-black leading-[0.8] tracking-tighter uppercase">
                            Terms <br /> <span className="text-gradient">& Conditions.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-32 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="space-y-20">
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                                Last Updated: March 2026. These terms govern the use of Strokeline Design Services and the relationship between our company and our global clientele.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {clauses.map((clause, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-6 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center text-brand-orange shadow-sm">
                                        <clause.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{clause.title}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                                        {clause.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-20 border-t border-zinc-100 dark:border-zinc-900">
                            <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase mb-6">Governing Law</h3>
                            <p className="text-zinc-500 font-medium">
                                These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Andhra Pradesh.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
