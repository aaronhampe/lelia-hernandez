// Fail before deployment if the build environment still uses an unpatched
// runtime. Vercel selects the major version via engines.node, then manages patches.
const [major, minor, patch] = process.versions.node.split('.').map(Number);
if (major !== 24 || minor < 22 || (minor === 22 && patch < 1)) {
  console.error(`Node.js ${process.versions.node} is unsupported. Use Node.js 24 LTS, version 24.22.1 or newer.`);
  process.exit(1);
}
console.log(`Security runtime check passed: Node.js ${process.versions.node}`);
