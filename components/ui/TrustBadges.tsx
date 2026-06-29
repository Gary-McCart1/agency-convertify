"use client";

import Image from "next/image";
import { ShieldAlert, FileCheck, MapPin, Sparkles } from "lucide-react";

// Real contractor / work highlights
const clients = [
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

// Contractors prioritize: local affinity, risk reduction, speed, and platform compliance
const assurances = [
  {
    icon: MapPin,
    title: "Fuquay-Varina Native",
    description: "Based right here in NC—not a detached remote agency.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: ShieldAlert,
    title: "Zero Contract Risk",
    description: "Flat-rate deliverables. No recurring monthly retainers.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: FileCheck,
    title: "GBP Guide Compliant",
    description: "100% white-hat optimizations following Google guidelines.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Sparkles,
    title: "Built For Mobile",
    description: "Designed for busy homeowners searching on their phones.",
    color: "text-purple-600 bg-purple-50",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full bg-white border-y border-slate-100 py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= PART 1: CONVERTING ASSURANCES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {assurances.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl shrink-0 ${badge.color}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{badge.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-slate-100 my-8" />

        {/* ================= PART 2: THE REAL LOGO STRIP ================= */}
        <div className="relative mt-8">
          {/* Background fade edges (Stripe-style polish) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Proven Experience / Track Record
            </p>
          </div>

          {/* Logo Alignment Container */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {clients.map((client) => (
              <div
                key={client.name}
                className="h-10 w-auto object-contain grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-102 flex items-center justify-center"
              >
                {/* 
                  Fallback placeholder block if images aren't fully styled or missing 
                  Allows text visibility if the contractor logo isn't transparent or standard gray
                */}
                <Image
                  src={client.src}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}