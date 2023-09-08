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
export const StandalonePercentRegularIcon = (
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
      d='M11 10.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352ZM11 14c-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5C9.346 9.443 10.062 9.026 11 9c.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25Zm10 6.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352ZM21 24c-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5.494-.807 1.21-1.224 2.148-1.25.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25Zm2.305-13.945-13.75 13.75c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l13.75-13.75c.287-.26.573-.26.86 0 .26.287.26.573 0 .86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePercentRegularIcon);
export default ForwardRef;
