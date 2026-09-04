const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createCleanTornPaper() {
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

  // 1. Flood fill the inner black hole to be 100% transparent
  const visitedHole = new Uint8Array(W * H);
  const queueHole = [];

  function isBlackHole(idx) {
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r < 40 && g < 40 && b < 40;
  }

  const startIdx = centerY * W + centerX;
  if (isBlackHole(startIdx * 4)) {
    visitedHole[startIdx] = 1;
    queueHole.push(startIdx);
  }

  let head = 0;
  while (head < queueHole.length) {
    const pIdx = queueHole[head++];
    const idx = pIdx * 4;
    data[idx + 3] = 0; // Alpha 0

    const cx = pIdx % W;
    const cy = Math.floor(pIdx / W);

    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
        const nPIdx = ny * W + nx;
        if (!visitedHole[nPIdx]) {
          const nIdx = nPIdx * 4;
          if (isBlackHole(nIdx)) {
            visitedHole[nPIdx] = 1;
            queueHole.push(nPIdx);
          }
        }
      }
    }
  }

  // 2. Measure distance from the inner hole for every pixel to keep only the flaps and their immediate shadow
  // We'll define an elliptical boundary around the flaps:
  // The flaps and shadow extend roughly:
  // Top: up to y = H * 0.04
  // Bottom: down to y = H * 0.76
  // Left: left to x = W * 0.08
  // Right: right to x = W * 0.90
  
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      const idx = pIdx * 4;

      if (data[idx + 3] > 0) {
        // Normalized coordinates centered on the hole
        const nx = (x - centerX) / (W * 0.42);
        // Vertical is slightly asymmetrical because bottom flaps extend a bit further down
        const yRadius = (y < centerY) ? (H * 0.35) : (H * 0.38);
        const ny = (y - centerY) / yRadius;
        const dist = Math.sqrt(nx * nx + ny * ny);

        // Within dist <= 0.88 is the pure flap & shadow area.
        // Between 0.88 and 1.08, fade smoothly to transparent.
        // Beyond 1.08 is completely transparent (removes all gray background).
        if (dist <= 0.88) {
          // Keep intact
        } else if (dist < 1.08) {
          const factor = 1 - (dist - 0.88) / (1.08 - 0.88);
          // Smoothstep curve for soft feathering
          const smooth = factor * factor * (3 - 2 * factor);
          data[idx + 3] = Math.floor(data[idx + 3] * smooth);
        } else {
          data[idx + 3] = 0;
        }
      }
    }
  }

  // 3. Trim outer transparent margins so the PNG is tightly bounded
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(data, { raw: { width: W, height: H, channels: 4 } })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath);

  console.log('Saved clean torn paper flaps overlay:', outPath);
}

createCleanTornPaper().catch(console.error);
