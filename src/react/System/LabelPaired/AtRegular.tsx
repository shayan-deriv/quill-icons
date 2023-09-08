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
export const LabelPairedAtRegularIcon = (
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
        d='M8 5c-1.313.02-2.49.344-3.531.969a6.55 6.55 0 0 0-2.5 2.5C1.344 9.51 1.02 10.688 1 12c.02 1.313.344 2.49.969 3.531a6.549 6.549 0 0 0 2.5 2.5C5.51 18.656 6.687 18.98 8 19c.313.02.48.188.5.5-.02.313-.188.48-.5.5-1.5-.02-2.844-.385-4.031-1.094a7.925 7.925 0 0 1-2.875-2.875C.385 14.844.02 13.5 0 12c.02-1.5.385-2.844 1.094-4.031a7.925 7.925 0 0 1 2.875-2.875C5.156 4.385 6.5 4.02 8 4c1.5.02 2.844.385 4.031 1.094a7.925 7.925 0 0 1 2.875 2.875C15.615 9.156 15.98 10.5 16 12v.75c-.02.77-.292 1.417-.813 1.938-.52.52-1.166.791-1.937.812-.52 0-1-.135-1.438-.406a2.567 2.567 0 0 1-.968-1.031c-.688.916-1.636 1.395-2.844 1.437-1-.02-1.823-.365-2.469-1.031C4.865 13.823 4.521 13 4.5 12c.02-1 .365-1.823 1.031-2.469C6.177 8.865 7 8.521 8 8.5c1 .02 1.833.375 2.5 1.063V9.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v3.25c.02.5.188.917.5 1.25.333.313.75.48 1.25.5.5-.02.917-.188 1.25-.5.313-.333.48-.75.5-1.25V12c-.02-1.313-.344-2.49-.969-3.531a6.549 6.549 0 0 0-2.5-2.5C10.49 5.344 9.312 5.02 8 5Zm2.5 7c-.02-.938-.438-1.656-1.25-2.156-.833-.459-1.667-.459-2.5 0-.813.5-1.23 1.219-1.25 2.156.02.938.438 1.656 1.25 2.156.833.459 1.667.459 2.5 0 .813-.5 1.23-1.219 1.25-2.156Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtRegularIcon);
export default ForwardRef;
