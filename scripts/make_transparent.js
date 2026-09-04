const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processIcon(inputPath, outputPath, threshold = 238) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBg(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r >= threshold && g >= threshold && b >= threshold;
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

  // BFS flood fill
  let head = 0;
  while (head < queue.length) {
    const pIdx = queue[head++];
    const idx = pIdx * channels;
    data[idx + 3] = 0; // Transparent alpha

    const cx = pIdx % width;
    const cy = Math.floor(pIdx / width);

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (const [nx, ny] of neighbors) {
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

  // Save trimmed PNG
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log('Saved transparent icon:', outputPath);
}

async function main() {
  const icons = [
    {
      in: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/icon_bombillo_sticker_1788531976482.jpg',
      out: 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/doodle-bombillo.png'
    },
    {
      in: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/icon_lapiz_sticker_1788531991586.jpg',
      out: 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/doodle-lapiz.png'
    },
    {
      in: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/icon_calendario_sticker_1788532007943.jpg',
      out: 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/doodle-calendario.png'
    },
    {
      in: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/icon_megafono_sticker_1788532025551.jpg',
      out: 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/doodle-megafono.png'
    }
  ];

  for (const item of icons) {
    await processIcon(item.in, item.out);
  }
}

main().catch(console.error);
