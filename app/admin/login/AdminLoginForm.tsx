"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  nextPath: string;
};

export function AdminLoginForm({ nextPath }: Props) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin-auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Login failed.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 space-y-3">
      <input
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="h-11 w-full border-2 border-black/25 bg-white px-4 text-sm outline-none focus:border-black"
      />
      <input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="h-11 w-full border-2 border-black/25 bg-white px-4 text-sm outline-none focus:border-black"
      />
      <button
        type="submit"
        disabled={loading}
        className="glass-button h-11 w-full text-sm font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Enter admin"}
      </button>
      {error && <p className="text-sm text-[#C8102E]">{error}</p>}
    </form>
  );
}
