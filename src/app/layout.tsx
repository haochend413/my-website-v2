import type { Metadata } from "next";

import Head from "./_components/Head";
import "./global.css";

// pages/_app.js
import { Ubuntu } from "next/font/google";

// Use the font as a className in your components
const ubuntu = Ubuntu({
  weight: ["300", "700"],
  subsets: ["latin"],
});

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
    <html lang="en" className={ubuntu.className}>
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
