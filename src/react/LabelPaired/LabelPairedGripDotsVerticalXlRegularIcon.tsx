import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5q-.046-.703-.75-.75-.703.047-.75.75.046.703.75.75.704-.047.75-.75m-3 0q.046-1.266 1.125-1.969 1.125-.562 2.25 0Q4.454 9.234 4.5 10.5q-.046 1.266-1.125 1.969-1.125.562-2.25 0Q.047 11.766 0 10.5M3 18q-.046-.704-.75-.75-.703.046-.75.75.046.704.75.75.704-.046.75-.75m-3 0q.046-1.266 1.125-1.969 1.125-.562 2.25 0Q4.454 16.734 4.5 18q-.046 1.266-1.125 1.969-1.125.563-2.25 0Q.047 19.266 0 18m2.25 8.25q.704-.046.75-.75-.046-.704-.75-.75-.703.046-.75.75.046.704.75.75m0-3q1.266.046 1.969 1.125.563 1.125 0 2.25-.703 1.079-1.969 1.125-1.266-.046-1.969-1.125-.562-1.125 0-2.25.703-1.079 1.969-1.125M10.5 10.5q-.047-.703-.75-.75-.703.047-.75.75.047.703.75.75.703-.047.75-.75m-3 0q.046-1.266 1.125-1.969 1.125-.562 2.25 0Q11.953 9.234 12 10.5q-.047 1.266-1.125 1.969-1.125.562-2.25 0Q7.547 11.766 7.5 10.5m2.25 8.25q.703-.046.75-.75-.047-.704-.75-.75-.703.046-.75.75.047.704.75.75m0-3q1.266.046 1.969 1.125.562 1.125 0 2.25-.703 1.079-1.969 1.125-1.266-.046-1.969-1.125-.562-1.125 0-2.25.703-1.078 1.969-1.125m.75 9.75q-.047-.704-.75-.75-.703.046-.75.75.047.704.75.75.703-.046.75-.75m-3 0q.046-1.266 1.125-1.969 1.125-.562 2.25 0 1.078.703 1.125 1.969-.047 1.266-1.125 1.969-1.125.563-2.25 0Q7.547 26.766 7.5 25.5' />
    </g>
    <defs>
      <clipPath id='3116faa0385c0af23cb17b34a25be625__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlRegularIcon);
export default ForwardRef;
