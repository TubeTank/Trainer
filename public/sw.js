const CACHE_NAME = "trainer-cache-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const netzwerk = fetch(request)
        .then((response) => {
          if (response.ok) {
            const kopie = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, kopie));
          }
          return response;
        })
        .catch(() => cached);
      return cached ?? netzwerk;
    }),
  );
});
