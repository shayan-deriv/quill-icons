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
export const LabelPairedCircleFiveRegularIcon = (
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
        d='M8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.937 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19a7.203 7.203 0 0 0 3.5-.938 7.191 7.191 0 0 0 2.563-2.562 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.937 7.204 7.204 0 0 0 8 5Zm0 15c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062ZM6.5 8H10c.313.02.48.188.5.5-.02.313-.188.48-.5.5H6.906l-.531 2.063 2.5.25c.625.083 1.135.333 1.531.75.375.437.573.968.594 1.593-.02.667-.25 1.219-.688 1.656-.437.438-.99.667-1.656.688H7.281c-.916-.02-1.635-.396-2.156-1.125l-.031-.094c-.146-.27-.104-.5.125-.687.27-.146.5-.104.687.125l.063.094c.312.437.75.666 1.312.687h1.375c.375 0 .688-.135.938-.406.27-.25.406-.563.406-.938 0-.354-.115-.656-.344-.906-.229-.25-.52-.396-.875-.438L5.687 12a.478.478 0 0 1-.343-.219.468.468 0 0 1-.063-.406l.75-3c.063-.23.219-.354.469-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveRegularIcon);
export default ForwardRef;
