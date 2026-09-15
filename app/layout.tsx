import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vs-enterprises.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "VS Enterprises · Authorised Distributor Catalogue Library",
  description:
    "Catalogue library of VS Enterprises, authorised distributor in Wazirpur Industrial Area, New Delhi. Brass and steel dinnerware, glassware, gift sets and corporate gifting across Expo, Roxx, Agaro, Gebi, Vaya, BMT, Anjal and Deuralux.",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "VS Enterprises",
    title: "VS Enterprises · Authorised Distributor Catalogue Library",
    description:
      "Brass and steel dinnerware, glassware, gift sets and corporate gifting across Expo, Roxx, Agaro, Gebi, Vaya, BMT, Anjal and Deuralux.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "VS Enterprises catalogue library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Enterprises · Catalogue Library",
    description: "Brass and steel dinnerware, glassware, gift sets and corporate gifting. Open any catalogue in the browser or download the PDF.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#54091a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
