const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processTornPaper() {
  const inputPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/uploaded_media_1788535067962.png';
  const outPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/torn-paper-hole.png';

  const metadata = await sharp(inputPath).metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's make the center black area transparent.
  // Center is around (width/2, height*0.35)
  // We can do flood fill from the center or calculate luminance / black threshold.
  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height * 0.35);

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBlackHole(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Black or dark shadow in the hole
    return r < 35 && g < 35 && b < 35;
  }

  const startPIdx = centerY * width + centerX;
  if (isBlackHole(startPIdx * channels)) {
    visited[startPIdx] = 1;
    queue.push(startPIdx);
  }

  let head = 0;
  while (head < queue.length) {
    const pIdx = queue[head++];
    const idx = pIdx * channels;
    data[idx + 3] = 0; // Transparent

    const cx = pIdx % width;
    const cy = Math.floor(pIdx / width);

    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nPIdx = ny * width + nx;
        if (!visited[nPIdx]) {
          const nIdx = nPIdx * channels;
          if (isBlackHole(nIdx)) {
            visited[nPIdx] = 1;
            queue.push(nPIdx);
          }
        }
      }
    }
  }

  // Also soften the transition edge slightly
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pIdx = y * width + x;
      const idx = pIdx * channels;
      if (data[idx + 3] !== 0) {
        const r = data[idx], g = data[idx + 1], b = data[idx + 2];
        // If it's very dark near the boundary (shadow on flap), blend alpha
        const brightness = (r + g + b) / 3;
        if (brightness < 60) {
          // Check if any neighbor is 0 alpha
          let hasTransparentNeighbor = false;
          for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const nPIdx = (y + dy) * width + (x + dx);
            if (data[nPIdx * channels + 3] === 0) {
              hasTransparentNeighbor = true;
              break;
            }
          }
          if (hasTransparentNeighbor) {
            data[idx + 3] = Math.min(255, Math.floor((brightness / 60) * 255));
          }
        }
      }
    }
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(data, { raw: { width, height, channels } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath);

  console.log('Saved transparent torn paper overlay to:', outPath);
}

processTornPaper().catch(console.error);
