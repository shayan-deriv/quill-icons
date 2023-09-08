import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, SvgSize } from 'types';
const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};
export const StandaloneFileChartColumnBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M10.375 24c.026.39.234.599.625.625h10c.39-.026.599-.234.625-.625V12.75H18.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V8.375H11c-.39.026-.599.234-.625.625v15ZM11 6.5h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H11c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm5.938 10.938v5c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-5c.053-.572.365-.885.938-.937.573.052.885.365.938.938Zm3.437 1.25v3.75c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-3.75c.052-.572.365-.885.938-.937.572.052.885.365.937.938Zm-6.875 1.25v2.5c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-2.5c.052-.572.365-.885.938-.937.572.052.885.365.937.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileChartColumnBoldIcon);
export default ForwardRef;
