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
export const StandaloneUnlockRegularIcon = (
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
      d='M12.25 11.5V14h9.375c.885.026 1.628.325 2.227.898.572.6.872 1.342.898 2.227v6.25c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-11.25c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227v-6.25c.026-.885.326-1.628.898-2.227.6-.572 1.342-.872 2.227-.898H11v-2.5c.026-1.406.508-2.591 1.445-3.555C13.41 7.008 14.594 6.526 16 6.5c1.146.026 2.148.365 3.008 1.016.86.65 1.458 1.51 1.797 2.578.078.364-.065.612-.43.742-.39.078-.651-.052-.781-.39a3.671 3.671 0 0 0-1.328-1.954c-.651-.469-1.407-.716-2.266-.742-1.068.026-1.953.39-2.656 1.094-.703.703-1.068 1.588-1.094 2.656ZM8.5 17.125v6.25c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h11.25c.52-.026.963-.208 1.328-.547.339-.364.521-.807.547-1.328v-6.25a2.038 2.038 0 0 0-.547-1.328 2.038 2.038 0 0 0-1.328-.547h-11.25c-.52.026-.964.208-1.328.547-.339.364-.521.807-.547 1.328Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUnlockRegularIcon);
export default ForwardRef;
