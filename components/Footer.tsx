"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Apple, PlayCircle, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 font-sans">
                {/* Final CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[3rem] bg-primary p-12 md:p-20 text-center mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent blur-[100px] rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Run your business. <br />
                            Not your spreadsheets.
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Join over 10,000+ freelancers and agencies scaling their business with Paylio. Start for free today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <button className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-accent/20">
                                App Launching Soon
                            </button>
                            {/* <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all font-medium">
                                    <Apple size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-60">Download on</p>
                                        <p className="text-sm">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all font-medium">
                                    <PlayCircle size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-60">GET IT ON</p>
                                        <p className="text-sm">Play Store</p>
                                    </div>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </motion.div>

                {/* Footer Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16 px-4">
                    <div className="col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/Paylio logo.svg"
                                alt="Paylio Logo"
                                width={150}
                                height={50}
                                className="h-10 w-auto mb-4"
                            />
                        </Link>
                        <p className="text-slate-500 max-w-xs leading-relaxed">
                            The premium financial operating system for the next generation of digital entrepreneurs.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-primary mb-6">Product</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="/#features" className="hover:text-primary transition-colors">Invoicing</Link></li>
                            <li><Link href="/#features" className="hover:text-primary transition-colors">UPI Payments</Link></li>
                            <li><Link href="/#analytics" className="hover:text-primary transition-colors">Analytics</Link></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h5 className="font-bold text-primary mb-6">Company</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Trust</Link></li>
                        </ul>
                    </div> */}

                    <div>
                        <h5 className="font-bold text-primary mb-6">Legal</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h5 className="font-bold text-primary mb-6">Support</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Support Chat</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Status</Link></li>
                        </ul>
                    </div> */}

                    <div className="col-span-2 md:col-span-2 lg:col-span-2">
                        <h5 className="font-bold text-primary mb-6">Contact Us</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <a href="mailto:info@paylio.in" className="hover:text-primary transition-colors break-words">info@paylio.in</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <a href="tel:+918431191991" className="hover:text-primary transition-colors">+91 8431191991</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <address className="leading-relaxed not-italic text-xs">
                                    Plumeria, 17 CPR Layout Road, Haralur Main Rd, opp. OZONE EVERGREENS, PWD Quarters, Apartment, HSR Layout, Bengaluru, Karnataka 560102
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-12 flex flex-col items-center justify-center gap-6 text-sm text-slate-500 text-center">
                    <p>© 2026 Paylio. An Ignivox Tech Pvt Ltd Ecosystem.</p>
                    {/* <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary underline-offset-4 hover:underline">Twitter</Link>
                        <Link href="#" className="hover:text-primary underline-offset-4 hover:underline">LinkedIn</Link>
                        <Link href="#" className="hover:text-primary underline-offset-4 hover:underline">Instagram</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
