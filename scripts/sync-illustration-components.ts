/**
 * Regenerates Illustration React wrappers from existing PNG assets in
 * src/react/Illustration/assets/ (no Figma token or SVG sources required).
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  buildIllustrationComponentSource,
  ILLUSTRATION_ASSETS_SUBDIR,
} from './utils/illustration.utils';

const ILLUSTRATION_DIR = path.resolve('src/react/Illustration');
const ASSETS_DIR = path.join(ILLUSTRATION_DIR, ILLUSTRATION_ASSETS_SUBDIR);

const run = () => {
  if (!fs.existsSync(ASSETS_DIR)) {
    throw new Error(
      `Missing ${ASSETS_DIR}. Run export:illustrations or migrate:illustrations:png first.`,
    );
  }

  const indexExports: string[] = [];

  for (const asset of fs.readdirSync(ASSETS_DIR)) {
    if (!asset.endsWith('.png')) {
      continue;
    }

    const componentName = `${asset.replace(/\.png$/, '')}Icon`;
    fs.writeFileSync(
      path.join(ILLUSTRATION_DIR, `${componentName}.tsx`),
      buildIllustrationComponentSource(componentName),
    );
    indexExports.push(`export { default as ${componentName} } from './${componentName}';`);
  }

  fs.writeFileSync(path.join(ILLUSTRATION_DIR, 'index.ts'), `${indexExports.sort().join('\n')}\n`);

  console.log(`Synced ${indexExports.length} illustration components.`);
};

run();
