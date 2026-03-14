"use client";

import { api } from "@/trpc/react";
import { StatsCard } from "@/app/_components/stats-card";
import { DataTable } from "@/app/_components/data-table";

export default function KeywordsPage() {
  const { data: keywords } = api.keywords.getAll.useQuery();
  const { data: stats } = api.keywords.getStats.useQuery();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Keywords</h1>
        <p className="mt-1" style={{ color: "var(--th-text-secondary)" }}>Track your search engine rankings.</p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Keywords"
          value={stats?.totalKeywords ?? "-"}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          }
        />
        <StatsCard
          title="Top 10 Rankings"
          value={stats?.top10Keywords ?? "-"}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
        />
        <StatsCard
          title="Improved"
          value={stats?.improvedKeywords ?? "-"}
          trend={stats?.rankingTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        <StatsCard
          title="Avg Ranking"
          value={stats ? `#${stats.avgRanking}` : "-"}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
      </div>

      {keywords && (
        <DataTable
          title="Keyword Rankings"
          data={keywords}
          columns={[
            { key: "keyword", header: "Keyword" },
            {
              key: "ranking",
              header: "Position",
              render: (item) => (
                <span className="font-semibold" style={{ color: "var(--th-text)" }}>#{String(item.ranking)}</span>
              ),
            },
            {
              key: "change",
              header: "Change",
              render: (item) => {
                const change = item.change;
                return (
                  <span
                    className={`flex items-center gap-1 font-medium ${change > 0 ? "text-success" : change < 0 ? "text-danger" : ""}`}
                    style={change === 0 ? { color: "var(--th-text-secondary)" } : undefined}
                  >
                    {change > 0 && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                    {change < 0 && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {change > 0 ? `+${change}` : change === 0 ? "No change" : change}
                  </span>
                );
              },
            },
            {
              key: "lastChecked",
              header: "Last Checked",
              render: (item) =>
                new Date(item.lastChecked).toLocaleDateString(),
            },
          ]}
        />
      )}
    </div>
  );
}
