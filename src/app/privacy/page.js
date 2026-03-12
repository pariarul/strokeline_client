"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
    const sections = [
        {
            icon: Eye,
            title: "Data Collection",
            content: "We collect information necessary to provide our design and publishing services. This may include contact details, project specifications, and professional business information provided during consultations."
        },
        {
            icon: Lock,
            title: "How We Use Data",
            content: "Your data is used exclusively to fulfill service requests, manage client relationships, and improve our operational efficiency. We do not sell or lease your personal information to third parties."
        },
        {
            icon: Shield,
            title: "Data Protection",
            content: "Strokeline employs industry-standard security measures to protect your intellectual property and personal data. Our server-based automation platforms ensure high-level document security."
        },
        {
            icon: FileText,
            title: "Compliance",
            content: "We adhere to international standards for data privacy and are committed to ensuring your information is handled with the highest level of professional integrity and confidentiality."
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
                        <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-orange">Legal Framework</span>
                        <h1 className="text-6xl md:text-[100px] font-black leading-[0.8] tracking-tighter uppercase">
                            Privacy <br /> <span className="text-gradient">Policy.</span>
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
                                Last Updated: March 2026. At Strokeline Design Services Private Limited, your privacy is paramount. This policy outlines our commitment to protecting the data and intellectual assets you entrust to us.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {sections.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-6 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center text-brand-orange shadow-sm">
                                        <section.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{section.title}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-20 border-t border-zinc-100 dark:border-zinc-900">
                            <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase mb-6">Contact Legal</h3>
                            <p className="text-zinc-500 font-medium">
                                If you have questions regarding our privacy practices, please contact us at info@strokeline.in
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
