import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleInfoBoldIcon = (
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
    <path d='M16 8.375c-1.484 0-2.838.365-4.062 1.094-1.225.703-2.214 1.693-2.97 2.969A8.062 8.062 0 0 0 7.876 16.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094 1.484 0 2.839-.365 4.063-1.094 1.224-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.062c-.755-1.277-1.744-2.266-2.968-2.97C18.839 8.74 17.484 8.376 16 8.376M16 26.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.411 1.328-5C8.266 9.938 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328m-1.562-6.875h.937v-2.5h-.937c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h1.874c.573.052.886.365.938.938v3.437h.313c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-3.125c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938M16 14c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleInfoBoldIcon);
export default ForwardRef;
