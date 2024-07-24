import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateLgBoldIcon = (
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
      <path d='M17.5 23.625a.64.64 0 0 0 .625-.625V11.75H15c-.703 0-1.25-.547-1.25-1.25V7.375H7.5A.64.64 0 0 0 6.875 8v2.656a2.37 2.37 0 0 0-1.64 0c-.079.04-.196.117-.235.117v.04V8c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5H8.633a1.6 1.6 0 0 0 .117-.625v-1.25zM4.258 11.828l.586.235c.078.039.195.039.273 0l.625-.235c.39-.156.82-.039 1.094.313l.39.507c.04.079.118.118.196.118l.664.078c.43.078.742.39.82.82l.078.664c0 .078.04.156.118.195l.546.391c.313.274.43.742.274 1.133l-.235.586c-.039.078-.039.195 0 .234l.235.625c.156.39.039.86-.313 1.094l-.507.43a.22.22 0 0 0-.118.195l-.078.664a.995.995 0 0 1-.82.82l-.586.078v4.102c0 .234-.156.469-.352.586a.7.7 0 0 1-.625-.04L5 24.407l-1.562 1.016c-.157.117-.43.117-.626.039a.69.69 0 0 1-.312-.586v-4.102l-.625-.078a.995.995 0 0 1-.82-.82l-.078-.664a.22.22 0 0 0-.118-.195l-.507-.43c-.352-.234-.47-.703-.313-1.094l.274-.586v-.273l-.274-.586c-.156-.39-.039-.86.313-1.094l.507-.43a.22.22 0 0 0 .118-.195l.117-.664c.039-.43.351-.742.781-.82l.664-.078a.22.22 0 0 0 .195-.118l.43-.507c.234-.352.703-.47 1.094-.313M2.5 16.75a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='c9c40e3ce6d47e63361a531effc2051b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateLgBoldIcon);
export default ForwardRef;
