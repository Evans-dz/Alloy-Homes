import { Cormorant_Garamond, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://alloy-homes.com"),
  title: {
    default: "Alloy Homes — Custom Home Builder in Southern Utah",
    template: "%s · Alloy Homes",
  },
  description:
    "Alloy Homes is a custom design-build home builder in St. George and Southern Utah. Design, planning, and craftsmanship under one accountable team — homes built around you and built to endure.",
  keywords: [
    "custom home builder St. George",
    "Southern Utah home builder",
    "design build homes Utah",
    "luxury custom homes Ivins",
    "Alloy Homes",
  ],
  openGraph: {
    title: "Alloy Homes — Custom Home Builder in Southern Utah",
    description:
      "Custom design-build homes in Southern Utah — design, planning, and craftsmanship under one accountable team.",
    url: "https://alloy-homes.com",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#16130F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#intro" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
