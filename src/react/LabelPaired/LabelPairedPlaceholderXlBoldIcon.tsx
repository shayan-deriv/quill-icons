import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.125 7.5h.75C5.485 7.5 6 8.016 6 8.625A1.11 1.11 0 0 1 4.875 9.75h-.75a1.85 1.85 0 0 0-1.875 1.875v.75A1.11 1.11 0 0 1 1.125 13.5C.469 13.5 0 13.031 0 12.375v-.75A4.13 4.13 0 0 1 4.125 7.5m-3 7.5c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 1.125 21C.469 21 0 20.531 0 19.875v-3.75C0 15.515.469 15 1.125 15m18.75 0c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 19.875 21c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125m0-1.5c-.656 0-1.125-.469-1.125-1.125v-.75a1.88 1.88 0 0 0-1.875-1.875h-.75C15.469 9.75 15 9.281 15 8.625c0-.61.469-1.125 1.125-1.125h.75C19.125 7.5 21 9.375 21 11.625v.75a1.11 1.11 0 0 1-1.125 1.125M21 23.625v.75a4.13 4.13 0 0 1-4.125 4.125h-.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h.75a1.85 1.85 0 0 0 1.875-1.875v-.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m-18.75 0v.75c0 1.078.797 1.875 1.875 1.875h.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 4.875 28.5h-.75A4.1 4.1 0 0 1 0 24.375v-.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M8.625 28.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125zM7.5 8.625c0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='97401139eaff3d3a4b7d9f2d3c3273ba__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderXlBoldIcon);
export default ForwardRef;
