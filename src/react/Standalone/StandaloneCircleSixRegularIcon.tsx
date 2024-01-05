import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleSixRegularIcon = (
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
    <path d='M16 7.75c-1.588.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C7.64 13.505 7.25 14.964 7.25 16.5c0 1.537.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.787 1.146 4.375 1.172 1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C19.047 8.167 17.589 7.776 16 7.75m0 18.75c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.411 1.328-5C8.266 9.938 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328m1.719-14.805c.234.313.221.612-.04.899L16.157 14c1.016.052 1.862.43 2.54 1.133.676.703 1.028 1.575 1.054 2.617-.026 1.068-.39 1.953-1.094 2.656-.703.703-1.588 1.068-2.656 1.094-1.068-.026-1.953-.39-2.656-1.094-.703-.703-1.068-1.588-1.094-2.656.026-1.224.469-2.253 1.328-3.086l3.242-3.008c.313-.234.612-.221.899.04M16 15.25c-.937.026-1.654.443-2.148 1.25-.47.833-.47 1.667 0 2.5.494.807 1.21 1.224 2.148 1.25.938-.026 1.654-.443 2.148-1.25.47-.833.47-1.667 0-2.5-.494-.807-1.21-1.224-2.148-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSixRegularIcon);
export default ForwardRef;
