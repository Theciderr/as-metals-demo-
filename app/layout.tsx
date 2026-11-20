import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { businessSchema, pageMetadata, siteUrl } from "./site";
import "./globals.css";
const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata(
    "CNC Cutting Ambala | Jali, Carved Doors & Wall Art | A.S Metal Fabricators",
    "Explore designer jali, CNC-carved doors, relief wall panels and sculpted wall art from A.S Metal Fabricators, Lakhnaur Sahib, Ambala. Ask for a quote on WhatsApp.",
    "/",
  ),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
