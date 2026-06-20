"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FloatingCard from "@/components/ui/FloatingCard";
import AuditForm from "@/components/AuditForm";

import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Users,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

const creativeMockups = [
  {
    title: "Trasora Social Platform",
    category: "Product Design • Growth Architecture",
    metric: "100+ Users",
    highlight: "Organic Growth",
    color: "from-purple-500 to-pink-500",
    accentColor: "bg-purple-50 text-purple-600 border-purple-200",
    icon: Users,
    src: "/mockups/trasora-mockup.png",
    link: "https://trasora.com/about",
    rotation: -3,
    scale: 1,
  },
  {
    title: "Foamhead E-Commerce",
    category: "Web & Landing Page Design",
    metric: "Conversion Optimization",
    highlight: "Checkout Flow",
    color: "from-cyan-500 to-blue-500",
    accentColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    icon: ShoppingCart,
    src: "/mockups/foamhead.png",
    link: "https://ecom-storefront-foamhead.vercel.app/",
    rotation: 2,
    scale: 0.95,
  },
  {
    title: "Analytics Dashboard",
    category: "Data Systems • Fullstack",
    metric: "Data Analysis",
    highlight: "Real-Time Tracking",
    color: "from-emerald-500 to-teal-500",
    accentColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    icon: BarChart3,
    src: "/mockups/dashboard.png",
    link: "https://ecom-dashboard-pi.vercel.app/",
    rotation: -1,
    scale: 0.98,
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
      {/* ================= AUDIT FORM MODAL ================= */}

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
          <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%]">
            <div
              className="absolute bottom-0 right-0 w-[2px] h-[85%] origin-bottom rotate-[-45deg] opacity-40"
              style={{
                background:
                  "linear-gradient(to top, rgba(59,130,246,0.8), rgba(147,51,234,0.2), transparent)",
                boxShadow: "0 0 40px rgba(59,130,246,0.25)",
              }}
            />
          </div>
          <motion.div
            className="absolute bottom-[10%] right-[10%] h-4 w-4 rounded-full"
            animate={{
              x: [-200, -600],
              y: [-200, -600],
              opacity: [0, 1, 0],
              scale: [0.5, 1.4, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "rgba(59,130,246,0.8)",
              boxShadow: "0 0 30px rgba(59,130,246,0.6)",
            }}
          />
          <motion.div
            className="absolute bottom-[5%] right-[5%] h-[600px] w-[600px] rounded-full"
            animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
              filter: "blur(60px)",
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
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-lg backdrop-blur-sm"
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
              Lead Generation System
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-4xl xl:text-6xl">
              Helping businesses consistently generate{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                high-quality leads
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              We turn ad traffic into qualified customers by building landing
              pages, optimizing campaigns, and tracking what actually drives
              conversions.
            </p>

            {/* Offer Stack */}
            <div className="mt-7 space-y-3">
              {[
                "High-Converting, Custom Landing Pages",
                "Precision Google Ads Setup & Management",
                "Advanced Lead Tracking & GA4 Data Analytics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="font-medium text-zinc-700">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA - Updated to open AuditForm */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#quiz">
                <Button className="group h-13 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-[0_10px_25px_-10px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03]" onClick={() => trackEvent("go_to_lead_quiz")}>
                  Claim My Free Website Audit
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <Link href="/case-studies">
                <Button
                  onClick={() => trackEvent("view_case_studies")}
                  variant="outline"
                  className="h-13 rounded-full border-2 border-blue-200 bg-white/80 px-8 text-base font-medium shadow-lg backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Trust Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                No Long-Term Contracts
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Audit Delivered Within 24hrs
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Personalized Loom Video
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative hidden h-[620px] lg:col-span-5 lg:flex lg:items-center lg:justify-center">
            <div className="relative h-full w-full max-w-[520px]">
              {creativeMockups.map((mockup, index) => (
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
