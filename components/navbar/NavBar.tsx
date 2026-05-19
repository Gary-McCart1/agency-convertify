"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useCalendly } from "@/components/calendly/CalendlyProvider";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Results", href: "#results" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { open } = useCalendly();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-[9999] w-full px-4"
    >
      <div
        className="
          mx-auto flex h-18 max-w-7xl items-center justify-between
          rounded-2xl border border-white/60
          bg-white/90 px-6
          shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Convertify"
            width={210}
            height={28}
            priority
            className="h-30 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 p-1 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  rounded-full px-5 py-2 text-sm font-medium
                  text-zinc-600 transition-all
                  hover:bg-blue-50 hover:text-blue-600
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA → CALENDLY MODAL */}
          <Button
            onClick={open}
            className="
              group ml-3 h-12 rounded-full
              bg-gradient-to-r from-blue-600 to-indigo-600
              px-6 text-sm font-semibold text-white
              shadow-[0_10px_25px_-10px_rgba(37,99,235,0.5)]
              transition-all duration-300
              hover:scale-[1.03]
            "
          >
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-xl border border-black/5 bg-white/70 shadow-sm"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-l border-black/5 bg-white/90 backdrop-blur-2xl"
            >
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black">
                    Convertify
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Growth Agency
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      rounded-2xl border border-black/5 bg-white px-5 py-4
                      text-base font-medium text-zinc-700
                      hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <Button
                onClick={open}
                className="
                  mt-8 h-14 w-full rounded-2xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-base font-semibold text-white
                "
              >
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}