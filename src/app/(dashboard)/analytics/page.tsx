"use client";

import { api } from "@/trpc/react";
import { StatsCard } from "@/app/_components/stats-card";
import { LineChart } from "@/app/_components/line-chart";
import { BarChart } from "@/app/_components/bar-chart";
import { DataTable } from "@/app/_components/data-table";

export default function AnalyticsPage() {
  const { data: stats } = api.analytics.getStats.useQuery();
  const { data: dailyVisits } = api.analytics.getDailyVisits.useQuery();
  const { data: trafficSources } = api.analytics.getTrafficSources.useQuery();
  const { data: pageViews } = api.analytics.getPageViews.useQuery();
  const { data: countryData } = api.analytics.getCountryData.useQuery();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Analytics</h1>
        <p className="mt-1" style={{ color: "var(--th-text-secondary)" }}>Detailed traffic and engagement insights.</p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Visits"
          value={stats?.totalVisits.toLocaleString() ?? "-"}
          trend={stats?.visitsTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          }
        />
        <StatsCard
          title="Unique Visitors"
          value={stats?.uniqueVisitors.toLocaleString() ?? "-"}
          trend={stats?.visitorsTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <StatsCard
          title="Bounce Rate"
          value={stats ? `${stats.bounceRate}%` : "-"}
          trend={stats?.bounceTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          }
        />
        <StatsCard
          title="Avg Session"
          value={stats?.avgSessionDuration ?? "-"}
          trend={stats?.durationTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {dailyVisits && (
          <LineChart
            data={dailyVisits.map((d) => ({ label: d.date, value: d.visits }))}
            title="Visits Over Time"
          />
        )}
        {trafficSources && (
          <BarChart
            data={trafficSources.map((s) => ({ label: s.source, value: s.visits }))}
            title="Traffic Sources"
          />
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {pageViews && (
          <DataTable
            title="Top Pages"
            data={pageViews}
            columns={[
              { key: "page", header: "Page" },
              {
                key: "views",
                header: "Views",
                render: (item) => (
                  <span className="font-semibold" style={{ color: "var(--th-text)" }}>
                    {item.views.toLocaleString()}
                  </span>
                ),
              },
            ]}
          />
        )}
        {countryData && (
          <DataTable
            title="Visitors by Country"
            data={countryData}
            columns={[
              { key: "country", header: "Country" },
              {
                key: "visits",
                header: "Visits",
                render: (item) => (
                  <span className="font-semibold" style={{ color: "var(--th-text)" }}>
                    {item.visits.toLocaleString()}
                  </span>
                ),
              },
              {
                key: "percentage",
                header: "%",
                render: (item) => (
                  <span style={{ color: "var(--th-text-secondary)" }}>{String(item.percentage)}%</span>
                ),
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
