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
export const LabelPairedShieldCheckBoldIcon = (
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
        d='M2.281 7.969c-.187.104-.281.24-.281.406 0 .98.167 2.104.5 3.375.333 1.25.917 2.48 1.75 3.688.854 1.187 2.042 2.166 3.563 2.937.125.042.25.042.375 0 1.52-.77 2.708-1.75 3.562-2.938.833-1.208 1.417-2.437 1.75-3.687.333-1.27.5-2.396.5-3.375 0-.167-.094-.302-.281-.406L8 5.53 2.281 7.97Zm12.031-1.375c.355.146.636.375.844.687a1.8 1.8 0 0 1 .344 1.094c.02 1.063-.156 2.313-.531 3.75-.375 1.438-1.052 2.833-2.031 4.188-.959 1.375-2.334 2.51-4.126 3.406-.541.25-1.083.25-1.624 0-1.792-.896-3.167-2.032-4.125-3.407-.98-1.354-1.657-2.75-2.032-4.187C.656 10.687.48 9.437.5 8.375a1.8 1.8 0 0 1 .344-1.094c.208-.312.49-.541.844-.687l5.906-2.5A.896.896 0 0 1 8 4c.146 0 .281.031.406.094l5.906 2.5ZM9.75 10.5c-.042.73-.375 1.26-1 1.594v2.156c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-2.156c-.625-.334-.958-.865-1-1.594.02-.5.188-.917.5-1.25.333-.313.75-.48 1.25-.5.5.02.917.188 1.25.5.313.333.48.75.5 1.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckBoldIcon);
export default ForwardRef;
