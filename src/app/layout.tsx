import type { Metadata } from "next";
import { withBasePath } from "../lib/asset";
import "./globals.css";

export const metadata: Metadata = {
  title: "WU88 武財神 ONE",
  description: "WU88 Casino",
  icons: {
    icon: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Advent+Pro:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
