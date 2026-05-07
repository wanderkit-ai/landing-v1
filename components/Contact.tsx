import { ArrowRight } from "lucide-react";

const BOOK_URL = "https://calendly.com/ac4393-drexel/30min";

export function Contact() {
  return (
    <section id="contact" className="border-t border-indigo-100 px-5 py-16 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFD528]">
          Get in touch
        </p>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          Want to see it in action?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-500">
          Book a 30-minute call. We'll walk through exactly how it works for your trips and your audience.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={BOOK_URL}
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
