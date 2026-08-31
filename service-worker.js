const CACHE_NAME = "magic-timer-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json"
];


/* =========================================
   INSTALAR
========================================= */

self.addEventListener(
  "install",
  function(event) {

    event.waitUntil(

      caches.open(CACHE_NAME)
        .then(function(cache) {

          return cache.addAll(
            ARCHIVOS
          );

        })

    );

    self.skipWaiting();
  }
);


/* =========================================
   ACTIVAR
========================================= */

self.addEventListener(
  "activate",
  function(event) {

    event.waitUntil(

      caches.keys()
        .then(function(nombres) {

          return Promise.all(

            nombres.map(
              function(nombre) {

                if (
                  nombre !== CACHE_NAME
                ) {

                  return caches.delete(
                    nombre
                  );

                }

              }
            )

          );

        })

    );

    self.clients.claim();
  }
);


/* =========================================
   CARGAR ARCHIVOS
========================================= */

self.addEventListener(
  "fetch",
  function(event) {

    event.respondWith(

      caches.match(event.request)
        .then(function(respuesta) {

          if (respuesta) {

            return respuesta;

          }

          return fetch(
            event.request
          );

        })

    );

  }
);
