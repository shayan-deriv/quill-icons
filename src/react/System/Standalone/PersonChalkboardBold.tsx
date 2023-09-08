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
export const StandalonePersonChalkboardBoldIcon = (
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
      d='M11 10.25c-.703-.026-1.25-.339-1.64-.938-.313-.624-.313-1.25 0-1.874.39-.6.937-.912 1.64-.938.703.026 1.25.339 1.64.938.313.625.313 1.25 0 1.875-.39.598-.937.911-1.64.937Zm-.547 3.125h-.078v5h1.25v-5h-1.172Zm-.078 12.188c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V15.25l-1.68 2.969c-.338.468-.768.586-1.289.351-.468-.338-.586-.768-.351-1.289l2.304-4.023c.313-.547.73-.977 1.25-1.29a3.277 3.277 0 0 1 1.72-.468H16V8.375c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h8.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v8.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-8.75a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 16 17.125V15.25h1.875v1.875h8.75v-8.75h-8.75V11.5h.938c.572.052.885.365.937.938-.052.572-.365.885-.938.937H13.5v12.188c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V20.25h-1.25v5.313Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePersonChalkboardBoldIcon);
export default ForwardRef;
