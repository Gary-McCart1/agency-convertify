"use client";

import { ClipboardCheck, ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Claim Your Video Audit",
    description:
      "Fill out our 45-second quiz. Within 24 hours, we send you a custom Loom video breaking down your direct local map leakages and how competitors are winning your area's best jobs.",
    icon: ClipboardCheck,
    badge: "Takes < 1 min",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    number: "02",
    title: "We Deploy Your Framework",
    description:
      "We fully optimize your Google Business Profile and plug your existing customer lists directly into our automated SMS review engine. Zero heavy lifting or technical setup required from your crew.",
    icon: ShieldCheck,
    badge: "72-Hour Turnaround",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    number: "03",
    title: "Dominate the 3-Pack",
    description:
      "As your 5-star review velocity spikes, your listing pushes to the top of Google Maps. Happy customers drop straight onto your phone lines as hands-free, organic inbound calls.",
    icon: PhoneCall,
    badge: "100% Autopilot",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-50/50 py-24 px-6 overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute inset-0 opacity-[0.02] -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-200">
            The Process
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From invisible to the #1 choice in 3 steps
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We don&apos;t buy hours of your time with endless onboarding calls. We build, integrate, and launch your customer-generation dashboard seamlessly in the background.
          </p>
        </div>

        {/* ================= STEPS GRID ================= */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-slate-200 group-hover:text-blue-100 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-slate-700">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Badging */}
                  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${step.badgeColor} mb-4`}>
                    {step.badge}
                  </span>

                  {/* Title & Body */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Connector for Desktop Grid */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="h-5 w-5 animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}