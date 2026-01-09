"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Smartphone,
    BarChart3,
    UserCheck,
    RefreshCcw,
    Layers
} from "lucide-react";

const features = [
    {
        title: "Smart Invoicing",
        description: "Generate professional GST/Non-GST invoices in seconds with custom branding.",
        icon: <FileText size={24} className="text-blue-600" />,
        color: "bg-blue-50",
    },
    {
        title: "UPI Payment Collection",
        description: "Accept instant payments via any UPI app with dynamic QR codes.",
        icon: <Smartphone size={24} className="text-green-600" />,
        color: "bg-green-50",
    },
    {
        title: "Profit & Revenue Analytics",
        description: "Deep dive into your earnings, expenses, and net profit margins.",
        icon: <BarChart3 size={24} className="text-purple-600" />,
        color: "bg-purple-50",
    },
    {
        title: "Custom Invoice Creation",
        description: "Know your client's reliability before you start work based on history.",
        icon: <UserCheck size={24} className="text-orange-600" />,
        color: "bg-orange-50",
    },
    {
        title: "Auto-Reconciliation",
        description: "Matches incoming payments to invoices automatically. No manual tracking.",
        icon: <RefreshCcw size={24} className="text-cyan-600" />,
        color: "bg-cyan-50",
    },
    {
        title: "Global Payments View",
        description: "Consolidated dashboard for all your freelance and agency revenue streams.",
        icon: <Layers size={24} className="text-slate-600" />,
        color: "bg-slate-50",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-20">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3 text-center md:text-left">
                        Powerful Features
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold text-primary max-w-2xl text-center md:text-left">
                            Show what you can do, not just marketing fluff.
                        </h3>
                        <p className="text-slate-500 text-lg max-w-sm text-center md:text-left">
                            Everything you need to run your freelance or agency finances smoothly.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: "var(--shadow-premium-hover)" }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-premium transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
