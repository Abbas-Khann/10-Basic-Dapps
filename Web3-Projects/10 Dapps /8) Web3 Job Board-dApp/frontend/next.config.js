/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.icons8.com"],
    formats: ["image/webp"],
   },
}

module.exports = nextConfig




