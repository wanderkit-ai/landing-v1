"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const BRAND = { name: "NOMA" };

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits",     label: "Benefits"     },
  { href: "#faq",          label: "FAQ"           },
  { href: "#contact",      label: "Contact"       },
];

export function Header() {
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="relative w-full md:max-w-fit">
        {/* Pill nav bar */}
        <div className="flex w-full items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md md:w-auto">
          <a href="#" className="flex items-center rounded-full px-2 py-1 transition hover:bg-slate-50">
            <Image src="/logo.png" alt="NOMA" width={72} height={32} className="h-8 w-auto" priority />
          </a>

          <div className="mx-1 h-4 w-px bg-slate-200" />

          {/* Desktop nav */}
          <nav className="hidden items-center md:flex">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mx-1 hidden h-4 w-px bg-slate-200 md:block" />

          <div className="flex-1 md:hidden" />

          <a
            href="#waitlist"
            className="glass-button inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
          >
            Join Waitlist
            <ArrowRight size={14} />
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-200/60 backdrop-blur-md"
            >
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
