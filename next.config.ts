import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com'], 
  },
};

export default nextConfig;
