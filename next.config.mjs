/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://next-test-five-rose.vercel.app",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
