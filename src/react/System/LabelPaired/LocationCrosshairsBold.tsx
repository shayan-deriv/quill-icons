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
export const LabelPairedLocationCrosshairsBoldIcon = (
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
        d='M8 4c.458.042.708.292.75.75v1.313c1.375.187 2.542.75 3.5 1.687.938.958 1.51 2.125 1.719 3.5h1.281c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-1.281c-.209 1.375-.781 2.542-1.719 3.5-.958.938-2.125 1.51-3.5 1.719v1.281c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-1.281c-1.375-.209-2.542-.782-3.5-1.719-.938-.958-1.5-2.125-1.688-3.5H.75C.292 12.708.042 12.458 0 12c.042-.458.292-.708.75-.75h1.313c.187-1.375.75-2.542 1.687-3.5.958-.938 2.125-1.5 3.5-1.688V4.75c.042-.458.292-.708.75-.75Zm-4.5 8c0 .813.198 1.563.594 2.25a4.51 4.51 0 0 0 1.656 1.656A4.543 4.543 0 0 0 8 16.5c.792 0 1.542-.198 2.25-.594a4.51 4.51 0 0 0 1.656-1.656A4.43 4.43 0 0 0 12.5 12a4.43 4.43 0 0 0-.594-2.25 4.51 4.51 0 0 0-1.656-1.656A4.543 4.543 0 0 0 8 7.5c-.792 0-1.542.198-2.25.594A4.51 4.51 0 0 0 4.094 9.75 4.431 4.431 0 0 0 3.5 12Zm6 0c-.02-.563-.27-1-.75-1.313-.5-.25-1-.25-1.5 0-.48.313-.73.75-.75 1.313.02.563.27 1 .75 1.313.5.25 1 .25 1.5 0 .48-.313.73-.75.75-1.313ZM5 12c0-.542.135-1.042.406-1.5A3.007 3.007 0 0 1 8 9a3.007 3.007 0 0 1 2.594 1.5c.27.458.406.958.406 1.5s-.135 1.042-.406 1.5A3.007 3.007 0 0 1 8 15a3.007 3.007 0 0 1-2.594-1.5A2.895 2.895 0 0 1 5 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsBoldIcon);
export default ForwardRef;
