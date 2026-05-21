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
  CheckCircle2,
  Activity,
  Users,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  // Calendly Script
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
    <section
      className="
        relative flex items-center overflow-hidden
        bg-gradient-to-br
        from-white via-blue-50/30 to-purple-50/30
        px-6 pt-28 pb-20 text-black
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="
            absolute left-1/2 top-1/3
            h-[650px] w-[750px]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-br
            from-blue-200/40 via-purple-200/30 to-pink-200/20
            blur-3xl
          "
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="
            absolute right-[-10%] top-[-10%]
            h-[500px] w-[500px]
            rounded-full
            bg-gradient-to-br
            from-cyan-200/40 to-blue-200/30
            blur-3xl
          "
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="
            absolute bottom-[-15%] left-[-10%]
            h-[500px] w-[500px]
            rounded-full
            bg-gradient-to-br
            from-indigo-200/30 to-purple-200/20
            blur-3xl
          "
        />
      </div>

      {/* ================= CALENDLY MODAL ================= */}
      {calendlyOpen && (
        <div
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            bg-black/50 p-4 backdrop-blur-sm
          "
        >
          <div
            className="
              relative w-full max-w-4xl
              overflow-hidden rounded-3xl
              bg-white shadow-2xl
            "
          >
            <button
              onClick={() => setCalendlyOpen(false)}
              className="
                absolute right-4 top-4 z-10
                rounded-full bg-black/10
                px-4 py-2 text-sm font-medium
                transition hover:bg-black/20
              "
            >
              Close
            </button>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gwmccart3"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      )}

      <div
        className="
          relative mx-auto grid max-w-7xl
          items-center gap-10
          lg:grid-cols-12
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl lg:col-span-7"
        >
          {/* Badge */}
          <motion.div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border border-blue-200
              bg-white/80 px-4 py-2
              text-sm text-zinc-700
              shadow-lg backdrop-blur-sm
            "
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="h-4 w-4 text-blue-500" />
            </motion.div>
            Lead Generation System
          </motion.div>

          {/* Headline */}
          <h1
            className="
    text-5xl font-bold leading-[1.1]
    tracking-tight md:text-4xl xl:text-6xl
  "
          >
            Helping businesses consistently generate{" "}
            <span
              className="
      bg-gradient-to-r
      from-blue-500 via-cyan-500 to-indigo-500
      bg-clip-text text-transparent
    "
            >
              high-quality leads
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="
              mt-6 max-w-xl
              text-lg leading-relaxed text-zinc-600
              md:text-xl
            "
          >
            We turn ad traffic into qualified customers by building landing pages,
            optimizing campaigns, and tracking what actually drives conversions.
          </p>

          {/* Offer Stack */}
          <div className="mt-7 space-y-3">
            {[
              "High-Converting, Custom Landing Pages",
              "Precision Google Ads Setup & Management",
              "Advanced Lead Tracking & GA4 Data Analytics",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="
                    flex h-6 w-6 items-center justify-center
                    rounded-full bg-emerald-100
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>

                <p className="text-zinc-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className="
                group h-13 rounded-full
                bg-gradient-to-r
                from-blue-600 to-indigo-600
                px-8 text-base font-semibold text-white
                shadow-[0_10px_25px_-10px_rgba(37,99,235,0.45)]
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              Claim Free Growth Audit
              <ArrowRight
                className="
                  ml-3 h-5 w-5
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>

            <Link href="/case-studies">
              <Button
                variant="outline"
                className="
                  h-13 rounded-full
                  border-2 border-blue-200
                  bg-white/80 px-8
                  text-base font-medium
                  shadow-lg backdrop-blur-sm
                  transition-all
                  hover:border-blue-400
                  hover:bg-blue-50
                "
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Trust Row / Risk Reversal */}
          <div
            className="
              mt-8 flex flex-wrap items-center
              gap-x-5 gap-y-3 text-sm text-zinc-500
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              No Long-Term Contracts
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Ads Live within 14 Days
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Transparent Reporting
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            relative hidden h-[620px]
            lg:col-span-5 lg:flex
            lg:items-center lg:justify-center
          "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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
  );
}
