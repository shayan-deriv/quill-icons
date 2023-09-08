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
export const StandaloneLocationDotBoldIcon = (
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
      d='M21.625 14c-.052-1.588-.599-2.917-1.64-3.984C18.916 8.974 17.588 8.427 16 8.375c-1.588.052-2.917.599-3.984 1.64-1.042 1.068-1.589 2.396-1.641 3.985 0 .495.195 1.237.586 2.227a26.69 26.69 0 0 0 1.68 3.125 76.314 76.314 0 0 0 1.718 2.617A59.53 59.53 0 0 0 16 24.156a59.53 59.53 0 0 0 1.64-2.187 37.852 37.852 0 0 0 1.72-2.617 26.69 26.69 0 0 0 1.68-3.125c.39-.99.585-1.732.585-2.227Zm1.875 0c-.052 1.172-.469 2.526-1.25 4.063a39.272 39.272 0 0 1-2.734 4.453c-1.016 1.458-1.875 2.617-2.578 3.476-.26.313-.573.469-.938.469s-.677-.156-.938-.469c-.703-.86-1.562-2.018-2.578-3.476a39.272 39.272 0 0 1-2.734-4.453C8.969 16.526 8.552 15.171 8.5 14c.052-2.135.781-3.906 2.188-5.313C12.094 7.282 13.864 6.553 16 6.5c2.135.052 3.906.781 5.313 2.188 1.406 1.406 2.135 3.177 2.187 5.312Zm-6.25 0c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352s-.664.117-.898.352c-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898Zm-4.375 0c.026-1.172.547-2.07 1.563-2.695 1.041-.573 2.083-.573 3.124 0 1.016.625 1.537 1.523 1.563 2.695-.026 1.172-.547 2.07-1.563 2.695-1.041.573-2.083.573-3.125 0-1.015-.625-1.536-1.523-1.562-2.695Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationDotBoldIcon);
export default ForwardRef;
