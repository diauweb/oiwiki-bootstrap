/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app-0ed28fc3df9cc292eeb0.js"
  },
  {
    "url": "cd5e65d5c4087c4f8496eca72a105a810301cb10-d1a2f2c5793c78e93243.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b14f1d4af0701bc6194a.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-pages-404-tsx-c64374e34ce77b82e12a.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-pages-pages-js-2ab42edc1eeaff0d1b3a.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-pages-settings-tsx-092015fcc2dfb0c5f23b.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-pages-tags-js-65d3cd8a9c5af4b67cc6.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-templates-changelog-js-19bbd31ac376fa8f80cb.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-templates-doc-js-8c027e8375a803f7718d.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-oi-wiki-src-templates-tags-js-014928c70a612d37ab93.js"
  },
  {
    "url": "framework-8f2537384211ec58afbc.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "polyfill-2a5a37d266463e0b9abe.js"
  },
  {
    "url": "script.js"
  },
  {
    "url": "webpack-runtime-d24f1e287c3b44fa2a39.js"
  },
  {
    "url": "styles.309b565601880c10aed7.css"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "20153707ec473620fc2356fc26e9c15d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67049a60e3b67c28db901d7ce440468a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0ed28fc3df9cc292eeb0.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
