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
export const StandaloneVideoRegularIcon = (
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
      d='M7.25 10.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h10c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-10c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352h-10Zm-2.5 1.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h10c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10Zm20.273 11.055L21 20.328v-1.406l4.648 2.539c.026.026.066.039.118.039.13 0 .208-.078.234-.234v-9.532a.276.276 0 0 0-.234-.234c-.052 0-.091.013-.118.04L21 14.077v-1.406l4.023-2.227c.235-.13.482-.195.743-.195.416 0 .768.143 1.054.43.287.286.43.638.43 1.054v9.532c0 .416-.143.768-.43 1.054-.286.287-.638.43-1.054.43-.26 0-.508-.065-.743-.195Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVideoRegularIcon);
export default ForwardRef;
