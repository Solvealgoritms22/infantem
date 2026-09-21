import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel genera y administra su propio bundle de funciones para Next.js.
  // `output: "standalone"` está pensado para servidores Node personalizados y
  // puede hacer que Vercel busque artefactos NFT que Next.js no genera aquí.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
