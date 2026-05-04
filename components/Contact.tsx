import { ArrowRight, Mail } from "lucide-react";

const EMAIL = "founders@noma.travel";
const CALL_URL = "https://cal.com/noma";

export function Contact() {
  return (
    <section id="contact" className="border-t border-slate-100 px-5 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
          Get in touch
        </p>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Ready to let agents run your trips?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-500">
          Reach out directly or book a call — we'll walk you through how NOMA works for your audience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <Mail size={15} className="text-slate-400" />
            {EMAIL}
          </a>

          <a
            href={CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Book a call
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
