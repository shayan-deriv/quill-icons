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
export const LabelPairedCircleStarRegularIcon = (
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
        d='M8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.937 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19a7.203 7.203 0 0 0 3.5-.938 7.191 7.191 0 0 0 2.563-2.562 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.937 7.204 7.204 0 0 0 8 5Zm0 15c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062Zm.438-12.469 1.156 2.282 2.531.374a.562.562 0 0 1 .406.344.625.625 0 0 1-.125.531l-1.844 1.782.438 2.5a.522.522 0 0 1-.219.5.482.482 0 0 1-.5.031L8 14.687l-2.25 1.188a.537.537 0 0 1-.531-.031.522.522 0 0 1-.219-.5l.438-2.5-1.813-1.813a.457.457 0 0 1-.125-.5.485.485 0 0 1 .375-.344l2.531-.374L7.563 7.53A.442.442 0 0 1 8 7.25c.208 0 .354.094.438.281ZM7.188 10.5a.574.574 0 0 1-.375.281l-1.782.25 1.282 1.281c.125.126.177.271.156.438l-.313 1.781 1.594-.844a.47.47 0 0 1 .469 0l1.625.844-.313-1.781a.549.549 0 0 1 .125-.438l1.313-1.28-1.781-.25c-.188-.042-.313-.136-.376-.282L8 8.875 7.187 10.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarRegularIcon);
export default ForwardRef;
