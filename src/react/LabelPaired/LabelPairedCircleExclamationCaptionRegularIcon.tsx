import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleExclamationCaptionRegularIcon = (
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
      <path d='M6 4.25a5.4 5.4 0 0 0-2.625.703 5.4 5.4 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.4 5.4 0 0 0 1.922 1.922A5.4 5.4 0 0 0 6 14.75a5.4 5.4 0 0 0 2.625-.703 5.4 5.4 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.4 5.4 0 0 0-1.922-1.922A5.4 5.4 0 0 0 6 4.25M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m0-9q.352.023.375.375v3q-.023.352-.375.375-.352-.023-.375-.375v-3Q5.648 6.523 6 6.5m.563 5.25q-.048.515-.563.563-.516-.048-.562-.563.045-.516.562-.562.516.045.563.562' />
    </g>
    <defs>
      <clipPath id='c82f5ec3cf8cfec65567dc2936cc7209__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleExclamationCaptionRegularIcon);
export default ForwardRef;
