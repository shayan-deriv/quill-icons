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
export const StandalonePauseBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M11.625 10.875v11.25H13.5v-11.25h-1.875Zm-1.875 0c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547H13.5c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-1.875a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-11.25Zm8.75 0v11.25h1.875v-11.25H18.5Zm-1.875 0c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h1.875c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547H18.5a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-11.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseBoldIcon);
export default ForwardRef;
