import fs from 'node:fs';
import path from 'node:path';

const SOURCE = path.resolve('src/react/Illustration/assets');
const TARGET = path.resolve('dist/react/Illustration/assets');

const copyIllustrationAssets = () => {
  if (!fs.existsSync(SOURCE)) {
    console.warn('No illustration assets to copy — run export:illustrations first.');
    return;
  }

  fs.mkdirSync(TARGET, { recursive: true });
  for (const filename of fs.readdirSync(SOURCE)) {
    if (!filename.endsWith('.png')) {
      continue;
    }
    fs.copyFileSync(path.join(SOURCE, filename), path.join(TARGET, filename));
  }

  const count = fs.readdirSync(TARGET).filter((file) => file.endsWith('.png')).length;
  console.log(`Copied ${count} illustration PNG assets to dist/`);
};

copyIllustrationAssets();
