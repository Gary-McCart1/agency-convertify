"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Target, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const directDifferentiators = [
  {
    icon: Target,
    title: "Contractor Specialty",
    description:
      "I don't serve startups or e-commerce brands. I build search engines strictly for local roofers, plumbers, and landscapers who rely on their phone lines.",
  },
  {
    icon: Sparkles,
    title: "Deliverables, Not Retainers",
    description:
      "I focus on deploying technical map infrastructure for a flat fee. You own the optimization asset outright—zero forced, indefinite monthly marketing contracts.",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-white py-24 px-6 border-t border-slate-100 overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* ================= LEFT SIDE: ACCOUNTABILITY (TRUST) ================= */}
          <div className="lg:col-span-5 relative group flex items-center justify-center">
            {/* Visual Flair Elements */}
            <motion.div
              className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-blue-50/50 -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-full border-4 border-white shadow-2xl"
              >
                {/* 🎯 ACTION: Replace with your actual trusted headshot asset */}
                <Image
                  src="/Gary.JPG" // Placeholder based on your suit headshot
                  alt="Gary McCart - Founder, Convertify Agency"
                  width={400} // Tailored for a crisp round frame
                  height={400}
                  className="h-72 w-72 md:h-80 md:w-80 rounded-full object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-102"
                />
              </motion.div>

              {/* Local Accountability Badge */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-4 md:-right-8 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border-4 border-white">
                <MapPin className="h-5 w-5 animate-pulse" />
                <span className="font-bold tracking-tight text-sm">
                  Fuquay-Varina Native
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: MISSION (WHY ME?) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-200">
                The Architect
              </h2>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                I help contractors stop losing high-paying jobs in their
                hometown.
              </p>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900">I am Gary McCart,</strong>{" "}
                and Convertify Agency is not some faceless software startup. I
                am a local professional based in Fuquay-Varina who understands
                exactly how difficult it is for local HVAC, roofing, and
                landscaping crews to dominate their delivery radius on Google
                Maps without an in-house marketing department.
              </p>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                The problem isn&apos;t your field work—it&apos;s your search
                visibility infrastructure. We eliminate that map invisibility by
                deploying technical local optimizations for a transparent flat
                rate. When the phone starts ringing more, you handle the service
                calls, and we shake hands.
              </p>

              {/* Unique Contractor Value Differentiators */}
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {directDifferentiators.map((diff, idx) => {
                  const Icon = diff.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-slate-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="h-4.5 w-4.5 stroke-[2.5]" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm tracking-tight">
                          {diff.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Call to action with direct local affinity */}
              <div className="mt-12 flex items-center gap-4 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl p-5 shadow-inner">
                <MapPin className="h-10 w-10 text-blue-600 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Ready to see where your listing is leaking local jobs in
                    Apex, Cary, or Fuquay?
                  </p>
                  <a
                    href="#quiz"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mt-1.5 group"
                  >
                    Claim your raw video audit{" "}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
