import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9sxkvs205ipfyljr.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
