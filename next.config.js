/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["algolisted.com", "api.microlink.io"], // Microlink Image Preview],
  },
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
