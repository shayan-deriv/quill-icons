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
export const LabelPairedPenCircleBoldIcon = (
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
        d='M14.5 12c0-1.188-.292-2.27-.875-3.25-.563-.98-1.354-1.77-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875c-1.02.604-1.813 1.396-2.375 2.375-.583.98-.875 2.063-.875 3.25 0 1.188.292 2.27.875 3.25.563.98 1.354 1.77 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875c1.02-.604 1.813-1.396 2.375-2.375.583-.98.875-2.063.875-3.25ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm11.188-3.625.437.438c.25.25.375.541.375.874 0 .334-.125.636-.375.907l-.656.656L8.75 9.031l.656-.656c.271-.25.563-.375.875-.375.334 0 .636.125.906.375ZM4.75 13.031 8.031 9.75l2.219 2.219-3.281 3.281a.933.933 0 0 1-.469.25l-1.875.469a.476.476 0 0 1-.469-.125.476.476 0 0 1-.125-.469L4.5 13.5a.933.933 0 0 1 .25-.469Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleBoldIcon);
export default ForwardRef;
