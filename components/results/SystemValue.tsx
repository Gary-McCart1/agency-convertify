"use client";

import { Check, ShieldCheck, Zap, MessageSquare, Star } from "lucide-react";

const highIntentFeatures = [
  {
    icon: Zap,
    title: "Continuous Proximity Expansion",
    description: "Map rankings shift daily. We actively optimize your category stacking, metadata, and localized service descriptions to constantly push your ranking radius deeper into surrounding neighborhoods.",
  },
  {
    icon: MessageSquare,
    title: "Automated SMS Review Loop",
    description: "Plug in your active client lists. Our system automatically texts customers immediately after a job closes—capturing 5-star reviews while the experience is fresh.",
  },
  {
    icon: Star,
    title: "Active Negative Review Shield",
    description: "Friction-free filtering prevents unexpected 1-star hits from trashing your ranking score by routing unhappy customer feedback directly to a private channel for you to solve.",
  },
];

const checklistItems = [
  "Continuous GBP Audit & Maintenance",
  "Ongoing Category & Keyword Optimization",
  "Hands-Free Customer SMS System Active",
  "Custom QR Review Card Artwork Assets",
  "Monthly Competitor Proximity Analysis",
  "Cancel Anytime — No Long-Term Contracts",
];

export default function SystemValue() {
  return (
    <section id="system-value" className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-200">
            The Deliverables
          </h2>
          <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The Map Optimization Blueprint
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We don&apos;t charge you a massive $1,500 monthly agency retainer just to watch your dashboard sit there. We run a lean, high-performance optimization system that keeps your local search engine primed to turn Google Maps traffic into continuous plumbing, roofing, or landscaping calls.
          </p>
        </div>

        {/* ================= MAIN VALUE BLOCKS ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Core Value Mechanics */}
          <div className="lg:col-span-7 space-y-10">
            {highIntentFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pricing Transparency Card */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-8">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50/30 rounded-3xl -z-10 blur-xl opacity-70" />
            
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    Monthly Optimization
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mt-2">The Growth Plan</h4>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-slate-900">$249</span>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">Per Month</p>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Safety Assurances */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Flexible Month-to-Month:</strong> No locked-in long-term annual contracts. We earn your business month after month by keeping your ranking phone lines active. Cancel anytime.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}