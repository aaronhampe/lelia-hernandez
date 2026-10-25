import assert from 'node:assert/strict';

const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3101';
const routes = ['/', '/unterricht', '/ueber-mich', '/kontakt', '/haeufige-fragen', '/impressum', '/datenschutz', '/danke'];
const assets = new Set();
for (const route of routes) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, route);
  for (const match of html.matchAll(/(?:src|href)="([^"<>]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), base);
    if (url.origin === new URL(base).origin && /\.(?:js|css|webp|png|jpg|svg)$/.test(url.pathname)) assets.add(url.href);
  }
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="(\/[^"<>]+)"/g)) assets.add(new URL(match[1].replaceAll('&amp;', '&'), base).href);
  if (route === '/kontakt') {
    assert.match(html, /action="https:\/\/formspree.io\/f\/xojnpywz"/);
    for (const field of ['name', 'email', 'message', 'privacy']) assert(html.includes(`name="${field}"`), field);
  }
}
assert(assets.size > 5, 'Expected CSS, JavaScript and images');
for (const url of assets) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, url);
  assert((await response.arrayBuffer()).byteLength > 0, url);
}
for (const route of ['/robots.txt', '/sitemap.xml']) assert.equal((await fetch(base + route)).status, 200, route);
const redirect = await fetch(base + '/%C3%BCber-mich', { redirect: 'manual' });
assert.equal(redirect.status, 308);
assert.equal(new URL(redirect.headers.get('location'), base).pathname, '/ueber-mich');
assert.equal((await fetch(base + '/security-smoke-missing')).status, 404);
console.log(`PASS: ${routes.length} pages, ${assets.size} assets, sitemap, robots, legacy redirect, 404 and contact form contract (no external submission).`);
