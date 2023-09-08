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
export const StandaloneChevronDownRegularIcon = (
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
      d='M16.43 21.93c-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L16 20.602l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.5 7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronDownRegularIcon);
export default ForwardRef;
