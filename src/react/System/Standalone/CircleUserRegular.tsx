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
export const StandaloneCircleUserRegularIcon = (
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
      d='M22.094 22.79a8.81 8.81 0 0 0 1.953-2.813c.469-1.068.703-2.227.703-3.477-.026-1.64-.43-3.112-1.21-4.414a8.187 8.187 0 0 0-3.126-3.125C19.112 8.18 17.641 7.776 16 7.75c-1.64.026-3.112.43-4.414 1.21a8.187 8.187 0 0 0-3.125 3.126C7.68 13.388 7.276 14.859 7.25 16.5c0 1.25.234 2.409.703 3.477a8.808 8.808 0 0 0 1.953 2.812c.287-1.12.873-2.031 1.758-2.734.86-.677 1.888-1.029 3.086-1.055h2.5c1.198.026 2.227.378 3.086 1.055.885.703 1.471 1.614 1.758 2.734ZM21 23.687c-.104-.99-.508-1.797-1.21-2.422-.678-.651-1.524-.99-2.54-1.016h-2.5c-1.016.026-1.862.365-2.54 1.016-.702.625-1.106 1.432-1.21 2.422 1.458 1.015 3.125 1.536 5 1.562 1.875-.026 3.542-.547 5-1.563ZM16 26.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm0-10c.703-.026 1.25-.338 1.64-.938.313-.624.313-1.25 0-1.874-.39-.6-.937-.912-1.64-.938-.703.026-1.25.338-1.64.938-.313.624-.313 1.25 0 1.874.39.6.937.912 1.64.938Zm-3.125-1.875c.026-1.172.547-2.07 1.563-2.695 1.041-.573 2.083-.573 3.124 0 1.016.625 1.537 1.523 1.563 2.695-.026 1.172-.547 2.07-1.563 2.695-1.041.573-2.083.573-3.125 0-1.015-.625-1.536-1.523-1.562-2.695Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleUserRegularIcon);
export default ForwardRef;
