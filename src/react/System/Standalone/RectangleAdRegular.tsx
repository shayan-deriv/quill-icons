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
export const StandaloneRectangleAdRegularIcon = (
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
      d='M7.25 9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v12.5c0 .365.117.664.352.898.234.235.533.352.898.352h17.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-12.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352H7.25Zm-2.5 1.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H7.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5Zm8.398 2.852 2.813 6.25c.104.364 0 .65-.313.859-.364.104-.65 0-.859-.313L14.4 19h-3.672l-.391.898c-.208.313-.495.417-.86.313-.338-.208-.442-.495-.312-.86l2.813-6.25a.631.631 0 0 1 .585-.351c.26 0 .456.117.586.352Zm-.585 1.796-1.29 2.852h2.579l-1.29-2.852Zm6.874.977c-.599.026-1.054.287-1.367.781a1.66 1.66 0 0 0 0 1.563c.313.494.768.755 1.367.781.6-.026 1.055-.287 1.368-.781a1.66 1.66 0 0 0 0-1.563c-.313-.494-.768-.755-1.367-.781ZM21 15.094v-1.719c.026-.39.234-.599.625-.625.39.026.599.234.625.625v6.25c-.026.39-.234.599-.625.625-.313-.026-.52-.182-.625-.469-.443.313-.963.469-1.563.469-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992.026-.808.3-1.472.82-1.993.521-.52 1.185-.794 1.992-.82.6 0 1.12.156 1.563.469Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRectangleAdRegularIcon);
export default ForwardRef;
