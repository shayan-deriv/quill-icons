import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedListXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M1.875 8.25h2.25c.61 0 1.125.516 1.125 1.125v2.25a1.11 1.11 0 0 1-1.125 1.125h-2.25c-.656 0-1.125-.469-1.125-1.125v-2.25c0-.61.469-1.125 1.125-1.125m6.75 1.125h14.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H8.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m0 7.5h14.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H8.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m0 7.5h14.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H8.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m-7.875-7.5c0-.61.469-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25a1.11 1.11 0 0 1-1.125 1.125h-2.25c-.656 0-1.125-.469-1.125-1.125zm1.125 6.375h2.25c.61 0 1.125.516 1.125 1.125v2.25a1.11 1.11 0 0 1-1.125 1.125h-2.25c-.656 0-1.125-.469-1.125-1.125v-2.25c0-.61.469-1.125 1.125-1.125' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedListXlBoldIcon);
export default ForwardRef;
