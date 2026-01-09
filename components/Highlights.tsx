"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Lock, AlertCircle } from "lucide-react";

const highlights = [
    {
        title: "Payments",
        description: "Hold payments in a secure digital vault until project deliverables are met. Build trust without the middleman.",
        icon: <Shield className="text-primary" />,
        image: "/assets/payments.png",
        reverse: false,
    },
    {
        title: "Custom Invoice Creation",
        description: "Every client gets a Custom Invoice on their payment history. Avoid bad payers and prioritize high-value clients.",
        icon: <Target className="text-accent" />,
        image: "/assets/invoice.png",
        reverse: true,
    },
    {
        title: "Deliverables Paywall",
        description: "Automatically lock final files until the UPI payment is successfully verified. No more 'invoice sent' ghosting.",
        icon: <Lock className="text-secondary" />,
        image: "/assets/Home screen mobile.png",
        reverse: false,
    },
    {
        title: "Underpricing Alerts",
        description: "Smart analytics that tell you if you're charging below market rate for your skills. Maximize your agency revenue.",
        icon: <AlertCircle className="text-red-500" />,
        image: "/assets/Analytics.png",
        reverse: true,
    },
];

export default function Highlights() {
    return (
        <section className="py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-24 md:gap-40">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: item.reverse ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                    {item.description}
                                </p>
                                <button className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                    Learn more how it works
                                    <span>→</span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: item.reverse ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 relative w-full max-w-lg mx-auto"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 bg-white p-2">
                                    <div className="rounded-2xl overflow-hidden bg-slate-50">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700"
                                        />
                                    </div>
                                </div>
                                {/* Accent background */}
                                <div className={`absolute -inset-10 ${index % 2 === 0 ? 'bg-accent/5' : 'bg-primary/5'} -z-10 rounded-[3rem] blur-3xl opacity-30`} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
