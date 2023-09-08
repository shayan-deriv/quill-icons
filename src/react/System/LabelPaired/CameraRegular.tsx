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
export const LabelPairedCameraRegularIcon = (
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
        d='M5.969 5h4.062c.688.042 1.167.385 1.438 1.031L11.78 7H14c.563.02 1.031.219 1.406.594S15.98 8.437 16 9v8c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V9c.02-.563.219-1.031.594-1.406S1.438 7.02 2 7h2.219l.343-.969c.25-.646.72-.99 1.407-1.031ZM5.5 6.344l-.438 1.312A.519.519 0 0 1 4.595 8H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 9v8c0 .292.094.531.281.719A.974.974 0 0 0 2 18h12a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 17V9a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 8h-2.594a.519.519 0 0 1-.469-.344L10.5 6.344A.519.519 0 0 0 10.031 6H5.97a.519.519 0 0 0-.469.344ZM8 16.5a3.443 3.443 0 0 1-1.75-.469 3.436 3.436 0 0 1-1.281-1.281A3.444 3.444 0 0 1 4.5 13c0-.625.156-1.208.469-1.75.312-.542.74-.969 1.281-1.281A3.443 3.443 0 0 1 8 9.5c.625 0 1.208.156 1.75.469.542.312.969.74 1.281 1.281.313.542.469 1.125.469 1.75s-.156 1.208-.469 1.75c-.312.542-.74.969-1.281 1.281A3.443 3.443 0 0 1 8 16.5ZM5.5 13c.02.938.438 1.656 1.25 2.156.833.459 1.667.459 2.5 0 .813-.5 1.23-1.219 1.25-2.156-.02-.938-.438-1.656-1.25-2.156-.833-.459-1.667-.459-2.5 0-.813.5-1.23 1.219-1.25 2.156Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraRegularIcon);
export default ForwardRef;
