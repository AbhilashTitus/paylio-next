import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Highlights from "@/components/Highlights";
import Analytics from "@/components/Analytics";
import WhoItsFor from "@/components/WhoItsFor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Highlights />
      <Analytics />
      <WhoItsFor />
      <Footer />
    </main>
  );
}
