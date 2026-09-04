const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processSeamlessTornPaper() {
  const inputPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/uploaded_media_1788535067962.png';
  const outPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/torn-paper-hole.png';

  const metadata = await sharp(inputPath).metadata();
  const W = metadata.width;
  const H = metadata.height;

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const centerX = Math.floor(W * 0.49);
  const centerY = Math.floor(H * 0.38);

  // 1. Flood fill the inner black hole to be transparent
  const visited = new Uint8Array(W * H);
  const queue = [];

  function isBlackHole(idx) {
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r < 35 && g < 35 && b < 35;
  }

  const startIdx = centerY * W + centerX;
  if (isBlackHole(startIdx * 4)) {
    visited[startIdx] = 1;
    queue.push(startIdx);
  }

  let head = 0;
  while (head < queue.length) {
    const pIdx = queue[head++];
    const idx = pIdx * 4;
    data[idx + 3] = 0; // Transparent

    const cx = pIdx % W;
    const cy = Math.floor(pIdx / W);

    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
        const nPIdx = ny * W + nx;
        if (!visited[nPIdx]) {
          const nIdx = nPIdx * 4;
          if (isBlackHole(nIdx)) {
            visited[nPIdx] = 1;
            queue.push(nPIdx);
          }
        }
      }
    }
  }

  // 2. Tint outer paper to warm cream (#fff9ef) and apply soft radial fade to outer margins
  // The hole and flaps span roughly radius ~ 220px to 380px from center.
  // Beyond 380px, we fade to transparent so there is no rectangular cut!
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      const idx = pIdx * 4;

      if (data[idx + 3] > 0) {
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        // Distance from center of hole normalized
        const dx = (x - centerX) / (W * 0.46);
        const dy = (y - centerY) / (H * 0.42);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Warm tint: blend paper grayscale with cream (#fff9ef)
        // Original paper is grayscale (~220-250)
        // Let's preserve flaps' shadows and highlights while giving cream tone
        const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        data[idx] = Math.min(255, Math.floor(lum * 255));
        data[idx + 1] = Math.min(255, Math.floor(lum * 249));
        data[idx + 2] = Math.min(255, Math.floor(lum * 239));

        // Fade out to transparent at outer boundary
        if (dist > 0.82) {
          const fade = Math.max(0, 1 - (dist - 0.82) / 0.28);
          data[idx + 3] = Math.floor(data[idx + 3] * fade);
        }
      }
    }
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(data, { raw: { width: W, height: H, channels: 4 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath);

  console.log('Saved seamless torn paper overlay to:', outPath);
}

processSeamlessTornPaper().catch(console.error);
