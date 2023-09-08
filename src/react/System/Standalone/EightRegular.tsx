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
export const StandaloneEightRegularIcon = (
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
      d='M21.625 12.438c0 .807-.182 1.549-.547 2.226a4.854 4.854 0 0 1-1.523 1.64c.807.391 1.458.964 1.953 1.72.495.755.742 1.601.742 2.538-.026 1.329-.482 2.435-1.367 3.32-.886.886-1.992 1.342-3.32 1.368h-3.125c-1.329-.026-2.435-.482-3.32-1.367-.886-.886-1.342-1.992-1.368-3.32 0-.938.247-1.784.742-2.54a4.789 4.789 0 0 1 1.953-1.718 4.854 4.854 0 0 1-1.523-1.64 4.621 4.621 0 0 1-.547-2.227c.026-1.329.482-2.435 1.367-3.32.886-.886 1.992-1.342 3.32-1.368h1.876c1.328.026 2.434.482 3.32 1.367.885.886 1.341 1.992 1.367 3.32Zm-4.688 4.687h-2.499c-.964.026-1.771.365-2.422 1.016-.651.65-.99 1.458-1.016 2.422.026.963.365 1.77 1.016 2.421.65.651 1.458.99 2.421 1.016h3.126c.963-.026 1.77-.365 2.421-1.016.651-.65.99-1.458 1.016-2.422-.026-.963-.365-1.77-1.016-2.421-.65-.651-1.458-.99-2.422-1.016h-.625Zm0-1.25c.964-.026 1.771-.365 2.422-1.016.651-.65.99-1.458 1.016-2.421-.026-.964-.365-1.771-1.016-2.422-.65-.651-1.458-.99-2.422-1.016h-1.875c-.963.026-1.77.365-2.421 1.016-.651.65-.99 1.458-1.016 2.421.026.964.365 1.771 1.016 2.422.65.651 1.458.99 2.421 1.016h1.876Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEightRegularIcon);
export default ForwardRef;
