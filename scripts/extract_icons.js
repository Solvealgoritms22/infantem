const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function inspectAndExtract() {
  const inputPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/media_1788532838444.png';
  
  const metadata = await sharp(inputPath).metadata();
  console.log('Image dimensions:', metadata.width, 'x', metadata.height);

  const W = metadata.width;
  const H = metadata.height;

  // Let's define the 3 regions approximately based on standard 3-item layout:
  // 1. Hands holding heart: top-left quadrant
  // 2. Toy blocks: top-right quadrant
  // 3. Open door: bottom center

  const regions = [
    {
      name: 'icon-cuidado-doodle.png',
      crop: { left: 0, top: 0, width: Math.floor(W * 0.52), height: Math.floor(H * 0.52) }
    },
    {
      name: 'icon-juego-doodle.png',
      crop: { left: Math.floor(W * 0.48), top: 0, width: Math.floor(W * 0.52), height: Math.floor(H * 0.55) }
    },
    {
      name: 'icon-puertas-doodle.png',
      crop: { left: Math.floor(W * 0.2), top: Math.floor(H * 0.45), width: Math.floor(W * 0.6), height: Math.floor(H * 0.55) }
    }
  ];

  for (const reg of regions) {
    const croppedBuffer = await sharp(inputPath)
      .extract(reg.crop)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = croppedBuffer;
    const { width, height, channels } = info;
    const visited = new Uint8Array(width * height);
    const queue = [];
    const threshold = 240;

    function isBg(idx) {
      return data[idx] >= threshold && data[idx + 1] >= threshold && data[idx + 2] >= threshold;
    }

    // Seed edges
    for (let x = 0; x < width; x++) {
      for (const y of [0, height - 1]) {
        const pIdx = y * width + x;
        const idx = pIdx * channels;
        if (isBg(idx) && !visited[pIdx]) {
          visited[pIdx] = 1;
          queue.push(pIdx);
        }
      }
    }
    for (let y = 0; y < height; y++) {
      for (const x of [0, width - 1]) {
        const pIdx = y * width + x;
        const idx = pIdx * channels;
        if (isBg(idx) && !visited[pIdx]) {
          visited[pIdx] = 1;
          queue.push(pIdx);
        }
      }
    }

    let head = 0;
    while (head < queue.length) {
      const pIdx = queue[head++];
      const idx = pIdx * channels;
      data[idx + 3] = 0; // Alpha 0

      const cx = pIdx % width;
      const cy = Math.floor(pIdx / width);

      for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nPIdx = ny * width + nx;
          if (!visited[nPIdx]) {
            const nIdx = nPIdx * channels;
            if (isBg(nIdx)) {
              visited[nPIdx] = 1;
              queue.push(nPIdx);
            }
          }
        }
      }
    }

    const outPath = path.join('c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img', reg.name);
    await sharp(data, { raw: { width, height, channels } })
      .trim()
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outPath);

    console.log('Saved:', outPath);
  }
}

inspectAndExtract().catch(console.error);
