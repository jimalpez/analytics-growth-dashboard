import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Keywords",
  description:
    "Track your SEO keyword rankings with position changes and performance trends.",
};

export default function KeywordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
