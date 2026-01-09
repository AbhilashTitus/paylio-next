"use client";

import { ShieldCheck, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const items = [
    {
        icon: <ShieldCheck className="text-primary" size={20} />,
        text: "Built for freelancers & agencies",
    },
    {
        icon: <Zap className="text-accent" size={20} />,
        text: "UPI-first payments",
    },
    {
        icon: <Globe className="text-secondary" size={20} />,
        text: "Secure & compliant",
    },
];

export default function TrustStrip() {
    return (
        <div className="bg-slate-50/50 py-8 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                                {item.icon}
                            </div>
                            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
