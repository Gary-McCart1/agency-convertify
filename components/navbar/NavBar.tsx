"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, MapPin } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { trackEvent } from "@/lib/gtag";

// Updated list: swapped "Results" for "Deliverables" to target your systemValue block
const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Deliverables", href: "#system-value" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-0 right-0 z-[9999] w-full px-4"
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-slate-200/60 bg-white/90 px-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          
          {/* Logo Container */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Convertify Agency"
              width={210}
              height={28}
              priority
              className="h-30 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-slate-200/50 bg-slate-50/70 p-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a href="#quiz">
              <Button
                onClick={() => trackEvent("go_to_lead_quiz")}
                className="group ml-3 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-[0_10px_25px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]"
              >
                Claim Free Map Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </nav>

          {/* Mobile Navigation Dropdown */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-xl border border-slate-200/50 bg-slate-50/70 shadow-sm"
                >
                  <Menu className="h-5 w-5 text-slate-700" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-l border-slate-100 bg-white/95 backdrop-blur-2xl"
              >
                {/* Mobile Header Branding */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-slate-900">Convertify</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                      Local Maps Utility
                    </p>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="mt-12 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-base font-bold text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Mobile Call To Action */}
                <a href="#quiz">
                  <Button
                    onClick={() => trackEvent("go_to_lead_quiz")}
                    className="mt-8 h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-bold text-white shadow-lg"
                  >
                    Claim Free Map Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </motion.header>
    </>
  );
}