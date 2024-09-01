/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/</barbearia-simples-Devmedia->',
  assetPrefix: '/</barbearia-simples-Devmedia->/',
};

module.exports = {
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
