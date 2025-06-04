'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7fc48435f1181dafad50a866b45778f7",
"assets/AssetManifest.bin.json": "82a1e1e3334bbb7fcbc388e653c91bc0",
"assets/AssetManifest.json": "9b4d3735283a5027afcf9d6724f8eea2",
"assets/assets/bg.png": "844f2a725bda91352109e4a91b546bde",
"assets/assets/info.csv": "ee8dadfc452ffd425de728f4618edf8c",
"assets/assets/logooo.png": "4c0644f06f61d96813a0d240f874b45e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b0ec0ac8ffea3a9df7daa3a1f7570cc5",
"assets/NOTICES": "d4171f52daf743af1f9ccca1e072fc7c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"FidScanner/.git/COMMIT_EDITMSG": "750f6bcab29d878b1cb8c0b181ad2310",
"FidScanner/.git/config": "df71b71ae3d914e5ade252f88361cf09",
"FidScanner/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"FidScanner/.git/FETCH_HEAD": "16973e8d6c4d32886db2a85ea2ca0e66",
"FidScanner/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"FidScanner/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"FidScanner/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"FidScanner/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"FidScanner/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"FidScanner/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"FidScanner/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"FidScanner/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"FidScanner/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"FidScanner/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"FidScanner/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"FidScanner/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"FidScanner/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"FidScanner/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"FidScanner/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"FidScanner/.git/index": "1b8b063e39ce0ea241a9e40eafc9a739",
"FidScanner/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"FidScanner/.git/logs/HEAD": "ab4980389ad059a1a7fe3529f213949b",
"FidScanner/.git/logs/refs/heads/gh-pages": "e9bb2235b7919c97f83c42e563738477",
"FidScanner/.git/logs/refs/remotes/origin/gh-pages": "b5377b4b5523692a9ceef943a648fb98",
"FidScanner/.git/logs/refs/remotes/origin/HEAD": "eb7a7cefa5843408a27d31df6d5e0a8e",
"FidScanner/.git/logs/refs/remotes/origin/main": "94e2019dd2feafcd6ff6c3c7d842965a",
"FidScanner/.git/objects/00/e11ec0ec8dfe27646039996106ad15ad6fb7b0": "c774a8a9d6ec298d8009a2da60b688f4",
"FidScanner/.git/objects/09/17705d556bf41adbe42633a9576547ccea24f1": "991f66b626a4819b9f80038b84c0daaa",
"FidScanner/.git/objects/0c/9f0cb8bb5096e36d1414fd04d836434cc7712e": "eabff0163ae543e42de8c8a03ed2f4e8",
"FidScanner/.git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
"FidScanner/.git/objects/11/084c505fec834cf514ba54d0bc881480914766": "dddaf3d83e5849de696f3d74b0d5b3c1",
"FidScanner/.git/objects/11/fb5960e4350750c2d78d2f7418c9639704cc95": "23cd5a84d06e83449009c7caa5912aa8",
"FidScanner/.git/objects/1f/af7301ab0cbc8f004b7c3e9c7ff946dbdc7626": "b0aae3ee1d04648a95ff45d8137f37a6",
"FidScanner/.git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
"FidScanner/.git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
"FidScanner/.git/objects/2f/f2f32abbdfc64cf4f3d5c1a80542d19a33979d": "ac9580eee25367b859befa2b69fed35a",
"FidScanner/.git/objects/39/0a05e528134f4d4598c211738ffc2ed859ea6e": "6a4f5712dc8672c41335a1cdfdf70eeb",
"FidScanner/.git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
"FidScanner/.git/objects/3a/fa37c1aadd63ea8bcf6b81ccf9ab32e29e0c1a": "e5fe367345ae25902b97830dec460d2f",
"FidScanner/.git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
"FidScanner/.git/objects/51/d1f5d0a35e6be2d6d7aef944ddcc2599d96ab0": "ceef3f9549c321575c631da0e5caa91d",
"FidScanner/.git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
"FidScanner/.git/objects/5b/f51eabf34548d734d57be0ae9eb0dd6cb8fe6d": "10e11ad55d7a45a3276a48f51b16476d",
"FidScanner/.git/objects/69/b9c46da8dc8d7b13bcd0fb32e2d21d3a0ae97d": "56719e6d0acd6e703c739449f45be92f",
"FidScanner/.git/objects/6e/a9c22621cbd187a195cd35094fc79787a22a3f": "a1d7e83e753227c09460264a9b3e5d49",
"FidScanner/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"FidScanner/.git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
"FidScanner/.git/objects/78/64ad5396f6b9ef9d2aa56ac383d2854c0fbb5c": "2183252f10af603d2a67cad17b66caa6",
"FidScanner/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"FidScanner/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"FidScanner/.git/objects/8c/1f07f2b579a28c1a1e0b9b528069194a6d77ab": "1db71ea79f7c63016d348ff2f751faa8",
"FidScanner/.git/objects/8e/1cd4bb2e2caedb66f746c7447f3b4e96bc3403": "e75e70c23a9c1355305efbd901b4b558",
"FidScanner/.git/objects/8f/6ac6bddf80b73032f0975e8f54f897651c4ed6": "b101e87390c744257ad1537d10c46843",
"FidScanner/.git/objects/91/c5851dc8542c65241b95cd38cf6f08be09e2e2": "c08fd49576b1735239c7dbcbb0a877b9",
"FidScanner/.git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
"FidScanner/.git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
"FidScanner/.git/objects/9e/4a348cb3bd0456df9f9f3fe2280d3bc66edcbd": "c89218fda953def46692faf9ad2515d3",
"FidScanner/.git/objects/9e/c28203e82543b19d31871f26187f30537ab1d5": "1ddbb28c34dc91da6f17735fbc55ed54",
"FidScanner/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"FidScanner/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"FidScanner/.git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
"FidScanner/.git/objects/be/0a10e45537ccebf8c8beab1bc80a400e897dd1": "cc7c579596ed3c5e57127345d3758399",
"FidScanner/.git/objects/cf/8a12b4079a6b5e6de9586aa826236f6f417261": "712b6f72fa1bf4710c6ca5a6e5129703",
"FidScanner/.git/objects/d0/bccfd601fe9b80e5b7e579e2c8fd2db0b0f720": "eda214db9bbafdcea136e5f32a6fe841",
"FidScanner/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"FidScanner/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"FidScanner/.git/objects/d9/b6d54373cc4766704cb87ecc5d4c4ca09f8d3f": "fcde1daca059f8c3e39910ad358adfc3",
"FidScanner/.git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
"FidScanner/.git/objects/df/513c9ce0f535f0d847ee4f5f5febbde90d17cc": "a084a7757b0a86d9bf364532be2cc10b",
"FidScanner/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"FidScanner/.git/objects/e2/23eca4ad99a746986083c5b74698229fb531a6": "599e35e8f14bc92517cf826cd9d4e825",
"FidScanner/.git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
"FidScanner/.git/objects/e6/5b4426e72c2130ad4ebcff2e9c4103a8b57fe2": "0ee5d7a33fbbc8f4c654e0306c52285c",
"FidScanner/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"FidScanner/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"FidScanner/.git/objects/f7/094df71c27d8c471a224a935ddb81c05a40af3": "09a4ac1974c9cb93c7b65eaa0bc588b8",
"FidScanner/.git/objects/f8/901ff91889c512f808d8e352c3232ad58ee949": "1274eb7f365126ffdc927ab38389ddd0",
"FidScanner/.git/objects/fa/68c1fe27202fb98d1b372752884432cebba961": "71dcc147a48cf641a197973c30c3d215",
"FidScanner/.git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
"FidScanner/.git/ORIG_HEAD": "a55ece911455a867dc50892cb183033a",
"FidScanner/.git/refs/heads/gh-pages": "a55ece911455a867dc50892cb183033a",
"FidScanner/.git/refs/remotes/origin/gh-pages": "a55ece911455a867dc50892cb183033a",
"FidScanner/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"FidScanner/.git/refs/remotes/origin/main": "a55ece911455a867dc50892cb183033a",
"FidScanner/assets/AssetManifest.bin": "7fc48435f1181dafad50a866b45778f7",
"FidScanner/assets/AssetManifest.bin.json": "82a1e1e3334bbb7fcbc388e653c91bc0",
"FidScanner/assets/AssetManifest.json": "9b4d3735283a5027afcf9d6724f8eea2",
"FidScanner/assets/assets/bg.png": "844f2a725bda91352109e4a91b546bde",
"FidScanner/assets/assets/info.csv": "ee8dadfc452ffd425de728f4618edf8c",
"FidScanner/assets/assets/logooo.png": "4c0644f06f61d96813a0d240f874b45e",
"FidScanner/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"FidScanner/assets/fonts/MaterialIcons-Regular.otf": "b0ec0ac8ffea3a9df7daa3a1f7570cc5",
"FidScanner/assets/NOTICES": "d4171f52daf743af1f9ccca1e072fc7c",
"FidScanner/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"FidScanner/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"FidScanner/canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"FidScanner/canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"FidScanner/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"FidScanner/canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"FidScanner/canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"FidScanner/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"FidScanner/canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"FidScanner/canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"FidScanner/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"FidScanner/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"FidScanner/flutter_bootstrap.js": "a12f3753f736ded26ffd8c272d1683fb",
"FidScanner/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"FidScanner/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"FidScanner/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"FidScanner/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"FidScanner/index.html": "7ba5ce712bd0f87479e70317f4a9213c",
"FidScanner/main.dart.js": "995fbed7f6c776df941bd5d28a9ef807",
"FidScanner/manifest.json": "d4b36a43952e77747d9337977684db10",
"FidScanner/version.json": "963b05995943e223d17a61c0448c67a7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "352ca4fe8b13c72749cca7909790d2ed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "806e2fcc355448ef38d405d03087dd16",
"/": "806e2fcc355448ef38d405d03087dd16",
"main.dart.js": "995fbed7f6c776df941bd5d28a9ef807",
"manifest.json": "d4b36a43952e77747d9337977684db10",
"version.json": "963b05995943e223d17a61c0448c67a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
