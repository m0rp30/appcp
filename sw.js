const staticCacheName = 'demo-static-v005';
const dynamicCacheName = 'demo-static-v001';
const assets = [
    '/',
    '/img/Logo.png',
    '/index.html',
    '/js/main.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/style.css',
    '/css/materialize.min.css',
    '/pages/fallback.html',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// install service worker
self.addEventListener('install', evt => {
    //console.log('service worker has been installed');
    //self.skipWaiting();
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker '+ staticCacheName +' has been activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }).catch(() => {
            if(event.request.url.indexOf(".html") > -1) {
                return caches.match('/pages/fallback.html');
            }
        })
    );
});