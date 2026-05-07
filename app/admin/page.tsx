import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 text-black md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="liquid-glass p-6">
          <p className="coord text-xs text-[#1f1f1f]">ADMIN LAB</p>
          <h1 className="mt-2 font-display text-5xl font-bold">Testing Workspace</h1>
          <p className="mt-3 max-w-3xl text-sm text-[#1f1f1f] md:text-base">
            Use this area to test onboarding flows, experiment with landing variants, and stage
            future admin pages safely outside the public homepage.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/" className="glass-button px-4 py-2 text-sm font-semibold text-white">
              Return Home
            </Link>
            <Link href="/" className="border-2 border-black px-4 py-2 text-sm font-semibold text-black">
              Home
            </Link>
            <form action="/api/admin-auth/logout" method="post">
              <button
                type="submit"
                className="border-2 border-black px-4 py-2 text-sm font-semibold text-black"
              >
                Logout
              </button>
            </form>
          </div>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="liquid-glass p-5">
            <p className="coord text-xs text-[#1f1f1f]">MODULE 01</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Onboarding Flows</h2>
            <p className="mt-2 text-sm text-[#1f1f1f]">
              Draft and test creator onboarding variants, steps, and messaging.
            </p>
          </article>

          <article className="liquid-glass p-5">
            <p className="coord text-xs text-[#1f1f1f]">MODULE 02</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Landing Experiments</h2>
            <p className="mt-2 text-sm text-[#1f1f1f]">
              A/B copy and visual blocks without affecting production sections.
            </p>
          </article>

          <article className="liquid-glass p-5">
            <p className="coord text-xs text-[#1f1f1f]">MODULE 03</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Internal Tools</h2>
            <p className="mt-2 text-sm text-[#1f1f1f]">
              Add temporary utilities, data checks, and QA controls for operations.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
