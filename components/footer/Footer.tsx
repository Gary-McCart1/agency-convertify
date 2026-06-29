"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useCalendly } from "../calendly/CalendlyProvider";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/gtag";

export default function Footer() {
  const { open } = useCalendly();

  const handleDirectCall = () => {
    trackEvent("direct_call_form_started");
    open();
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-slate-100 bg-white px-6 py-10">
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-50/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* ================= MAIN FOOTER GRID ================= */}
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Convertify Agency"
                  width={210}
                  height={28}
                  priority
                  className="h-20 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                We deploy white-hat Google Business Profile local optimizations and hands-free review management infrastructure built strictly for home service contractors.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Fuquay-Varina, NC</span>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Navigation
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-slate-600">
                <a href="#services" className="transition hover:text-blue-600">
                  Services
                </a>
                <a href="#system-value" className="transition hover:text-blue-600">
                  Deliverables
                </a>
                <a href="#about" className="transition hover:text-blue-600">
                  About Me
                </a>
                <a href="#contact" className="transition hover:text-blue-600">
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Get Started
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {/* Primary: Map Audit */}
                <a href="#quiz">
                  <Button 
                    onClick={() => trackEvent("go_to_lead_quiz")} 
                    className="group h-11 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.01]"
                  >
                    Get Free Map Audit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>

                {/* Secondary: Direct call */}
                <button
                  type="button"
                  onClick={handleDirectCall}
                  className="text-xs font-semibold text-slate-400 transition hover:text-blue-600 underline underline-offset-4 text-left"
                >
                  Already know what you need? Book a slot
                </button>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM STRIP ================= */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs font-medium text-slate-400 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Convertify. All rights reserved.
            </span>
            <span className="text-center sm:text-right">
              Built natively for local service businesses — not generic templates.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}