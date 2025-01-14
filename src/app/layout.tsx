import type { Metadata } from "next";

import Head from "./_components/Head";
import "./global.css";

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
        <Head />
        {children}
      </body>
    </html>
  );
}
