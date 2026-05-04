"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is NOMA?",
    a: "NOMA is an AI-native platform that lets travel influencers and advisors run fully bookable adventure trips — without the operational chaos. You bring the audience and the vision. NOMA's agents handle everything else: finding operators, negotiating, building itineraries, managing bookings, and handling paperwork.",
  },
  {
    q: "Who can use NOMA?",
    a: "NOMA is built for travel influencers who want to monetize their audience through group trips, and for independent travel advisors who specialize in adventure or expedition travel. If you're currently coordinating trips over WhatsApp and spreadsheets, NOMA was made for you.",
  },
  {
    q: "What do the agents actually do?",
    a: "NOMA agents act as your full back-office. They find local operators, reach out directly, negotiate pricing back and forth, build a day-by-day itinerary, publish a public booking page, collect payments, and track every traveler's permits, waivers, and logistics — automatically.",
  },
  {
    q: "What problem does NOMA solve?",
    a: "Adventure travel is run through fragmented, offline supply — guides and operators who are hard to find and harder to coordinate. Influencers and advisors spend hours on WhatsApp chasing quotes and permit docs instead of growing their audience. NOMA eliminates that entire layer of work.",
  },
  {
    q: "Which countries do you work in?",
    a: "We're launching with operators across Nepal, Peru, Tanzania, Patagonia, and Morocco — the most popular adventure trekking destinations. We're expanding the network rapidly and adding new regions with each cohort.",
  },
  {
    q: "When will NOMA be available?",
    a: "We're currently onboarding our first cohort of influencer and advisor partners. Spots are limited. Join the waitlist and we'll reach out directly with early access details.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">

        {/* Left — sticky label + heading */}
        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Everything you need to know.
          </h2>
          <p className="mt-4 text-base text-slate-500">Questions that people ask.</p>
        </div>

        {/* Right — accordion */}
        <div className="divide-y divide-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className={`text-base font-medium leading-snug transition-colors ${
                    isOpen ? "text-slate-950" : "text-slate-600 group-hover:text-slate-950"
                  }`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="mt-0.5 shrink-0 text-xl font-light leading-none text-slate-400 group-hover:text-slate-700"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-7 text-slate-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
