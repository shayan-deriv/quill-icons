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
export const StandaloneFloppyDiskBoldIcon = (
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
      d='M9.125 10.25v12.5c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-9.57a.64.64 0 0 0-.195-.47l1.328-1.327c.495.495.742 1.094.742 1.797v9.57c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h9.61c.677 0 1.262.247 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89a32.4 32.4 0 0 1-.04-.04v3.906c-.052.573-.365.886-.938.938h-7.5c-.572-.052-.885-.365-.937-.938V9.625H9.75c-.39.026-.599.234-.625.625Zm3.125-.625v3.125h5.625V9.625H12.25ZM13.5 19c.026-.938.443-1.654 1.25-2.148.833-.47 1.667-.47 2.5 0 .807.494 1.224 1.21 1.25 2.148-.026.938-.443 1.654-1.25 2.148-.833.47-1.667.47-2.5 0-.807-.494-1.224-1.21-1.25-2.148Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskBoldIcon);
export default ForwardRef;
