const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createHeroComposite() {
  const tornPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/uploaded_media_1788535067962.png';
  const photoPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-play.jpg';
  const outPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-torn-reveal.png';

  const metadata = await sharp(tornPath).metadata();
  const W = metadata.width;
  const H = metadata.height;

  // 1. Get raw pixel buffer of torn paper
  const { data: tornData } = await sharp(tornPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 2. Prepare resized photo to match (W, H)
  const photoBuffer = await sharp(photoPath)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .ensureAlpha()
    .raw()
    .toBuffer();

  // 3. Detect the black hole
  const centerX = Math.floor(W * 0.49);
  const centerY = Math.floor(H * 0.38);

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
        if (!isHole[nPIdx]) {
          if (isBlack(nPIdx * 4)) {
            isHole[nPIdx] = 1;
            queue.push(nPIdx);
          }
        }
      }
    }
  }

  // 4. Create final output buffer
  // Background color is exact #fff9ef: R=255, G=249, B=239
  const outData = Buffer.alloc(W * H * 4);

  // Background cream color
  const BG_R = 255;
  const BG_G = 249;
  const BG_B = 239;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const pIdx = y * W + x;
      const idx = pIdx * 4;

      if (isHole[pIdx]) {
        // Inside the hole: Show the photo of the kids
        let pr = photoBuffer[idx];
        let pg = photoBuffer[idx + 1];
        let pb = photoBuffer[idx + 2];

        // Add soft top-flap shadow over the photo
        const dyFromTop = y - (centerY - H * 0.18);
        if (dyFromTop > 0 && dyFromTop < H * 0.12) {
          const shadowFactor = 0.75 + 0.25 * (dyFromTop / (H * 0.12));
          pr = Math.floor(pr * shadowFactor);
          pg = Math.floor(pg * shadowFactor);
          pb = Math.floor(pb * shadowFactor);
        }

        outData[idx] = pr;
        outData[idx + 1] = pg;
        outData[idx + 2] = pb;
        outData[idx + 3] = 255;
      } else {
        // Outside the hole: 3D torn flaps, shadow, or cream background
        const tr = tornData[idx];
        const tg = tornData[idx + 1];
        const tb = tornData[idx + 2];

        // Luminance of the original paper/flaps
        const lum = (tr * 0.299 + tg * 0.587 + tb * 0.114) / 255;

        // Check distance from center hole
        const nx = (x - centerX) / (W * 0.42);
        const ny = (y - centerY) / (H * 0.38);
        const dist = Math.sqrt(nx * nx + ny * ny);

        if (dist <= 0.82) {
          // Near the hole: keep the white 3D torn flaps and dark paper shadow
          // Pure white flap highlights stay white, shadows darken into cream
          const flapR = Math.min(255, Math.floor(tr * 1.05));
          const flapG = Math.min(255, Math.floor(tg * 1.02));
          const flapB = Math.min(255, Math.floor(tb * 0.98));

          // Blend shadow into cream background
          if (lum < 0.85) {
            // Shadow area: multiply with cream
            outData[idx] = Math.floor((lum) * BG_R);
            outData[idx + 1] = Math.floor((lum) * BG_G);
            outData[idx + 2] = Math.floor((lum) * BG_B);
          } else {
            // White flap: keep crisp white
            outData[idx] = flapR;
            outData[idx + 1] = flapG;
            outData[idx + 2] = flapB;
          }
        } else if (dist < 1.05) {
          // Transition zone: smoothly blend into pure cream
          const factor = (dist - 0.82) / (1.05 - 0.82);
          const baseR = (lum < 0.85) ? Math.floor(lum * BG_R) : tr;
          const baseG = (lum < 0.85) ? Math.floor(lum * BG_G) : tg;
          const baseB = (lum < 0.85) ? Math.floor(lum * BG_B) : tb;

          outData[idx] = Math.floor(baseR * (1 - factor) + BG_R * factor);
          outData[idx + 1] = Math.floor(baseG * (1 - factor) + BG_G * factor);
          outData[idx + 2] = Math.floor(baseB * (1 - factor) + BG_B * factor);
        } else {
          // Far from hole: Pure cream background (#fff9ef)
          outData[idx] = BG_R;
          outData[idx + 1] = BG_G;
          outData[idx + 2] = BG_B;
        }

        outData[idx + 3] = 255;
      }
    }
  }

  // Save the master composite
  await sharp(outData, { raw: { width: W, height: H, channels: 4 } })
    .png({ quality: 100 })
    .toFile(outPath);

  console.log('Successfully created master composite:', outPath);
}

createHeroComposite().catch(console.error);
