import fs from 'node:fs';
import path from 'node:path';
import type { ComponentOutputterParamOption } from '@figma-export/types';
import {
  buildIllustrationComponentSource,
  getIllustrationReactPaths,
  getIllustrationSourceBasename,
} from '../utils/illustration.utils';
import type { IllustrationPngPage } from '../lib/figma-png';

interface PngOutputterOptions {
  pngOutput: string;
  reactOutput: string;
  getDirname: (options: ComponentOutputterParamOption) => string;
}

export const createIllustrationPngOutputter =
  ({ pngOutput, reactOutput, getDirname }: PngOutputterOptions) =>
  async (pages: IllustrationPngPage[]) => {
    const indexExports: string[] = [];

    for (const { components } of pages) {
      for (const { name: componentName, png, figmaExport } of components) {
        if (!png.length) {
          continue;
        }

        const options = { componentName, ...figmaExport } as ComponentOutputterParamOption;
        const reactPaths = getIllustrationReactPaths(options, reactOutput);
        const sourceBasename = getIllustrationSourceBasename(reactPaths.componentName);

        const pngDir = path.resolve(pngOutput, getDirname(options));
        fs.mkdirSync(pngDir, { recursive: true });
        fs.writeFileSync(path.resolve(pngDir, `${sourceBasename}.png`), png);

        fs.mkdirSync(reactPaths.assetsPath, { recursive: true });
        fs.writeFileSync(reactPaths.assetPath, png);
        fs.writeFileSync(
          reactPaths.componentPath,
          buildIllustrationComponentSource(reactPaths.componentName),
        );

        indexExports.push(reactPaths.exportLine);
      }
    }

    const illustrationDir = path.resolve(reactOutput, 'Illustration');
    fs.mkdirSync(illustrationDir, { recursive: true });
    fs.writeFileSync(
      path.join(illustrationDir, 'index.ts'),
      `${[...new Set(indexExports)].sort().join('\n')}\n`,
    );
  };
