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
  },
  output: 'export',
  basePath: '/Praxis_Monika_Larisch',
  assetPrefix: '/Praxis_Monika_Larisch',
}

export default nextConfig
