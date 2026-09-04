const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cleanExtract() {
  const inputPath = 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/.user_uploaded/media_1788532838444.png';
  
  // Exact bounding regions that do NOT overlap at all:
  const regions = [
    {
      name: 'icon-cuidado-doodle.png',
      // Upper left: hands + heart only
      crop: { left: 40, top: 15, width: 440, height: 320 }
    },
    {
      name: 'icon-juego-doodle.png',
      // Upper right: blocks + plane only
      crop: { left: 560, top: 15, width: 430, height: 340 }
    },
    {
      name: 'icon-puertas-doodle.png',
      // Bottom center: door + flowers only (below y=350 to avoid sleeves)
      crop: { left: 300, top: 355, width: 425, height: 325 }
    }
  ];

  for (const reg of regions) {
    const { data, info } = await sharp(inputPath)
      .extract(reg.crop)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const visited = new Uint8Array(width * height);
    const queue = [];
    const threshold = 238;

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

    // Flood fill
    let head = 0;
    while (head < queue.length) {
      const pIdx = queue[head++];
      const idx = pIdx * channels;
      data[idx + 3] = 0;

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

    console.log('Saved clean icon:', outPath);
  }
}

cleanExtract().catch(console.error);
