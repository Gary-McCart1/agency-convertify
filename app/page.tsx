import Hero from "@/components/hero/Hero";
import TrustBadges from "@/components/ui/TrustBadges"; // Upgraded from TrustedBy
import Services from "@/components/services/Services";
import AuditCTACard from "@/components/AuditCTACard";   // Positioned strategically after value setup
import HowItWorks from "@/components/howItWorks/HowItWorks"; // Added for process friction reduction
import SystemValue from "@/components/results/SystemValue"; // Refactored from "Results" to sell features/pricing
import About from "@/components/about/About";
import CTA from "@/components/cta/Cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black antialiased">
      {/* 1. HOOK: Immediate value proposition */}
      <Hero />

      {/* 2. SILENT TRUST: Local accountability / Security badges */}
      <TrustBadges />

      {/* 3. CAPABILITY: What we build for your business */}
      <Services />

      {/* 4. VALUE TRIGGER: High-intent lead capture based on the services above */}
      <div className="bg-slate-50 py-12">
        <AuditCTACard />
      </div>

      {/* 5. PROCESS SIMPLICITY: Shows them it takes 0 mins of their time */}
      <HowItWorks />

      {/* 6. TRANSPARENCY/VALUE: The $249 flat-rate stack & UI deliverables */}
      <SystemValue />

      {/* 7. LOCAL AFFINITY: "Hey, I'm right down the road in NC" */}
      <About />

      {/* 8. CLOSING CONVERSION: Final action push */}
      <CTA />
    </main>
  );
}