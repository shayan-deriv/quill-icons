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
export const LabelPairedBellRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.5 4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v.531c1.292.146 2.354.677 3.188 1.594.854.917 1.291 2.042 1.312 3.375v.906c.02 1.417.52 2.636 1.5 3.656l.094.094c.27.271.406.594.406.969 0 .396-.135.719-.406.969-.25.27-.573.406-.969.406H1.375c-.396 0-.719-.135-.969-.406-.27-.25-.406-.573-.406-.969 0-.375.135-.708.406-1l.094-.063c.98-1.02 1.48-2.24 1.5-3.656V10c.02-1.333.458-2.458 1.313-3.375.833-.917 1.895-1.448 3.187-1.594V4.5ZM7 6c-1.125.02-2.073.406-2.844 1.156C3.406 7.927 3.021 8.875 3 10v.906c-.02 1.688-.625 3.136-1.813 4.344l-.062.094a.388.388 0 0 0-.125.281c.02.23.146.354.375.375h11.25c.23-.02.354-.146.375-.375a.389.389 0 0 0-.125-.281l-.063-.094c-1.187-1.208-1.791-2.656-1.812-4.344V10c-.02-1.125-.417-2.073-1.188-2.844C9.063 6.406 8.126 6.021 7 6Zm-.938 12.344c.167.416.48.635.938.656.458-.02.77-.24.938-.656.125-.292.343-.396.656-.313.27.125.364.334.281.625a2.087 2.087 0 0 1-.719.969C7.823 19.875 7.437 20 7 20c-.438 0-.823-.125-1.156-.375a2.087 2.087 0 0 1-.719-.969c-.083-.291.01-.5.281-.625.313-.083.532.021.657.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellRegularIcon);
export default ForwardRef;
