/**

 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Assets Precache:
// ------------------

const assets = [
  PWA_CONFIG.sw.offline_route,
  PWA_ROOT + "/manifest.json",
  PWA_ROOT + "/pwa.js",
  "/sw.js",
];

workbox.precaching.precacheAndRoute(assets.concat(PWA_CONFIG.precache.routes));
