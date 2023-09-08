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
export const StandaloneStopwatchRegularIcon = (
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
      d='M12.25 7.125c.026-.39.234-.599.625-.625h6.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5v2.54c1.98.181 3.646.924 5 2.226l1.445-1.446c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-1.485 1.484c1.094 1.406 1.654 3.06 1.68 4.961-.052 2.292-.846 4.206-2.383 5.742-1.536 1.537-3.45 2.33-5.742 2.383-2.292-.052-4.206-.846-5.742-2.383-1.537-1.536-2.33-3.45-2.383-5.742.052-2.188.781-4.037 2.188-5.547 1.406-1.484 3.177-2.33 5.312-2.539V7.75h-2.5c-.39-.026-.599-.234-.625-.625Zm-3.125 11.25c0 1.25.313 2.396.938 3.438a6.772 6.772 0 0 0 2.5 2.5c1.093.625 2.24.937 3.437.937 1.198 0 2.344-.313 3.438-.938a6.772 6.772 0 0 0 2.5-2.5 6.556 6.556 0 0 0 .937-3.437c0-1.25-.313-2.396-.938-3.438a6.772 6.772 0 0 0-2.5-2.5c-1.093-.624-2.24-.937-3.437-.937-1.198 0-2.344.313-3.438.938a6.772 6.772 0 0 0-2.5 2.5 6.556 6.556 0 0 0-.937 3.437Zm7.5-3.75V19c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-4.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopwatchRegularIcon);
export default ForwardRef;
