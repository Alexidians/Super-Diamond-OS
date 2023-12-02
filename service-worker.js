const CACHE_NAME = 'superdiamondos-offline-access';
const CACHE_DATA = [
  '/computer-setup.html',
  '/computer.html',
  '/phone-setup.html',
  '/phone.html',
  '/activation.html',
  '/unactivated-os/files.html',
  '/unactivated-os/browser.html',
  '/unactivated-os.html',
  '/settings.html',
  '/account-manager.html',
  '/index.html',
  '/Super Diamond OS_files/SuperDiamond.png',
  '/superdiamond.png',
  '/Super Diamond OS_files/command-prompt.png',
  '/Super Diamond OS_files/security.js',
  '/Super Diamond OS_files/repair-hammer.png',
  '/Super Diamond OS_files/power-button.png',
  '/Super Diamond OS_files/update.png',
  '/Super Diamond OS_files/updateCheckerApi.js',
  '/Super Diamond OS_files/good_super_diamond_browser.html',
  '/Super Diamond OS_files/good_super_diamond_browser_files/proxy.html',
  '/Super Diamond OS_files/good_super_diamond_browser_files/proxyhome.html',
  '/Super Diamond OS_files/good_super_diamond_browser_files/browser.html',
  '/Super Diamond OS_files/good_super_diamond_browser_files/urlhistory.css',
  '/Super Diamond OS_files/good_super_diamond_browser_files/urlhistory.js.lejupielāde',
  '/Super Diamond OS_files/good_super_diamond_browser_files/settingmng.js.lejupielāde',
  '/Super Diamond OS_files/good_super_diamond_browser_files/super_diamond_core.js.lejupielāde',
  '/Super Diamond OS_files/good_super_diamond_browser_files/superdiamond.png',
  '/Super Diamond OS_files/good_super_diamond_browser_files/superdiamond(1).png',
  '/Super Diamond OS_files/feed-the-cat.html',
  '/Super Diamond OS_files/feed_the_cat_files/cat.png',
  '/Super Diamond OS_files/feed_the_cat_files/superdiamond.png',
  '/Super Diamond OS_files/404.html',
  '/Super Diamond OS_files/404.md',
  '/Super Diamond OS_files/arrow-right.png',
  '/Super Diamond OS_files/Task Manager.png',
  '/Super Diamond OS_files/cat.png',
  '/Super Diamond OS_files/calculator.html',
  '/Super Diamond OS_files/click-counter.html',
  '/Super Diamond OS_files/countdown.html',
  '/Super Diamond OS_files/counter.html',
  '/Super Diamond OS_files/cube.png',
  '/Super Diamond OS_files/data.html',
  '/Super Diamond OS_files/datamatrix-generator.html',
  '/Super Diamond OS_files/qrcode-generator.html',
  '/Super Diamond OS_files/error.html',
  '/Super Diamond OS_files/fengari-web.js',
  '/Super Diamond OS_files/files.html',
  '/Super Diamond OS_files/home.html',
  '/Super Diamond OS_files/inputs.html',
  '/Super Diamond OS_files/lock.png',
  '/Super Diamond OS_files/notification.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_DATA);
    })
  );
});
