import type { NextConfig } from "next";

// Determine if the current environment is production
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/jirawatdamung.github.io" : "",
  assetPrefix: isProd ? "/jirawatdamung.github.io/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
