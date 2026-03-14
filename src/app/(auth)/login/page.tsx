import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "var(--th-bg)" }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Welcome back</h1>
          <p className="mt-2" style={{ color: "var(--th-text-secondary)" }}>Sign in to your GrowthPulse account</p>
        </div>

        <div
          className="rounded-xl border p-8"
          style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
        >
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
                placeholder="Enter your password"
                className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                style={{
                  borderColor: "var(--th-border)",
                  backgroundColor: "var(--th-input-bg)",
                  color: "var(--th-text)",
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-sm text-primary-light hover:underline">
                Forgot password?
              </a>
            </div>
            <Link
              href="/dashboard"
              className="block w-full rounded-lg bg-primary py-2.5 text-center font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Sign In
            </Link>
          </form>
        </div>

        <p className="mt-6 text-center text-sm" style={{ color: "var(--th-text-secondary)" }}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary-light hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
