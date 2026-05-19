// components/results/Results.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Sparkles,
  Users,
  MousePointerClick,
} from "lucide-react";

const results = [
  {
    title: "Desentify",
    category: "E-Commerce Growth",
    metric: "+22% ROAS",
    subMetric: "$5K+ Ad Spend Managed",
    description:
      "Managed paid campaigns across Google, Meta, and TikTok while improving return on ad spend through audience segmentation, creative testing, and bid optimization.",
    insight:
      "Also improved conversion rate by 18% through landing page and checkout optimization using Hotjar analysis and A/B testing.",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Trasora",
    category: "Social Platform Launch",
    metric: "100+ Users",
    subMetric: "90+ User Posts",
    description:
      "Built and launched a music-focused social platform using organic social content, referral campaigns, and community-driven growth loops.",
    insight:
      "Implemented GA4 event tracking and funnel analytics to monitor activation, engagement, and retention behavior.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Marketing Systems",
    category: "Analytics + CRO",
    metric: "50+ Creatives Tested",
    subMetric: "18% CVR Increase",
    description:
      "Created and analyzed paid ad creatives, landing page experiments, and conversion funnels focused on lowering CAC and improving user acquisition efficiency.",
    insight:
      "Experienced with GA4, GTM, Hotjar, Meta Ads, Google Ads, SEO tooling, and conversion-focused UX systems.",
    icon: MousePointerClick,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="
        relative overflow-hidden
        bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30
        px-6 py-32
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-0
            h-[550px] w-[550px]
            -translate-x-1/2
            rounded-full
            bg-blue-200/20 blur-3xl
          "
        />

        <div
          className="
            absolute bottom-[-20%] right-[-10%]
            h-[400px] w-[400px]
            rounded-full
            bg-cyan-200/20 blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-blue-100
              bg-white/80 px-4 py-2
              text-sm font-medium text-blue-600
              shadow-sm backdrop-blur-sm
            "
          >
            <BarChart3 className="h-4 w-4" />
            Real Performance Metrics
          </div>

          <h2
            className="
              mt-6 text-4xl font-bold tracking-tight
              text-black md:text-6xl
            "
          >
            Growth Backed By Real Execution
          </h2>

          <p
            className="
              mt-6 max-w-2xl text-lg leading-relaxed
              text-zinc-600
            "
          >
            From paid media optimization to conversion-focused design and
            analytics infrastructure, every project is built around measurable
            business outcomes.
          </p>
        </motion.div>

        {/* ================= TOP STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-16 grid gap-6
            rounded-[36px]
            border border-black/5
            bg-white/70 p-8
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            md:grid-cols-4
          "
        >
          {[
            {
              value: "$5K+",
              label: "Advertising Spend Managed",
            },
            {
              value: "+22%",
              label: "ROAS Improvement",
            },
            {
              value: "+18%",
              label: "Conversion Rate Increase",
            },
            {
              value: "100+",
              label: "Users Acquired",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center md:text-left"
            >
              <h3
                className="
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  bg-clip-text text-4xl font-bold
                  text-transparent
                "
              >
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ================= RESULT CARDS ================= */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {results.map((result, index) => {
            const Icon = result.icon;

            return (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-black/5
                  bg-white/80 p-8
                  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 blur-3xl
                    transition-opacity duration-500
                    group-hover:opacity-20
                    bg-gradient-to-br ${result.gradient}
                  `}
                />

                {/* Hover Border */}
                <div
                  className="
                    absolute inset-0 rounded-[32px]
                    border border-transparent
                    transition-all duration-300
                    group-hover:border-blue-100
                  "
                />

                <div className="relative">
                  {/* ================= TOP ================= */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`
                        flex h-15 w-15 items-center justify-center
                        rounded-2xl bg-gradient-to-br
                        ${result.gradient}
                        shadow-lg
                      `}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <ArrowUpRight
                      className="
                        h-5 w-5 text-zinc-300
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-black
                      "
                    />
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="mt-8">
                    <p
                      className="
                        text-sm font-semibold uppercase
                        tracking-[0.15em] text-zinc-400
                      "
                    >
                      {result.category}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold text-black">
                      {result.metric}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-blue-600">
                      {result.subMetric}
                    </p>

                    <h4 className="mt-5 text-2xl font-semibold text-black">
                      {result.title}
                    </h4>

                    <p className="mt-4 leading-relaxed text-zinc-600">
                      {result.description}
                    </p>

                    <div
                      className="
                        mt-5 rounded-2xl border border-blue-100
                        bg-blue-50/70 p-4
                      "
                    >
                      <p className="text-sm leading-relaxed text-zinc-700">
                        {result.insight}
                      </p>
                    </div>
                  </div>

                  {/* ================= FOOTER ================= */}
                  <div className="mt-8 border-t border-black/5 pt-5">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>

                      Data-Driven Optimization
                    </div>
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