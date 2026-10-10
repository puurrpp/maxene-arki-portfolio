import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arki — Architecture / Interiors",
  description: "An independent architecture and interiors studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
