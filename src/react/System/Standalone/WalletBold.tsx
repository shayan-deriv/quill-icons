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
export const StandaloneWalletBoldIcon = (
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
      d='M9.438 7.75h14.374c.573.052.886.365.938.938-.052.572-.365.885-.938.937H9.438c-.442 0-.807.156-1.093.469a1.418 1.418 0 0 0-.469 1.094v10.624c0 .443.156.808.469 1.094.286.313.65.469 1.094.469h13.124c.443 0 .808-.156 1.094-.469.313-.286.469-.65.469-1.093v-6.875c0-.443-.156-.808-.469-1.094a1.418 1.418 0 0 0-1.093-.469H10.688c-.573-.052-.886-.365-.938-.938.052-.572.365-.885.938-.937h11.874c.964.026 1.771.365 2.422 1.016.651.65.99 1.458 1.016 2.421v6.876c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016H9.438c-.963-.026-1.77-.365-2.421-1.016-.651-.65-.99-1.458-1.016-2.422V11.188c.026-.963.365-1.77 1.016-2.421.65-.651 1.458-.99 2.421-1.016ZM21 19.625c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletBoldIcon);
export default ForwardRef;
