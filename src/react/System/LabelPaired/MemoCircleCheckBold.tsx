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
export const LabelPairedMemoCircleCheckBoldIcon = (
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
        d='M2 5.5c-.313.02-.48.188-.5.5v12c.02.313.188.48.5.5h6.875a5.674 5.674 0 0 0 1.438 1.469c-.105.02-.209.031-.313.031H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.563.219-1.031.594-1.406S1.438 4.02 2 4h8c.563.02 1.031.219 1.406.594S11.98 5.437 12 6v4.219a4.909 4.909 0 0 0-1.5.687V6c-.02-.313-.188-.48-.5-.5H2ZM3.75 8h4.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Zm0 3h4.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Zm0 3h1.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-1.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75ZM18 15.5a4.43 4.43 0 0 1-.594 2.25 4.51 4.51 0 0 1-1.656 1.656A4.543 4.543 0 0 1 13.5 20a4.543 4.543 0 0 1-2.25-.594 4.51 4.51 0 0 1-1.656-1.656A4.431 4.431 0 0 1 9 15.5c0-.813.198-1.563.594-2.25a4.51 4.51 0 0 1 1.656-1.656A4.543 4.543 0 0 1 13.5 11c.792 0 1.542.198 2.25.594a4.51 4.51 0 0 1 1.656 1.656A4.43 4.43 0 0 1 18 15.5Zm-2.406-1.344c-.23-.208-.459-.208-.688 0L13 16.031l-.906-.875c-.23-.208-.459-.208-.688 0-.208.23-.208.459 0 .688l1.25 1.25c.23.208.459.208.688 0l2.25-2.25c.208-.23.208-.459 0-.688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckBoldIcon);
export default ForwardRef;
