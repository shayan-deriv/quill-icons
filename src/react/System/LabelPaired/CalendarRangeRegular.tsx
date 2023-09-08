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
export const LabelPairedCalendarRangeRegularIcon = (
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
        d='M4.5 4c.313.02.48.188.5.5V6h6V4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V6h1c.563.02 1.031.219 1.406.594S14.98 7.437 15 8v10c-.02.563-.219 1.031-.594 1.406S13.562 19.98 13 20H3c-.563-.02-1.031-.219-1.406-.594S1.02 18.563 1 18V8c.02-.563.219-1.031.594-1.406S2.437 6.02 3 6h1V4.5c.02-.313.188-.48.5-.5Zm9.5 6H2v8c0 .292.094.531.281.719A.974.974 0 0 0 3 19h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 14 18v-8Zm-1-3H3a.973.973 0 0 0-.719.281A.973.973 0 0 0 2 8v1h12V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 13 7Zm0 5.5c-.02.313-.188.48-.5.5h-5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h5c.313.02.48.188.5.5ZM8.5 17h-5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h5c.313.02.48.188.5.5-.02.313-.188.48-.5.5ZM4 12.5c.02.313.188.48.5.5.313-.02.48-.188.5-.5-.02-.313-.188-.48-.5-.5-.313.02-.48.188-.5.5Zm.5 1.5c-.563-.02-1-.27-1.313-.75-.25-.5-.25-1 0-1.5.313-.48.75-.73 1.313-.75.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75Zm7 3c.313-.02.48-.188.5-.5-.02-.313-.188-.48-.5-.5-.313.02-.48.188-.5.5.02.313.188.48.5.5Zm1.5-.5c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0-.48-.313-.73-.75-.75-1.313.02-.563.27-1 .75-1.313.5-.25 1-.25 1.5 0 .48.313.73.75.75 1.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeRegularIcon);
export default ForwardRef;
