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
export const StandaloneMoonRegularIcon = (
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
      d='M15.96 9.117c-1.796.339-3.267 1.185-4.413 2.54-1.172 1.327-1.771 2.942-1.797 4.843.052 2.135.781 3.906 2.188 5.313 1.406 1.406 3.177 2.135 5.312 2.187a7.727 7.727 0 0 0 3.672-.977c-2.136-.208-3.893-1.067-5.274-2.578-1.38-1.484-2.096-3.32-2.148-5.508 0-1.145.221-2.213.664-3.203a7.347 7.347 0 0 1 1.797-2.617Zm2.58-.86c.051.313-.053.548-.313.704a7.176 7.176 0 0 0-2.54 2.46c-.624 1.043-.937 2.214-.937 3.517.052 1.953.716 3.567 1.992 4.843 1.302 1.302 2.917 1.98 4.844 2.032.417 0 .807-.04 1.172-.118.312-.026.534.091.664.352.13.26.091.508-.117.742-1.615 1.589-3.633 2.409-6.055 2.461-1.64-.026-3.112-.43-4.414-1.21a8.187 8.187 0 0 1-3.125-3.126C8.93 19.612 8.526 18.141 8.5 16.5c.026-1.64.417-3.112 1.172-4.414a8.473 8.473 0 0 1 3.164-3.125c1.302-.781 2.76-1.185 4.375-1.211.26 0 .508.013.742.04.313.025.508.181.586.468Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoonRegularIcon);
export default ForwardRef;
