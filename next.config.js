/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["placehold.co", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
