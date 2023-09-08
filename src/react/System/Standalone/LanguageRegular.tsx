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
export const StandaloneLanguageRegularIcon = (
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
      d='M15.375 10.25H6c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h9.375v-12.5Zm1.25 0v12.5H26c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-10c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352h-9.375ZM28.5 11.5v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H6c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10c.026-.703.273-1.29.742-1.758C4.711 9.273 5.297 9.026 6 9h20c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758Zm-18.164 1.64 2.5 6.25c.104.365-.013.639-.352.82-.364.105-.638-.012-.82-.35l-.351-.86H8.187l-.351.86c-.182.338-.456.455-.82.35-.339-.181-.456-.455-.352-.82l2.5-6.25c.13-.26.326-.39.586-.39.26 0 .456.13.586.39Zm-.586 1.915L8.656 17.75h2.188L9.75 15.055Zm13.125-1.68V14h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-.195l-.157.469a7.94 7.94 0 0 1-1.718 2.695l.39.234.742.43c.313.235.391.521.235.86-.235.312-.521.39-.86.234l-.742-.469a4.444 4.444 0 0 1-.742-.469 6.626 6.626 0 0 1-1.015.625l-.665.313c-.364.13-.638.039-.82-.274-.156-.364-.065-.638.274-.82l.664-.351c.208-.105.416-.222.625-.352l-.82-.82c-.235-.287-.235-.573 0-.86.286-.26.572-.26.859 0l.898.86.04.039a6.504 6.504 0 0 0 1.484-2.305v-.039h-4.727c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h2.5v-.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLanguageRegularIcon);
export default ForwardRef;
