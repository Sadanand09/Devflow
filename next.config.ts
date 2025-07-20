import type { NextConfig } from "next";
import { NextConfig as Config } from "next";

const nextConfig: Config = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        v8: false,
      };
    }
    return config;
  },
};

export default nextConfig;
