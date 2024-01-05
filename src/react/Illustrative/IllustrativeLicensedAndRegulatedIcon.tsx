import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeLicensedAndRegulatedIcon = (
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
    <g>
      <path d='M19.813 8.227c-1.866-.454-6.4-1.64-8.106-2.78a.677.677 0 0 0-.74 0c-1.707 1.14-6.24 2.326-8.107 2.78-.9.22-1.527 1.02-1.527 1.94v9.053c0 5.26 3.994 7.853 6.667 8.993v.707c0 .467.233.887.633 1.133.394.247.88.267 1.3.06l1.407-.7 1.407.7a1.329 1.329 0 0 0 1.293-.06c.393-.246.633-.666.633-1.133v-.707c2.674-1.14 6.667-3.726 6.667-8.993v-9.053c0-.927-.627-1.727-1.52-1.94zm-8.48 13.106c-2.206 0-4-1.793-4-4 0-2.206 1.794-4 4-4 2.207 0 4 1.794 4 4 0 2.207-1.793 4-4 4m2 7.587-1.7-.853a.664.664 0 0 0-.593 0l-1.7.853v-6.647a5.27 5.27 0 0 0 4 0v6.647zM20 19.22c0 4.047-2.72 6.3-5.333 7.533v-5.26c1.22-.98 2-2.48 2-4.16A5.34 5.34 0 0 0 11.333 12 5.34 5.34 0 0 0 6 17.333c0 1.68.78 3.18 2 4.16v5.26c-2.613-1.233-5.333-3.486-5.333-7.533v-9.053c0-.307.206-.574.506-.647 2.254-.553 6.18-1.613 8.16-2.74 1.98 1.127 5.907 2.187 8.16 2.74.3.073.507.34.507.647z' />
      <path d='M11.333 14.667a2.666 2.666 0 1 0-.001 5.332 2.666 2.666 0 0 0 .001-5.332m0 4c-.733 0-1.333-.6-1.333-1.334C10 16.6 10.6 16 11.333 16c.734 0 1.334.6 1.334 1.333 0 .734-.6 1.334-1.334 1.334M26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.653 0-3-1.347-3-3 0-1.654 1.347-3 3-3 1.654 0 3 1.346 3 3 0 1.653-1.346 3-3 3' />
      <path d='m26.86 4.86-.86.86-.193-.193a.664.664 0 1 0-.94.94l.666.666c.134.134.3.194.474.194.173 0 .34-.067.473-.194L27.813 5.8a.664.664 0 1 0-.94-.94z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLicensedAndRegulatedIcon);
export default ForwardRef;
