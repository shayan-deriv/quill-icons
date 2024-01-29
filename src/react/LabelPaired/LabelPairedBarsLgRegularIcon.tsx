import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 8.625Q.289 8.04.875 8h16.25q.585.039.625.625-.039.585-.625.625H.875Q.29 9.211.25 8.625m0 6.25q.039-.585.625-.625h16.25q.585.039.625.625-.039.585-.625.625H.875q-.585-.039-.625-.625m17.5 6.25q-.039.585-.625.625H.875q-.585-.039-.625-.625.039-.585.625-.625h16.25q.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='3d7958006606815bc8b5b250590fad2f__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgRegularIcon);
export default ForwardRef;
