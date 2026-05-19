// components/about/About.tsx

"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, LayoutDashboard } from "lucide-react";

const pillars = [
  {
    title: "Hands-On Execution",
    description:
      "I personally build and manage the systems — from landing pages and tracking setups to ad campaigns and optimization.",
    icon: TrendingUp,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Every change is backed by numbers. I focus on improving what actually impacts leads, calls, and revenue — not vanity metrics.",
    icon: LayoutDashboard,
  },
  {
    title: "Technical + Marketing Hybrid",
    description:
      "I bridge development and marketing to create complete growth systems most agencies don’t have the technical ability to build.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            About Me
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
            I build growth systems for local businesses
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-600">
            I help service-based businesses get more leads and customers through
            paid ads, landing pages, and conversion tracking systems that show
            what’s actually working.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Instead of outsourcing or delegating everything, I stay directly
            involved in the work — from strategy to implementation — so nothing
            gets lost between planning and execution.
          </p>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-black">+22%</h3>
              <p className="mt-2 text-sm text-zinc-500">
                ROAS improvement (eCom test)
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black">100+</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Users acquired (organic systems)
              </p>
            </div>

            
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="
                  group rounded-[28px]
                  border border-black/5
                  bg-gradient-to-br from-white to-blue-50/40
                  p-8 shadow-sm
                  transition-all duration-300
                  hover:shadow-xl
                "
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-black">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-zinc-600">
                      {pillar.description}
                    </p>
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