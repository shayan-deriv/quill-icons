import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 27c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75zM3 6h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m7.125 13.125v6A1.11 1.11 0 0 1 9 26.25c-.656 0-1.125-.469-1.125-1.125v-6C7.875 18.515 8.344 18 9 18c.61 0 1.125.516 1.125 1.125m4.125 1.5v4.5a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-4.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M6 22.125v3a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='9ddfcb2e8d1314d15d2dddf1649a6a23__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnXlBoldIcon);
export default ForwardRef;
