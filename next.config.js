/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return process.env.APP_ENV === 'hosted'
      ? [
          {
            source: '/',
            destination: '/checkout',
            permanent: true,
          },
        ]
      : []
  },
  output: 'standalone',
}

module.exports = nextConfig
