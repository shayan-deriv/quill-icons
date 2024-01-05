import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneRedditIcon = (
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
    <path d='M13.89 18.453c-.598-.078-.924-.404-.976-.976.052-.6.378-.925.977-.977.572.052.885.378.937.977-.052.572-.364.898-.937.976M25.689 16.5c-.026 1.797-.47 3.424-1.329 4.883a9.672 9.672 0 0 1-3.476 3.476c-1.459.86-3.086 1.302-4.883 1.328-1.797-.026-3.424-.468-4.883-1.328a9.672 9.672 0 0 1-3.476-3.476c-.86-1.459-1.302-3.086-1.328-4.883.026-1.797.468-3.424 1.328-4.883a9.672 9.672 0 0 1 3.476-3.476c1.458-.86 3.086-1.302 4.883-1.328 1.797.026 3.424.468 4.883 1.328a9.672 9.672 0 0 1 3.476 3.476c.86 1.458 1.302 3.086 1.328 4.883m-5.157-1.602c-.39 0-.703.13-.937.391-.912-.625-2.032-.976-3.36-1.055l.664-3.046 2.188.468c.052.6.365.925.937.977.6-.052.925-.378.977-.977-.052-.599-.378-.924-.977-.976a.991.991 0 0 0-.859.547l-2.383-.547c-.13 0-.221.065-.273.195l-.742 3.36c-1.328.078-2.448.43-3.36 1.054-.234-.26-.547-.39-.937-.39-.677.052-1.094.377-1.25.976-.13.599.104 1.094.703 1.484a2.124 2.124 0 0 0-.078.586c.052 1.068.56 1.94 1.523 2.617.964.704 2.175 1.068 3.633 1.094 1.458-.026 2.682-.39 3.672-1.093.963-.678 1.471-1.55 1.523-2.618 0-.208-.026-.416-.078-.625.573-.364.794-.846.664-1.445-.156-.599-.573-.925-1.25-.977m-2.695 4.532c-.417.364-1.029.547-1.836.547-.807-.026-1.42-.209-1.836-.547-.104-.078-.208-.078-.312 0-.105.13-.105.247 0 .351.52.443 1.236.664 2.148.664.912 0 1.628-.221 2.148-.664.105-.104.105-.221 0-.351-.104-.078-.208-.078-.312 0m.312-2.93c-.599.052-.924.378-.976.977.052.572.377.898.976.976.573-.078.886-.404.938-.976-.052-.6-.365-.925-.938-.977' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRedditIcon);
export default ForwardRef;
