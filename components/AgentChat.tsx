export function AgentChat() {
  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/80">
      {/* WhatsApp-style header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-sm font-bold text-emerald-900">
          P
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Pemba Guides · Nepal</p>
          <p className="text-xs text-emerald-200">NOMA Agent is negotiating</p>
        </div>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          <span className="text-xs text-emerald-200">Live</span>
        </span>
      </div>

      {/* Chat area */}
      <div className="space-y-3 bg-[#ECE5DD] px-4 py-4">

        {/* Agent bubble */}
        <div className="flex justify-end">
          <div className="relative max-w-[78%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
            <p className="mb-0.5 text-[11px] font-semibold text-emerald-700">NOMA Agent</p>
            <p className="text-sm text-slate-800">
              Hi Pemba! I'm booking an EBC trek for a group of 8, Oct 15–27. Do you have availability? We're looking at $180/person/day — guide + porter included.
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-400">09:14 ✓✓</p>
          </div>
        </div>

        {/* Operator bubble */}
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="mb-0.5 text-[11px] font-semibold text-blue-600">Pemba · Local Operator</p>
            <p className="text-sm text-slate-800">
              Hello! Yes we are available Oct 15. My best rate is $195/day — this includes certified guide, 2 porters, and emergency kit.
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-400">09:16</p>
          </div>
        </div>

        {/* Agent counter */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
            <p className="mb-0.5 text-[11px] font-semibold text-emerald-700">NOMA Agent</p>
            <p className="text-sm text-slate-800">
              We can do $188 — group of 8 is guaranteed, full payment upfront before departure. Works for you?
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-400">09:17 ✓✓</p>
          </div>
        </div>

        {/* Operator accepts */}
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="mb-0.5 text-[11px] font-semibold text-blue-600">Pemba · Local Operator</p>
            <p className="text-sm text-slate-800">
              OK deal ✅ $188/day confirmed for Oct 15. I will send permit documents today.
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-400">09:19</p>
          </div>
        </div>

        {/* Confirmation banner */}
        <div className="flex items-center gap-2.5 rounded-2xl bg-emerald-600 px-4 py-3 shadow-sm">
          <span className="text-base">🎉</span>
          <div>
            <p className="text-xs font-semibold text-white">Booking confirmed automatically</p>
            <p className="text-xs text-emerald-200">Saved $56/person vs. asking price · $448 total saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
