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
export const StandaloneInstagramIcon = (
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
      d='M16 12.008c1.276.026 2.33.469 3.164 1.328.86.833 1.302 1.888 1.328 3.164-.026 1.276-.469 2.33-1.328 3.164-.833.86-1.888 1.302-3.164 1.328-1.276-.026-2.33-.469-3.164-1.328-.86-.833-1.302-1.888-1.328-3.164.026-1.276.469-2.33 1.328-3.164.833-.86 1.888-1.302 3.164-1.328Zm0 7.422c.833-.026 1.523-.313 2.07-.86.547-.547.834-1.237.86-2.07-.026-.833-.313-1.523-.86-2.07-.547-.547-1.237-.834-2.07-.86-.833.026-1.523.313-2.07.86-.547.547-.834 1.237-.86 2.07.026.833.313 1.523.86 2.07.547.547 1.237.834 2.07.86Zm5.742-7.617a1.273 1.273 0 0 0-.312-.743 1.09 1.09 0 0 0-.742-.273c-.313 0-.56.091-.743.273a1.014 1.014 0 0 0-.312.742c.052.652.404 1.003 1.055 1.055.625-.052.976-.404 1.054-1.055Zm2.969 1.093v-.039c.026.521.039 1.263.039 2.227v2.812c0 .938-.013 1.667-.04 2.188 0 1.432-.48 2.656-1.444 3.672-1.016.963-2.227 1.432-3.633 1.406-.521.026-1.263.052-2.227.078h-2.812a93.036 93.036 0 0 1-2.188-.078c-1.432.026-2.656-.443-3.672-1.406-.963-1.016-1.432-2.24-1.406-3.672-.052-.521-.078-1.25-.078-2.188v-2.812c0-.964.026-1.706.078-2.227-.026-1.406.443-2.617 1.406-3.633C9.776 8.271 11 7.79 12.406 7.79c.495-.026 1.224-.039 2.188-.039h2.812c.964 0 1.706.013 2.227.04 1.406 0 2.617.48 3.633 1.444.963 1.016 1.445 2.24 1.445 3.672Zm-1.875 8.75c.182-.52.286-1.224.312-2.11.053-.884.066-1.692.04-2.421v-1.25c.026-.73.013-1.537-.04-2.422-.026-.885-.13-1.588-.312-2.11a3.121 3.121 0 0 0-1.68-1.679c-.52-.182-1.224-.286-2.11-.312a82.968 82.968 0 0 0-2.421-.04h-1.25a25.825 25.825 0 0 0-2.422.04c-.86.026-1.562.13-2.11.312a3.121 3.121 0 0 0-1.679 1.68c-.182.52-.286 1.224-.312 2.11-.026.884-.04 1.692-.04 2.421v1.25c0 .73.014 1.537.04 2.422.026.86.13 1.562.312 2.11a3.121 3.121 0 0 0 1.68 1.679c.547.182 1.25.286 2.11.312.884.026 1.692.04 2.421.04h1.25c.73 0 1.537-.014 2.422-.04.885-.026 1.588-.13 2.11-.312a3.121 3.121 0 0 0 1.679-1.68Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneInstagramIcon);
export default ForwardRef;
