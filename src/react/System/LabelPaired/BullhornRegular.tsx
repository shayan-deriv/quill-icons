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
export const LabelPairedBullhornRegularIcon = (
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
        d='M13 5.375c0-.104-.052-.177-.156-.219-.104-.041-.198-.02-.281.063l-.75.781A9.51 9.51 0 0 1 7 8.75v5.531A9.311 9.311 0 0 1 11.813 17l.75.781c.083.084.177.104.28.063.105-.042.157-.115.157-.219V5.375Zm-7 8.719V8.906c-.188.021-.365.031-.531.031L4.53 9H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 10v3c0 .292.094.531.281.719A.974.974 0 0 0 2 14h2.531l.907.063c.187 0 .375.01.562.03Zm5.844-9.563c.437-.396.896-.5 1.375-.312.479.187.74.573.781 1.156v12.25c-.042.583-.302.969-.781 1.156-.48.188-.938.084-1.375-.312l-.75-.782C9.698 16.23 8 15.366 6 15.095v3.156c-.02.5-.188.917-.5 1.25-.333.313-.75.48-1.25.5h-.5c-.5-.02-.917-.188-1.25-.5-.313-.333-.48-.75-.5-1.25V15c-.563-.02-1.031-.219-1.406-.594S.02 13.562 0 13v-3c.02-.563.219-1.031.594-1.406S1.438 8.02 2 8h2.5l.906-.063a8.757 8.757 0 0 0 3.094-.75 8.519 8.519 0 0 0 2.594-1.875l.75-.78ZM3 15v3.25c.042.458.292.708.75.75h.5c.458-.042.708-.292.75-.75v-3.219L4.5 15H3Zm12.5-5c.313.02.48.188.5.5v2c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-2c.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornRegularIcon);
export default ForwardRef;
