/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co'], // Add Spotify's image CDN domain
  },
}

module.exports = nextConfig 