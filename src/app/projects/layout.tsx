"use client";

import { usePathname } from "next/navigation";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPage = usePathname();

  //This returns the layout for overall gallery page.
  if (currentPage === "/projects") {
    return <>{children}</>;
  }

  //This returns the layout for the specific project pages. Configured.
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  );
}
