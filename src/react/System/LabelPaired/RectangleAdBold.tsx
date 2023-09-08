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
export const LabelPairedRectangleAdBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6.5c-.313.02-.48.188-.5.5v10c.02.313.188.48.5.5h14c.313-.02.48-.188.5-.5V7c-.02-.313-.188-.48-.5-.5H2ZM0 7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h14c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v10c-.02.563-.219 1.031-.594 1.406S16.563 18.98 16 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7Zm7.188 2.406 2.25 4.5c.145.438.03.781-.344 1.031-.438.146-.771.032-1-.343l-.188-.344H5.094l-.188.344c-.229.375-.562.479-1 .312-.396-.229-.5-.562-.312-1l2.25-4.5C5.99 9.136 6.208 9 6.5 9c.313 0 .542.135.688.406ZM6.5 11.437l-.656 1.313h1.312L6.5 11.437Zm5.75.563c-.458.042-.708.292-.75.75.042.458.292.708.75.75.458-.042.708-.292.75-.75-.042-.458-.292-.708-.75-.75Zm.75-1.375V9.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v4.5c-.042.458-.292.708-.75.75a.723.723 0 0 1-.531-.219 2.135 2.135 0 0 1-.969.219c-.646-.02-1.177-.24-1.594-.656-.416-.417-.635-.948-.656-1.594.02-.646.24-1.177.656-1.594.417-.416.948-.635 1.594-.656.27 0 .52.042.75.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdBoldIcon);
export default ForwardRef;
