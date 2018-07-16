self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('restaurant-static-v1').then(function (cache) {
        return cache.addAll([
          '/css/styles.css',
          'index.html',
          'restaurant.html',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
          '/img/1small.jpg',
          '/img/2small.jpg',
          '/img/3small.jpg',
          '/img/4small.jpg',
          '/img/5small.jpg',
          '/img/6small.jpg',
          '/img/7small.jpg',
          '/img/8small.jpg',
          '/img/9small.jpg',
          '/img/10small.jpg'
        ]);
      })
    );
  });
  

  self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['restaurant-static-v2'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });


  self.addEventListener('fetch', function (event) {
      console.log('fetch!');
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) return response;
        return fetch(event.request);
      })
    );
  });
  
 


  