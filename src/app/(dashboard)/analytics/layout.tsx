import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  description:
    "Detailed website traffic analytics — visits over time, traffic sources, top pages, and visitors by country.",
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
