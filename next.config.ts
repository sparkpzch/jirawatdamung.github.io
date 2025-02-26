import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/jirawatdamung.github.io/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
