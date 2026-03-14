"use client";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon: React.ReactNode;
}

export function StatsCard({ title, value, trend, icon }: StatsCardProps) {
  return (
    <div
      className="rounded-xl border p-6 transition-colors"
      style={{
        borderColor: "var(--th-border)",
        backgroundColor: "var(--th-card)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--th-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--th-card)")}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm" style={{ color: "var(--th-text-secondary)" }}>{title}</p>
          <p className="mt-1 text-2xl font-bold" style={{ color: "var(--th-text)" }}>{value}</p>
          {trend !== undefined && (
            <div className="mt-2 flex items-center gap-1">
              <span
                className={`text-sm font-medium ${trend >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}
              >
                {trend >= 0 ? "+" : ""}
                {trend}%
              </span>
              <span className="text-xs" style={{ color: "var(--th-text-muted)" }}>vs last period</span>
            </div>
          )}
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-primary-light)]"
          style={{ backgroundColor: "var(--th-icon-bg)" }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
