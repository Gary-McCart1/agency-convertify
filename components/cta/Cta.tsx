// components/cta/CTA.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Rocket, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuditForm from "@/components/AuditForm";
import { useCalendly } from "../calendly/CalendlyProvider";

export default function CTA() {
  const { open } = useCalendly();

  return (
    <>
      <section className="relative overflow-hidden px-6 py-32" id="contact">
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          {/* ================= MAIN CARD ================= */}
          <div className="relative overflow-hidden rounded-[42px] border border-black/5 bg-white/80 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
            <div className="absolute right-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-md">
                  <Rocket className="h-4 w-4" />
                  Let&apos;s Grow Your Business
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="mx-auto mt-8 max-w-5xl text-center text-5xl font-bold leading-[1.05] tracking-tight text-black md:text-7xl"
              >
                Turn Your Website Into A{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  Lead Generation Machine
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-zinc-600 md:text-xl"
              >
                We help brands scale through Google Ads, conversion-focused
                landing pages, analytics, and high-performance growth systems
                designed to increase revenue.
              </motion.p>

              {/* Trust bullets */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6"
              >
                {[
                  "Conversion-Focused",
                  "Analytics Driven",
                  "Built To Scale",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* ================= CTA BUTTONS ================= */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-col items-center justify-center gap-4"
              >
                {/* Primary: Audit */}
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a href="#quiz">
                    <Button
                      size="lg"
                      className="group h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 text-base font-semibold text-white shadow-[0_15px_35px_-10px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_-12px_rgba(37,99,235,0.55)]"
                    >
                      Get Your Free Website Audit
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>

                  <Link href="/case-studies">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-16 rounded-full border-black/10 bg-white px-10 text-base font-semibold text-black shadow-md transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
                    >
                      View Case Studies
                    </Button>
                  </Link>
                </div>

                {/* Secondary: Direct call for warm leads */}
                <button
                  onClick={open}
                  className="group mt-1 flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-blue-600"
                >
                  <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Already know what you need?{" "}
                  <span className="font-medium text-zinc-600 underline underline-offset-2 group-hover:text-blue-600">
                    Skip ahead and book a call
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
