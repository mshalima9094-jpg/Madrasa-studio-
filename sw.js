const C='ms-v1',F=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(async c=>{await c.addAll(F);try{await c.add('./SolaimanLipi.ttf')}catch(_){}}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!=C).map(n=>caches.delete(n)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const u=new URL(e.request.url);if(res.status==200&&(u.origin==location.origin||u.host.includes('fonts.g'))){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}return res}).catch(()=>caches.match('./index.html'))))});
