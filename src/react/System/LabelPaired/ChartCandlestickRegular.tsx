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
export const LabelPairedChartCandlestickRegularIcon = (
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
        d='M1 5.5v11c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h13c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-13c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-11c.02-.313.188-.48.5-.5.313.02.48.188.5.5Zm9 0v1.531c.292.063.531.209.719.438.187.208.281.468.281.781v2.5c-.042.646-.375 1.052-1 1.219V13.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-1.531a1.238 1.238 0 0 1-.719-.438A1.124 1.124 0 0 1 8 10.75v-2.5c.042-.646.375-1.052 1-1.219V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM5.5 6c.313.02.48.188.5.5v1.531c.292.063.531.209.719.438.187.208.281.469.281.781v3.5c-.042.646-.375 1.052-1 1.219V15.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-1.531a1.238 1.238 0 0 1-.719-.438A1.124 1.124 0 0 1 4 12.75v-3.5c.042-.646.375-1.052 1-1.219V6.5c.02-.313.188-.48.5-.5ZM10 8.25c-.02-.146-.104-.23-.25-.25h-.5c-.146.02-.23.104-.25.25v2.5c.02.146.104.23.25.25h.5c.146-.02.23-.104.25-.25v-2.5ZM13.25 11c-.146.02-.23.104-.25.25v1.5c.02.146.104.23.25.25h.5c.146-.02.23-.104.25-.25v-1.5c-.02-.146-.104-.23-.25-.25h-.5ZM13 10V8.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v1.531c.292.063.531.209.719.438.187.208.281.469.281.781v1.5c-.042.646-.375 1.052-1 1.219V15.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-1.531a1.239 1.239 0 0 1-.719-.438A1.125 1.125 0 0 1 12 12.75v-1.5c.042-.646.375-1.052 1-1.219V10ZM5.75 9h-.5c-.146.02-.23.104-.25.25v3.5c.02.146.104.23.25.25h.5c.146-.02.23-.104.25-.25v-3.5c-.02-.146-.104-.23-.25-.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickRegularIcon);
export default ForwardRef;
