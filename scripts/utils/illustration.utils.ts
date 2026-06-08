import path from 'node:path';
import { getIllustrationComponentName } from '../png-configs/illustrations';
import type { ComponentOutputterParamOption } from '@figma-export/types';

export const ILLUSTRATION_ASSETS_SUBDIR = 'assets';

/** Component filename without trailing `Icon` (e.g. DerivLightWalletIcon → DerivLightWallet). */
export const getIllustrationAssetBasename = (componentName: string) =>
  componentName.replace(/Icon$/, '');

/** SVG/PNG basename in `svg/` and `png/` (e.g. IllustrationDerivLightWallet). */
export const getIllustrationSourceBasename = (componentName: string) =>
  `Illustration${getIllustrationAssetBasename(componentName)}`;

export const getIllustrationAssetFilename = (componentName: string) =>
  `${getIllustrationAssetBasename(componentName)}.png`;

export const getIllustrationAssetImportPath = (componentName: string) =>
  `./${ILLUSTRATION_ASSETS_SUBDIR}/${getIllustrationAssetFilename(componentName)}`;

export const buildIllustrationComponentSource = (componentName: string) => {
  const assetImportPath = getIllustrationAssetImportPath(componentName);
  return `import * as React from 'react';
import type { QuillIllustrationProps } from '../../types';
import { Ref, forwardRef } from 'react';
import illustrationSrc from '${assetImportPath}';

const ${componentName} = (
  { title, titleId, alt, ...props }: QuillIllustrationProps,
  ref: Ref<HTMLImageElement>,
) => (
  <img
    src={illustrationSrc}
    ref={ref}
    role='img'
    alt={alt ?? title ?? ''}
    aria-labelledby={titleId}
    {...props}
  />
);
const ForwardRef = forwardRef(${componentName});
export default ForwardRef;
`;
};

export const getIllustrationReactPaths = (
  options: ComponentOutputterParamOption,
  reactOutput: string,
) => {
  const componentName = getIllustrationComponentName(options);
  const dirPath = path.resolve(reactOutput, 'Illustration');
  const assetsPath = path.join(dirPath, ILLUSTRATION_ASSETS_SUBDIR);
  return {
    componentName,
    dirPath,
    assetsPath,
    componentPath: path.join(dirPath, `${componentName}.tsx`),
    assetPath: path.join(assetsPath, getIllustrationAssetFilename(componentName)),
    exportLine: `export { default as ${componentName} } from './${componentName}';`,
  };
};
