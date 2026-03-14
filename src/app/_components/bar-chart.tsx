"use client";

import { useState } from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  title: string;
  color?: string;
}

export function BarChart({ data, title, color = "var(--color-primary)" }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="rounded-xl border p-6" style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}>
      <h3 className="mb-4 text-lg font-semibold" style={{ color: "var(--th-text)" }}>{title}</h3>
      <div className="space-y-3">
        {data.map((item, i) => {
          const pct = (item.value / maxValue) * 100;
          const isHovered = hoverIndex === i;
          return (
            <div
              key={i}
              className="group relative flex items-center gap-3"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <span
                className="w-24 truncate text-xs transition-colors"
                style={{ color: isHovered ? "var(--th-text)" : "var(--th-text-secondary)" }}
              >
                {item.label}
              </span>
              <div className="flex-1">
                <div className="relative h-7 w-full rounded-full" style={{ backgroundColor: "var(--th-bar-track)" }}>
                  <div
                    className="flex h-7 items-center rounded-full px-3 text-xs font-medium text-white transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: color,
                      minWidth: "2.5rem",
                      opacity: isHovered ? 1 : 0.85,
                      filter: isHovered ? "brightness(1.15)" : "none",
                    }}
                  >
                    {item.value.toLocaleString()}
                  </div>

                  {/* Tooltip on hover */}
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute -top-10 z-10 rounded-lg border px-3 py-1.5 text-xs shadow-lg whitespace-nowrap"
                      style={{
                        left: `clamp(2rem, ${pct}%, calc(100% - 2rem))`,
                        transform: "translateX(-50%)",
                        borderColor: "var(--th-border)",
                        backgroundColor: "var(--th-card)",
                      }}
                    >
                      <span className="font-semibold" style={{ color: "var(--th-text)" }}>
                        {item.value.toLocaleString()}
                      </span>
                      <span style={{ color: "var(--th-text-muted)" }}>
                        {" "}({((item.value / data.reduce((s, d) => s + d.value, 0)) * 100).toFixed(1)}%)
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
