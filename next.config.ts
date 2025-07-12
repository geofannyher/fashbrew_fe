import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi lainnya tetap
  experimental: {
    scrollRestoration: true,
  },

  eslint: {
    ignoreDuringBuilds: true, // ⛔ matikan linting saat build
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
