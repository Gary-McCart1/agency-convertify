"use client";

import Image from "next/image";

const projects = [
  {
    name: "Charlie's Landscaping LLC",
    src: "/brand-logos/charlies-landscaping-logo.png",
  },
  {
    name: "Trasora",
    src: "/brand-logos/trasora.png",
  },
  {
    name: "Founders In Focus",
    src: "/brand-logos/founders.png",
  },

  {
    name: "Desentify",
    src: "/brand-logos/desentify.png",
  },
];

export default function TrustedBy() {
  return (
    <div className="w-full py-8 px-6 relative overflow-hidden">
      {/* Background fade edges (Stripe-style polish) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Trusted By / Work Experience
        </p>

        <p className="mt-3 text-lg font-medium text-black">
          Real projects I’ve built and contributed to
        </p>
      </div>

      {/* Logo Strip */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-14 md:gap-20">
        {projects.map((project) => (
          <div
            key={project.name}
            className="
  h-10 w-auto object-contain md:h-20
  grayscale opacity-60
  transition-all duration-300
  hover:grayscale-0 hover:opacity-100
  hover:scale-105
"
          >
            <Image
              src={project.src}
              alt={project.name}
              width={240}
              height={120}
              className="h-10 w-auto object-contain md:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
