"use client";

import { motion } from "framer-motion";
import { User, Users, Briefcase, Building2 } from "lucide-react";

const audiences = [
    {
        title: "Freelancers",
        description: "Get paid faster and track your growth without messy spreadsheets.",
        icon: <User size={32} className="text-blue-500" />,
    },
    {
        title: "Agencies",
        description: "Manage multiple clients, team revenues, and agency-grade invoicing.",
        icon: <Users size={32} className="text-green-500" />,
    },
    {
        title: "Consultants",
        description: "Focus on your advice, let us handle the retainer and project payments.",
        icon: <Briefcase size={32} className="text-purple-500" />,
    },
    {
        title: "Small Businesses",
        description: "A complete financial OS to run your operation with zero clutter.",
        icon: <Building2 size={32} className="text-orange-500" />,
    },
];

export default function WhoItsFor() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
                        Audience
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Designed for the <span className="text-secondary">modern economy.</span>
                    </h3>
                    <p className="text-lg text-slate-500">
                        Paylio is built for the specific needs of service-based businesses in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">
                                {item.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
