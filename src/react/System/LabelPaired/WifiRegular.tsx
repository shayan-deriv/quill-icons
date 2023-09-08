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
export const LabelPairedWifiRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.844 9.75c-.23.208-.459.208-.688 0-.208-.23-.208-.458 0-.688a13.72 13.72 0 0 1 4.438-2.968C6.26 5.385 8.062 5.02 10 5c1.938.02 3.74.385 5.406 1.094a13.72 13.72 0 0 1 4.438 2.968c.208.23.208.459 0 .688-.23.208-.459.208-.688 0A13.243 13.243 0 0 0 15.031 7c-1.562-.646-3.24-.98-5.031-1-1.792.02-3.469.354-5.031 1A13.245 13.245 0 0 0 .844 9.75ZM10 11a7.673 7.673 0 0 0-3.094.625c-.979.417-1.833.99-2.562 1.719-.23.187-.459.187-.688 0-.208-.25-.208-.49 0-.719A8.862 8.862 0 0 1 6.5 10.719 8.554 8.554 0 0 1 10 10c1.25 0 2.417.24 3.5.719a8.864 8.864 0 0 1 2.844 1.906c.208.23.208.469 0 .719-.23.187-.459.187-.688 0a8.032 8.032 0 0 0-2.562-1.719A7.674 7.674 0 0 0 10 11Zm0 5a.974.974 0 0 0-.719.281A.974.974 0 0 0 9 17c0 .292.094.531.281.719A.974.974 0 0 0 10 18a.974.974 0 0 0 .719-.281A.974.974 0 0 0 11 17a.974.974 0 0 0-.281-.719A.974.974 0 0 0 10 16Zm0 3c-.75-.02-1.323-.354-1.719-1-.375-.667-.375-1.333 0-2 .396-.646.969-.98 1.719-1 .75.02 1.323.354 1.719 1 .375.667.375 1.333 0 2-.396.646-.969.98-1.719 1Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiRegularIcon);
export default ForwardRef;
