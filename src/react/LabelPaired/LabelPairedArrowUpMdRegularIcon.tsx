import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m6.344 5.156 5.5 5.5q.312.345 0 .688-.345.312-.688 0L6.5 6.719V18.5q-.03.47-.5.5-.469-.03-.5-.5V6.719L.844 11.344q-.345.312-.688 0-.312-.345 0-.688l5.5-5.5q.345-.312.688 0' />
    </g>
    <defs>
      <clipPath id='5a15cb1b126991660fdd81d693a456a4__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpMdRegularIcon);
export default ForwardRef;
