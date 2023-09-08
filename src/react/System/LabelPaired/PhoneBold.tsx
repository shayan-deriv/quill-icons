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
export const LabelPairedPhoneBoldIcon = (
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
        d='m11.75 12.594 3.5 1.5c.27.125.48.323.625.594.125.25.156.53.094.843l-.75 3.5c-.167.604-.573.927-1.219.969h-.563l-.937-.063c-2.375-.291-4.5-1.072-6.375-2.343a14.028 14.028 0 0 1-4.438-4.938C.583 10.656.022 8.437 0 6c.042-.646.375-1.052 1-1.219l3.5-.75c.292-.062.563-.02.813.125.27.125.468.323.593.594l1.5 3.5c.209.563.084 1.052-.375 1.469l-1.25 1.031a9.55 9.55 0 0 0 3.469 3.469l1.031-1.25c.417-.459.906-.584 1.469-.375Zm2.063 5.906.656-3.094-3.125-1.344-.938 1.126c-.25.27-.541.437-.875.5A1.389 1.389 0 0 1 8.5 15.53 11.325 11.325 0 0 1 4.469 11.5a1.55 1.55 0 0 1-.157-1c.063-.354.23-.656.5-.906l1.125-.906L4.595 5.53 1.5 6.22c.063 2.27.646 4.323 1.75 6.156a12.23 12.23 0 0 0 4.375 4.375c1.833 1.104 3.896 1.688 6.188 1.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneBoldIcon);
export default ForwardRef;
