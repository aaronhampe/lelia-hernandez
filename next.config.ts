import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/%C3%BCber-mich',
        destination: '/ueber-mich',
        permanent: true,
      },
      {
        source: '/über-mich',
        destination: '/ueber-mich',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
