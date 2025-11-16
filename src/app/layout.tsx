import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import QueryProvider from "../providers/QueryProvider";
import localFont from "next/font/local";
import { Header } from "./components/Header/Header";

const pokemonFont = localFont({
  src: "../assets/pokemon-normal.ttf",
  variable: "--font-prometo-regular",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon app",
  description: "Listing pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <div className={pokemonFont.className}>
            <Header />
          </div>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
