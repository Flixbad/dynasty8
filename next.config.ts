import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export HTML/CSS/JS statique pour hébergement mutualisé (Hostinger, etc.)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
