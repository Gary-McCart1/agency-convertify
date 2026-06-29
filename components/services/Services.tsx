"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Star,
  MessageSquare,
  BadgeCheck,
  Layers
} from "lucide-react";

// Optimized Service Data - Directly selling the contractor value proposition
const services = [
  {
    title: "GBP Optimization",
    description:
      "A complete white-hat technical overhaul of your Google Business Profile to capture maximum local visibility in the Map 3-Pack.",
    icon: MapPin,
    accent: "from-blue-600 to-cyan-500",
    stats: "White-Hat Compliant",
  },
  {
    title: "Automated SMS Loop",
    description:
      "We build and integrate an autopilot text message request system that gets customers to leave a 5-star review *while your crew is in the driveway*.",
    icon: MessageSquare,
    accent: "from-amber-500 to-orange-500",
    stats: "Hands-Free Flow",
  },
  {
    title: "Negative Review Shield",
    description:
      "Friction-free, internal filtering prevents problematic 1-to-3 star experiences from publishing publicly, trashing your overall ranking score.",
    icon: Star,
    accent: "from-emerald-500 to-teal-500",
    stats: "Reputation Guard",
  },
  {
    title: "Local Proximity Lock",
    description:
      "Optimizing your listing to push your pinpoint ranking radius deeper into local neighborhoods.",
    icon: BadgeCheck,
    accent: "from-purple-500 to-indigo-500",
    stats: "Localized Affinity",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24 border-t border-zinc-100"
    >
      {/* Ambient Background - Preserved for polish */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-50/50 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-50/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            <Layers className="h-4 w-4" />
            Infrastructure That Rings
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">
            Local Systems Built
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              To Generate Leads
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-zinc-600 md:text-xl">
            We don&apos;t sell open-ended agency retainers. We deploy the technical infrastructure, automated review loops, and negative-feedback shielding systems that your local contracting business needs to dominate locally.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
              >
                {/* Hover Glow Accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.10]`}
                />

                {/* Top Accent Line */}
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${service.accent}`}
                />

                <div className="relative">
                  {/* Icon Card */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white stroke-[2.5]" />
                  </div>

                  {/* Title & Arrow */}
                  <div className="mt-8 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-black group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>

                    <div className="rounded-full border border-black/5 bg-zinc-50 p-2 transition group-hover:bg-white group-hover:border-black/10">
                      <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-relaxed text-zinc-600 text-sm">
                    {service.description}
                  </p>

                  {/* Bottom Meta Bar */}
                  <div className="mt-10 flex items-center justify-between border-t border-black/5 pt-5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Convertify System
                      </span>
                    </div>

                    <span className="text-sm font-bold tracking-tight text-slate-800">
                      {service.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= TRUST STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 border-t border-black/5 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                A Local specialized utility
              </p>

              <h3 className="mt-2 text-2xl font-black text-black tracking-tight">
                Built For Home Service Contractors
              </h3>
            </div>

            <p className="max-w-xl text-zinc-600 leading-relaxed">
              We deploy white-hat Google Business Profile local optimizations and hands-free review management systems that convert local searchers into your specific service trades calls and inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}