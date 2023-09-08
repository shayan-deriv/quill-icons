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
export const StandaloneHorizontalRuleDashedBoldIcon = (
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
      d='M3.5 16.5c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleDashedBoldIcon);
export default ForwardRef;
