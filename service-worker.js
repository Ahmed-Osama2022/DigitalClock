// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
);



// ============================= CACHING FILES ===================== //
var cacheName = 'app-shell-cache-v1';
var filesToCache = [
    '/',
    '/index.html',
    './images/logo.png',
    './images/watch.jpg',
    './main.js',
    './manifest.json'     
]; 
self.addEventListener('install', function (event) {
  event.waitUntil(
     caches.open(cacheName)
     .then(function (cache) {
       return cache.addAll(filesToCache);
       })
       .then(function () {
       return self.skipWaiting();
       })
      );
    });


self.addEventLister('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => { 
                if (key !== cacheName) {
                    return cache.delete(key);
                    }
                }));
            }));
            return self.clients.claim();
            });




self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
        return response || fetch(event.request);
        })
        );
    });


