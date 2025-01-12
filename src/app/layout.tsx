import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";
import Titlebar from "./_components/Titlebar";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//I suppose here it handles discription and title
export const metadata: Metadata = {
  title: "Hello, visitors!",
  description: "Haochen Ding's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Titlebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
