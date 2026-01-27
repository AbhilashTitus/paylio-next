"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
                        Terms of Service
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
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Paylio website and mobile application (the "Service") operated by Alenova Technologies Private Limited ("us", "we", or "our").
                    </p>
                    <p>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>

                    <h3>1. Eligibility</h3>
                    <p>
                        By accessing or using the Service, you represent and warrant that you are at least 18 years of age and satisfy the eligibility requirements to enter into a contract under the Indian Contract Act, 1872. If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind that entity to these Terms.
                    </p>

                    <h3>2. Accounts</h3>
                    <p>
                        When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                    </p>

                    <h3>3. Use of Services (Invoicing & Payments)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Invoicing:</strong> Paylio provides tools to create and manage professional invoices. You are solely responsible for the accuracy of the details entered in the invoices.</li>
                        <li><strong>Payments:</strong> Paylio facilitates specialized payment tracking and may integrate with third-party payment gateways (like Razorpay/UPI). We are not a bank. We act as a technology provider.</li>
                        <li><strong>Taxes:</strong> You are solely responsible for determining, collecting, reporting, and paying all applicable taxes (such as GST) associated with your use of the Service.</li>
                    </ul>

                    <h3>4. Intellectual Property</h3>
                    <p>
                        The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Alenova Technologies Private Limited and its licensors. The Service is protected by copyright, trademark, and other laws of India.
                    </p>

                    <h3>5. Links to Other Web Sites</h3>
                    <p>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Paylio. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                        In no event shall Alenova Technologies Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                    </p>

                    <h3>7. Governing Law</h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
                    </p>

                    <h3>8. Changes</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h3>9. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl not-prose mt-4 border border-slate-100">
                        <p className="text-sm mt-1">Alenova Technologies Private Limited</p>
                        <p className="text-sm mt-1">2nd Floor, Shamanna Reddy Building, 70/5, Rajiv Gandhi Nagar</p>
                        <p className="text-sm">Bommanahalli, Bengaluru, Karnataka 560068</p>
                        <p className="text-sm mt-2"><strong>Email:</strong> info@paylio.in</p>
                        <p className="text-sm"><strong>Phone:</strong> +91 8904284704</p>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
