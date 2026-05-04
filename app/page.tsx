import {
  ArrowRight,
  Bell,
  CalendarCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FeatureSlideshow } from "@/components/FeatureSlideshow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ValueCard } from "@/components/ValueCard";
import { WaitlistForm } from "@/components/WaitlistForm";

const BRAND = {
  name: "NOMA",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-950">
<section className="relative flex h-screen flex-col overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_top_right,#ede9fe,transparent_32%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

        <header className="flex justify-center pt-5">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md">
            <a href="#" className="flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-slate-50">
              <Compass size={16} className="text-blue-600" />
              <span className="font-display text-sm font-bold tracking-wide text-slate-900">{BRAND.name}</span>
            </a>

            <div className="mx-1 h-4 w-px bg-slate-200" />

            <nav className="hidden items-center md:flex">
              <a href="#how-it-works" className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                How it works
              </a>
              <a href="#benefits" className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                Benefits
              </a>
              <a href="#faq" className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                FAQ
              </a>
              <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                Contact
              </a>
            </nav>

            <div className="mx-1 hidden h-4 w-px bg-slate-200 md:block" />

            <a
              href="#waitlist"
              className="glass-button inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
            >
              Join Waitlist
              <ArrowRight size={14} />
            </a>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-10 text-center">
          <ScrollReveal>
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              100% agent-run — no manual work
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1 className="mt-5 font-display text-balance text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Your trip business,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                run by agents.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <p className="mt-4 max-w-lg text-balance text-lg leading-7 text-slate-500">
              NOMA agents find operators, negotiate prices, handle paperwork, and publish your trip page — so you just focus on your audience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div id="waitlist" className="mt-8 w-full max-w-md">
              <WaitlistForm />
            </div>
          </ScrollReveal>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <a
            href="#how-it-works"
            className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <span className="text-sm font-medium text-slate-600 transition group-hover:text-blue-600">
              See how it works
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-blue-100">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="animate-bounce text-slate-500 group-hover:text-blue-500">
                <path d="M5 1v8M1.5 5.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      <FeatureSlideshow />

      <ScrollReveal>
        <section id="benefits" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why join
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              logistics-heavy
            </span>{" "}
            adventure travel.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <ScrollReveal delay={0.04}>
            <ValueCard
              icon={Sparkles}
              title="Agents plan the whole trip"
              description="Drop a brief and agents build a day-by-day itinerary with real operator availability and pricing."
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.09}>
            <ValueCard
              icon={Bell}
              title="Agents negotiate with local operators"
              description="They reach out, go back and forth, and lock in the best price — you never send a single message."
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <ValueCard
              icon={CalendarCheck}
              title="Agents handle paperwork and logistics"
              description="Permits, waivers, confirmations, payments — all tracked and chased automatically for every traveler."
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />
          </ScrollReveal>
        </div>
        </section>
      </ScrollReveal>

      <FAQ />
      <Contact />

      <footer className="border-t border-slate-200 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-slate-700">Privacy</a>
            <a href="#" className="transition hover:text-slate-700">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
