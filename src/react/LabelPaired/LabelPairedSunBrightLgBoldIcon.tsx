import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.938 6.438v2.5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-2.5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938m6.132 3.32-1.797 1.797c-.351.351-.937.351-1.328 0-.351-.39-.351-.977 0-1.328l1.797-1.797c.352-.352.938-.352 1.328 0 .352.39.352.976 0 1.328M4.22 8.43l1.797 1.797c.351.351.351.937 0 1.328-.391.351-.977.351-1.328 0L2.93 9.758c-.39-.352-.39-.938 0-1.328a.92.92 0 0 1 1.289 0M.937 14.563h2.5a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938h-2.5C.39 16.438 0 16.047 0 15.5c0-.508.39-.937.938-.937m15.626 0h2.5A.95.95 0 0 1 20 15.5c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937m-10.547 6.25L4.219 22.57a.856.856 0 0 1-1.29 0 .856.856 0 0 1 0-1.289l1.759-1.797c.351-.351.937-.351 1.328 0 .351.391.351.977 0 1.328m9.257-1.329 1.797 1.797a.92.92 0 0 1 0 1.29c-.39.39-.976.39-1.328 0l-1.797-1.759c-.351-.351-.351-.937 0-1.328.39-.351.977-.351 1.328 0m-4.335 2.578v2.5c0 .547-.43.938-.938.938-.547 0-.937-.39-.937-.937v-2.5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M12.5 15.5c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188m-6.875 0c0-1.562.82-2.969 2.188-3.75 1.328-.82 3.007-.82 4.375 0 1.328.781 2.187 2.188 2.187 3.75 0 1.602-.86 3.008-2.187 3.79-1.368.82-3.047.82-4.376 0-1.367-.782-2.187-2.188-2.187-3.79' />
    </g>
    <defs>
      <clipPath id='8b91d03b2894e1180b430bbbd276264a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightLgBoldIcon);
export default ForwardRef;
