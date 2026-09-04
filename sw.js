const STATIC_CACHE = "dolomiti-static-v4";
const MAP_CACHE = "dolomiti-opentopo-v1";
const RUNTIME_CACHE = "dolomiti-runtime-v2";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./tracks-data.js",
  "./manifest.webmanifest",
  "./assets/vendor/leaflet/leaflet.css",
  "./assets/vendor/leaflet/leaflet.js",
  "./assets/vendor/leaflet/images/layers.png",
  "./assets/vendor/leaflet/images/layers-2x.png",
  "./assets/vendor/leaflet/images/marker-icon.png",
  "./assets/vendor/leaflet/images/marker-icon-2x.png",
  "./assets/vendor/leaflet/images/marker-shadow.png",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(STATIC_CACHE).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  const currentCaches = new Set([STATIC_CACHE, MAP_CACHE, RUNTIME_CACHE]);
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => !currentCaches.has(key)).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.hostname.endsWith("tile.opentopomap.org")) {
    event.respondWith(cacheFirst(event.request, MAP_CACHE));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(async () => (await caches.match(event.request)) || caches.match("./index.html"))
    );
    return;
  }

  const isLocal = url.origin === self.location.origin;
  const isAppDependency = ["unpkg.com", "cdn.jsdelivr.net"].includes(url.hostname);
  if (isLocal) {
    event.respondWith(localAssetFirst(event.request));
  } else if (isAppDependency) {
    event.respondWith(cacheFirst(event.request, RUNTIME_CACHE));
  }
});

self.addEventListener("message", event => {
  if (event.data?.type !== "CACHE_MAP_TILES") return;
  const { urls, routeId } = event.data;
  event.waitUntil(cacheMapTiles(urls, routeId, event.source));
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}

async function localAssetFirst(request) {
  const staticCache = await caches.open(STATIC_CACHE);
  const staticResponse = await staticCache.match(request);
  if (staticResponse) return staticResponse;

  const runtimeCache = await caches.open(RUNTIME_CACHE);
  const runtimeResponse = await runtimeCache.match(request);
  if (runtimeResponse) return runtimeResponse;

  const response = await fetch(request);
  runtimeCache.put(request, response.clone());
  return response;
}

async function cacheMapTiles(urls, routeId, client) {
  const cache = await caches.open(MAP_CACHE);
  let completed = 0;
  let failed = 0;
  const queue = [...new Set(urls)];

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      try {
        const request = new Request(url, { mode: "no-cors" });
        if (!(await cache.match(request))) {
          const response = await fetch(request);
          await cache.put(request, response);
        }
      } catch (error) {
        failed += 1;
      }
      completed += 1;
      if (completed % 8 === 0 || completed === urls.length || !queue.length) {
        client?.postMessage({ type: "MAP_CACHE_PROGRESS", routeId, completed, total: urls.length, failed });
      }
    }
  }

  await Promise.all(Array.from({ length: 4 }, worker));
  client?.postMessage({ type: "MAP_CACHE_COMPLETE", routeId, completed, total: urls.length, failed });
}
