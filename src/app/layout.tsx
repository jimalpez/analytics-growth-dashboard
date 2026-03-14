import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: {
    default: "GrowthPulse — Website Analytics & Lead Management Dashboard",
    template: "%s | GrowthPulse",
  },
  description:
    "Track website traffic, manage leads, monitor SEO keyword rankings, and grow your business with real-time analytics — all in one dashboard.",
  keywords: [
    "website analytics",
    "lead management",
    "SEO keyword tracking",
    "traffic dashboard",
    "growth analytics",
    "SaaS dashboard",
    "Next.js dashboard",
    "real-time analytics",
  ],
  authors: [{ name: "GrowthPulse" }],
  openGraph: {
    title: "GrowthPulse — Website Analytics & Lead Management Dashboard",
    description:
      "Track website traffic, manage leads, monitor SEO keyword rankings, and grow your business with real-time analytics.",
    type: "website",
    locale: "en_US",
    siteName: "GrowthPulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthPulse — Website Analytics & Lead Management Dashboard",
    description:
      "Track website traffic, manage leads, monitor SEO keyword rankings, and grow your business with real-time analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Inline script to set theme before first paint (prevents flash)
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'system';
    var resolved = theme;
    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolved);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
