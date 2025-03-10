import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build process
  },
  // basePath: "/my-website-v2",
  trailingSlash: true, // Optional: ensures URLs end with a trailing slash
};

export default nextConfig;
