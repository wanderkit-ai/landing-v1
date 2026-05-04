"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function WorkflowVideoDemo() {
  return (
    <div className="liquid-glass mt-8 rounded-3xl p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Example Workflow Video
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            Traveler request → Bookable Everest trip
          </h3>
        </div>
        <span className="glass-pill hidden rounded-full px-3 py-1 text-xs text-slate-600 md:inline-flex">
          45s demo
        </span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-slate-900">
        <video
          className="h-[280px] w-full object-cover md:h-[420px]"
          controls
          muted
          loop
          playsInline
          preload="metadata"
          poster="/workflow-video-poster.svg"
        >
          <source src="/workflow-demo.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-800"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <PlayCircle size={16} />
            Add your generated video at `public/workflow-demo.mp4`
          </motion.div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
        <div className="glass-pill rounded-2xl px-3 py-2">
          1) Traveler asks advisor for Everest Base Camp trip details.
        </div>
        <div className="glass-pill rounded-2xl px-3 py-2">
          2) Advisor checks global operator inventory and pricing in NOMA.
        </div>
        <div className="glass-pill rounded-2xl px-3 py-2">
          3) AI coordinates logistics and returns a fully bookable itinerary.
        </div>
      </div>
    </div>
  );
}
