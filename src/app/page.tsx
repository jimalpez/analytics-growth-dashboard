"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--th-bg)" }}>
      {/* Nav */}
      <nav className="border-b" style={{ borderColor: "var(--th-border)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-lg font-bold" style={{ color: "var(--th-text)" }}>GrowthPulse</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm transition-colors" style={{ color: "var(--th-text-secondary)" }}>
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl" style={{ color: "var(--th-text)" }}>
          Website Analytics &{" "}
          <span className="bg-linear-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent">
            Lead Management
          </span>{" "}
          Dashboard
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--th-text-secondary)" }}>
          Track your website traffic, manage leads, monitor keyword rankings,
          and grow your business with actionable insights — all in one place.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Get Started Free
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border px-6 py-3 font-medium transition-colors"
            style={{ borderColor: "var(--th-border)", color: "var(--th-text-secondary)" }}
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Real-Time Analytics",
              description:
                "Monitor page views, unique visitors, bounce rates, and session durations in real time.",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ),
            },
            {
              title: "Lead Management",
              description:
                "Capture, track, and convert leads with a built-in pipeline. Never miss an opportunity.",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM7.5 9.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
            },
            {
              title: "Keyword Tracking",
              description:
                "Monitor your search engine rankings and track keyword performance over time.",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border p-8 transition-colors"
              style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--th-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--th-card)")}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-primary-light)]"
                style={{ backgroundColor: "var(--th-icon-bg)" }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold" style={{ color: "var(--th-text)" }}>{feature.title}</h3>
              <p className="text-sm" style={{ color: "var(--th-text-secondary)" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8" style={{ borderColor: "var(--th-border)" }}>
        <div className="mx-auto max-w-7xl text-center text-sm" style={{ color: "var(--th-text-muted)" }}>
          GrowthPulse Analytics Dashboard. Built with Next.js, tRPC, Prisma, and TailwindCSS.
        </div>
      </footer>
    </div>
  );
}
