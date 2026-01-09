"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center lg:items-start overflow-hidden bg-background-offwhite">
            <div className="max-w-7xl mx-auto px-6 w-full pt-20 pb-0 lg:pt-0 lg:pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-8 items-center">

                    {/* Media Section - Top on Mobile, Right on Desktop */}
                    <div className="order-2 lg:order-2 lg:col-span-6 w-full relative pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Main Media Frame */}
                            <div className="relative flex items-center justify-center -my-40 sm:-my-24 lg:-my-12">
                                <div className="relative scale-50 lg:scale-70 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden [transform:translate3d(0,0,0)]">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-auto object-cover"
                                    >
                                        <source src="/assets/Paylio Prototype v3.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Floating Mobile Mockup - Professional Context (Desktop only) */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, x: 40 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                                className="absolute bottom-28 -left-10 w-32 md:w-56 lg:w-64 z-20 hidden lg:block"
                            >
                                <div className="">
                                    <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src="/assets/Home screen mobile.png"
                                            alt="Mobile UI"
                                            width={256}
                                            height={512}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background Ambient Glow */}
                            <div className="absolute -inset-10 bg-accent/5 blur-[120px] -z-10 rounded-full" />
                        </motion.div>
                    </div>

                    {/* Text Content Section */}
                    {/* Text Content Section */}
                    <div className="order-1 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative z-30">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Financial Operating System
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-[1] mb-8 text-primary tracking-tight"
                        >
                            The financial OS for <br />
                            <span className="text-accent underline decoration-accent/10 underline-offset-8">freelancers & agencies</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium"
                        >
                            Create invoices, collect UPI payments, track profits, and understand clients — all in one place.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <button className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 active:scale-95 leading-none">
                                Get Started Free
                            </button>
                            <Link
                                href="/demo"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 leading-none bg-white"
                            >
                                <Play size={20} fill="currentColor" stroke="none" />
                                Watch Demo
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
            </div>
        </section>
    );
}
