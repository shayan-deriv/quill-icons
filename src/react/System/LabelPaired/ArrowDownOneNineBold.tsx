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
export const LabelPairedArrowDownOneNineBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.25 5.75V9.5H15c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-3c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.75V6.781l-.5.188c-.458.104-.781-.052-.969-.469-.104-.458.052-.781.469-.969l1.5-.5c.25-.062.48-.02.688.125a.688.688 0 0 1 .312.594ZM4.469 18.781l-3-3c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.719 1.719V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.688l1.719-1.72c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063l-3 3c-.354.292-.708.292-1.062 0ZM13.25 16c.48-.02.844-.23 1.094-.625a1.328 1.328 0 0 0 0-1.25c-.25-.396-.615-.604-1.094-.625-.48.02-.844.23-1.094.625a1.328 1.328 0 0 0 0 1.25c.25.396.615.604 1.094.625Zm-.563 1.438c-.645-.146-1.166-.459-1.562-.938-.396-.48-.604-1.063-.625-1.75.02-.77.292-1.417.813-1.938.52-.52 1.166-.791 1.937-.812.77.02 1.417.292 1.938.813.52.52.791 1.166.812 1.937 0 .688-.219 1.292-.656 1.813l-1.75 2.156c-.334.333-.688.375-1.063.125-.333-.334-.375-.688-.125-1.063l.281-.343Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineBoldIcon);
export default ForwardRef;
