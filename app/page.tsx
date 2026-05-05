import { MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FeatureSlideshow } from "@/components/FeatureSlideshow";
import { Header } from "@/components/Header";
import { HeroBackground } from "@/components/HeroBackground";
import { Integrations } from "@/components/Integrations";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ValueCard } from "@/components/ValueCard";
import { WaitlistForm } from "@/components/WaitlistForm";

const BRAND = {
  name: "NOMA",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-slate-950">
      <Header />

      <section className="relative flex h-screen flex-col overflow-hidden">
        <HeroBackground />

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-20 text-center">
          <ScrollReveal>
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              AI layer for travel influencers &amp; advisors
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1 className="mt-5 font-display text-balance text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Run more trips.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Do less work.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <p className="mt-4 max-w-lg text-balance text-lg leading-7 text-slate-500">
              You bring the audience. NOMA handles everything else.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div id="waitlist" className="mt-8 w-full max-w-md">
              <WaitlistForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
              Currently operating in Nepal, expanding soon
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
        <section id="benefits" className="mx-auto max-w-7xl px-5 py-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Who it's for
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              travel influencers
            </span>{" "}
            &amp; advisors.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <ScrollReveal className="h-full" delay={0.04}>
            <ValueCard
              icon={Sparkles}
              title="The whole operation, off your plate"
              description="Planning, operator search, bookings, permits, paperwork — agents take care of it. You focus on your audience and pitching the next trip."
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={0.09}>
            <ValueCard
              icon={Phone}
              title="Run it from WhatsApp or Telegram"
              description="Just text your agent. Check on a negotiation, approve an operator quote, ask why a waiver is missing. It replies, then handles it."
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
            />
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={0.14}>
            <ValueCard
              icon={MessageCircle}
              title="Your travelers are looked after"
              description="Questions, waiver chasing, pre-trip updates — agents handle all of it. Your inbox stays quiet."
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />
          </ScrollReveal>
        </div>
        </section>
      </ScrollReveal>

      <Integrations />
      <FAQ />
      <Contact />

      <footer className="border-t border-indigo-100 px-5 py-8">
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
