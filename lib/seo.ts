import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

export const siteMetadata: Metadata = {
  title: "Prajapati Road Lines | Road Transportation in Lucknow | Pan India",
  description:
    "Prajapati Road Lines is a Lucknow-based road transportation business with 26+ years of experience, 15+ vehicles and own plus attached fleet services across India.",
  keywords: [
    "Prajapati Road Lines",
    "road transportation Lucknow",
    "transport company Lucknow",
    "transportation services Lucknow",
    "Pan India transportation",
    "goods transportation Lucknow",
    "road transport services",
    "commercial cargo transportation",
    "Transport Nagar Lucknow",
  ],
  openGraph: {
    title: "Prajapati Road Lines | Road Transportation in Lucknow",
    description:
      "Reliable road transportation from Lucknow to destinations across India.",
    type: "website",
    ...(siteUrl && { url: siteUrl }),
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/assets/images/hero-highway.jpg`,
            width: 1200,
            height: 630,
            alt: "Prajapati Road Lines — Road Transportation",
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajapati Road Lines | Road Transportation in Lucknow",
    description:
      "Reliable road transportation from Lucknow to destinations across India.",
  },
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  robots: { index: true, follow: true },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prajapati Road Lines",
  telephone: "+919839322072",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Transport Nagar, Shaheedpath Road",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226010",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  ...(siteUrl && { url: siteUrl }),
};
