"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import AuditForm from "@/components/AuditForm";
import { useCalendly } from "../calendly/CalendlyProvider";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/gtag";

export default function Footer() {
  const { open } = useCalendly();

  const handleDirectCall = () => {
    trackEvent("direct_call_form_started")
    open();
  }

  return (
    <>
      <footer className="relative overflow-hidden border-t border-black/5 bg-white px-6 py-10">
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* ================= MAIN FOOTER GRID ================= */}
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Convertify"
                  width={210}
                  height={28}
                  priority
                  className="h-20 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                We help businesses scale using paid ads, conversion-focused
                design, and data-driven growth systems.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Navigation
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
                <a href="#services" className="transition hover:text-blue-600">
                  Services
                </a>
                <a href="#results" className="transition hover:text-blue-600">
                  Results
                </a>
                <a href="#about" className="transition hover:text-blue-600">
                  About
                </a>
                <a href="#contact" className="transition hover:text-blue-600">
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Get Started
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {/* Primary: Audit */}
                <a href="#quiz">
                  <Button onClick={() => trackEvent("go_to_lead_quiz")} className="group h-11 w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02]">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>

                {/* Secondary: Direct call */}
                <button
                  onClick={handleDirectCall}
                  className="text-sm text-zinc-400 transition hover:text-blue-600 underline underline-offset-2"
                >
                  Already know what you need? Book a call
                </button>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM STRIP ================= */}
          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-8 text-xs text-zinc-400 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Convertify. All rights reserved.
            </span>
            <span>
              Built with performance marketing systems in mind — not templates.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
