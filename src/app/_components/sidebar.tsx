"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "grid" },
  { href: "/analytics", label: "Analytics", icon: "chart" },
  { href: "/leads", label: "Leads", icon: "users" },
  { href: "/keywords", label: "Keywords", icon: "search" },
  { href: "/admin/users", label: "Admin Users", icon: "shield" },
];

const icons: Record<string, React.ReactNode> = {
  grid: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  chart: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  users: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  search: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const SunIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: "light" as const, icon: <SunIcon />, label: "Light" },
    { value: "dark" as const, icon: <MoonIcon />, label: "Dark" },
    { value: "system" as const, icon: <MonitorIcon />, label: "System" },
  ];

  return (
    <aside
      className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r"
      style={{ backgroundColor: "var(--th-sidebar)", borderColor: "var(--th-border)" }}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6" style={{ borderColor: "var(--th-border)" }}>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <span className="text-lg font-bold" style={{ color: "var(--th-text)" }}>GrowthPulse</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "nav-link"
              }`}
            >
              {icons[item.icon]}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Theme toggle */}
      <div className="border-t px-4 py-3" style={{ borderColor: "var(--th-border)" }}>
        <p className="mb-2 px-1 text-xs font-medium" style={{ color: "var(--th-text-muted)" }}>Theme</p>
        <div className="flex rounded-lg p-1" style={{ backgroundColor: "var(--th-input-bg)" }}>
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value)}
              aria-label={`Switch to ${opt.label} theme`}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                theme === opt.value
                  ? "bg-primary text-white"
                  : "nav-link"
              }`}
            >
              {opt.icon}
              <span className="hidden lg:inline">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* User profile link */}
      <div className="border-t p-4" style={{ borderColor: "var(--th-border)" }}>
        <Link
          href="/profile"
          className="nav-link flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-xs font-bold text-white">AM</span>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--th-text)" }}>Jim Alpez</p>
            <p className="text-xs" style={{ color: "var(--th-text-muted)" }}>Admin</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
