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
export const StandaloneRightFromBracketBoldIcon = (
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
      d='M19.75 12.203v2.11c-.052.572-.365.885-.938.937h-4.687v2.5h4.688c.572.052.885.365.937.938v2.109l4.297-4.297-4.297-4.297ZM26 16.5c0 .469-.17.872-.508 1.21l-4.531 4.493c-.339.365-.768.547-1.29.547-.494 0-.91-.182-1.25-.547a1.843 1.843 0 0 1-.546-1.25v-1.328h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-2.5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h3.75v-1.328c.026-.495.208-.912.547-1.25.338-.339.755-.521 1.25-.547.52 0 .95.182 1.289.547l4.531 4.492c.339.339.508.742.508 1.211ZM12.562 9.625H9.438c-.443 0-.808.156-1.094.469a1.418 1.418 0 0 0-.469 1.094v10.624c0 .443.156.808.469 1.094.286.313.65.469 1.094.469h3.124c.573.052.886.365.938.938-.052.572-.365.885-.938.937H9.438c-.964-.026-1.771-.365-2.422-1.016-.651-.65-.99-1.458-1.016-2.422V11.188c.026-.963.365-1.77 1.016-2.421.65-.651 1.458-.99 2.421-1.016h3.126c.572.052.885.365.937.938-.052.572-.365.885-.938.937Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightFromBracketBoldIcon);
export default ForwardRef;
