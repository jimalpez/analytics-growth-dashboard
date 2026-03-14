import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "var(--th-bg)" }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]">
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Create your account</h1>
          <p className="mt-2" style={{ color: "var(--th-text-secondary)" }}>Start your free trial of GrowthPulse</p>
        </div>

        <div
          className="rounded-xl border p-8"
          style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
        >
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                style={{
                  borderColor: "var(--th-border)",
                  backgroundColor: "var(--th-input-bg)",
                  color: "var(--th-text)",
                }}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                style={{
                  borderColor: "var(--th-border)",
                  backgroundColor: "var(--th-input-bg)",
                  color: "var(--th-text)",
                }}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                style={{
                  borderColor: "var(--th-border)",
                  backgroundColor: "var(--th-input-bg)",
                  color: "var(--th-text)",
                }}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                style={{
                  borderColor: "var(--th-border)",
                  backgroundColor: "var(--th-input-bg)",
                  color: "var(--th-text)",
                }}
              />
            </div>
            <Link
              href="/dashboard"
              className="block w-full rounded-lg bg-[var(--color-primary)] py-2.5 text-center font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Create Account
            </Link>
          </form>
        </div>

        <p className="mt-6 text-center text-sm" style={{ color: "var(--th-text-secondary)" }}>
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--color-primary-light)] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
