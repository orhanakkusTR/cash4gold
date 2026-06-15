// Generate favicon.ico (multi-size, PNG-encoded entries) from src/app/icon.svg
// Run from project root:  node tools/favicon/gen.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync(new URL("../../src/app/icon.svg", import.meta.url));
const sizes = [16, 32, 48];

const pngs = await Promise.all(
  sizes.map((s) => sharp(svg, { density: 384 }).resize(s, s).png().toBuffer())
);

// also emit a 128px preview so we can eyeball legibility
const preview = await sharp(svg, { density: 384 }).resize(128, 128).png().toBuffer();
writeFileSync(new URL("./preview-128.png", import.meta.url), preview);

// --- build a valid .ico that embeds the PNG entries ---
function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);      // reserved
  header.writeUInt16LE(1, 2);      // type: icon
  header.writeUInt16LE(count, 4);  // image count

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const body = [];
  images.forEach((img, i) => {
    const d = i * 16;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, d + 0); // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, d + 1); // height
    dir.writeUInt8(0, d + 2);  // palette
    dir.writeUInt8(0, d + 3);  // reserved
    dir.writeUInt16LE(1, d + 4);   // color planes
    dir.writeUInt16LE(32, d + 6);  // bits per pixel
    dir.writeUInt32LE(img.buf.length, d + 8);  // size in bytes
    dir.writeUInt32LE(offset, d + 12);         // offset
    offset += img.buf.length;
    body.push(img.buf);
  });
  return Buffer.concat([header, dir, ...body]);
}

const ico = buildIco(sizes.map((s, i) => ({ size: s, buf: pngs[i] })));
writeFileSync(new URL("../../src/app/favicon.ico", import.meta.url), ico);
console.log(`favicon.ico written (${ico.length} bytes, sizes: ${sizes.join("/")}) + preview-128.png`);
