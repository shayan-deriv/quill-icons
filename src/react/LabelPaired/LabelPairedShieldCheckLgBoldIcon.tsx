import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedShieldCheckLgBoldIcon = (
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
      <path d='M2.852 10.46c-.235.131-.352.3-.352.509 0 1.224.208 2.63.625 4.219.417 1.562 1.146 3.098 2.188 4.609 1.067 1.484 2.552 2.708 4.453 3.672a.724.724 0 0 0 .468 0c1.901-.964 3.386-2.188 4.454-3.672 1.041-1.51 1.77-3.047 2.187-4.61.417-1.588.625-2.994.625-4.218 0-.209-.117-.378-.352-.508L10 7.414zM17.89 8.743c.442.182.794.469 1.054.86.287.39.43.846.43 1.367.026 1.328-.195 2.89-.664 4.687-.469 1.797-1.315 3.542-2.54 5.235-1.197 1.718-2.916 3.138-5.155 4.257a2.318 2.318 0 0 1-2.032 0c-2.24-1.12-3.958-2.539-5.156-4.257-1.224-1.693-2.07-3.438-2.539-5.235C.82 13.86.6 12.296.625 10.97c0-.521.143-.977.43-1.367.26-.391.612-.678 1.054-.86l7.383-3.125A1.12 1.12 0 0 1 10 5.5c.182 0 .352.04.508.117zm-5.703 4.883c-.053.912-.47 1.576-1.25 1.992v2.695c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.937-.937v-2.696c-.782-.417-1.198-1.08-1.25-1.992.026-.625.234-1.146.625-1.562.416-.391.937-.6 1.562-.626.625.027 1.146.235 1.563.626.39.416.598.937.624 1.562' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckLgBoldIcon);
export default ForwardRef;
