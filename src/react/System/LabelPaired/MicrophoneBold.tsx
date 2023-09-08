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
export const LabelPairedMicrophoneBoldIcon = (
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
        d='M7.5 7a1.63 1.63 0 0 0-.438-1.063A1.63 1.63 0 0 0 6 5.5a1.63 1.63 0 0 0-1.063.438A1.63 1.63 0 0 0 4.5 7v5c.02.417.167.77.438 1.063.291.27.645.416 1.062.437a1.63 1.63 0 0 0 1.063-.438A1.63 1.63 0 0 0 7.5 12V7ZM3 7c.02-.854.313-1.563.875-2.125C4.438 4.312 5.145 4.021 6 4c.854.02 1.563.313 2.125.875.563.563.854 1.27.875 2.125v5c-.02.854-.313 1.563-.875 2.125-.563.563-1.27.854-2.125.875-.854-.02-1.563-.313-2.125-.875-.563-.563-.854-1.27-.875-2.125V7Zm-1 3.75V12c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156 1.125-.02 2.073-.406 2.844-1.156.75-.771 1.135-1.719 1.156-2.844v-1.25c.042-.458.292-.708.75-.75.458.042.708.292.75.75V12c-.02 1.417-.48 2.625-1.375 3.625-.875 1-2 1.604-3.375 1.813V18.5h1.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h1.5v-1.063c-1.375-.208-2.5-.812-3.375-1.812C.979 14.625.521 13.417.5 12v-1.25c.042-.458.292-.708.75-.75.458.042.708.292.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneBoldIcon);
export default ForwardRef;
