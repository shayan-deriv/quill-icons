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
export const StandaloneBellSlashBoldIcon = (
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
      d='m5.023 6.695 5.665 4.453c.937-1.484 2.291-2.382 4.062-2.695V7.75c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898v.703c1.458.26 2.643.925 3.555 1.992.937 1.068 1.419 2.357 1.445 3.867v1.29a7.908 7.908 0 0 0 1.719 4.882l.586.743c.208.286.26.585.156.898l3.437 2.695c.417.39.47.834.157 1.328-.39.417-.834.47-1.328.157L3.852 8.18c-.417-.39-.47-.834-.157-1.328.39-.417.834-.47 1.328-.157Zm7.149 5.586 8.945 7.031a9.443 9.443 0 0 1-.742-3.71v-1.29c-.026-1.145-.417-2.109-1.172-2.89-.781-.755-1.745-1.146-2.89-1.172h-.626c-.755 0-1.445.182-2.07.547a4.145 4.145 0 0 0-1.445 1.484Zm7.187 10.469H8.187a.991.991 0 0 1-.859-.547 1.014 1.014 0 0 1 .117-.976l.586-.743c1.12-1.432 1.693-3.047 1.719-4.843v-.47l1.836 1.446a9.982 9.982 0 0 1-1.524 4.258h6.915l2.382 1.875ZM18.5 24c0 .677-.247 1.263-.742 1.758-.495.495-1.08.742-1.758.742-.677 0-1.263-.247-1.758-.742-.495-.495-.742-1.08-.742-1.758h5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellSlashBoldIcon);
export default ForwardRef;
