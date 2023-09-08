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
export const LabelPairedPasteRegularIcon = (
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
        d='M4.281 5.594c-.083.25-.25.385-.5.406H3.5c-.313.02-.48.188-.5.5V7h4v-.5c-.02-.313-.188-.48-.5-.5h-.281c-.25-.02-.407-.156-.469-.406C5.646 5.219 5.396 5.02 5 5c-.396.02-.635.219-.719.594ZM5 4c.73.042 1.26.375 1.594 1H8c.563.02 1.031.219 1.406.594S9.98 6.437 10 7H9a.973.973 0 0 0-.281-.719A.973.973 0 0 0 8 6h-.094c.063.167.094.333.094.5V7.063A2.4 2.4 0 0 0 6.5 8H3a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2 7v-.5c0-.167.031-.333.094-.5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v9c0 .292.094.531.281.719A.974.974 0 0 0 2 17h4v1H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h1.406c.334-.625.865-.958 1.594-1Zm9 15a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 18v-6.375a.417.417 0 0 0-.156-.344l-2.125-2.125A.416.416 0 0 0 12.375 9H9a.973.973 0 0 0-.719.281A.973.973 0 0 0 8 10v8c0 .292.094.531.281.719A.974.974 0 0 0 9 19h5Zm1.563-8.438c.291.292.437.646.437 1.063V18c-.02.563-.219 1.031-.594 1.406S14.562 19.98 14 20H9c-.563-.02-1.031-.219-1.406-.594S7.02 18.563 7 18v-8c.02-.563.219-1.031.594-1.406S8.437 8.02 9 8h3.375c.417 0 .77.146 1.063.438l2.124 2.124Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteRegularIcon);
export default ForwardRef;
