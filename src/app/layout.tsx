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
  title: 'Knowledge Nightmare',
  description: 'Dive into Knowledge Nightmare, the ultimate horror trivia site where fans test their expertise on iconic films, sinister characters, and haunting lore.',
  openGraph: {
    title: 'Knowledge Nightmare',
    description: 'Dive into Knowledge Nightmare, the ultimate horror trivia site where fans test their expertise on iconic films, sinister characters, and haunting lore.',
    images: [
      {
        url: '/images/opengraph-image.png', // Adjust this path to your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Knowledge Nightmare',
      },
    ],
  },
};

// export const metadata: Metadata = {
//   title: "Knowledge Nightmare",
//   description: "Dive into Knowledge Nightmare, the ultimate horror trivia site where fans test their expertise on iconic films, sinister characters, and haunting lore.",
// };

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
