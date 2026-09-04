const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function syncImages() {
  const publicDir = 'c:/Users/dfajardo/OneDrive - COMISION NACIONAL DE ENERGIA/Escritorio/infantem/public/img';

  const mappings = [
    {
      src: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/prog_maternal_real_1788474158871.jpg',
      destJpg: 'prog-maternal.jpg',
      destPng: 'prog-maternal.png'
    },
    {
      src: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/prog_inicial_uniform_1788473785082.jpg',
      destJpg: 'prog-inicial.jpg',
      destPng: 'prog-inicial.png'
    },
    {
      src: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/prog_primaria_uniform_1788473810080.jpg',
      destJpg: 'prog-primaria.jpg',
      destPng: 'prog-primaria.png'
    },
    {
      src: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/prog_campamentos_realistic_1788534252694.jpg',
      destJpg: 'prog-campamentos.jpg',
      destPng: 'prog-campamentos.png'
    },
    {
      src: 'C:/Users/dfajardo/.gemini/antigravity-ide/brain/f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff/hero_uniform_clean_1788473898837.jpg',
      destJpg: 'hero-play.jpg',
      destPng: 'hero-play.png'
    }
  ];

  for (const m of mappings) {
    if (fs.existsSync(m.src)) {
      const jpgPath = path.join(publicDir, m.destJpg);
      const pngPath = path.join(publicDir, m.destPng);

      fs.copyFileSync(m.src, jpgPath);
      await sharp(m.src).png({ quality: 95 }).toFile(pngPath);
      console.log(`Synced: ${m.destJpg} & ${m.destPng}`);
    } else {
      console.warn(`Source not found: ${m.src}`);
    }
  }
}

syncImages().catch(console.error);
