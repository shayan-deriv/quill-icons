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
export const LabelPairedCircleEuroRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm4 .5h.75a3.792 3.792 0 0 1-.031-.469c0-.187.01-.364.031-.531H4c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1.063a3.423 3.423 0 0 1 1.28-1.438A3.359 3.359 0 0 1 8.25 8.5h1.281c.313.02.48.188.5.5-.02.313-.187.48-.5.5H8.25c-.854.02-1.52.354-2 1H9c.313.02.48.188.5.5-.02.313-.188.48-.5.5H5.781a2.184 2.184 0 0 0-.062.531c0 .167.02.323.062.469H9c.313.02.48.188.5.5-.02.313-.188.48-.5.5H6.187c.5.667 1.188 1.02 2.063 1.063h1.281c.313.02.48.187.5.5-.02.291-.187.458-.5.5H8.25c-.73-.021-1.375-.22-1.938-.594a3.415 3.415 0 0 1-1.25-1.469H4c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroRegularIcon);
export default ForwardRef;
