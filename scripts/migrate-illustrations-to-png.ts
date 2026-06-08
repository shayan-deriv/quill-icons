/**
 * One-time / offline migration: rasterize `svg/Illustration/*.svg` sources to PNG assets
 * and rewrite React illustration components to use <img> instead of inline SVG.
 *
 * Run before publish when a full Figma PNG export is not available.
 * Prefer `npm run export:illustrations` (Figma PNG API) for authoritative assets.
 */
import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import {
  buildIllustrationComponentSource,
  getIllustrationAssetFilename,
  getIllustrationSourceBasename,
  ILLUSTRATION_ASSETS_SUBDIR,
} from './utils/illustration.utils';
import { ILLUSTRATION_PNG_SCALE } from './png-configs/illustrations';
import { PNG_OUT_PUT_PATH, SVG_OUT_PUT_PATH } from './utils/figma.constants';

const ILLUSTRATION_REACT_DIR = path.resolve('src/react/Illustration');
const ILLUSTRATION_SVG_DIR = path.resolve(SVG_OUT_PUT_PATH, 'Illustration');
const ILLUSTRATION_PNG_DIR = path.resolve(PNG_OUT_PUT_PATH, 'Illustration');
const ASSETS_DIR = path.join(ILLUSTRATION_REACT_DIR, ILLUSTRATION_ASSETS_SUBDIR);

const RASTER_WIDTH = 48 * ILLUSTRATION_PNG_SCALE;

const rasterizeSvgToPng = (svgPath: string): Buffer => {
  const svgData = fs.readFileSync(svgPath);
  const resvg = new Resvg(svgData, {
    fitTo: { mode: 'width', value: RASTER_WIDTH },
  });
  return resvg.render().asPng();
};

const run = () => {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
  fs.mkdirSync(ILLUSTRATION_PNG_DIR, { recursive: true });

  const componentFiles = fs
    .readdirSync(ILLUSTRATION_REACT_DIR)
    .filter((file) => file.endsWith('Icon.tsx'));

  const indexExports: string[] = [];
  const missing: string[] = [];

  for (const file of componentFiles) {
    const componentName = file.replace(/\.tsx$/, '');
    const sourceBasename = getIllustrationSourceBasename(componentName);
    const svgPath = path.join(ILLUSTRATION_SVG_DIR, `${sourceBasename}.svg`);

    if (!fs.existsSync(svgPath)) {
      missing.push(componentName);
      continue;
    }

    const png = rasterizeSvgToPng(svgPath);
    const assetFilename = getIllustrationAssetFilename(componentName);

    fs.writeFileSync(path.join(ASSETS_DIR, assetFilename), png);
    fs.writeFileSync(path.join(ILLUSTRATION_PNG_DIR, `${sourceBasename}.png`), png);
    fs.writeFileSync(
      path.join(ILLUSTRATION_REACT_DIR, file),
      buildIllustrationComponentSource(componentName),
    );

    indexExports.push(`export { default as ${componentName} } from './${componentName}';`);
  }

  fs.writeFileSync(
    path.join(ILLUSTRATION_REACT_DIR, 'index.ts'),
    `${indexExports.sort().join('\n')}\n`,
  );

  console.log(`Migrated ${indexExports.length} illustrations to PNG assets.`);
  if (missing.length) {
    console.warn(`Skipped ${missing.length} components without matching SVG source:`);
    missing.forEach((name) => console.warn(`  - ${name}`));
  }
};

run();
