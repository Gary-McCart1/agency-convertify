"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useState } from "react";

import Image from "next/image";
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

  return (
    <section className=" flex  items-center overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 px-6 pt-28 text-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/3 h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-linear-to-br from-blue-200/40 via-purple-200/30 to-pink-200/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute right-[-10%] top-[-10%] h-125 w-125 rounded-full bg-linear-to-br from-cyan-200/40 to-blue-200/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute bottom-[-15%] left-[-10%] h-125 w-125 rounded-full bg-linear-to-br from-indigo-200/30 to-purple-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-center">
        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl lg:col-span-6"
        >
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-lg backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
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

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            We Turn Clicks Into{" "}
            <span className="relative inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            With Data + Design
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            We build performance systems using paid ads, landing pages, and
            analytics — focused on real revenue growth, not vanity metrics.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Button
              className="
                group h-14 rounded-full
                bg-gradient-to-r from-blue-600 to-indigo-600
                px-10 text-base font-semibold text-white
                shadow-[0_10px_25px_-10px_rgba(37,99,235,0.45)]
                transition-all hover:scale-[1.03]
              "
            >
              Book Strategy Call
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Link href="/case-studies">
              <Button
                variant="outline"
                className="
                h-14 rounded-full border-2 border-blue-200
                bg-white/80 px-10 text-base font-medium
                text-black shadow-lg backdrop-blur-sm
                transition-all hover:border-blue-400
                hover:bg-blue-50
              "
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
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

/* ================= FLOATING CARD ================= */

interface FloatingCardProps {
  mockup: (typeof creativeMockups)[number];
  link: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingCard({
  mockup,
  link,
  index,
  hoveredIndex,
  setHoveredIndex,
  mouseX,
  mouseY,
}: FloatingCardProps) {
  const Icon = mockup.icon;

  const isHovered = hoveredIndex === index;

  const baseY = index * 100 - 100;
  const baseX = index % 2 === 0 ? -40 : 40;

  const transformedX = useTransform(
    mouseX,
    [-300, 300],
    [baseX - 15, baseX + 15]
  );

  const transformedY = useTransform(
    mouseY,
    [-300, 300],
    [baseY - 15, baseY + 15]
  );

  const springConfig = {
    stiffness: 150,
    damping: 20,
  };

  const springX = useSpring(transformedX, springConfig);
  const springY = useSpring(transformedY, springConfig);

  const calculatedZIndex = isHovered ? 100 : creativeMockups.length - index;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{
        opacity: 1,
        scale: isHovered ? mockup.scale * 1.05 : mockup.scale,
        y: baseY,
        x: baseX,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 14,
      }}
      style={{
        x: isHovered ? baseX : springX,
        y: isHovered ? baseY : springY,
        rotate: isHovered ? 0 : mockup.rotation,
        zIndex: calculatedZIndex,
      }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      onClick={() => window.open(link, "_blank")}
      role="button"
      tabIndex={0}
      className="
        absolute left-1/2 top-1/2
        w-112.5 -translate-x-1/2 -translate-y-1/2
        cursor-pointer select-none
        z-25
      "
    >
      {/* Card Wrapper */}
      <div
        className="
          group relative overflow-hidden
          border-2 border-white bg-white
          shadow-2xl transition-shadow duration-300
          hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]
        "
      >
        {/* Glow */}
        <div
          className={`
            absolute -inset-0.5 rounded-3xl
            bg-linear-to-r ${mockup.color}
            opacity-0 blur-xl transition-opacity duration-300
            group-hover:opacity-20
          `}
        />

        <div className="relative">
          {/* Image */}
          <div className="relative overflow-hidden bg-linear-to-br from-zinc-50 to-zinc-100">
            <div className="relative aspect-17/9 w-full">
              <Image
                src={mockup.src}
                alt={mockup.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority={index === 0}
                sizes="450px"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Hover Tag */}
              <motion.div
                className="
                  absolute bottom-4 left-4
                  flex items-center gap-2 rounded-full
                  bg-white/95 px-3 py-1.5
                  shadow-md backdrop-blur-sm
                "
                initial={{ y: 15, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 15,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <Icon className="h-3.5 w-3.5 text-blue-600" />

                <span className="text-xs text-zinc-800">
                  {mockup.highlight}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative bg-white p-5">
            <div
              className={`
                absolute left-0 top-0 h-[3px] w-full
                bg-gradient-to-r ${mockup.color}
              `}
            />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  {mockup.category}
                </p>

                <h4 className="mt-1 text-lg font-bold leading-snug text-zinc-900">
                  {mockup.title}
                </h4>
              </div>

              {/* Metric */}
              <div
                className={`
                  shrink-0 rounded-xl border px-3 py-1.5
                  ${mockup.accentColor}
                  text-center font-bold shadow-xs
                `}
              >
                <span className="text-sm tracking-tight">{mockup.metric}</span>
              </div>
            </div>

            {/* Footer Row */}
            <div className="mt-4 flex items-center gap-4 border-t border-zinc-100 pt-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-medium text-zinc-500">Live</span>
              </div>

              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3 text-blue-500" />

                <span className="text-xs font-medium text-zinc-500">
                  Conversion Tuned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className={`
          absolute -right-2 -top-2 hidden rounded-full
          bg-gradient-to-br ${mockup.color}
          p-2.5 shadow-lg sm:block
        `}
        animate={isHovered ? { y: [0, -4, 0] } : { y: [0, -6, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      >
        <Icon className="h-4 w-4 text-white" />
      </motion.div>
    </motion.div>
  );
}
