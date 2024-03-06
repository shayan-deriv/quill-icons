import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2CaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25Q4.477 5.023 4.125 5zM.75 5.375q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zM1.875 11q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25q-.023-.352-.375-.375zm-1.125.375q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zM10.125 5h-2.25q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25q-.023-.352-.375-.375m-2.25-.75h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.328-.304.797-.328m0 6.75q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25q-.023-.352-.375-.375zm-1.125.375q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797z' />
    </g>
    <defs>
      <clipPath id='ef44374e2bf71399a8ab70aedbed4265__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2CaptionRegularIcon);
export default ForwardRef;
