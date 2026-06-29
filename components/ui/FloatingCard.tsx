"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { TrendingUp } from "lucide-react";

// Flexible interface structure to read your local programmatic content renders
interface FloatingCardProps {
  mockup: {
    title: string;
    category: string;
    metric: string;
    highlight: string;
    color: string;
    accentColor: string;
    icon: React.ComponentType<{ className?: string }>;
    link: string;
    rotation: number;
    scale: number;
    renderContent?: () => React.ReactNode;
  };
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

  // Updated to dynamically reflect the 3 item limit explicitly
  const calculatedZIndex = isHovered ? 100 : 3 - index;

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
      onClick={() => window.open(link, "_self")}
      role="button"
      tabIndex={0}
      className="
        absolute left-1/2 top-1/2
        w-112.5 -translate-x-1/2 -translate-y-1/2
        cursor-pointer select-none outline-none
      "
    >
      {/* Card Wrapper */}
      <div
        className="
          group relative overflow-hidden
          rounded-3xl border-2 border-slate-100 bg-white
          shadow-2xl transition-shadow duration-300
          hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.2)]
        "
      >
        {/* Glow */}
        <div
          className={`
            absolute -inset-1 rounded-3xl
            bg-gradient-to-r ${mockup.color}
            opacity-0 blur-2xl transition-opacity duration-300
            group-hover:opacity-20
          `}
        />

        <div className="relative">
          {/* Dynamic Content Core replaces the original static Next Image tag */}
          <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-50 to-slate-100 aspect-17/9 w-full flex flex-col justify-between">
            
            {mockup.renderContent && mockup.renderContent()}

            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

            {/* Hover Tag */}
            <motion.div
              className="
                absolute bottom-4 left-4
                flex items-center gap-2
                rounded-full bg-white/95 px-3 py-1.5
                shadow-md backdrop-blur-sm pointer-events-none
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
              <span className="text-[11px] font-bold text-slate-800">
                {mockup.highlight}
              </span>
            </motion.div>
          </div>

          {/* Card Meta Details Footer */}
          <div className="relative bg-white p-5">
            <div
              className={`
                absolute left-0 top-0 h-[3px] w-full
                bg-gradient-to-r ${mockup.color}
              `}
            />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {mockup.category}
                </p>

                <h4 className="mt-1 text-base font-extrabold tracking-tight text-slate-900">
                  {mockup.title}
                </h4>
              </div>

              <div
                className={`
                  shrink-0 rounded-xl border px-3 py-1.5 self-start
                  ${mockup.accentColor}
                  text-center font-bold
                `}
              >
                <span className="text-xs tracking-tight">
                  {mockup.metric}
                </span>
              </div>
            </div>

            {/* Footer Status Indicators */}
            <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-slate-500">Live Infrastructure</span>
              </div>

              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-bold text-slate-500">
                  Map Pack Optimized
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outer Floating Corner Badge */}
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

export default FloatingCard;