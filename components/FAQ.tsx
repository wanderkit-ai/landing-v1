"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is NOMA?",
    a: "NOMA runs your trip business for you. You pick the destination, set the dates, share it with your audience. NOMA's agents do the rest — finding operators, negotiating prices, building the itinerary, collecting bookings, and tracking every permit. You check in over WhatsApp or Telegram when you want.",
  },
  {
    q: "Who is it for?",
    a: "Travel influencers who want to run group trips without the logistics nightmare, and travel advisors managing expedition trips for clients. If you're currently doing this over WhatsApp threads and spreadsheets, NOMA is what you need.",
  },
  {
    q: "How do I talk to my agents?",
    a: "Just text them. Connect WhatsApp or Telegram and your agents are on 24/7. Ask where a negotiation stands, get a quick trip summary, approve a price, ask why someone hasn't signed their waiver. They reply and act on it.",
  },
  {
    q: "What exactly do the agents do?",
    a: "They find local operators, reach out, negotiate back and forth until they get a good price, build a day-by-day itinerary, publish your booking page, collect payments, answer traveler questions, and chase every permit, waiver, and document — without you touching any of it.",
  },
  {
    q: "Which countries do you cover?",
    a: "We currently operate in Nepal. More destinations coming soon as we expand with each cohort.",
  },
  {
    q: "When can I get access?",
    a: "We're onboarding our first cohort of influencer and advisor partners now. Spots are limited. Join the waitlist and we'll reach out directly.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-14 md:py-24">
      <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">

        {/* Left — sticky label + heading */}
        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Everything you need to know.
          </h2>
          <p className="mt-4 text-base text-slate-500">A few things worth knowing.</p>
        </div>

        {/* Right — accordion */}
        <div className="divide-y divide-indigo-100">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  suppressHydrationWarning
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
