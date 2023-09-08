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
export const StandaloneCopyRegularIcon = (
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
      d='M23.5 20.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-7.969a.52.52 0 0 0-.195-.43l-2.657-2.656a.52.52 0 0 0-.43-.195H17.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h6.25Zm1.953-10.547c.365.365.547.807.547 1.328V19c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-6.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h4.219c.52 0 .963.182 1.328.547l2.656 2.656ZM8.5 11.5h5v1.25h-5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h6.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-1.25h1.25V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.5c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24V14c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCopyRegularIcon);
export default ForwardRef;
