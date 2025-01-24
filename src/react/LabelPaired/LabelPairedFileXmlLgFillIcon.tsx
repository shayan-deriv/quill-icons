import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXmlLgFillIcon = (
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
      <path d='M0 8c0-1.367 1.094-2.5 2.5-2.5h6.25v5c0 .703.547 1.25 1.25 1.25h5v5.625H6.875a2.49 2.49 0 0 0-2.5 2.5V25.5H2.5A2.47 2.47 0 0 1 0 23zm15 2.5h-5v-5zm-7.5 9.375q0 .47.234.82l.391.586.352-.586c.156-.234.273-.508.273-.82s.273-.625.625-.625c.313 0 .625.313.625.625q0 .82-.469 1.523l-.664.977.664 1.016c.313.468.469.976.469 1.484a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.273-.117-.547-.273-.781l-.352-.586-.39.586a1.4 1.4 0 0 0-.235.781.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.508.156-1.055.43-1.484l.664-1.016-.664-.977a3 3 0 0 1-.43-1.523c0-.312.273-.625.625-.625.313 0 .625.313.625.625m10 5v-5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v4.375h.625c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625m-5.82-5.586c.273-.078.586.04.703.273l1.367 2.227 1.328-2.227a.63.63 0 0 1 .703-.273.62.62 0 0 1 .469.586v5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.734l-.742 1.21a.61.61 0 0 1-.508.313.62.62 0 0 1-.547-.312L12.5 22.14v2.734a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.273.156-.508.43-.586' />
    </g>
    <defs>
      <clipPath id='b6d8db903b9bfe14fedbc2f8f972d335__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXmlLgFillIcon);
export default ForwardRef;
