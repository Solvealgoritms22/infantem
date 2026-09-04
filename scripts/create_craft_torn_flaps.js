const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createCraftTornFlaps() {
  const tornPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/uploaded_media_1788535067962.png';
  const photoPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-play.jpg';
  const outPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-torn-craft.png';

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

  // 4. Distance transform from the hole
  const distFromHole = new Float32Array(W * H);
  distFromHole.fill(9999);

  const borderQueue = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      if (isHole[pIdx]) {
        distFromHole[pIdx] = 0;
      } else {
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
          if (d + 1 < 90) {
            borderQueue.push(nPIdx);
          }
        }
      }
    }
  }

  // 5. Target craft paper color #eadfc9: R=234, G=223, B=201
  const CRAFT_R = 234;
  const CRAFT_G = 223;
  const CRAFT_B = 201;

  const outData = Buffer.alloc(W * H * 4);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      const idx = pIdx * 4;

      if (isHole[pIdx]) {
        // Photo inside hole
        let pr = photoBuffer[idx];
        let pg = photoBuffer[idx + 1];
        let pb = photoBuffer[idx + 2];

        // Depth shadow under top flaps
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
          const tr = tornData[idx];
          const tg = tornData[idx + 1];
          const tb = tornData[idx + 2];
          const lum = (tr * 0.299 + tg * 0.587 + tb * 0.114) / 255;

          // Colorize with #eadfc9 craft paper:
          // lum ~ 0.5 -> dark shadow on craft
          // lum ~ 0.85 -> exact craft color #eadfc9
          // lum ~ 1.0 -> highlight on torn paper fiber
          let cr, cg, cb;
          if (lum < 0.85) {
            // Shadow
            const factor = lum / 0.85;
            cr = Math.floor(CRAFT_R * factor);
            cg = Math.floor(CRAFT_G * factor);
            cb = Math.floor(CRAFT_B * factor);
          } else {
            // Highlight
            const factor = (lum - 0.85) / (1.0 - 0.85);
            cr = Math.floor(CRAFT_R + (255 - CRAFT_R) * factor * 0.85);
            cg = Math.floor(CRAFT_G + (250 - CRAFT_G) * factor * 0.85);
            cb = Math.floor(CRAFT_B + (240 - CRAFT_B) * factor * 0.85);
          }

          outData[idx] = cr;
          outData[idx + 1] = cg;
          outData[idx + 2] = cb;
          outData[idx + 3] = 255;
        } else if (d < 72) {
          const factor = (d - 52) / (72 - 52);
          const smooth = factor * factor * (3 - 2 * factor);
          const alpha = Math.floor(255 * (1 - smooth));

          const tr = tornData[idx], tg = tornData[idx + 1], tb = tornData[idx + 2];
          const lum = (tr * 0.299 + tg * 0.587 + tb * 0.114) / 255;
          const shadowFactor = Math.min(1.0, lum / 0.85);

          outData[idx] = Math.floor(CRAFT_R * shadowFactor);
          outData[idx + 1] = Math.floor(CRAFT_G * shadowFactor);
          outData[idx + 2] = Math.floor(CRAFT_B * shadowFactor);
          outData[idx + 3] = alpha;
        } else {
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

  console.log('Saved craft torn flaps image:', outPath);
}

createCraftTornFlaps().catch(console.error);
