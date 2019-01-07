importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`ワークボックス準備完了`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "da9e38ecc6a9852e99b3ab23af167d46"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "c94de845f274ca41b4044f9b31960ad5"
  },
  {
    "url": "manifest.json",
    "revision": "2f717775d17bf3a581acf2903353545f"
  },
  {
    "url": "precache-manifest.ca5b1b762039f1da9a9d6a6246131015.js",
    "revision": "ca5b1b762039f1da9a9d6a6246131015"
  },
  {
    "url": "service-worker.js",
    "revision": "a9be91f86b920ebaaf9e69bb7190ac98"
  },
  {
    "url": "static/css/main.920e0c37.chunk.css",
    "revision": "7be9ff4a64799d9ae87550833eb4fa6b"
  },
  {
    "url": "static/js/1.80fef587.chunk.js",
    "revision": "413de74ff9cd9b01da2ebaf4f0621046"
  },
  {
    "url": "static/js/main.76452676.chunk.js",
    "revision": "dd2161c9f2e6ad05aa3e971517fc41df"
  },
  {
    "url": "static/js/runtime~main.229c360f.js",
    "revision": "3b44b5daad3fcbefa8b355dfbc3d9630"
  }
]);
  workbox.routing.registerNavigationRoute('/index.html');
} else {
  console.log(`失敗しちまった。。 `);
}