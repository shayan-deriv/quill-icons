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
export const StandaloneLinkSimpleRegularIcon = (
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
      d='M4.75 16.5c.052-1.77.664-3.242 1.836-4.414C7.758 10.914 9.229 10.302 11 10.25h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H11c-1.406.026-2.591.508-3.555 1.445C6.508 13.91 6.026 15.094 6 16.5c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H11c-1.77-.052-3.242-.664-4.414-1.836-1.172-1.172-1.784-2.643-1.836-4.414Zm22.5 0c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836h-3.125c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H21c1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555-.026-1.406-.508-2.591-1.445-3.555-.964-.937-2.149-1.419-3.555-1.445h-3.125c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H21c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414Zm-16.563-.625h10.626c.39.026.599.234.625.625-.026.39-.235.599-.625.625H10.688c-.391-.026-.6-.234-.626-.625.027-.39.235-.599.626-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLinkSimpleRegularIcon);
export default ForwardRef;
