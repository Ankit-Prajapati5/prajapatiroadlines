import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteMetadata, jsonLd } from "@/lib/seo";

const jakarta = localFont({
  src: [
    { path: "../public/fonts/jakarta-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/jakarta-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/jakarta-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/jakarta-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/jakarta-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/jakarta-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
