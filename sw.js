// Lets the page open from the home screen and keep working without internet.
const CACHE = "ccl-v4";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return; // reading-service requests are POST and are never stored
  // Google sign-in and Google Drive always go straight to Google, never stored.
  if (/(^|\.)google(apis)?\.com$/.test(new URL(r.url).hostname)) return;
  // The lab's protocols folder changes when the site is updated, so always ask the site first.
  if (new URL(r.url).pathname.indexOf("/protocols/") >= 0) {
    e.respondWith(fetch(r).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); } return res; }).catch(() => caches.match(r)));
    return;
  }
  if (r.mode === "navigate") {
    // "no-cache" asks GitHub for the newest page every time, instead of a copy the browser kept for up to 10 minutes.
    e.respondWith(fetch(r.url, { cache: "no-cache", credentials: "same-origin" }).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("index.html", copy)); } return res; }).catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then((res) => {
    if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); }
    return res;
  })));
});
