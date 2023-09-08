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
export const StandaloneStopLossBoldIcon = (
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
      d='M11.86 21.93c-.938 0-1.72-.157-2.344-.47-.664-.312-1.172-.741-1.641-1.21l1.484-1.523c.743.78 1.602 1.21 2.657 1.21.546 0 .976-.117 1.21-.351.274-.234.43-.547.43-.938a1.09 1.09 0 0 0-.234-.703c-.156-.195-.508-.351-.977-.39l-1.054-.157c-1.094-.156-1.914-.468-2.422-1.015-.508-.508-.781-1.211-.781-2.11 0-.468.078-.898.273-1.289.195-.39.43-.703.781-.976.313-.313.742-.508 1.211-.664a5.63 5.63 0 0 1 1.68-.235c.781 0 1.484.118 2.07.391.586.234 1.133.586 1.563 1.094l-1.524 1.523c-.273-.312-.547-.547-.937-.703-.352-.195-.782-.312-1.328-.312-.508 0-.899.117-1.133.273-.235.195-.39.43-.39.781 0 .352.116.586.312.781.195.157.507.274.937.313l1.055.195c1.055.157 1.875.47 2.383.977.546.508.78 1.21.78 2.11 0 .507-.077.976-.273 1.366-.156.43-.43.782-.78 1.094a3.426 3.426 0 0 1-1.29.703 5.898 5.898 0 0 1-1.719.235Zm5.976-.196V11.266h2.266v8.476h3.984v1.992h-6.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopLossBoldIcon);
export default ForwardRef;
