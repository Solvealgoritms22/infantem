const sharp = require('sharp');

async function checkAlpha() {
  const imgPath = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img/hero-torn-reveal.png';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log('Dimensions:', width, 'x', height, 'channels:', channels);

  // Check corners
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [0, Math.floor(height / 2)],
    [width - 1, Math.floor(height / 2)],
    [Math.floor(width / 2), height - 1]
  ];

  for (const [x, y] of corners) {
    const idx = (y * width + x) * channels;
    console.log(`Pixel (${x}, ${y}): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}, A=${data[idx+3]}`);
  }
}

checkAlpha().catch(console.error);
