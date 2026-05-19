"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import FloatingCard from "@/components/ui/FloatingCard";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const creativeMockups = [
  {
    title: "Trasora Social Platform",
    category: "Product Design • Growth Architecture",
    metric: "100+ Users",
    highlight: "+47% Engagement",
    color: "from-purple-500 to-pink-500",
    accentColor: "bg-purple-50 text-purple-600 border-purple-200",
    icon: Sparkles,
    src: "/mockups/trasora-mockup.png",
    link: "https://trasora.com/about",
    rotation: -3,
    scale: 1,
  },
  {
    title: "Foamhead E-Commerce",
    category: "Conversion Optimization",
    metric: "CRO",
    highlight: "AOV+",
    color: "from-cyan-500 to-blue-500",
    accentColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    icon: TrendingUp,
    src: "/mockups/foamhead.png",
    link: "https://ecom-storefront-foamhead.vercel.app/",
    rotation: 2,
    scale: 0.95,
  },
  {
    title: "Analytics Dashboard",
    category: "Data Systems • Fullstack",
    metric: "$24k Tracked",
    highlight: "Real-Time Data",
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
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ✅ Load Calendly script safely
  useEffect(() => {
    if (!calendlyOpen) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [calendlyOpen]);

  return (
    <section className="relative flex items-center overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 px-6 pt-28 text-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute left-1/2 top-1/3 h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-linear-to-br from-blue-200/40 via-purple-200/30 to-pink-200/20 blur-3xl" />
        <motion.div className="absolute right-[-10%] top-[-10%] h-125 w-125 rounded-full bg-linear-to-br from-cyan-200/40 to-blue-200/30 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] h-125 w-125 rounded-full bg-linear-to-br from-indigo-200/30 to-purple-200/20 blur-3xl" />
      </div>

      {/* ================= CALENDLY MODAL ================= */}
      {calendlyOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Close */}
            <button
              onClick={() => setCalendlyOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/10 px-3 py-1 text-sm"
            >
              Close
            </button>

            {/* Calendly Widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gwmccart3"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      )}

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl lg:col-span-6"
        >
          <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-lg backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="h-4 w-4 text-blue-500" />
            </motion.div>
            Creative Growth Engine • Paid Ads • Landing Pages
          </motion.div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            We Turn Clicks Into{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Customers{" "}
            </span>
            With Data + Design
          </h1>

          <p className="mt-8 max-w-xl text-lg text-zinc-600 md:text-xl">
            We build performance systems using paid ads, landing pages, and
            analytics — focused on real revenue growth, not vanity metrics.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className="group h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 text-white"
            >
              Book Strategy Call
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1" />
            </Button>

            <Link href="/case-studies">
              <Button
                variant="outline"
                className="h-14 rounded-full border-blue-200 bg-white/80 px-10"
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT (UNCHANGED VISUALS) ================= */}
        <div
          className="relative hidden h-175 lg:col-span-6 lg:flex lg:items-center lg:justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-full w-full max-w-150">
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
  );
}
