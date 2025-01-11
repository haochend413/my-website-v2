import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Use this to export as a static site
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build process
  },
  basePath: "/my-website-v2", // Only needed if deploying to a subdirectory
  trailingSlash: true, // Optional: ensures URLs end with a trailing slash
};

export default nextConfig;
