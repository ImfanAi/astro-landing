import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/landing-page/Header";
import ScrollLinked from "@/components/custom/scrollview";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const monterialThin = localFont({
//   src: "./fonts/Monterial.otf",
//   variable: "--font-monterial-thin",
//   weight: "100 900",
// });
// const monterialBold = localFont({
//   src: "./fonts/MonterialBold.otf",
//   variable: "--font-monterial-bold",
//   weight: "100 900",
// });
const quinnBold = localFont({
  src: "./fonts/Quinn.ttf",
  variable: "--font-quinn-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Meet Astro",
  description: "Meet you DeFAi agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quinnBold.variable}  antialiased`}
      >
        <ScrollLinked />
        <Header />
        {children}
      </body>
    </html>
  );
}
