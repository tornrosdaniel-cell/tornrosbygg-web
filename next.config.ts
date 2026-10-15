import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/legacy-redirects";

const nextConfig: NextConfig = {
  // Run legacy redirects before slash normalization, so old links take one hop.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...legacyRedirects.map((redirect) => ({ ...redirect, permanent: true })),
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
