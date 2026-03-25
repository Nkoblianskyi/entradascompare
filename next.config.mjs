/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/evenementen', destination: '/catalogo', permanent: true },
      { source: '/evenementen/:id', destination: '/catalogo/:id', permanent: true },
      { source: '/over-ons', destination: '/sobre-nosotros', permanent: true },
      { source: '/privacy', destination: '/privacidad', permanent: true },
    ]
  },
}

export default nextConfig
