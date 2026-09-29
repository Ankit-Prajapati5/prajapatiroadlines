import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Network from "@/components/Network";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Team from "@/components/Team";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SmoothScroll from "@/components/SmoothScroll";
import GSAPReveal from "@/components/GSAPReveal";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <Fleet />
        <Network />
        <WhyUs />
        <Process />
        <Team />
        <QuoteForm />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <GSAPReveal />
      </main>
    </SmoothScroll>
  );
}
