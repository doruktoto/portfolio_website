import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  outputFileTracingExcludes: {
    '*': ['content/**/*'],
  },
};

export default nextConfig;
