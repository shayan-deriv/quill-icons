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
export const LabelPairedMoonBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.531 7.094a5.399 5.399 0 0 0-2.187 1.968C1.802 9.938 1.52 10.918 1.5 12c.042 1.563.573 2.854 1.594 3.875 1.041 1.042 2.333 1.583 3.875 1.625.416 0 .823-.042 1.218-.125a6.945 6.945 0 0 1-3.374-2.531C3.958 13.677 3.52 12.313 3.5 10.75c0-1.354.344-2.573 1.031-3.656ZM6.47 5.03c.062 0 .135-.01.218-.031h.563c.104 0 .208.01.313.031.25.042.406.167.468.375.042.25-.041.438-.25.563a1.244 1.244 0 0 0-.312.187c-.125.084-.25.177-.375.282h-.032L7 6.5a5.598 5.598 0 0 0-1.469 1.875A5.363 5.363 0 0 0 5 10.75c.042 1.563.573 2.854 1.594 3.875 1.02 1.042 2.312 1.583 3.875 1.625h.125c.166 0 .323-.01.469-.031.124-.021.24-.032.343-.032.25-.041.427.042.531.25.105.209.073.407-.093.594a2.353 2.353 0 0 0-.25.219c-.125.125-.271.24-.438.344l-.062.062a.364.364 0 0 1-.094.063c-1.167.833-2.5 1.26-4 1.281-1.313-.02-2.49-.344-3.531-.969a6.549 6.549 0 0 1-2.5-2.5C.344 14.49.02 13.312 0 12c.042-1.896.667-3.49 1.875-4.781 1.208-1.292 2.74-2.021 4.594-2.188Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonBoldIcon);
export default ForwardRef;
