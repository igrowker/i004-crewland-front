import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "res.cloudinary.com", // Dominio para imágenes en Cloudinary
      "s3-alpha-sig.figma.com",
    ],
  },
};

export default nextConfig;
