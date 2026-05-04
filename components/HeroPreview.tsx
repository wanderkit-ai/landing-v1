import { CalendarDays, MapPin, Route, Sparkles } from "lucide-react";

export function HeroPreview() {
  return (
    <div className="liquid-glass relative mx-auto mt-12 w-full max-w-5xl rounded-[2rem] p-4 md:mt-16">
      <div className="liquid-glass rounded-[1.5rem] p-4 text-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="glass-pill rounded-full px-3 py-1 text-xs text-slate-600">
            Live trip view
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="liquid-glass rounded-2xl p-4">
            <Route className="mb-5 h-6 w-6 text-blue-300" />
            <p className="text-sm text-slate-500">Itinerary</p>
            <h3 className="mt-1 text-lg font-semibold">Everest Base Camp · 12D</h3>
            <p className="mt-3 text-sm text-slate-600">
              Guides, routes, permits, and logistics coordinated end-to-end.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-4">
            <Sparkles className="mb-5 h-6 w-6 text-indigo-300" />
            <p className="text-sm text-slate-500">Agent</p>
            <h3 className="mt-1 text-lg font-semibold">Pricing + availability</h3>
            <p className="mt-3 text-sm text-slate-600">
              AI confirms supplier inventory, pricing, and booking constraints.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-4">
            <CalendarDays className="mb-5 h-6 w-6 text-sky-300" />
            <p className="text-sm text-slate-500">Operations</p>
            <h3 className="mt-1 text-lg font-semibold">Advisor control panel</h3>
            <p className="mt-3 text-sm text-slate-600">
              Manage travelers, operators, and booking status in one workspace.
            </p>
          </div>
        </div>

        <div className="liquid-glass mt-4 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="glass-button rounded-full p-2 text-white">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-sm font-medium">
                Two local operators confirmed availability this week.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                NOMA auto-selects the best-fit option and returns a fully
                bookable plan for your traveler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
