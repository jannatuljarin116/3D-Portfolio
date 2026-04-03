import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ConsentAwareAnalytics } from "@/components/consent-analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
import { SceneBackgroundDynamic } from "@/components/scene-background-dynamic";
import { SkipLink } from "@/components/skip-link";
import { ThemeProvider } from "@/components/theme-provider";
import { buildRootMetadata } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <ThemeProvider>
          <SkipLink />
          <JsonLd />
          <SceneBackgroundDynamic />
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
          <CookieBanner />
          <ConsentAwareAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
