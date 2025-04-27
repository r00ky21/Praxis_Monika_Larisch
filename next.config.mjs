/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  output: 'export',
  // basePath und assetPrefix nur für Produktion (GitHub Pages), nicht für Entwicklung
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/Praxis_Monika_Larisch',
    assetPrefix: '/Praxis_Monika_Larisch',
  } : {}),
  trailingSlash: true,
}

export default nextConfig
