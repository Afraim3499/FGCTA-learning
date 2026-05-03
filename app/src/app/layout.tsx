import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Lurnava Academy — Learn the Market With Structure",
  description:
    "Lurnava is a visual-first market education platform that helps beginners learn chart reading, risk discipline, and structured decision-making without hype.",
  keywords: [
    "Lurnava Academy",
    "trading academy",
    "forex trading course",
    "crypto trading course",
    "gold trading course",
    "trading LearningRecord",
    "trading Practice Environment",
    "learn to trade",
    "trading education",
    "prop firm training",
  ],
  openGraph: {
    title: "Lurnava Academy — Learn the Market With Structure",
    description:
      "Structured market learning through visual lessons, practice blocks, chart missions, and knowledge tests.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lurnava Academy — Learn the Market With Structure",
    description:
      "Structured market learning through visual lessons, practice blocks, chart missions, and knowledge tests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
