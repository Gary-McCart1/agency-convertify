"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  MousePointerClick,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const caseStudies = [
  {
    title: "Desentify",
    type: "E-Commerce Growth Test",
    metric: "+22% ROAS",
    subMetric: "$5K+ Ad Spend Managed",
    description:
      "Ran paid acquisition tests across Meta, Google, and TikTok for a fitness e-commerce product focused on grip strength training.",
    highlights: [
      "Improved ROAS by optimizing audiences and creative rotation",
      "Increased conversion rate by 18% through landing page testing",
      "Implemented Hotjar + GA4 tracking for funnel visibility",
    ],
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Trasora",
    type: "Social Platform Launch",
    metric: "100+ Users",
    subMetric: "Organic + Referral Growth",
    description:
      "Built and launched a music-focused social platform driven entirely through organic social content and referral incentives.",
    highlights: [
      "Acquired users via LinkedIn, Instagram, and Snapchat content",
      "Ran $500 referral competition to stimulate early growth",
      "Implemented GA4 event tracking for activation analysis",
    ],
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Marketing Systems",
    type: "Tracking & CRO Infrastructure",
    metric: "50+ Creatives Tested",
    subMetric: "Conversion Optimization Systems",
    description:
      "Built marketing infrastructure for testing creatives, tracking funnels, and optimizing conversion performance across campaigns.",
    highlights: [
      "Set up GA4 + GTM event tracking architecture",
      "Tested 50+ ad creatives across multiple campaigns",
      "Improved funnel conversion efficiency by 18%",
    ],
    icon: MousePointerClick,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function CaseStudiesPage() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30
        px-6 py-32
      "
    >
      {/* ================= BACK BUTTON ================= */}

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="
      z-50
      inline-flex items-center justify-center
      rounded-full border border-blue-100
      bg-white/70 p-3
      text-zinc-700
      shadow-sm backdrop-blur-xl
      transition-all duration-300
      hover:scale-105 hover:bg-white/90 hover:shadow-md
    "
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>

            <div
              className="
      inline-flex items-center gap-2
      rounded-full border border-blue-100
      bg-white/70 px-4 py-2
      text-sm font-medium text-blue-600
      shadow-sm backdrop-blur-xl
    "
            >
              Real Work & Results
            </div>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-black md:text-6xl">
            Case Studies
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            A collection of real projects where I built and optimized growth
            systems — from paid ads to product launches and conversion tracking
            infrastructure.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;

            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-black/5
                  bg-white/70
                  p-8
                  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 blur-3xl
                    transition-opacity duration-500
                    group-hover:opacity-15
                    bg-gradient-to-br ${study.gradient}
                  `}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl bg-gradient-to-br ${study.gradient}
                        shadow-lg
                      `}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-zinc-300 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
                  </div>

                  <p className="mt-6 text-sm uppercase tracking-[0.15em] text-zinc-400">
                    {study.type}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-black">
                    {study.metric}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-blue-600">
                    {study.subMetric}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold text-black">
                    {study.title}
                  </h3>

                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {study.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2 text-sm text-zinc-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-black/5 pt-5 text-sm text-zinc-500">
                    Live project experience
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
