import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarRangeLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.188 6.438V8h5.625V6.438c.052-.573.364-.886.937-.938.573.052.885.365.938.938V8h1.562c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H3.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.563V6.438c.052-.573.364-.886.937-.938.573.052.885.365.938.938M3.125 13v10c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V13zM5 16.75c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352C5.117 17.414 5 17.115 5 16.75m8.75 2.5c.365 0 .664.117.898.352.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352m-5-2.5c.052-.573.365-.885.938-.937h4.374c.573.052.886.364.938.937-.052.573-.365.885-.937.938H9.686c-.572-.053-.885-.365-.937-.938m1.563 2.813c.572.052.885.364.937.937-.052.573-.365.885-.937.938H5.937c-.572-.053-.885-.365-.937-.938.052-.573.365-.885.938-.937z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgBoldIcon);
export default ForwardRef;
