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
  basePath: '/Praxis_Monika_Larisch',
  assetPrefix: '/Praxis_Monika_Larisch',
  trailingSlash: true,
}

export default nextConfig
