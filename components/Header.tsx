"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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
        <div className="flex w-full items-center gap-1 border-2 border-black bg-white px-2 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.18)] md:w-auto">
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 transition">
            <span className="font-display text-sm font-bold tracking-widest text-black">{BRAND.name}</span>
          </a>

          <div className="mx-1 h-4 w-px bg-black/25" />

          {/* Desktop nav */}
          <nav className="hidden items-center md:flex">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-[#1f1f1f] transition hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mx-1 hidden h-4 w-px bg-black/25 md:block" />

          <div className="flex-1 md:hidden" />

          <a
            href="#waitlist"
            className="glass-button inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-white"
          >
            Join Waitlist
            <ArrowRight size={14} />
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            className="ml-1 flex h-8 w-8 items-center justify-center border border-black/25 text-[#1f1f1f] transition hover:text-black md:hidden"
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
              className="absolute left-0 right-0 top-full mt-2 overflow-hidden border-2 border-black bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,0.18)]"
            >
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block px-5 py-3 text-sm font-medium text-[#1f1f1f] transition hover:text-black"
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
