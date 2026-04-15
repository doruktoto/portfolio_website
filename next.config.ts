import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['content/**/*'],
    },
  },
};

export default nextConfig;
