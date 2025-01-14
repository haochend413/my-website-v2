"use client";

import { usePathname } from "next/navigation";

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

  //This returns the layout for the specific project pages.
  return <>{children}</>;
}
