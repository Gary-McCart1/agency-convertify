// components/footer/Footer.tsx

"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCalendly } from "../calendly/CalendlyProvider";


export default function Footer() {
  const {open} = useCalendly();
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-black/5 bg-white px-6 py-10"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
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

            <p className=" text-sm leading-relaxed text-zinc-500">
              We help businesses scale using paid ads, conversion-focused
              design, and data-driven growth systems.
            </p>

            {/* <p className="mt-6 text-xs text-zinc-400">
              © {new Date().getFullYear()} Convertify.
            </p> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Navigation
            </h4>

            <div className="mt-4 flex gap-3 text-sm text-zinc-600">
              <a href="#services" className="hover:text-blue-600 transition">
                Services
              </a>
              <a href="#results" className="hover:text-blue-600 transition">
                Results
              </a>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
              <a onClick={open} className="hover:text-blue-600 transition">
                Book A Call
              </a>
            </div>
          </div>

          {/* Social / Contact */}
          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Connect
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
              <a href="#" className="hover:text-blue-600 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Twitter / X
              </a>
              <a
                href="mailto:hello@mccartmedia.com"
                className="hover:text-blue-600 transition"
              >
                Email Us
              </a>
            </div>
          </div> */}
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div className="mt-16 border-t border-black/5 pt-8 text-center text-xs text-zinc-400">
          Built with performance marketing systems in mind — not templates.
        </div>
      </div>
    </footer>
  );
}
