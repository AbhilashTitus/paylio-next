"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-50 min-h-screen font-sans text-slate-600">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Privacy Policy
                    </motion.h1>

                </div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-14 shadow-sm border border-slate-100 prose prose-slate max-w-none hover:prose-a:text-accent prose-headings:font-heading prose-headings:text-primary"
                >
                    <p className="lead">
                        Paylio ("we," "our," or "us"), operated by Ignivox Tech Pvt Ltd, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application (collectively, the "Platform").
                    </p>
                    <p>
                        This Privacy Policy is published in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules").
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>
                        We collect information that identifies you personally and financial information necessary to provide our services.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and PAN card details for identity verification (KYC).</li>
                        <li><strong>Business Information:</strong> GSTIN, business name, and freelance category.</li>
                        <li><strong>Financial Information:</strong> Bank account details, UPI IDs, and transaction history for processing payments and invoicing.</li>
                        <li><strong>Device Information:</strong> IP address, browser type, device ID, and operating system details.</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>
                        We use the information we collect for the following specific purposes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To provide and maintain our Service, including invoicing and payment tracking.</li>
                        <li>To process transactions and send you related information, including confirmations and invoices.</li>
                        <li>To verify your identity and prevent fraud as per Indian banking regulations.</li>
                        <li>To send you technical notices, updates, security alerts, and support messages.</li>
                        <li>To comply with legal obligations under the GST Act and IT Act.</li>
                    </ul>

                    <h3>3. Sharing of Information</h3>
                    <p>
                        We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Service Providers:</strong> With third-party vendors, such as payment gateways (e.g., Razorpay, Stripe) and cloud service providers, who need access to such information to carry out work on our behalf.</li>
                        <li><strong>Legal Requirements:</strong> If required to do so by law or in the good-faith belief that such action is necessary to comply with state and central laws of India (e.g., disclosure to tax authorities).</li>
                        <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your data. All sensitive financial data is encrypted in transit and at rest using industry-standard protocols (AES-256). However, please note that no method of transmission over the Internet is 100% secure.
                    </p>

                    <h3>5. Your Rights</h3>
                    <p>
                        Under the SPDI Rules, you have the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Review the information you have supplied to us.</li>
                        <li>Request correction of inaccurate or deficient information.</li>
                        <li>Withdraw your consent to our use of your information at any time, subject to legal usage requirements.</li>
                    </ul>

                    <h3>6. Grievance Officer</h3>
                    <p>
                        In accordance with the Information Technology Act, 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl not-prose mt-4 border border-slate-100">
                        <p className="font-bold text-primary">Grievance Officer</p>
                        <p className="text-sm mt-1">Ignivox Tech Pvt Ltd</p>
                        <p className="text-sm mt-1">Plumeria, 17 CPR Layout Road, Haralur Main Rd</p>
                        <p className="text-sm">HSR Layout, Bengaluru, Karnataka 560102</p>
                        <p className="text-sm mt-2"><strong>Email:</strong> info@paylio.in</p>
                        <p className="text-sm"><strong>Phone:</strong> +91 8431191991</p>
                    </div>

                    <h3>7. Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@paylio.in" className="text-accent hover:underline">info@paylio.in</a>.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
