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
export const StandaloneEightBoldIcon = (
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
      d='M21.625 12.594c-.052 1.51-.612 2.734-1.68 3.672a5.048 5.048 0 0 1 1.68 1.718c.417.73.625 1.537.625 2.422-.026 1.38-.495 2.526-1.406 3.438-.912.911-2.058 1.38-3.438 1.406h-2.812c-1.38-.026-2.526-.495-3.438-1.406-.911-.912-1.38-2.058-1.406-3.438 0-.885.208-1.692.625-2.422a5.048 5.048 0 0 1 1.68-1.718c-1.068-.938-1.628-2.162-1.68-3.672.026-1.38.495-2.526 1.406-3.438.912-.911 2.057-1.38 3.438-1.406h1.562c1.38.026 2.526.495 3.438 1.406.911.912 1.38 2.057 1.406 3.438Zm-4.844 4.844H14.594c-.834.026-1.537.312-2.11.859-.546.573-.833 1.276-.859 2.11.026.833.313 1.536.86 2.109.572.547 1.275.833 2.109.859h2.812c.834-.026 1.537-.313 2.11-.86.547-.572.833-1.275.859-2.109-.026-.833-.313-1.536-.86-2.11-.572-.546-1.275-.832-2.109-.858h-.625Zm0-1.875c.834-.027 1.537-.313 2.11-.86.547-.573.833-1.276.859-2.11-.026-.833-.313-1.536-.86-2.109-.572-.546-1.275-.833-2.109-.859H15.22c-.834.026-1.537.313-2.11.86-.546.572-.833 1.275-.859 2.109.026.833.313 1.536.86 2.11.572.546 1.275.832 2.109.858h1.562Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEightBoldIcon);
export default ForwardRef;
