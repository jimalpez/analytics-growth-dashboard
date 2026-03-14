"use client";

import { useId, useRef, useState } from "react";

interface LineChartProps {
  data: { label: string; value: number }[];
  title: string;
}

export function LineChart({ data, title }: LineChartProps) {
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<{ index: number; x: number; y: number } | null>(null);

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue || 1;

  const svgW = 600;
  const svgH = 240;
  const padX = 40;
  const padTop = 16;
  const padBot = 24;
  const plotW = svgW - padX;
  const plotH = svgH - padTop - padBot;

  const pts = data.map((d, i) => ({
    x: padX + (i / (data.length - 1)) * plotW,
    y: padTop + plotH - ((d.value - minValue) / range) * plotH,
  }));

  const polyline = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPoints = `${padX},${svgH - padBot} ${polyline} ${padX + plotW},${svgH - padBot}`;

  const gridCount = 5;
  const gridYs = Array.from({ length: gridCount }, (_, i) => {
    const val = minValue + (range / (gridCount - 1)) * (gridCount - 1 - i);
    const y = padTop + plotH - ((val - minValue) / range) * plotH;
    return { y, label: val >= 1000 ? `${(val / 1000).toFixed(1)}k` : String(Math.round(val)) };
  });

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * svgW;

    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < pts.length; i++) {
      const dist = Math.abs(pts[i]!.x - mouseX);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }

    const pt = pts[closest]!;
    const pxX = (pt.x / svgW) * rect.width;
    const pxY = (pt.y / svgH) * rect.height;
    setHover({ index: closest, x: pxX, y: pxY });
  }

  function handleMouseLeave() {
    setHover(null);
  }

  return (
    <div className="rounded-xl border p-6" style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}>
      <h3 className="mb-4 text-lg font-semibold" style={{ color: "var(--th-text)" }}>{title}</h3>
      <div className="relative" ref={containerRef}>
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="h-56 w-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines + Y labels */}
          {gridYs.map((g, i) => (
            <g key={i}>
              <line x1={padX} y1={g.y} x2={svgW} y2={g.y} stroke="var(--th-border)" strokeWidth="1" />
              <text x={padX - 6} y={g.y + 4} textAnchor="end" fill="var(--th-text-muted)" fontSize="10">
                {g.label}
              </text>
            </g>
          ))}

          {/* Area fill */}
          <polygon points={areaPoints} fill={`url(#${gradientId})`} />

          {/* Line */}
          <polyline
            points={polyline}
            fill="none"
            stroke="var(--color-primary-light)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {pts.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hover?.index === i ? 5 : 3}
              fill={hover?.index === i ? "var(--color-primary)" : "var(--color-primary-light)"}
              stroke={hover?.index === i ? "white" : "none"}
              strokeWidth={hover?.index === i ? 2 : 0}
              className="transition-all duration-150"
            />
          ))}

          {/* Hover vertical line */}
          {hover && (
            <line
              x1={pts[hover.index]!.x}
              y1={padTop}
              x2={pts[hover.index]!.x}
              y2={svgH - padBot}
              stroke="var(--color-primary-light)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          )}

          {/* X labels */}
          {data.map((d, i) => {
            if (data.length > 10 && i % Math.ceil(data.length / 7) !== 0) return null;
            return (
              <text key={i} x={pts[i]!.x} y={svgH - 4} textAnchor="middle" fill="var(--th-text-muted)" fontSize="10">
                {d.label}
              </text>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hover && (
          <div
            className="pointer-events-none absolute z-10 rounded-lg border px-3 py-2 text-xs shadow-lg"
            style={{
              left: hover.x,
              top: hover.y - 48,
              transform: "translateX(-50%)",
              borderColor: "var(--th-border)",
              backgroundColor: "var(--th-card)",
            }}
          >
            <p className="font-semibold" style={{ color: "var(--th-text)" }}>
              {data[hover.index]!.value.toLocaleString()}
            </p>
            <p style={{ color: "var(--th-text-muted)" }}>{data[hover.index]!.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
