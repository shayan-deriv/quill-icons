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
export const LabelPairedEightBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.5 8.875c-.042 1.208-.49 2.188-1.344 2.938.563.354 1.01.812 1.344 1.374.333.584.5 1.23.5 1.938-.02 1.104-.396 2.02-1.125 2.75-.73.73-1.646 1.104-2.75 1.125h-2.25c-1.104-.02-2.02-.396-2.75-1.125-.73-.73-1.104-1.646-1.125-2.75 0-.708.167-1.354.5-1.938a4.04 4.04 0 0 1 1.344-1.374C.99 11.063.542 10.082.5 8.874c.02-1.104.396-2.02 1.125-2.75.73-.73 1.646-1.104 2.75-1.125h1.25c1.104.02 2.02.396 2.75 1.125.73.73 1.104 1.646 1.125 2.75ZM5.625 12.75h-1.75c-.667.02-1.23.25-1.688.688-.437.458-.666 1.02-.687 1.687.02.667.25 1.23.688 1.688.458.437 1.02.666 1.687.687h2.25c.667-.02 1.23-.25 1.688-.688.437-.458.666-1.02.687-1.687-.02-.667-.25-1.23-.688-1.688-.458-.437-1.02-.666-1.687-.687h-.5Zm0-1.5c.667-.02 1.23-.25 1.688-.688.437-.458.666-1.02.687-1.687-.02-.667-.25-1.23-.688-1.688-.458-.437-1.02-.666-1.687-.687h-1.25c-.667.02-1.23.25-1.688.688-.437.458-.666 1.02-.687 1.687.02.667.25 1.23.688 1.688.458.437 1.02.666 1.687.687h1.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightBoldIcon);
export default ForwardRef;
