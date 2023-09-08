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
export const LabelPairedMoneyBillRegularIcon = (
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
        d='M15 7c.02.563.219 1.031.594 1.406S16.438 8.98 17 9V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 16 7h-1Zm-1 0H4c-.02.854-.313 1.563-.875 2.125-.563.563-1.27.854-2.125.875v4c.854.02 1.563.313 2.125.875.563.563.854 1.27.875 2.125h10c.02-.854.313-1.563.875-2.125.563-.563 1.27-.854 2.125-.875v-4c-.854-.02-1.563-.313-2.125-.875-.563-.563-.854-1.27-.875-2.125ZM1 16c0 .292.094.531.281.719A.974.974 0 0 0 2 17h1c-.02-.563-.219-1.031-.594-1.406S1.562 15.02 1 15v1Zm16-1c-.563.02-1.031.219-1.406.594S15.02 16.438 15 17h1a.974.974 0 0 0 .719-.281A.974.974 0 0 0 17 16v-1ZM2 7a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v1c.563-.02 1.031-.219 1.406-.594S2.98 7.562 3 7H2ZM0 8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6h14c.563.02 1.031.219 1.406.594S17.98 7.437 18 8v8c-.02.563-.219 1.031-.594 1.406S16.563 17.98 16 18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8Zm11 4c-.02-.75-.354-1.323-1-1.719-.667-.375-1.333-.375-2 0-.646.396-.98.969-1 1.719.02.75.354 1.323 1 1.719.667.375 1.333.375 2 0 .646-.396.98-.969 1-1.719Zm-5 0c0-.542.135-1.042.406-1.5A3.007 3.007 0 0 1 9 9a3.007 3.007 0 0 1 2.594 1.5c.27.458.406.958.406 1.5s-.135 1.042-.406 1.5A3.007 3.007 0 0 1 9 15a3.007 3.007 0 0 1-2.594-1.5A2.895 2.895 0 0 1 6 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillRegularIcon);
export default ForwardRef;
