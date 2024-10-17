import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedLgBoldIcon = (
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
      <path d='m19.648 8.43-6.562 5.625a.996.996 0 0 1-1.211 0l-4.453-3.907-5.977 3.946a.897.897 0 0 1-1.289-.235c-.312-.43-.195-1.015.235-1.328l6.562-4.375a.94.94 0 0 1 1.133.078l4.414 3.868 5.938-5.118a.974.974 0 0 1 1.328.118.974.974 0 0 1-.118 1.328M7.813 22.375v-6.25a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v6.25c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M7.5 14.25c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875m-4.687 8.125v-2.5a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v2.5c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M2.5 18c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-2.5C.625 18.859 1.445 18 2.5 18m10.313.625a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v3.75c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313zm-2.188 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875zm7.188 3.75v-6.25a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v6.25c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M17.5 14.25c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875' />
    </g>
    <defs>
      <clipPath id='cc89c944af62f3168c254da391ed9462__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedLgBoldIcon);
export default ForwardRef;
