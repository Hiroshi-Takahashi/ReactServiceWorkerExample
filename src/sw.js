importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`ワークボックス準備完了`);

  workbox.precaching.precacheAndRoute([]);
  workbox.routing.registerNavigationRoute('/index.html');
} else {
  console.log(`失敗しちまった。。`);
}