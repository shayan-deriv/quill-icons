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
export const StandaloneWifiBoldIcon = (
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
      d='M5.063 13.766c-.47.338-.912.312-1.329-.079-.338-.468-.312-.911.079-1.328a18.396 18.396 0 0 1 5.546-3.398C11.443 8.154 13.656 7.75 16 7.75c2.344 0 4.557.404 6.64 1.21a18.396 18.396 0 0 1 5.547 3.4c.391.416.417.859.079 1.328-.417.39-.86.416-1.328.078a16.315 16.315 0 0 0-5-3.047c-1.85-.73-3.829-1.094-5.938-1.094-2.11 0-4.088.365-5.938 1.094a16.315 16.315 0 0 0-5 3.047ZM16 16.5c-2.578.052-4.766.898-6.563 2.54-.442.364-.885.35-1.328-.04-.338-.469-.312-.912.079-1.328a11.22 11.22 0 0 1 3.554-2.227 11.071 11.071 0 0 1 4.258-.82c1.51 0 2.93.273 4.258.82a11.22 11.22 0 0 1 3.555 2.227c.39.416.416.86.078 1.328-.443.39-.886.404-1.328.04-1.797-1.642-3.985-2.488-6.563-2.54Zm2.188 6.563c-.026.833-.391 1.458-1.094 1.875-.73.416-1.459.416-2.188 0-.703-.417-1.068-1.042-1.094-1.875.027-.834.391-1.459 1.094-1.875.73-.417 1.459-.417 2.188 0 .703.416 1.067 1.041 1.093 1.875Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWifiBoldIcon);
export default ForwardRef;
