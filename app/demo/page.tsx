"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-accent/20">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full" />
            </div>

            {/* Navigation */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-30">
                <Link
                    href="/"
                    className="group"
                >
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200 px-5 py-3 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <ArrowLeft size={18} className="text-slate-600 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-semibold text-slate-700 tracking-wide">Back to Home</span>
                    </div>
                </Link>
            </div>

            <main className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full max-w-7xl mx-auto mt-20 lg:mt-0">

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative mx-auto h-[60vh] md:h-[75vh] w-auto aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.05)] bg-slate-50">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/Paylio Prototype v3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/20 to-transparent opacity-30" />
                    </div>

                    {/* Floor Reflection/Shadow */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-slate-900/10 blur-xl rounded-full" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl order-1 lg:order-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Live Demo
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Experience the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Future of Finance</span>
                    </h1>

                    <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                        Watch how Paylio streamlines your entire financial workflow. From invoicing to analytics, see the power of a true financial operating system.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/#pricing" className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
                            Get Started Now
                        </Link>
                        <button className="px-8 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                            View Features
                        </button>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
