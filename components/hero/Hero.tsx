"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

import FloatingCard from "@/components/ui/FloatingCard";

import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  MapPin,
  Star,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/gtag";

const contractorMockups = [
  {
    title: "Local Visibility Engine",
    category: "Map Pack Placement System",
    metric: "Continuous 3-Pack Growth",
    highlight: "Optimized Search Signals",
    color: "from-blue-600 to-indigo-600",
    accentColor: "bg-blue-50 text-blue-600 border-blue-200",
    icon: MapPin,
    link: "#",
    rotation: -3,
    scale: 1,
    renderContent: () => (
      <div className="w-full h-44 bg-slate-50 p-4 rounded-t-xl border-b border-slate-100 flex flex-col gap-3 font-sans select-none">
        {/* Mock Search Header */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
          <div className="h-2 w-32 bg-slate-200 rounded-full" />
        </div>
        
        {/* Mock Map 3-Pack Stack */}
        <div className="space-y-2">
          {/* #1 Tier: Client Profile */}
          <div className="bg-white p-2.5 rounded-xl border-2 border-blue-500 shadow-sm flex justify-between items-center">
            <div>
              <div className="h-2.5 w-28 bg-slate-900 rounded-full font-bold" />
              <div className="flex items-center gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-[10px]">★</span>
                ))}
                <span className="text-[9px] text-slate-500 ml-1 font-medium">(142) • Active</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">Top 1</div>
          </div>
          
          {/* #2 Tier: Competitor Profile */}
          <div className="bg-white/60 p-2.5 rounded-xl border border-slate-200 flex justify-between items-center opacity-50">
            <div>
              <div className="h-2 w-24 bg-slate-700 rounded-full" />
              <div className="flex items-center gap-0.5 mt-1.5">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-[10px]">★</span>
                ))}
                <span className="text-[9px] text-slate-400 ml-1">(24)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Frictionless SMS Request",
    category: "Automated Customer Workflow",
    metric: "Active Text Triggers",
    highlight: "Dispatched From The Driveway",
    color: "from-amber-500 to-orange-500",
    accentColor: "bg-amber-50 text-amber-600 border-amber-200",
    icon: Star,
    link: "#",
    rotation: 2,
    scale: 0.95,
    renderContent: () => (
      <div className="w-full h-44 bg-slate-950 p-4 rounded-t-xl border-b border-slate-900 flex flex-col justify-end font-sans select-none relative overflow-hidden">
        {/* Subtle iOS Gloss Bar Effect */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-white/[0.02]" />
        
        <div className="space-y-2 max-w-[90%] self-end">
          <span className="text-[9px] font-bold text-slate-500 block text-right mr-1">iMessage • Today</span>
          
          {/* Active Review SMS Chat Bubble */}
          <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-3 py-2 text-xs leading-relaxed shadow-md">
            <p className="text-[11px]">
              Thanks for choosing us today! Could you leave us a quick review on our Google Map profile? Takes 10 seconds: <span className="underline font-medium text-blue-100">cftify.co/r/5x</span>
            </p>
          </div>
          
          {/* Incoming Star Notification Overlay */}
          <div className="bg-white rounded-lg p-2 shadow-xl flex items-center gap-2 border border-slate-100 transform translate-y-0.5 max-w-[140px] animate-pulse">
            <span className="text-xs">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Internal Feedback Filter",
    category: "Negative Review Shielding",
    metric: "Live Damage Control",
    highlight: "Catches Deficiencies Privately",
    color: "from-emerald-500 to-teal-500",
    accentColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    icon: MessageSquare,
    link: "#",
    rotation: -1,
    scale: 0.98,
    renderContent: () => (
      <div className="w-full h-44 bg-emerald-50/40 p-4 rounded-t-xl border-b border-emerald-100 flex flex-col items-center justify-center font-sans select-none">
        {/* Intercept Modal Interface */}
        <div className="bg-white border border-emerald-200/80 rounded-xl p-3.5 shadow-md w-full max-w-[240px] text-center">
          <h5 className="text-[11px] font-bold text-slate-800 mb-0.5">Rate Your Experience</h5>
          <p className="text-[9px] text-slate-400 mb-2">How did our technician do today?</p>
          
          {/* Trigger Star Row */}
          <div className="flex justify-center gap-1 mb-2.5">
            {[1, 2, 3].map((s) => (
              <span key={s} className="text-sm opacity-20 filter grayscale">⭐</span>
            ))}
            {[4, 5].map((s) => (
              <span key={s} className="text-sm transform scale-110 drop-shadow-sm">⭐</span>
            ))}
          </div>
          
          {/* Safeguard Feedback Badge */}
          <div className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5" /> Private Verification Active
          </div>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 px-6 pt-28 pb-20 text-black"
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.06),transparent_45%)]" />
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.03)_100%)]" />
          <motion.div
            className="absolute bottom-[-20%] right-[-10%] h-[900px] w-[900px]"
            animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.10), transparent 70%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 mt-15">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-lg backdrop-blur-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-blue-500" />
              </motion.div>
              Google Map Pack Infrastructure
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-4xl xl:text-6xl text-slate-900">
              Stop letting competitors steal your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                best local jobs
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              We deploy and manage the continuous map optimization systems, automated review loops, and reputation tracking your home service contracting business needs to stay visible.
            </p>

            {/* Offer Stack */}
            <div className="mt-7 space-y-3">
              {[
                "Ongoing Google Business Profile Audit & Management",
                "Hands-Free SMS Review Automation Systems",
                "Active Negative Feedback Shielding & Weekly Monitoring",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 stroke-[3]" />
                  </div>
                  <p className="font-semibold text-zinc-700 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#quiz">
                <Button
                  className="group h-13 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-base font-bold text-white shadow-[0_10px_25px_-10px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => trackEvent("go_to_lead_quiz")}
                >
                  Claim My Free Local Map Audit
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#system-value">
                <Button
                  onClick={() => trackEvent("view_pricing")}
                  variant="outline"
                  className="h-13 w-full sm:w-auto rounded-full border-2 border-slate-200 bg-white/80 px-8 text-base font-bold text-slate-800 shadow-md backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50"
                >
                  <Play className="mr-2 h-4 w-4 fill-slate-800 text-slate-800" />
                  View $249/mo Growth Plan
                </Button>
              </a>
            </div>

            {/* Trust Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Cancel Anytime Month-to-Month
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Video Audit Sent Within 24 Hours
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Fuquay-Varina Native
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative hidden h-[620px] lg:col-span-5 lg:flex lg:items-center lg:justify-center">
            <div className="relative h-full w-full max-w-[520px]">
              {contractorMockups.map((mockup, index) => (
                <FloatingCard
                  key={mockup.title}
                  mockup={mockup}
                  link={mockup.link}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}