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
export const StandaloneCircleArrowUpBoldIcon = (
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
      d='M16 8.375c-1.484 0-2.838.365-4.063 1.094-1.223.703-2.213 1.693-2.968 2.969A8.062 8.062 0 0 0 7.875 16.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094 1.484 0 2.838-.365 4.063-1.094 1.224-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.063c-.755-1.275-1.744-2.265-2.968-2.968-1.224-.73-2.579-1.094-4.063-1.094ZM16 26.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm4.102-11.29c.364.444.364.886 0 1.33-.443.364-.886.364-1.329 0l-1.835-1.837v5.86c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-5.859l-1.835 1.836c-.443.365-.886.365-1.329 0-.364-.443-.364-.885 0-1.328l3.438-3.438c.443-.364.885-.364 1.328 0l3.438 3.438Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowUpBoldIcon);
export default ForwardRef;
