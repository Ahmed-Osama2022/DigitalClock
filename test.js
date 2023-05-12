workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
);