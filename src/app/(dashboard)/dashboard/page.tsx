"use client";

import { api } from "@/trpc/react";
import { StatsCard } from "@/app/_components/stats-card";
import { LineChart } from "@/app/_components/line-chart";
import { BarChart } from "@/app/_components/bar-chart";
import { DataTable } from "@/app/_components/data-table";
import { StatusBadge } from "@/app/_components/status-badge";

export default function DashboardPage() {
  const { data: analyticsStats } = api.analytics.getStats.useQuery();
  const { data: dailyVisits } = api.analytics.getDailyVisits.useQuery();
  const { data: trafficSources } = api.analytics.getTrafficSources.useQuery();
  const { data: leads } = api.leads.getAll.useQuery();
  const { data: leadStats } = api.leads.getStats.useQuery();
  const { data: keywords } = api.keywords.getAll.useQuery();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Dashboard</h1>
        <p className="mt-1" style={{ color: "var(--th-text-secondary)" }}>Welcome back, Jim. Here&apos;s your overview.</p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Visits"
          value={analyticsStats?.totalVisits.toLocaleString() ?? "-"}
          trend={analyticsStats?.visitsTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          }
        />
        <StatsCard
          title="Unique Visitors"
          value={analyticsStats?.uniqueVisitors.toLocaleString() ?? "-"}
          trend={analyticsStats?.visitorsTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <StatsCard
          title="Total Leads"
          value={leadStats?.totalLeads.toLocaleString() ?? "-"}
          trend={leadStats?.leadsTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatsCard
          title="Bounce Rate"
          value={analyticsStats ? `${analyticsStats.bounceRate}%` : "-"}
          trend={analyticsStats?.bounceTrend}
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          }
        />
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {dailyVisits && (
          <LineChart
            data={dailyVisits.map((d) => ({ label: d.date, value: d.visits }))}
            title="Daily Visits"
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
        {leads && (
          <DataTable
            title="Recent Leads"
            data={leads.slice(0, 5)}
            columns={[
              { key: "name", header: "Name" },
              { key: "email", header: "Email" },
              {
                key: "status",
                header: "Status",
                render: (item) => <StatusBadge status={item.status} />,
              },
              {
                key: "createdAt",
                header: "Date",
                render: (item) =>
                  new Date(item.createdAt).toLocaleDateString(),
              },
            ]}
          />
        )}
        {keywords && (
          <DataTable
            title="Top Keywords"
            data={keywords.slice(0, 5)}
            columns={[
              { key: "keyword", header: "Keyword" },
              {
                key: "ranking",
                header: "Rank",
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
                    <span className={change > 0 ? "text-[var(--color-success)]" : change < 0 ? "text-[var(--color-danger)]" : ""} style={change === 0 ? { color: "var(--th-text-secondary)" } : undefined}>
                      {change > 0 ? `+${change}` : change === 0 ? "-" : change}
                    </span>
                  );
                },
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
