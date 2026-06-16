import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // First-party SVGs (logo, starburst) go through next/image. Allow them,
    // sandboxed so an SVG can't execute script if a source is ever swapped.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
