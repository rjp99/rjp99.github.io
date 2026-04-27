import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
  // For GitHub Pages deployment with custom domain
  trailingSlash: true,
};

export default nextConfig;
