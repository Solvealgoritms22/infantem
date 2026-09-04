const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createFlapsOnlyReveal() {
  const tornPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/uploaded_media_1788535067962.png';
  const photoPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-play.jpg';
  const outPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-torn-reveal.png';

  const metadata = await sharp(tornPath).metadata();
  const W = metadata.width;
  const H = metadata.height;

  // 1. Raw buffer of torn paper
  const { data: tornData } = await sharp(tornPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 2. Photo buffer resized to (W, H)
  const photoBuffer = await sharp(photoPath)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const centerX = Math.floor(W * 0.49);
  const centerY = Math.floor(H * 0.38);

  // 3. Flood fill the inner hole
  const isHole = new Uint8Array(W * H);
  const queue = [];

  function isBlack(idx) {
    return tornData[idx] < 38 && tornData[idx + 1] < 38 && tornData[idx + 2] < 38;
  }

  const startIdx = centerY * W + centerX;
  if (isBlack(startIdx * 4)) {
    isHole[startIdx] = 1;
    queue.push(startIdx);
  }

  while (queue.length > 0) {
    const pIdx = queue.shift();
    const cx = pIdx % W;
    const cy = Math.floor(pIdx / W);

    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
        const nPIdx = ny * W + nx;
        if (!isHole[nPIdx] && isBlack(nPIdx * 4)) {
          isHole[nPIdx] = 1;
          queue.push(nPIdx);
        }
      }
    }
  }

  // 4. Calculate Distance Transform from the hole boundary (BFS outward)
  // This allows us to know the exact distance in pixels of every pixel from the hole!
  const distFromHole = new Float32Array(W * H);
  distFromHole.fill(9999);

  const borderQueue = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      if (isHole[pIdx]) {
        distFromHole[pIdx] = 0;
      } else {
        // Check if adjacent to hole
        let adjacent = false;
        for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
          const nx = x + dx, ny = y + dy;
          if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
            if (isHole[ny * W + nx]) {
              adjacent = true;
              break;
            }
          }
        }
        if (adjacent) {
          distFromHole[pIdx] = 1;
          borderQueue.push(pIdx);
        }
      }
    }
  }

  // BFS distance propagation
  let bHead = 0;
  while (bHead < borderQueue.length) {
    const pIdx = borderQueue[bHead++];
    const d = distFromHole[pIdx];
    const cx = pIdx % W;
    const cy = Math.floor(pIdx / W);

    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
        const nPIdx = ny * W + nx;
        if (distFromHole[nPIdx] > d + 1) {
          distFromHole[nPIdx] = d + 1;
          // Propagate up to flap radius (around 80px)
          if (d + 1 < 90) {
            borderQueue.push(nPIdx);
          }
        }
      }
    }
  }

  // 5. Build output image:
  // - Inside hole: Photo of children (alpha = 255)
  // - On flaps (distance <= 55px): 3D torn paper flap pixels (alpha = 255)
  // - Edge of flaps (distance 55px to 75px): Smooth anti-aliasing fade to transparent
  // - Outside (distance > 75px): 100% transparent (alpha = 0)
  const outData = Buffer.alloc(W * H * 4);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      const idx = pIdx * 4;

      if (isHole[pIdx]) {
        // PHOTO INSIDE HOLE
        let pr = photoBuffer[idx];
        let pg = photoBuffer[idx + 1];
        let pb = photoBuffer[idx + 2];

        // Soft depth shadow from upper flaps
        const dyFromTop = y - (centerY - H * 0.18);
        if (dyFromTop > 0 && dyFromTop < H * 0.10) {
          const shadow = 0.8 + 0.2 * (dyFromTop / (H * 0.10));
          pr = Math.floor(pr * shadow);
          pg = Math.floor(pg * shadow);
          pb = Math.floor(pb * shadow);
        }

        outData[idx] = pr;
        outData[idx + 1] = pg;
        outData[idx + 2] = pb;
        outData[idx + 3] = 255;
      } else {
        const d = distFromHole[pIdx];

        if (d <= 52) {
          // FLAP OPAQUE REGION
          outData[idx] = tornData[idx];
          outData[idx + 1] = tornData[idx + 1];
          outData[idx + 2] = tornData[idx + 2];
          outData[idx + 3] = 255;
        } else if (d < 72) {
          // FLAP OUTER EDGE FEATHER
          const factor = (d - 52) / (72 - 52);
          const smooth = factor * factor * (3 - 2 * factor);
          const alpha = Math.floor(255 * (1 - smooth));

          outData[idx] = tornData[idx];
          outData[idx + 1] = tornData[idx + 1];
          outData[idx + 2] = tornData[idx + 2];
          outData[idx + 3] = alpha;
        } else {
          // 100% TRANSPARENT OUTSIDE
          outData[idx] = 0;
          outData[idx + 1] = 0;
          outData[idx + 2] = 0;
          outData[idx + 3] = 0;
        }
      }
    }
  }

  // Trim empty transparent edges
  await sharp(outData, { raw: { width: W, height: H, channels: 4 } })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath);

  console.log('Saved transparent flaps-only reveal to:', outPath);
}

createFlapsOnlyReveal().catch(console.error);
