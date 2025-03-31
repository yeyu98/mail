import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const nextConfig: NextConfig = async() => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
  return {}
};

export default nextConfig;
