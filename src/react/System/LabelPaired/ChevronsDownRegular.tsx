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
export const LabelPairedChevronsDownRegularIcon = (
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
        d='M1.656 6.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L8 11.281l5.656-5.625c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-6 6c-.23.208-.459.208-.688 0l-6-6Zm0 6c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L8 17.281l5.656-5.625c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-6 6c-.23.208-.459.208-.688 0l-6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownRegularIcon);
export default ForwardRef;
