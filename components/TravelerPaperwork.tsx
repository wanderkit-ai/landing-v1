"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock, Loader } from "lucide-react";

const travelers = [
  { name: "Alex Chen",     avatar: "A", color: "from-blue-400 to-blue-600",    docs: [true,  true,  true,  true]  },
  { name: "Maria Santos",  avatar: "M", color: "from-rose-400 to-pink-600",    docs: [true,  true,  true,  false] },
  { name: "James Park",    avatar: "J", color: "from-violet-400 to-indigo-600",docs: [true,  true,  false, false] },
  { name: "Emma Wilson",   avatar: "E", color: "from-amber-400 to-orange-500", docs: [true,  false, false, false] },
  { name: "Tom Bradley",   avatar: "T", color: "from-emerald-400 to-teal-600", docs: [false, false, false, false] },
];

const docLabels = ["Permit", "Waiver", "Insurance", "Booking"];

function DocStatus({ done, delay }: { done: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 20 }}
      className="flex w-20 justify-center"
    >
      {done ? (
        <CheckCircle2 size={16} className="text-emerald-500" />
      ) : (
        <Clock size={14} className="text-slate-300" />
      )}
    </motion.div>
  );
}

export function TravelerPaperwork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const completed = travelers.flatMap(t => t.docs).filter(Boolean).length;
  const total = travelers.length * docLabels.length;

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-5 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Paperwork</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Every traveler's docs,{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            handled automatically
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-slate-500">
          NOMA collects permits, waivers, and confirmations for each traveler — you never chase paperwork again.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">EBC Trek · Oct 15–27</p>
            <p className="text-xs text-slate-400">{travelers.length} travelers · document tracker</p>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={inView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Loader size={12} className="text-blue-500" />
            </motion.div>
            <span className="text-xs text-blue-600 font-medium">AI processing</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="border-b border-slate-100 px-5 py-3">
          <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
            <span>Overall completion</span>
            <span className="font-medium text-slate-700">{completed}/{total} documents</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-100">
            <motion.div
              className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
              initial={{ width: 0 }}
              animate={inView ? { width: `${(completed / total) * 100}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_repeat(4,5rem)] border-b border-slate-50 px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <span>Traveler</span>
          {docLabels.map(d => <span key={d} className="text-center">{d}</span>)}
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-50">
          {travelers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              className="grid grid-cols-[1fr_repeat(4,5rem)] items-center px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                  {t.avatar}
                </div>
                <span className="text-sm font-medium text-slate-800">{t.name}</span>
              </div>
              {t.docs.map((done, j) => (
                <DocStatus key={j} done={done} delay={inView ? i * 0.1 + j * 0.07 + 0.35 : 999} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* AI status footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="border-t border-blue-100 bg-blue-50 px-5 py-3"
        >
          <p className="text-xs text-blue-700">
            🤖 <span className="font-medium">NOMA Agent:</span> Generating permits for Emma Wilson and Tom Bradley — est. 2 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
