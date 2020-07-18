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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/thecreativegoose/precache-manifest.4f0bbc4df358e781eddd0ea084eb06e8.js"
=======
  "/thecreativegoose/precache-manifest.391db94555a67176c51ea03e581317cf.js"
>>>>>>> 151e6cf9... Updates
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/thecreativegoose/index.html"), {
  
<<<<<<< HEAD
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
=======
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
>>>>>>> 151e6cf9... Updates
});
