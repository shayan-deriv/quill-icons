import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterXlBoldIcon = (
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
    <g>
      <path d='M3 6h10.5q.657 0 1.078.422Q15 6.843 15 7.5v3q0 .657-.422 1.078Q14.157 12 13.5 12H9.75v1.5h10.125q1.172 0 1.969.75.843.703 1.031 1.828l1.078 7.735Q24 24 24 24.234V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27v-3q0-.094.047-.187l1.078-7.735q.188-1.125 1.031-1.828.797-.75 1.969-.75H6.75V12H3q-.656 0-1.078-.422Q1.5 11.157 1.5 10.5v-3q0-.656.422-1.078Q2.343 6 3 6m1.5 2.25q-.703.047-.75.75.046.703.75.75H12q.703-.047.75-.75-.047-.703-.75-.75zM2.25 27q.046.704.75.75h18q.704-.046.75-.75v-.75H2.25zm18.375-10.594q-.094-.61-.703-.656H4.125q-.655.047-.75.656L2.297 24H21.75zm-15.375.469q1.032.094 1.125 1.125-.093 1.032-1.125 1.125Q4.22 19.032 4.125 18q.095-1.03 1.125-1.125M8.625 18q.095-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125Q8.72 19.032 8.625 18M7.5 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125M13.125 18q.095-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125M12 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125M17.625 18q.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125M16.5 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='cd5a0588b528cc0c257ce96ec9c1316e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterXlBoldIcon);
export default ForwardRef;
