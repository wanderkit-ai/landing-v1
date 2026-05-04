"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [fieldError, setFieldError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setFieldError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || ""),
    };

    if (!emailRegex.test(payload.email)) {
      setState("error");
      setFieldError("Enter a valid email address.");
      return;
    }

    setState("loading");

    const successCopy = "Success! We'll contact you shortly.";

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: { ok?: boolean; message?: string; error?: string } = {};
      const raw = await response.text();
      if (raw) {
        try {
          data = JSON.parse(raw) as typeof data;
        } catch {
          // Some responses are 200 but body is empty or non-JSON; rely on response.ok.
        }
      }

      if (!response.ok) {
        setState("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setState("success");
      setMessage(
        typeof data.message === "string" && data.message.trim()
          ? data.message
          : successCopy,
      );
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Name (optional)"
          className="liquid-glass h-12 rounded-2xl px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          className="liquid-glass h-12 rounded-2xl px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          required
          name="email"
          type="email"
          placeholder="Enter your email"
          className="liquid-glass h-12 min-h-12 flex-1 rounded-2xl px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="submit"
          disabled={state === "loading"}
          className="glass-button group inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? "Joining..." : "Join Waitlist"}
          {state === "success" ? (
            <CheckCircle2 size={18} />
          ) : (
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      {fieldError ? (
        <p className="text-sm text-red-600">{fieldError}</p>
      ) : message ? (
        <p className={`text-sm ${state === "success" ? "text-emerald-600" : "text-red-600"}`}>
          {message}
        </p>
      ) : (
        <p className="text-xs text-slate-500">
          No spam. Just early access updates and launch details.
        </p>
      )}
    </form>
  );
}
