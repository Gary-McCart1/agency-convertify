"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  BarChart3,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const caseStudies = [
  {
    title: "Desentify",
    type: "Performance Marketing & CRO",
    metric: "+22% ROAS",
    subMetric: "Multi-Channel Paid Acquisition",
    description:
      "Managed and optimized paid acquisition campaigns across Google, Meta, and TikTok for a fitness e-commerce brand focused on improving conversion efficiency and return on ad spend.",
    highlights: [
      "Improved ROAS by 22% through audience targeting and creative optimization",
      "Increased conversion rate by 18% via landing page testing and funnel improvements",
      "Implemented GA4 and Hotjar tracking for user behavior and funnel analysis",
    ],
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Trasora",
    type: "Paid Acquisition & Growth Experiment",
    metric: "5.81% CVR",
    subMetric: "Google Search Acquisition Campaign",
    description:
      "Built and launched a Google Search acquisition campaign for a social music platform, implementing analytics infrastructure, conversion tracking, and growth experimentation to validate user acquisition and engagement behavior.",
    highlights: [
      "Achieved 1.79% CTR across high-intent music discovery keywords",
      "Implemented GA4, GTM, and conversion tracking infrastructure",
      "Tested messaging focused on social music discovery and daily sharing behavior",
    ],
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Marketing Analytics",
    type: "Tracking & Growth Infrastructure",
    metric: "50+ Creatives",
    subMetric: "Analytics & Funnel Optimization",
    description:
      "Built marketing infrastructure for tracking user behavior, analyzing conversion funnels, and optimizing campaign performance across growth initiatives and digital products.",
    highlights: [
      "Implemented GA4 + GTM event tracking architecture",
      "Built conversion tracking systems for acquisition funnels",
      "Analyzed user engagement and activation behavior across campaigns",
    ],
    icon: BarChart3,
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
            Performance-focused marketing case studies spanning paid acquisition,
            analytics implementation, conversion optimization, and growth
            experimentation across startups and digital products.
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

                  <p className="mt-4 leading-relaxed text-zinc-600">
                    {study.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {study.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex gap-2 text-sm text-zinc-600"
                      >
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