import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { alegreya } from './fonts/fonts';
import { alegreya, openSans } from '../app/fonts/fonts';
import "./globals.css";
import Header from "./components/header/Header";
// import Header from "@components/header/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Horror Trivia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${alegreya.variable} ${openSans.variable} antialiased`} lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
