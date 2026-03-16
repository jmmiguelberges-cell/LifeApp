// Life OS — Service Worker
// Permite instalación como PWA y uso offline básico

const CACHE_NAME = 'lifeos-20260316-2006';
const ASSETS = [
    '/LifeRPG/',
    '/LifeRPG/index.html',
    '/LifeRPG/agenda.html',
    '/LifeRPG/nutricion.html',
    '/LifeRPG/fisico.html',
    '/LifeRPG/finanzas.html',
    '/LifeRPG/habitos.html',
    '/LifeRPG/lifeos.css',
    '/LifeRPG/alimentos.js',
    '/LifeRPG/recetas.js',
    '/LifeRPG/manifest.json',
    '/LifeRPG/icono.jpg',
];

// Install: cache all assets
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate: remove old caches
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch: cache first, network fallback
self.addEventListener('fetch', e => {
    // Skip non-GET and external requests
    if (e.request.method !== 'GET') return;
    if (!e.request.url.includes('/LifeRPG/')) return;

    e.respondWith(
        caches.match(e.request)
            .then(cached => {
                if (cached) return cached;
                return fetch(e.request).then(response => {
                    // Cache new responses
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                    }
                    return response;
                });
            })
            .catch(() => {
                // Offline fallback: return cached index
                return caches.match('/LifeRPG/index.html');
            })
    );
});
