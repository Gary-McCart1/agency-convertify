"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCalendly } from "../calendly/CalendlyProvider";
import { trackEvent } from "@/lib/gtag";

export default function CTA() {
  const { open } = useCalendly();

  const handleDirectCall = () => {
    trackEvent("direct_call_form_started");
    open();
  };

  return (
    <>
      <section className="relative overflow-hidden px-6 py-32 bg-slate-50 border-t border-slate-100" id="contact">
        {/* ================= BACKGROUND Ambient Effects ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-cyan-50/30 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-indigo-50/30 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          {/* ================= MAIN CARD ================= */}
          <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_30px_80px_-25px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40" />
            <div className="absolute right-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-100/20 blur-3xl" />
            
            {/* Blueprint Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
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
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                  <MapPin className="h-4 w-4 animate-bounce" />
                  Claim Your Delivery Radius
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="mx-auto mt-6 max-w-4xl text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl"
              >
                Stop Letting Competitors In Your Town Take{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Your High-Paying Calls
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:text-lg"
              >
                Lock in your custom 3-Pack blueprint. I will review your local map metrics, identify your review velocity bottlenecks, and show you exactly what to adjust for a flat fee.
              </motion.p>

              {/* Trust bullets */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap items-center justify-center gap-6"
              >
                {[
                  "No Monthly Retainers",
                  "Built for Service Trades",
                  "Delivered via Personal Video",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold text-slate-500"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 stroke-[3]" />
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
                className="mt-10 flex flex-col items-center justify-center gap-5"
              >
                {/* Action Interface */}
                <div className="flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto">
                  <a href="#quiz" className="w-full sm:w-auto">
                    <Button
                      onClick={() => trackEvent("go_to_lead_quiz")}
                      size="lg"
                      className="group h-15 w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 text-base font-bold text-white shadow-lg transition-all duration-300 hover:opacity-95"
                    >
                      Get Your Free Local Map Audit
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                </div>

                {/* Secondary: Direct call for hot phone leads */}
                <button
                  type="button"
                  onClick={handleDirectCall}
                  className="group mt-2 flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-blue-600"
                >
                  <Calendar className="h-4 w-4 transition-transform group-hover:scale-105" />
                  Need infrastructure setup immediately?{" "}
                  <span className="font-bold text-slate-500 underline underline-offset-4 group-hover:text-blue-600">
                    Skip the video and book a strategy slot
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