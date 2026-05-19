import CTA from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

import Services from "@/components/services/Services";
import Results from "@/components/results/Results";
import About from "@/components/about/About";
import TrustedBy from "@/components/ui/TrustedBy";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hook */}
      <Hero />

      {/* Trusted By */}
      <TrustedBy />

      {/* What you do */}
      <Services />

      {/* Proof */}
      <Results />

      {/* Trust / Personal connection */}
      <About />

      {/* Conversion */}
      <CTA />
    </main>
  );
}
