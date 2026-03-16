// Life OS — Service Worker v3
// Estrategia: Network First — siempre intenta red, cachea como fallback

const CACHE_NAME = 'lifeos-20260316-2110';

const ASSETS = [
    '/LifeApp/',
    '/LifeApp/index.html',
    '/LifeApp/agenda.html',
    '/LifeApp/nutricion.html',
    '/LifeApp/fisico.html',
    '/LifeApp/finanzas.html',
    '/LifeApp/habitos.html',
    '/LifeApp/lifeos.css',
    '/LifeApp/alimentos.js',
    '/LifeApp/recetas.js',
    '/LifeApp/manifest.json',
];

self.addEventListener('install', e => {
    self.skipWaiting(); // activate immediately
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim()) // take control of all tabs immediately
    );
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;

    e.respondWith(
        // Network first — always try to get fresh version
        fetch(e.request)
            .then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                }
                return response;
            })
            .catch(() => {
                // Only fall back to cache if network fails (offline)
                return caches.match(e.request)
                    .then(cached => cached || caches.match('/LifeApp/index.html'));
            })
    );
});

// Tell all open tabs to reload when new SW activates
self.addEventListener('message', e => {
    if (e.data === 'skipWaiting') self.skipWaiting();
});
