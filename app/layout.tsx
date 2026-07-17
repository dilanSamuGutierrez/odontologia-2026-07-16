import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});
const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SVANE · Clínica dental de diseño",
  description:
    "Odontología tranquila y estética en Madrid. Diseño de sonrisa, ortodoncia invisible e implantes. Primera valoración gratis.",
  openGraph: { title: "SVANE · Clínica dental de diseño", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased bg-cream text-ink">{children}</body>
    </html>
  );
}
