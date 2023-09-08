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
export const LabelPairedEightRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.5 8.75c0 .646-.146 1.24-.438 1.781-.312.542-.718.98-1.218 1.313a3.83 3.83 0 0 1 1.562 1.375c.396.604.594 1.281.594 2.031-.02 1.063-.385 1.948-1.094 2.656-.708.709-1.594 1.073-2.656 1.094h-2.5c-1.063-.02-1.948-.385-2.656-1.094C.385 17.198.02 16.313 0 15.25c0-.75.198-1.427.594-2.031a3.83 3.83 0 0 1 1.562-1.375c-.5-.334-.906-.771-1.219-1.313A3.697 3.697 0 0 1 .5 8.75c.02-1.063.385-1.948 1.094-2.656C2.302 5.385 3.187 5.02 4.25 5h1.5c1.063.02 1.948.385 2.656 1.094.709.708 1.073 1.593 1.094 2.656ZM5.75 12.5h-2c-.77.02-1.417.292-1.938.813-.52.52-.791 1.166-.812 1.937.02.77.292 1.417.813 1.938.52.52 1.166.791 1.937.812h2.5c.77-.02 1.417-.292 1.938-.813.52-.52.791-1.166.812-1.937-.02-.77-.292-1.417-.813-1.938-.52-.52-1.166-.791-1.937-.812h-.5Zm0-1c.77-.02 1.417-.292 1.938-.813.52-.52.791-1.166.812-1.937-.02-.77-.292-1.417-.813-1.938-.52-.52-1.166-.791-1.937-.812h-1.5c-.77.02-1.417.292-1.938.813-.52.52-.791 1.166-.812 1.937.02.77.292 1.417.813 1.938.52.52 1.166.791 1.937.812h1.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightRegularIcon);
export default ForwardRef;
