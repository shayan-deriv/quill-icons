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
export const StandaloneCircleArrowUpRightRegularIcon = (
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
      d='M16 25.25c1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C19.047 8.167 17.588 7.776 16 7.75c-1.588.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C7.64 13.505 7.25 14.963 7.25 16.5s.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.787 1.146 4.375 1.172ZM16 6.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328Zm-2.188 6.25h5.313c.39.026.599.234.625.625V19c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-4.102l-5.195 5.157c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L17.602 14h-3.79c-.39-.026-.598-.234-.624-.625.025-.39.234-.599.624-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowUpRightRegularIcon);
export default ForwardRef;
