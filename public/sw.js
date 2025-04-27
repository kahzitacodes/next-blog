if (!self.define) {
  let e,
    s = {}
  const t = (t, a) => (
    (t = new URL(t + '.js', a).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = t), (e.onload = s), document.head.appendChild(e)
        } else (e = t), importScripts(t), s()
      }).then(() => {
        let e = s[t]
        if (!e) throw new Error(`Module ${t} didn’t register its module`)
        return e
      })
  )
  self.define = (a, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let c = {}
    const r = (e) => t(e, i),
      o = { module: { uri: i }, exports: c, require: r }
    s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (n(...e), c))
  }
}
define(['./workbox-4754cb34'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/build-manifest.json',
          revision: '07ae2372da95e9dc254dceca184628e5'
        },
        {
          url: '/_next/static/XtxdMO4rO1Y-94FpoRVIk/_buildManifest.js',
          revision: '15e671aaf852983909bd2fe1385b56f4'
        },
        {
          url: '/_next/static/XtxdMO4rO1Y-94FpoRVIk/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/369-b42548abd6617e62.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/472-ae9b1c204a6b86c7.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/495-5b1d0360efa4980d.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/994-68b187b632503920.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/about/page-9265d1268a80439a.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/layout-a57045419c932ac6.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/not-found-f3286f07c8a56ddc.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/page-2c0a74208b5e8393.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/posts/%5Bslug%5D/not-found-6ccc40ea3e923495.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/posts/%5Bslug%5D/page-c3f29c5e9bf5773d.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/app/posts/page-56519d0c1b570247.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/b1644e8c-4f9a7a7235694d3d.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/fd9d1056-eeaabc4ed1fc1e5b.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/framework-0d01cdd3f4d700bf.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/main-2d8981a3fecd22e6.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/main-app-9fd09a2419f928b1.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/pages/_app-451d704a741dc8a8.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/pages/_error-d6885ef27f2c5e3d.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-26203563e86e7b46.js',
          revision: 'XtxdMO4rO1Y-94FpoRVIk'
        },
        {
          url: '/_next/static/css/f5d8aafab951c398.css',
          revision: 'f5d8aafab951c398'
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420'
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74'
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891'
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868'
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc'
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119'
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0'
        },
        {
          url: '/assets/images/avatar.jpeg',
          revision: 'cf0c2bc3a987f67fef5a83aead089770'
        },
        {
          url: '/assets/images/icon-192.png',
          revision: '2c9dbecbe592d623ed75cce121f3f4b1'
        },
        {
          url: '/assets/images/icon-512.png',
          revision: '0365fd6ea2cf299b885b2367c87af7ba'
        },
        {
          url: '/assets/images/image.png',
          revision: 'f1dddd5cc860d0231ffb53c470795b01'
        },
        {
          url: '/assets/images/logo.svg',
          revision: '581779a0cda5416ad34fb3e5adabcef6'
        },
        {
          url: '/assets/images/me.png',
          revision: '0d3e63a925ab44e37bbc32ef72f40a58'
        },
        { url: '/manifest.json', revision: '97f926acd4727db2bfc8d59d7df2bf7a' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: a
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
