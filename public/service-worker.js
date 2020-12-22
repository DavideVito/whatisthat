importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

let nome = "whatisthat";

const UseCache = workbox.strategies.CacheFirst;
const UseNetwork = workbox.strategies.NetworkFirst;

workbox.precaching.precacheAndRoute([{ url: "/index.html", revision: null }]);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "manifest",
  new UseCache()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new UseCache()
);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith(".js"),
  new UseCache()
);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith(".json"),
  new UseNetwork()
);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith("weights.bin"),
  new UseNetwork()
);
