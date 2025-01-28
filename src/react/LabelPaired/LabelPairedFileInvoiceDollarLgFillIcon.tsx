import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zM2.5 8.625c0 .352.273.625.625.625h2.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-2.5a.64.64 0 0 0-.625.625m0 2.5c0 .352.273.625.625.625h2.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-2.5a.64.64 0 0 0-.625.625m5 2.813a.64.64 0 0 0-.625.624v.704c-.352.039-.664.156-.977.312-.507.313-.898.82-.898 1.602 0 .703.39 1.172.86 1.445.43.273.937.43 1.367.547h.078c.468.156.86.273 1.133.469.234.117.273.273.273.43.039.273-.078.429-.274.546-.234.156-.585.235-.937.195-.469 0-.898-.156-1.406-.312a2 2 0 0 1-.274-.117c-.351-.078-.703.078-.82.39-.078.352.078.704.39.82.079 0 .196.04.274.079.352.117.742.273 1.211.351v.665c0 .351.273.625.625.625a.64.64 0 0 0 .625-.625v-.665c.313-.039.664-.156.977-.351A1.84 1.84 0 0 0 10 20.07c-.04-.742-.43-1.21-.898-1.523-.43-.274-.977-.43-1.407-.547h-.039c-.508-.156-.86-.273-1.133-.43-.234-.156-.273-.273-.273-.39 0-.235.078-.39.313-.508.234-.156.585-.235.898-.235.39.04.82.118 1.25.235.351.078.703-.117.781-.469.078-.312-.117-.664-.43-.742a8 8 0 0 0-.937-.195v-.703c0-.313-.312-.626-.625-.626' />
    </g>
    <defs>
      <clipPath id='9d25bede6d44f8dfd90eb07c2edfb17c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarLgFillIcon);
export default ForwardRef;
