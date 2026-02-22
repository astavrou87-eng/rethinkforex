/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Force HTTPS if the request arrived as http at the Vercel edge
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://rethinkforex.co.uk/:path*",
        permanent: true,
      },

      // Force canonical host (www -> apex)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rethinkforex.co.uk" }],
        destination: "https://rethinkforex.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;