import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "FGC Training and Learning Academy — Learn. Trade. Certify.",
  description:
    "The performance-based trading academy. 42 modules, 220+ strategies, 5-phase simulation, and 5-level certification across Forex, Crypto, and Gold. Prove you can trade.",
  keywords: [
    "FGC Academy",
    "trading academy",
    "forex trading course",
    "crypto trading course",
    "gold trading course",
    "trading certification",
    "trading simulator",
    "learn to trade",
    "trading education",
    "prop firm training",
  ],
  openGraph: {
    title: "FGC Training and Learning Academy",
    description:
      "Learn to trade. Prove you can. Get certified. The performance-based trading academy for Forex, Crypto, and Gold.",
    type: "website",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
