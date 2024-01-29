import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const MarketStocksAirbusIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#22ad30a1bdbf5d4fbfc8086e74afb3c4__a)'>
      <path
        fill='#00205B'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M16.764 16.983h-3.317l2.454-4.975h.05l5.517 11.084H26L17.749 6.909H14.25L6 23.092h4.433l1.337-2.71h6.644z'
      />
    </g>
    <defs>
      <clipPath id='22ad30a1bdbf5d4fbfc8086e74afb3c4__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAirbusIcon);
export default ForwardRef;
