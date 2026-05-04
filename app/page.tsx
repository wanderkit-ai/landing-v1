import {
  ArrowRight,
  Bell,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Sparkles,
} from "lucide-react";
import { HeroPreview } from "@/components/HeroPreview";
import { LiquidWorldBackdrop } from "@/components/LiquidWorldBackdrop";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ValueCard } from "@/components/ValueCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WorkflowVideoDemo } from "@/components/WorkflowVideoDemo";

const BRAND = {
  name: "NOMA",
  contactEmail: "founders@noma.travel",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-950">
      <LiquidWorldBackdrop />
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_top_right,#ede9fe,transparent_32%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

        <header className="liquid-glass mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-3xl px-5 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="glass-pill inline-flex h-9 w-9 items-center justify-center rounded-2xl text-slate-900">
              <Compass size={18} />
            </span>
            <span>{BRAND.name}</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="transition hover:text-slate-950">
              How it works
            </a>
            <a href="#benefits" className="transition hover:text-slate-950">
              Benefits
            </a>
            <a
              href={`mailto:${BRAND.contactEmail}`}
              className="transition hover:text-slate-950"
            >
              Contact
            </a>
          </nav>

          <a
            href="#waitlist"
            className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:brightness-105"
          >
            Join
            <ArrowRight size={16} />
          </a>
        </header>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 text-center md:pb-28 md:pt-20">
          <ScrollReveal>
            <div className="glass-pill mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
              <span className="flex -space-x-2">
                <span className="h-5 w-5 rounded-full border-2 border-blue-50 bg-blue-300" />
                <span className="h-5 w-5 rounded-full border-2 border-blue-50 bg-indigo-300" />
                <span className="h-5 w-5 rounded-full border-2 border-blue-50 bg-sky-300" />
              </span>
              Backed by advisors and operator partners
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              AI agents empowering modern travel advisors.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-600 md:text-xl">
              NOMA helps influencers and advisors plan, price, and book adventure
              trips with fragmented local operators through one AI-native platform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div id="waitlist" className="mx-auto max-w-2xl">
              <WaitlistForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Early access is limited for advisor and influencer partners.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <HeroPreview />
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <section id="benefits" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why join
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Built for logistics-heavy adventure travel.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <ScrollReveal delay={0.04}>
            <ValueCard
              icon={Sparkles}
              title="From request to bookable itinerary"
              description="AI agents turn intent into feasible multi-day trips with real supplier constraints."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.09}>
            <ValueCard
              icon={Bell}
              title="Coordinate fragmented local supply"
              description="Unify availability, pricing, and logistics across offline operators and guides."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <ValueCard
              icon={CalendarCheck}
              title="Run your advisor business at scale"
              description="Manage customers, operator communication, and bookings in one workflow."
            />
          </ScrollReveal>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20">
        <div className="liquid-glass rounded-[2rem] px-6 py-14 text-slate-900 md:px-14">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Start selling adventure trips in three steps.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                [
                  "01",
                  "Join the waitlist",
                  "Tell us about your advisor, influencer, or operator workflow.",
                ],
                [
                  "02",
                  "Connect demand and supply",
                  "Bring traveler requests while NOMA coordinates local operators behind the scenes.",
                ],
                [
                  "03",
                  "Launch bookable trips",
                  "Get early access to AI-powered planning, pricing, and booking operations.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="liquid-glass rounded-3xl p-5"
                >
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-blue-700">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.18}>
            <WorkflowVideoDemo />
          </ScrollReveal>
        </div>
        </section>
      </ScrollReveal>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-slate-950">
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-slate-950"
          >
            Terms
          </a>
        </div>
      </footer>
    </main>
  );
}
