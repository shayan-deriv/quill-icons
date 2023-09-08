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
export const StandaloneLinkedinIcon = (
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
      d='M23.5 7.75c.365 0 .664.117.898.352.235.26.352.56.352.898v15c0 .338-.117.638-.352.898-.234.235-.533.352-.898.352h-15c-.365 0-.664-.117-.898-.352A1.304 1.304 0 0 1 7.25 24V9c0-.339.117-.638.352-.898.234-.235.533-.352.898-.352h15Zm-10.977 15h.04v-8.36H9.944v8.36h2.578Zm-1.289-9.492c.443 0 .795-.143 1.055-.43a1.58 1.58 0 0 0 .469-1.055c-.026-.442-.182-.807-.469-1.093-.26-.287-.612-.43-1.055-.43-.416 0-.768.143-1.054.43-.287.286-.43.65-.43 1.093 0 .417.143.769.43 1.055.286.287.638.43 1.054.43ZM22.25 22.75v-4.57c.052-1.146-.13-2.097-.547-2.852-.416-.729-1.263-1.107-2.539-1.133-.651 0-1.185.143-1.602.43-.416.26-.703.56-.859.898h-.039v-1.132h-2.5v8.359h2.617v-4.14c-.026-.573.052-1.068.235-1.485.208-.417.638-.638 1.289-.664.65.052 1.041.3 1.172.742.156.469.22.964.195 1.485v4.062h2.578Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLinkedinIcon);
export default ForwardRef;
