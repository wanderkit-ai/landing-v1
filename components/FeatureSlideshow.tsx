"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2, Clock, Globe, Loader, MapPin,
  MessageCircle, Phone, Search, Share2, Star, TrendingUp, Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ════════════════════════════════════════════
   SLIDE 1 — Plan Itinerary
════════════════════════════════════════════ */
const itineraryDays = [
  { emoji: "✈️", day: "Day 1", title: "Fly Kathmandu → Lukla, trek to Phakding", detail: "3–4 hrs · 2,610 m" },
  { emoji: "🏔️", day: "Day 2", title: "Phakding to Namche Bazaar", detail: "5–6 hrs · 3,440 m" },
  { emoji: "🧘", day: "Day 3", title: "Acclimatization in Namche Bazaar", detail: "Rest · explore market" },
  { emoji: "🕌", day: "Day 4", title: "Trek to Tengboche Monastery", detail: "5–6 hrs · 3,860 m" },
  { emoji: "⛺", day: "Day 5", title: "Tengboche to Dingboche", detail: "5 hrs · 4,410 m" },
  { emoji: "🗻", day: "Day 6", title: "Dingboche to Lobuche", detail: "5 hrs · 4,940 m" },
];

function ItinerarySlide() {
  const [typing, setTyping] = useState(true);
  useEffect(() => { const t = setTimeout(() => setTyping(false), 1800); return () => clearTimeout(t); }, []);
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">NOMA AI Planner</p>
        <p className="mt-1 text-sm font-medium text-white opacity-90">
          "8 followers, Everest Base Camp, 12 days, mid-October, $2,500/person"
        </p>
      </div>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-2.5">
        <motion.div animate={{ rotate: typing ? 360 : 0 }} transition={{ duration: 1, repeat: typing ? Infinity : 0, ease: "linear" }}>
          <Loader size={13} className={typing ? "text-blue-500" : "text-emerald-500"} />
        </motion.div>
        <span className="text-xs text-slate-500">
          {typing ? "Generating your 12-day itinerary…" : "Itinerary ready · 12 days · $2,400/person"}
        </span>
        {!typing && <CheckCircle2 size={13} className="ml-auto text-emerald-500" />}
      </div>
      <div className="divide-y divide-slate-50 px-2 py-2">
        {itineraryDays.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: typing ? 1.6 + i * 0.12 : i * 0.07, duration: 0.35 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50"
          >
            <span className="text-lg">{d.emoji}</span>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-bold text-blue-600">{d.day}</span>
              <p className="truncate text-sm font-medium text-slate-800">{d.title}</p>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{d.detail}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: typing ? 2.5 : 0.9 }}
          className="px-3 py-2.5 text-center text-xs text-slate-400"
        >
          + 6 more days · acclimatization, base camp, return
        </motion.div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 2 — CRM Dashboard
════════════════════════════════════════════ */
const trips = [
  { name: "EBC Trek · @sarahexplores",     travelers: 8,  revenue: "$19,200", status: "Active",    pct: 75, color: "bg-blue-500"   },
  { name: "Patagonia · @mikewanders",       travelers: 6,  revenue: "$15,000", status: "Planning",  pct: 40, color: "bg-violet-500" },
  { name: "Kilimanjaro · @emma_outdoors",   travelers: 10, revenue: "$23,000", status: "Draft",     pct: 15, color: "bg-slate-300"  },
];

function CRMSlide() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Active Trips", value: "3", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Revenue", value: "$47.2k", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Travelers", value: "24", icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
          { label: "Operators", value: "8", icon: MapPin, color: "text-orange-600", bg: "bg-orange-50" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm"
          >
            <div className={`mb-2 inline-flex rounded-xl p-2 ${s.bg}`}>
              <s.icon size={14} className={s.color} />
            </div>
            <p className="text-xl font-bold text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Trip pipeline */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
        <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
          <p className="text-sm font-semibold text-slate-900">Trip Pipeline</p>
        </div>
        <div className="divide-y divide-slate-50">
          {trips.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="px-4 py-3"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.travelers} travelers · {t.revenue}</p>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                  t.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                  t.status === "Planning" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
                }`}>{t.status}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-100">
                <motion.div
                  className={`h-1.5 rounded-full ${t.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${t.pct}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 3 — Find & Contact Operators
════════════════════════════════════════════ */
const operators = [
  { name: "Pemba Guides",      region: "Khumbu Region",   rating: 4.9, status: "confirmed", msg: "Deal confirmed · $188/day" },
  { name: "Summit Trek Nepal", region: "Lukla",           rating: 4.7, status: "confirmed", msg: "Backup confirmed · $192/day" },
  { name: "Himalaya Experts",  region: "Namche Bazaar",   rating: 4.6, status: "waiting",   msg: "Replied · counter offer pending" },
  { name: "Nepal Trekkers Co", region: "Kathmandu",       rating: 4.5, status: "outreach",  msg: "Message sent · awaiting reply" },
  { name: "EBC Adventures",    region: "Gorak Shep",      rating: 4.4, status: "finding",   msg: "Found via NOMA network" },
];

function OperatorsSlide() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <Search size={14} className="text-slate-400" />
        <p className="flex-1 text-sm text-slate-500">Searching operators in Nepal · Khumbu region…</p>
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">12 found</span>
      </div>
      <div className="divide-y divide-slate-50">
        {operators.map((op, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center gap-3 px-4 py-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-bold text-white">
              {op.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-slate-800">{op.name}</p>
                <span className="flex items-center gap-0.5 text-[11px] text-amber-500">
                  <Star size={10} className="fill-amber-400 text-amber-400" />{op.rating}
                </span>
              </div>
              <p className="text-xs text-slate-400">{op.region} · {op.msg}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.12 + 0.2, type: "spring" }}
            >
              {op.status === "confirmed" && <CheckCircle2 size={16} className="text-emerald-500" />}
              {op.status === "waiting"   && <Clock size={16} className="text-amber-400" />}
              {op.status === "outreach"  && <Phone size={16} className="text-blue-400" />}
              {op.status === "finding"   && (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                  <Loader size={16} className="text-slate-300" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-blue-100 bg-blue-50 px-4 py-3">
        <p className="text-xs text-blue-700">🤖 <span className="font-medium">NOMA Agent:</span> Auto-messaging operators ranked by rating, availability, and past performance.</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 4 — Live Back-and-Forth Negotiation
════════════════════════════════════════════ */
const convo = [
  { from: "agent",    text: "Hi Pemba! I'm coordinating an EBC trek — 8 travelers, Oct 15–27. Do you have availability? Our budget is $180/person/day, guide + porter included.", time: "09:14" },
  { from: "operator", text: "Hello! Yes we are available Oct 15. My rate is $195/day — certified guide, 2 porters, first-aid kit.", time: "09:15" },
  { from: "agent",    text: "Appreciate it! Can we do $185? It's a confirmed group of 8 with full payment upfront before departure.", time: "09:16" },
  { from: "operator", text: "Minimum I can do is $190. I also need a 30% deposit before Oct 1 to hold the dates.", time: "09:17" },
  { from: "agent",    text: "$188 with deposit by Sep 25 — we'll handle it same day. This group is guaranteed, no risk of cancellation. Final offer.", time: "09:18" },
  { from: "operator", text: "OK deal ✅ $188/day confirmed for Oct 15. Deposit by Sep 25. I'll send permit paperwork today.", time: "09:19" },
];

// Sequence: [show msg 0] → [typing] → [show msg 1] → [show msg 2] → [typing] → ...
const sequence: Array<{ action: "msg"; idx: number; t: number } | { action: "typing" | "stopTyping"; t: number }> = [
  { action: "msg",       idx: 0, t: 300  },
  { action: "typing",          t: 1000 },
  { action: "msg",       idx: 1, t: 2200 },
  { action: "stopTyping",      t: 2200 },
  { action: "msg",       idx: 2, t: 3000 },
  { action: "typing",          t: 3700 },
  { action: "msg",       idx: 3, t: 5000 },
  { action: "stopTyping",      t: 5000 },
  { action: "msg",       idx: 4, t: 5800 },
  { action: "typing",          t: 6500 },
  { action: "msg",       idx: 5, t: 7800 },
  { action: "stopTyping",      t: 7800 },
];

function LiveNegotiationSlide() {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible([]);
    setTyping(false);
    const timers = sequence.map(step =>
      setTimeout(() => {
        if (step.action === "msg")       setVisible(v => v.includes(step.idx) ? v : [...v, step.idx]);
        if (step.action === "typing")    setTyping(true);
        if (step.action === "stopTyping") setTyping(false);
      }, step.t)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visible, typing]);

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/80">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-sm font-bold text-emerald-900">P</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Pemba Guides · Nepal</p>
          <p className="text-xs text-emerald-200">NOMA Agent · live negotiation</p>
        </div>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          <span className="text-xs text-emerald-200">Live</span>
        </span>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="h-[340px] space-y-2.5 overflow-y-auto bg-[#ECE5DD] px-4 py-4">
        {convo.map((msg, i) => {
          if (!visible.includes(i)) return null;
          const isAgent = msg.from === "agent";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex ${isAgent ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                isAgent ? "rounded-tr-sm bg-[#DCF8C6]" : "rounded-tl-sm bg-white"
              }`}>
                <p className={`mb-0.5 text-[11px] font-semibold ${isAgent ? "text-emerald-700" : "text-blue-600"}`}>
                  {isAgent ? "NOMA Agent" : "Pemba · Local Operator"}
                </p>
                <p className="text-sm leading-relaxed text-slate-800">{msg.text}</p>
                <p className="mt-1 text-right text-[10px] text-slate-400">{msg.time}{isAgent ? " ✓✓" : ""}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Typing indicator */}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="h-2 w-2 rounded-full bg-slate-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Deal confirmed banner */}
        <AnimatePresence>
          {visible.includes(5) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="flex items-center gap-2.5 rounded-2xl bg-emerald-600 px-4 py-3"
            >
              <span className="text-base">🎉</span>
              <div>
                <p className="text-xs font-semibold text-white">Deal locked — $188/day · saved $56/person</p>
                <p className="text-xs text-emerald-200">NOMA auto-confirmed booking and sent deposit link</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 5 — Public Trip Page
════════════════════════════════════════════ */
function TripPageSlide() {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
      {/* Hero */}
      <div className="relative h-40 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70">@sarahexplores</p>
          <p className="mt-1 text-2xl font-bold tracking-tight">Everest Base Camp</p>
          <p className="mt-1 text-sm opacity-80">Nepal · 12 days · Oct 15–27</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow"
        >
          🟢 8 spots left
        </motion.div>
      </div>

      <div className="p-4">
        {/* URL */}
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs">
          <Globe size={11} className="text-slate-400" />
          <span className="text-slate-400">noma.travel/trip/</span>
          <span className="font-semibold text-slate-700">ebc-oct-sarah</span>
          <Share2 size={11} className="ml-auto text-slate-400" />
        </div>

        {/* Highlights */}
        <div className="mb-4 space-y-2">
          {[
            ["✈️", "Flights from Kathmandu included"],
            ["🏕️", "Teahouse stays all nights"],
            ["👨‍🦯", "Certified Sherpa + porter"],
            ["📋", "All permits handled by NOMA"],
          ].map(([emoji, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              <span>{emoji}</span><span>{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3">
          <div>
            <p className="text-[11px] text-blue-200">Per person</p>
            <p className="text-xl font-bold text-white">$2,400</p>
          </div>
          <button suppressHydrationWarning className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow">
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 5 — Incoming Bookings
════════════════════════════════════════════ */
const bookings = [
  { handle: "@alexchen",     name: "Alex Chen",    avatar: "A", color: "from-blue-400 to-blue-600",     time: "2m ago",  status: "booked",  amount: "$2,400" },
  { handle: "@mariasantos",  name: "Maria Santos", avatar: "M", color: "from-rose-400 to-pink-600",     time: "5m ago",  status: "inquiry", amount: null,    msg: "Can my partner join?" },
  { handle: "@jamespark_",   name: "James Park",   avatar: "J", color: "from-violet-400 to-indigo-600", time: "11m ago", status: "booked",  amount: "$2,400" },
  { handle: "@emmawanders",  name: "Emma Wilson",  avatar: "E", color: "from-amber-400 to-orange-500",  time: "18m ago", status: "booked",  amount: "$2,400" },
  { handle: "@tombradley",   name: "Tom Bradley",  avatar: "T", color: "from-emerald-400 to-teal-600",  time: "34m ago", status: "booked",  amount: "$2,400" },
];

function BookingsSlide() {
  const booked = bookings.filter(b => b.status === "booked").length;
  const total = 8;
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Progress */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900">EBC Trek · Spots filling up</p>
          <span className="text-sm font-bold text-blue-600">{booked}/{total} booked</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-slate-100">
          <motion.div
            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(booked / total) * 100}%` }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>Revenue: <span className="font-semibold text-emerald-600">${(booked * 2400).toLocaleString()}</span></span>
          <span>{total - booked} spots remaining</span>
        </div>
      </div>

      {/* Booking feed */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
        <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
          <p className="text-sm font-semibold text-slate-900">Live booking feed</p>
        </div>
        <div className="divide-y divide-slate-50">
          {bookings.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${b.color} text-xs font-bold text-white`}>
                {b.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">{b.name}
                  <span className="ml-1 text-xs font-normal text-slate-400">{b.handle}</span>
                </p>
                {b.status === "inquiry"
                  ? <p className="flex items-center gap-1 text-xs text-slate-500"><MessageCircle size={10} />{b.msg}</p>
                  : <p className="text-xs text-emerald-600">Booking confirmed · {b.amount}</p>
                }
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[11px] text-slate-400">{b.time}</span>
                {b.status === "booked"
                  ? <CheckCircle2 size={14} className="text-emerald-500" />
                  : <MessageCircle size={14} className="text-amber-400" />
                }
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 6 — Paperwork & Logistics
════════════════════════════════════════════ */
const logisticsItems = [
  { label: "Flights booked",           done: 8, total: 8,  color: "bg-emerald-500" },
  { label: "Trekking permits filed",   done: 8, total: 8,  color: "bg-emerald-500" },
  { label: "Teahouse reservations",    done: 8, total: 8,  color: "bg-emerald-500" },
  { label: "Travel insurance",         done: 6, total: 8,  color: "bg-blue-500"    },
  { label: "Waivers signed",           done: 5, total: 8,  color: "bg-blue-500"    },
  { label: "Emergency contacts",       done: 4, total: 8,  color: "bg-amber-400"   },
];

function PaperworkSlide() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Logistics tracker · EBC Oct 15</p>
          <p className="text-xs text-slate-400">NOMA handling all paperwork automatically</p>
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
          <Loader size={14} className="text-blue-500" />
        </motion.div>
      </div>

      <div className="divide-y divide-slate-50 px-5">
        {logisticsItems.map((item, i) => {
          const pct = (item.done / item.total) * 100;
          const allDone = item.done === item.total;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="py-3"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {allDone
                    ? <CheckCircle2 size={14} className="text-emerald-500" />
                    : <Clock size={14} className="text-amber-400" />
                  }
                  <p className="text-sm font-medium text-slate-800">{item.label}</p>
                </div>
                <span className={`text-xs font-semibold ${allDone ? "text-emerald-600" : "text-slate-500"}`}>
                  {item.done}/{item.total}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-100">
                <motion.div
                  className={`h-1.5 rounded-full ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="border-t border-violet-100 bg-violet-50 px-5 py-3">
        <p className="text-xs text-violet-700">🤖 <span className="font-medium">NOMA Agent:</span> Chasing insurance docs and waivers for remaining 2–4 travelers via email &amp; WhatsApp.</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDESHOW SHELL
════════════════════════════════════════════ */
const slides = [
  {
    id: "itinerary", tag: "Itinerary",
    title: "AI builds your full trip plan instantly",
    sub: "Text your agent a brief — destination, dates, budget — over WhatsApp or Telegram. NOMA generates a complete day-by-day itinerary with real operator availability and pricing.",
    component: ItinerarySlide,
  },
  {
    id: "crm", tag: "CRM",
    title: "Your entire travel business, one dashboard",
    sub: "Track every trip, traveler, operator, and dollar from one place. Built for influencers running group trips and advisors managing client portfolios.",
    component: CRMSlide,
  },
  {
    id: "operators", tag: "Operators",
    title: "Agents find and contact local operators for you",
    sub: "NOMA scans its operator network, ranks by rating and availability, then automatically reaches out on your behalf — no cold emails, no manual research.",
    component: OperatorsSlide,
  },
  {
    id: "negotiation", tag: "Negotiation",
    title: "Watch the agent negotiate in real-time",
    sub: "Agents go back and forth with operators — countering prices, handling objections, and locking in the best deal. You can follow the conversation and step in anytime from WhatsApp.",
    component: LiveNegotiationSlide,
  },
  {
    id: "page", tag: "Trip Page",
    title: "A beautiful public page, ready to share",
    sub: "Your itinerary becomes a shareable booking page in one click — your brand, your link. Share it with your followers and let them pay directly.",
    component: TripPageSlide,
  },
  {
    id: "bookings", tag: "Bookings",
    title: "Watch your followers book in real-time",
    sub: "Agents handle payments, confirmations, and traveler inquiries automatically as spots fill. You get notified; they do the work.",
    component: BookingsSlide,
  },
  {
    id: "paperwork", tag: "Paperwork",
    title: "Every permit, waiver, and doc — automated",
    sub: "Agents track and chase every document for every traveler — permits, waivers, insurance, emergency contacts. You never need to manage another WhatsApp thread.",
    component: PaperworkSlide,
  },
];

const INTERVAL = 6000;

export function FeatureSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function go(idx: number) {
    if (idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL);
  }

  function advance() {
    setDirection(1);
    setCurrent(c => (c + 1) % slides.length);
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    function onHashChange() {
      if (window.location.hash === "#how-it-works") {
        setDirection(1);
        setCurrent(0);
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(advance, INTERVAL);
      }
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir * 50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -50, opacity: 0 }),
  };

  const Slide = slides[current].component;
  const slide = slides[current];

  return (
    <section id="how-it-works" className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
      {/* Tab bar */}
      <div className="mb-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
          {slides.map((s, i) => (
            <button
              key={s.id}
              suppressHydrationWarning
              onClick={() => go(i)}
              className={`relative rounded-xl px-3.5 py-1.5 text-sm font-medium transition-colors ${
                i === current ? "text-white" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {i === current && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl bg-blue-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{s.tag}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-header"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              {slide.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">{slide.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} suppressHydrationWarning onClick={() => go(i)} className="group p-1">
            <motion.div
              animate={{ width: i === current ? 24 : 8 }}
              transition={{ duration: 0.3 }}
              className={`h-2 rounded-full transition-colors ${
                i === current ? "bg-blue-600" : "bg-slate-200 group-hover:bg-slate-300"
              }`}
            />
          </button>
        ))}
      </div>
      </div>
    </section>
  );
}
