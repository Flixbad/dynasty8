import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dynasty8 — Immobilier de prestige à Los Santos",
    template: "%s · Dynasty8",
  },
  description:
    "Agence immobilière Dynasty8 pour GTA RP. Villas, appartements, entrepôts, garages et terrains à Los Santos et Blaine County.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="atmosphere flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
