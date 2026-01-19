const CACHE_NAME = 'techblaze-video-cache-v1';
const VIDEO_URLS = [
    '/img/all/bg-video.mp4'
];

self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                // We can try to pre-cache, but for large videos, might be better to cache on fetch
                // or just add them here. Let's add them here for "shared" feeling.
                return cache.addAll(VIDEO_URLS);
            })
    );
});

self.addEventListener('fetch', (event) => {
    // We only want to handle the specific video file(s)
    if (VIDEO_URLS.some(url => event.request.url.includes(url))) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(
                        (response) => {
                            // Check if we received a valid response
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            // Clone the response
                            const responseToCache = response.clone();

                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });

                            return response;
                        }
                    );
                })
        );
    }
});
