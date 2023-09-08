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
export const LabelPairedForwardFillIcon = (
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
        d='M1.656 17.781c-.333.25-.698.292-1.093.125C.208 17.72.02 17.416 0 17V7c.02-.417.208-.719.563-.906.395-.167.76-.125 1.093.125L7 10.687v2.626L1.656 17.78ZM8 15V7c.02-.417.208-.719.563-.906.395-.167.76-.125 1.093.125l6 5c.23.208.344.469.344.781 0 .313-.115.573-.344.781l-6 5c-.333.25-.698.292-1.094.125-.354-.187-.541-.49-.562-.906v-2Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardFillIcon);
export default ForwardRef;
