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
export const LabelPairedLocationCrosshairsRegularIcon = (
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
        d='M8 4c.313.02.48.188.5.5v1.531c1.48.146 2.73.719 3.75 1.719 1 1.02 1.573 2.27 1.719 3.75H15.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-1.531c-.146 1.48-.719 2.73-1.719 3.75-1.02 1-2.27 1.573-3.75 1.719V19.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-1.531c-1.48-.146-2.73-.719-3.75-1.719-1-1.02-1.573-2.27-1.719-3.75H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1.531c.146-1.48.719-2.73 1.719-3.75 1.02-1 2.27-1.573 3.75-1.719V4.5c.02-.313.188-.48.5-.5Zm-5 8c0 .896.219 1.73.656 2.5A5.212 5.212 0 0 0 5.5 16.344 5.096 5.096 0 0 0 8 17c.875 0 1.708-.219 2.5-.656a5.213 5.213 0 0 0 1.844-1.844c.437-.77.656-1.604.656-2.5 0-.896-.219-1.73-.656-2.5A5.212 5.212 0 0 0 10.5 7.656 5.095 5.095 0 0 0 8 7c-.875 0-1.708.219-2.5.656A5.21 5.21 0 0 0 3.656 9.5 4.98 4.98 0 0 0 3 12Zm7 0c-.02-.75-.354-1.323-1-1.719-.667-.375-1.333-.375-2 0-.646.396-.98.969-1 1.719.02.75.354 1.323 1 1.719.667.375 1.333.375 2 0 .646-.396.98-.969 1-1.719Zm-5 0c0-.542.135-1.042.406-1.5A3.007 3.007 0 0 1 8 9a3.007 3.007 0 0 1 2.594 1.5c.27.458.406.958.406 1.5s-.135 1.042-.406 1.5A3.007 3.007 0 0 1 8 15a3.007 3.007 0 0 1-2.594-1.5A2.895 2.895 0 0 1 5 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsRegularIcon);
export default ForwardRef;
