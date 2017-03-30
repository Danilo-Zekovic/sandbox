const VERSION = '{{VERSION}}';

const appCache = `REACT-PWA-SIMPLE-${VERSION}`;

function deleteOldCaches(cacheNames) {
  return Promise.all(
    cacheNames
      .filter(cacheName => cacheName.startsWith('REACT-PWA-SIMPLE'))
      .filter(cacheName => (cacheName !== appCache))
      .map(cacheName => caches.delete(cacheName))
  );
}

self.addEventListener('install', (e) => {
  const appUrls = [
    './',
    './js/index.js',

    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css',
  ];

  const dataUrls = [
    './data.json',
  ];

  caches.open(appCache).then(cache => cache.addAll(dataUrls));

  e.waitUntil(
    caches.open(appCache).then(cache => cache.addAll(appUrls))
  );
});

self.addEventListener('activate', (e) => {
  self.clients.claim();

  e.waitUntil(
    caches.keys().then(deleteOldCaches)
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) {
        return response;
      }

      rturn fetch(e.request);
    })
  );
});

self.addEventListener('message', (e) => {
  if (e.data.shouldUpdate) {
    self.skipWaiting();
  }
});
