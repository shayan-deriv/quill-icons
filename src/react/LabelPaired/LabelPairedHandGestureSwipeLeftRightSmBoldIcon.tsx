import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6.566c.602 0 1.094.493 1.094 1.094V9.3h.136c.41 0 .766.247.957.575.083-.027.165-.027.274-.027.383 0 .738.246.93.547h.164c.601 0 1.093.492 1.093 1.093v1.778c0 1.148-.93 2.05-2.05 2.05h-2.16c-.465 0-.903-.136-1.313-.355l-.055-.027c-.793-.465-1.258-1.313-1.258-2.243v-.164c0-.437.165-.847.465-1.12l.356-.329c.082-.055.164-.137.273-.191V7.66A1.08 1.08 0 0 1 9 6.566M8.727 7.66v4.785a.294.294 0 0 1-.274.274.274.274 0 0 1-.273-.274v-.71l-.328.273c-.165.137-.22.3-.22.52v.163c0 .63.329 1.23.876 1.532l.027.027c.274.164.602.246.902.246h2.16c.657 0 1.231-.547 1.231-1.23v-1.778a.294.294 0 0 0-.273-.273c-.082 0-.137.027-.192.055a.44.44 0 0 1-.41.054.43.43 0 0 1-.219-.355.274.274 0 0 0-.273-.274c-.11 0-.164.028-.219.082-.11.137-.3.22-.465.137a.38.38 0 0 1-.273-.355v-.137a.274.274 0 0 0-.274-.274c-.109 0-.164.028-.218.082-.11.137-.301.22-.465.137a.386.386 0 0 1-.274-.383V7.66A.294.294 0 0 0 9 7.387a.274.274 0 0 0-.273.273m4.812 1.613 1.477-1.476c.164-.164.164-.41 0-.547l-1.559-1.586a.45.45 0 0 0-.574 0 .45.45 0 0 0 0 .574l.902.875h-2.652c-.219 0-.383.192-.383.41 0 .22.164.383.383.383h2.652l-.793.793a.396.396 0 0 0 0 .574c.164.137.41.137.547 0m-9.105 0-1.45-1.476c-.164-.164-.164-.41 0-.547l1.559-1.586c.164-.137.41-.137.547 0a.396.396 0 0 1 0 .574l-.875.875h2.652c.219 0 .383.192.383.41a.374.374 0 0 1-.383.383H4.215l.793.793a.45.45 0 0 1 0 .574.45.45 0 0 1-.574 0' />
    </g>
    <defs>
      <clipPath id='6a1c39bd5309220d39d672d6a40c0a28__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightSmBoldIcon);
export default ForwardRef;
