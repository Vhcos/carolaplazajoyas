import type { NextConfig } from "next";

const LEGACY_BLOB_HOST = "9sxkvs205ipfyljr.public.blob.vercel-storage.com";

function getBlobHostFromEnv(): string | null {
  const blobUrl = process.env.BLOB_PRODUCTS_URL?.trim();
  if (!blobUrl) return null;

  try {
    return new URL(blobUrl).hostname;
  } catch {
    return null;
  }
}

const imageHosts = Array.from(
  new Set(
    ["*.public.blob.vercel-storage.com", LEGACY_BLOB_HOST, getBlobHostFromEnv()].filter(
      (host): host is string => Boolean(host)
    )
  )
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
