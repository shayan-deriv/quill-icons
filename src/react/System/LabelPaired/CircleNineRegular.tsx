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
export const LabelPairedCircleNineRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm8-3c-.75.02-1.323.354-1.719 1-.375.667-.375 1.333 0 2 .396.646.969.98 1.719 1 .75-.02 1.323-.354 1.719-1 .375-.667.375-1.333 0-2C9.323 9.354 8.75 9.02 8 9Zm-.125 5c-.813-.042-1.49-.344-2.031-.906C5.302 12.53 5.02 11.834 5 11c.02-.854.313-1.563.875-2.125C6.438 8.312 7.145 8.021 8 8c.854.02 1.563.313 2.125.875.563.563.854 1.27.875 2.125-.02.98-.375 1.802-1.063 2.469l-2.593 2.406c-.25.188-.49.177-.719-.031-.188-.25-.177-.49.031-.719L7.875 14Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineRegularIcon);
export default ForwardRef;
