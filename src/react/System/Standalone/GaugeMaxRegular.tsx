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
export const StandaloneGaugeMaxRegularIcon = (
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
      d='M16 25.25c1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C19.047 8.167 17.588 7.776 16 7.75c-1.588.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C7.64 13.505 7.25 14.963 7.25 16.5s.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.787 1.146 4.375 1.172ZM16 6.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328Zm.938 3.75c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938.573.053.885.365.938.938Zm-2.188 10c0 .365.117.664.352.898.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898C16.664 19.117 16.365 19 16 19s-.664.117-.898.352c-.235.234-.352.533-.352.898Zm-1.25 0c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742.703.026 1.29.26 1.758.703l4.18-2.5c.338-.156.625-.078.859.235.156.338.078.625-.235.859l-4.18 2.5c.079.234.118.469.118.703-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758Zm7.813-8.125c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938.573.053.885.365.938.938ZM9.75 15.563c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938Zm2.813-3.438c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938.573.053.885.365.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGaugeMaxRegularIcon);
export default ForwardRef;
