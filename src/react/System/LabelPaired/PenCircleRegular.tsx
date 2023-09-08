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
export const LabelPairedPenCircleRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm10.375-2.906c-.25-.188-.49-.188-.719 0L9 9.78l1.25 1.25.656-.687c.188-.23.188-.459 0-.688l-.531-.562Zm-4.656 3.969a.393.393 0 0 0-.157.218l-.375 1.531 1.532-.374a.463.463 0 0 0 .218-.126l2.594-2.593-1.25-1.25-2.594 2.594h.032Zm3.218-4.657c.313-.291.667-.437 1.063-.437.396 0 .75.146 1.063.437l.562.531c.292.313.438.667.438 1.063 0 .396-.146.75-.438 1.063L7.656 15a1.297 1.297 0 0 1-.687.406L4.625 16a.449.449 0 0 1-.469-.156.476.476 0 0 1-.125-.469l.563-2.344c.083-.25.218-.479.406-.687l3.938-3.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleRegularIcon);
export default ForwardRef;
