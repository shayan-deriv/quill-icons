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
export const StandalonePenCircleRegularIcon = (
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
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.838 1.172 4.375 1.172s2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm12.969-3.633c-.313-.234-.612-.234-.899 0l-.82.86 1.563 1.562.82-.86c.234-.286.234-.572 0-.859l-.664-.703Zm-5.82 4.961a.492.492 0 0 0-.196.274l-.469 1.914 1.914-.47a.58.58 0 0 0 .274-.155l3.242-3.243-1.562-1.562-3.243 3.242h.04Zm4.023-5.82c.39-.365.833-.547 1.328-.547.495 0 .938.182 1.328.547l.703.664c.365.39.547.833.547 1.328 0 .495-.182.938-.547 1.328l-4.96 4.922c-.235.26-.521.43-.86.508l-2.93.742a.561.561 0 0 1-.586-.195c-.156-.157-.208-.352-.156-.586l.703-2.93c.104-.312.274-.599.508-.86l4.922-4.921Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenCircleRegularIcon);
export default ForwardRef;
