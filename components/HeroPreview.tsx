import { DollarSign, MapPin, Users } from "lucide-react";

export function HeroPreview() {
  return (
    <div className="relative mx-auto mt-5 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
      <div className="p-4">
        {/* Traveler request */}
        <div className="mb-3 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-xs font-bold text-white">
            S
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">@sarahexplores · 248k followers</p>
            <p className="mt-0.5 text-sm text-slate-600">
              "I want to take 8 followers to Everest Base Camp. 12 days, mid-October. Budget around $2,500/person."
            </p>
          </div>
        </div>

        {/* Trip details */}
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <MapPin className="mb-1.5 h-4 w-4 text-blue-500" />
            <p className="text-xs text-slate-400">Destination</p>
            <p className="text-sm font-semibold text-slate-900">Nepal · 12 days</p>
            <p className="mt-0.5 text-xs text-slate-500">Oct 15 – Oct 27</p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <Users className="mb-1.5 h-4 w-4 text-emerald-500" />
            <p className="text-xs text-slate-400">Local guides</p>
            <p className="text-sm font-semibold text-slate-900">2 operators confirmed</p>
            <p className="mt-0.5 text-xs text-emerald-600">Available Oct 15 ✓</p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <DollarSign className="mb-1.5 h-4 w-4 text-indigo-500" />
            <p className="text-xs text-slate-400">Your revenue</p>
            <p className="text-sm font-semibold text-slate-900">$2,400 / person</p>
            <p className="mt-0.5 text-xs text-slate-500">8 travelers · $19,200 total</p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <p className="text-xs font-medium text-emerald-700">
            Itinerary ready — share the bookable trip link with @sarahexplores
          </p>
          <span className="ml-auto shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
            Share →
          </span>
        </div>
      </div>
    </div>
  );
}
