import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
