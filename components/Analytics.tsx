"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Analytics() {
    return (
        <section id="analytics" className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
                            Insights
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Visualize your profit, <br />
                            <span className="text-slate-400">master your agency.</span>
                        </h3>

                        <div className="space-y-6">
                            {[
                                "Real-time revenue vs expense tracking",
                                "Automated profit margin calculations",
                                "Invoice aging & collection velocity analytics",
                                "Client-wise contribution analysis"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-slate-300"
                                >
                                    <CheckCircle2 className="text-accent" size={24} />
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-400">Total Revenue FY24</span>
                                <span className="flex items-center text-accent text-sm font-bold">
                                    <TrendingUp size={16} className="mr-1" /> +24%
                                </span>
                            </div>
                            <div className="text-3xl font-bold">₹12,45,000.00</div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="rounded-3xl border border-white/10 shadow-2xl overflow-hidden bg-white/5 p-4 backdrop-blur-md">
                                <Image
                                    src="/assets/Analytics.png"
                                    alt="Analytics Dashboard"
                                    width={800}
                                    height={500}
                                    className="rounded-2xl"
                                />
                            </div>

                            {/* Floating Stat Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-2xl text-primary md:w-56"
                            >
                                <p className="text-slate-500 text-sm font-medium mb-1">Unpaid Value</p>
                                <div className="text-2xl font-bold mb-2">₹1,24,000</div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-500 h-full w-[30%]" />
                                </div>
                            </motion.div>

                            <div className="absolute -bottom-10 -left-6 md:-left-10 bg-accent p-6 rounded-2xl shadow-2xl text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <ArrowUpRight size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Profit Margin</p>
                                        <p className="text-xl font-bold">78%</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
