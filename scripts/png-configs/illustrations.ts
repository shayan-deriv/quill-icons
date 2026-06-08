import { ComponentOutputterParamOption } from '@figma-export/types';
import { SVGR_COMPONENT_OUT_PUT_PATH, PNG_OUT_PUT_PATH } from '../utils/figma.constants';
import { getDirName, getFileDescriptor, isMd, makeVariableName } from '../utils/figma.utils';
import * as FigmaExport from '@figma-export/types';
import { pascalCase } from '@figma-export/utils';

function getVarNameByFileDC(fileDescriptor: ReturnType<typeof getFileDescriptor>) {
  const names: Array<string | undefined> = [];
  const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<keyof typeof fileDescriptor>;
  fileDescriptorKeys.forEach((key) => {
    if (fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key]) && key !== 'category') {
      names.push(fileDescriptor[key]);
    }
  });

  const joinedNames = names.join('_');
  const variableName = makeVariableName(joinedNames);
  return variableName;
}

export const getIllustrationComponentName = (
  options: FigmaExport.ComponentOutputterParamOption,
) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}Icon`;
};

export const ILLUSTRATION_PNG_SCALE = 2;

export const IllustrationPngOutputConfig = {
  pngOutput: PNG_OUT_PUT_PATH,
  reactOutput: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: getDirName,
  getBasename: (options: ComponentOutputterParamOption) =>
    `${getIllustrationComponentName(options).replace(/Icon$/, '')}.png`,
  getSourceBasename: (options: ComponentOutputterParamOption) => {
    const componentName = getIllustrationComponentName(options);
    return `Illustration${componentName.replace(/Icon$/, '')}`;
  },
};

/** @deprecated Illustrations are exported as PNG, not SVGR. */
export const IllustrationSvgReactOutPutConfig = {
  output: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: getDirName,
  getFileExtension: () => '.tsx',
  getComponentName: getIllustrationComponentName,
  getComponentFilename: getIllustrationComponentName,
};
