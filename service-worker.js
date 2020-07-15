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
  "/thecreativegoose/precache-manifest.8e5d5645bf314955cac3dca81d6c0012.js"
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

<<<<<<< HEAD
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/thecreativegoose/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],

=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/thecreativegoose/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
>>>>>>> 159e6d14... Updates
});
