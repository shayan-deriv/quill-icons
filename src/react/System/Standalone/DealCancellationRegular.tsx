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
export const StandaloneDealCancellationRegularIcon = (
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
      d='M7.016 11.266h3.71c.665 0 1.25.117 1.797.351.547.195 1.016.547 1.407.977.39.43.664.976.898 1.64.195.664.313 1.407.313 2.266a8.02 8.02 0 0 1-.313 2.305c-.234.664-.508 1.21-.898 1.64-.39.43-.86.742-1.407.977a4.47 4.47 0 0 1-1.796.351H7.016V11.266Zm3.71 8.984c.782 0 1.407-.234 1.876-.742.468-.469.703-1.211.703-2.149v-1.68c0-.937-.235-1.679-.703-2.148-.47-.508-1.094-.742-1.875-.742H8.695v7.461h2.032Zm10.43 1.68c-1.367 0-2.422-.47-3.203-1.367-.781-.938-1.172-2.266-1.172-4.063 0-.86.078-1.64.313-2.305.195-.664.468-1.25.86-1.68.39-.468.82-.82 1.366-1.054a4.663 4.663 0 0 1 1.836-.352c.938 0 1.68.196 2.305.586.625.39 1.094 1.016 1.445 1.797l-1.445.781a2.405 2.405 0 0 0-.82-1.21c-.391-.274-.86-.43-1.485-.43-.781 0-1.445.273-1.875.82-.468.547-.703 1.29-.703 2.266v1.601c0 .977.235 1.72.703 2.266.43.547 1.094.82 1.875.82.625 0 1.172-.156 1.563-.468.39-.313.664-.743.86-1.25l1.366.82c-.351.742-.82 1.367-1.445 1.797-.664.43-1.406.625-2.344.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDealCancellationRegularIcon);
export default ForwardRef;
