/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/articles',
        permanent: true
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)
