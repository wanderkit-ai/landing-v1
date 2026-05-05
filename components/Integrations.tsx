"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiGmail,
  SiGooglecalendar,
  SiGoogledrive,
  SiNotion,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import { ScrollReveal } from "@/components/ScrollReveal";

type IntegrationApp = {
  name: string;
  sub: string;
  Icon: IconType;
  logoBg: string;
  iconColor: string;
  accent: string;
  badge: string;
};

const chatApps: IntegrationApp[] = [
  {
    name: "WhatsApp",
    sub: "Approve quotes, redirect plans, and check trip status from the same thread.",
    Icon: SiWhatsapp,
    logoBg: "bg-[#25D366]",
    iconColor: "text-white",
    accent: "bg-[#25D366]",
    badge: "Live channel",
  },
  {
    name: "Telegram",
    sub: "Run the same agent workflow for teams and operators who prefer Telegram.",
    Icon: SiTelegram,
    logoBg: "bg-[#2AABEE]",
    iconColor: "text-white",
    accent: "bg-[#2AABEE]",
    badge: "Live channel",
  },
];

const workspaceApps: IntegrationApp[] = [
  {
    name: "Notion",
    sub: "Trip plans and briefs synced automatically",
    Icon: SiNotion,
    logoBg: "bg-white",
    iconColor: "text-black",
    accent: "bg-slate-950",
    badge: "Plans",
  },
  {
    name: "Google Calendar",
    sub: "Trip dates blocked and shared automatically",
    Icon: SiGooglecalendar,
    logoBg: "bg-white",
    iconColor: "text-[#4285F4]",
    accent: "bg-[#4285F4]",
    badge: "Dates",
  },
  {
    name: "Gmail",
    sub: "Operator and traveler emails, handled",
    Icon: SiGmail,
    logoBg: "bg-white",
    iconColor: "text-[#EA4335]",
    accent: "bg-[#EA4335]",
    badge: "Email",
  },
  {
    name: "Google Drive",
    sub: "Permits, waivers, and docs stored and shared",
    Icon: SiGoogledrive,
    logoBg: "bg-white",
    iconColor: "text-[#0F9D58]",
    accent: "bg-[#0F9D58]",
    badge: "Docs",
  },
];

function IntegrationCard({
  app,
  delay,
  compact = false,
}: {
  app: IntegrationApp;
  delay: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group relative flex h-full min-h-[132px] flex-col overflow-hidden rounded-2xl border border-white/75 bg-white/75 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(15,23,42,0.1)]"
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${app.accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${app.logoBg} shadow-[0_6px_16px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70`}>
          <app.Icon className={`h-5 w-5 ${app.iconColor}`} aria-hidden="true" />
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
          {app.badge}
        </span>
      </div>

      <div className={compact ? "mt-5" : "mt-6"}>
        <h3 className="text-base font-bold leading-tight text-slate-950">{app.name}</h3>
        <p className="mt-1.5 text-xs leading-5 text-slate-500">{app.sub}</p>
      </div>
    </motion.div>
  );
}

export function Integrations() {
  return (
    <section className="px-5 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Integrations
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Works where you{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                already are.
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Your agents live in WhatsApp and Telegram. Trip plans and docs sync to Notion and Google - nothing new to set up.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal className="h-full" delay={0.04}>
            <div className="flex h-full flex-col">
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Chat &amp; command
              </p>
              <div className="grid h-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {chatApps.map((app, i) => (
                  <IntegrationCard key={app.name} app={app} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="h-full" delay={0.08}>
            <div className="flex h-full flex-col">
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Workspace sync
              </p>
              <div className="grid h-full gap-3 sm:grid-cols-2">
                {workspaceApps.map((app, i) => (
                  <IntegrationCard key={app.name} app={app} delay={i * 0.06} compact />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
