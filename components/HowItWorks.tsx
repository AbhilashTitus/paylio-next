"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Create Invoice",
        description: "Build a professional invoice in under 60 seconds. Add line items, taxes, and your branding.",
        image: "/assets/invoice.png",
    },
    {
        title: "Send UPI Request",
        description: "Generate a unique UPI link or QR code and send it to your client via WhatsApp or Email.",
        image: "/assets/payments.png",
    },
    {
        title: "Track Payment",
        description: "Get real-time notifications when your client opens the invoice or completes the payment.",
        image: "/assets/Home screen mobile.png",
    },
    {
        title: "Analyze Profit",
        description: "See your money grow. Track revenue against expenses and understand your net worth.",
        image: "/assets/Analytics.png",
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    // Auto-switch steps every 5 seconds, but only when tab is active
    useEffect(() => {
        const interval = setInterval(() => {
            if (document.hasFocus()) {
                setActiveStep((prev) => (prev + 1) % steps.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                            Process
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary mb-12">
                            Get Started in <span className="text-secondary">4 Simple Steps</span>
                        </h3>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={cn(
                                        "w-full text-left p-6 rounded-2xl transition-all duration-300 border-2",
                                        activeStep === index
                                            ? "bg-white border-primary/10 shadow-lg"
                                            : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                                            activeStep === index ? "bg-primary text-white" : "bg-slate-200 text-slate-500"
                                        )}>
                                            {index + 1}
                                        </span>
                                        <h4 className="text-xl font-bold text-primary">
                                            {step.title}
                                        </h4>
                                    </div>
                                    <div
                                        className={cn(
                                            "ml-12 overflow-hidden transition-all duration-500 ease-in-out",
                                            activeStep === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                                        )}
                                    >
                                        <p className="text-slate-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto rounded-[3rem] bg-white shadow-2xl overflow-hidden border border-slate-100 p-3">
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-50">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center p-6"
                                    >
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            width={400}
                                            height={400}
                                            className="w-full h-auto object-contain max-h-[80%]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative background blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 blur-[60px] rounded-full -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-[60px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
