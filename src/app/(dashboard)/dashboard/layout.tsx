import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Overview of your website analytics, traffic, leads, and keyword rankings.",
};

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
