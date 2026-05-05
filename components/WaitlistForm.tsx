"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";

export function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
    };

    if (!emailRegex.test(payload.email)) {
      setState("error");
      setMessage("Enter a valid email address.");
      return;
    }

    setState("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { message?: string; error?: string } = {};
      const raw = await response.text();
      if (raw) { try { data = JSON.parse(raw); } catch { /* empty */ } }

      if (!response.ok) {
        setState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage(data.message?.trim() || "You're on the list! We'll be in touch soon.");
      form.reset();
    } catch {
      setState("success");
      setMessage("You're on the list! We'll be in touch soon.");
      form.reset();
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
        <CheckCircle2 size={20} className="shrink-0 text-emerald-500" />
        <p className="text-sm font-medium text-emerald-700">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
      <div className="space-y-2.5">
        {/* Full name */}
        <input
          name="name"
          type="text"
          placeholder="Full name"
          className={inputCls}
        />

        {/* Email + phone row */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            className={inputCls}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            className={inputCls}
          />
        </div>

        {/* CTA button */}
        <button
          type="submit"
          disabled={state === "loading"}
          className="glass-button flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white disabled:opacity-60"
        >
          {state === "loading" ? (
            "Joining…"
          ) : (
            <>
              Join Waitlist
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>

      {message && (
        <p className="mt-2.5 text-center text-sm text-red-500">{message}</p>
      )}

    </form>
  );
}
