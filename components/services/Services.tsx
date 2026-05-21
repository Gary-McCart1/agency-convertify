// components/services/Services.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe,
  Layers,
  LayoutDashboard,
  Megaphone
} from "lucide-react";

const services = [
  {
    title: "Google Ads",
    description:
      "High-converting paid search campaigns engineered to generate qualified leads and measurable ROI.",
    icon: Megaphone,
    accent: "from-blue-500 to-cyan-500",
    stats: "$250k+ Managed",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed to turn traffic into customers with clear user journeys.",
    icon: LayoutDashboard,
    accent: "from-purple-500 to-indigo-500",
    stats: "Optimized UX",
  },
  {
    title: "SEO",
    description:
      "Long-term organic growth strategies that improve visibility, rankings, and inbound traffic.",
    icon: Globe,
    accent: "from-emerald-500 to-teal-500",
    stats: "Organic Growth",
  },
  {
    title: "Analytics",
    description:
      "Advanced tracking systems, attribution setup, and data-driven optimization for smarter decisions.",
    icon: BarChart3,
    accent: "from-orange-500 to-amber-500",
    stats: "Performance Insights",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-32"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-100/20 blur-3xl" />
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
          <Layers className="h-4 w-4" />
            Systems That Scale
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
            Growth Systems Built
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              To Scale
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            We combine paid media, landing page design, analytics,
            and performance strategy to help businesses generate
            more leads and revenue.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
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
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]`}
                />

                {/* Top Accent Line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${service.accent}`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <div className="mt-7 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-black">
                      {service.title}
                    </h3>

                    <div className="rounded-full border border-black/5 bg-zinc-50 p-2 transition group-hover:bg-white">
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-relaxed text-zinc-600">
                    {service.description}
                  </p>

                  {/* Bottom Meta */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>

                      <span className="text-sm font-medium text-zinc-500">
                        Performance Focused
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-black">
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
          viewport={{ once: true }}
          className="mt-24 border-t border-black/5 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
                Built For Growth
              </p>

              <h3 className="mt-2 text-2xl font-bold text-black">
                Designed To Generate Measurable Results
              </h3>
            </div>

            <p className="max-w-xl text-zinc-600">
              Combining creative design with performance marketing
              systems to help brands scale through data-backed growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}