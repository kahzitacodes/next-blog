/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require('next-contentlayer')
const withPWAInit = require('next-pwa')
const withPlugins = require('next-compose-plugins')

const isDev = process.env.NODE_ENV !== 'production'
const withPWA = withPWAInit({
  dest: 'public',
  disable: isDev,
  exclude: [
    ({ asset }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|ˆ)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true
      }
      if (isDev && !asset.name.startsWith('static/runtime/')) {
        return true
      }
      return false
    }
  ]
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withPlugins([withPWA, withContentlayer], nextConfig)
