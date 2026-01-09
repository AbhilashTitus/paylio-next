"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                isScrolled ? "bg-white/70 backdrop-blur-xl shadow-sm py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
                {/* Logo */}
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/assets/Paylio logo.svg"
                            alt="Paylio Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex items-center justify-center gap-10">
                    {["Features", "How it works", "Analytics", "Pricing"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center justify-end gap-6 text-sm font-bold">
                    <button className="text-slate-600 hover:text-accent transition-colors">
                        Log in
                    </button>
                    <button className="bg-accent text-white px-7 py-3 rounded-full hover:bg-primary transition-all shadow-lg shadow-accent/20 hover:-translate-y-0.5 active:scale-95 leading-none">
                        Get Started Free
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex justify-end md:hidden">
                    <button
                        className="p-2 text-slate-600 hover:text-accent transition-colors relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                                className="h-0.5 bg-current rounded-full"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: "70%" }}
                                className="h-0.5 bg-current rounded-full"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
                                className="h-0.5 bg-current rounded-full"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-0 left-0 right-0 bg-white shadow-2xl overflow-hidden pt-20 pb-10 px-8 flex flex-col gap-8 md:hidden -z-10"
                    >
                        <div className="flex flex-col gap-6">
                            {["Features", "How it works", "Analytics", "Pricing"].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-bold text-slate-800 hover:text-accent"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <hr className="border-slate-100" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            <button className="text-xl font-bold text-slate-600 py-3 text-left">
                                Log in
                            </button>
                            <button className="bg-accent text-white text-xl font-bold px-8 py-5 rounded-2xl hover:bg-primary transition-all shadow-xl shadow-accent/10 active:scale-95 leading-none">
                                Get Started Free
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
