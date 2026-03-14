import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads",
  description:
    "Manage your lead pipeline — track new, contacted, qualified, and converted leads.",
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
