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
export const LabelPairedCircleTwoRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.937 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19a7.203 7.203 0 0 0 3.5-.938 7.191 7.191 0 0 0 2.563-2.562 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.937 7.204 7.204 0 0 0 8 5Zm0 15c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062ZM6.781 9.437l-.437.438c-.25.188-.49.177-.719-.031-.188-.25-.177-.49.031-.719l.438-.406A2.633 2.633 0 0 1 7.937 8c.73.042 1.334.302 1.813.781.48.5.73 1.115.75 1.844 0 .708-.25 1.323-.75 1.844L7.219 15H10.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H6a.575.575 0 0 1-.469-.313.498.498 0 0 1 .125-.53l3.375-3.376a1.64 1.64 0 0 0 .469-1.156c-.02-.458-.177-.833-.469-1.125-.291-.313-.666-.48-1.125-.5a1.59 1.59 0 0 0-1.125.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoRegularIcon);
export default ForwardRef;
