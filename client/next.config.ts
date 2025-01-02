import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export mode
  trailingSlash: true, // Add trailing slashes to all routes (if required)
  // experimental: {
  //   appDir: true, // Ensure the App Router is enabled
  // },
};

export default nextConfig;
