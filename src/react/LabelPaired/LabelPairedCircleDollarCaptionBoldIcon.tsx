import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarCaptionBoldIcon = (
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
      <path d='M10.875 9.5q0-1.336-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.84 4.84 0 0 0 6 4.625q-1.29 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.67 4.67 0 0 0 1.125 9.5q0 1.335.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.84 4.84 0 0 0 6 14.376q1.29 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.7 4.7 0 0 0 .657-2.438M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6.492-2.86v.329q.329.047.68.14a1 1 0 0 1 .117.047q.446.164.375.633-.187.422-.633.352-.023-.024-.047-.024-.046 0-.07-.023a5 5 0 0 0-.492-.117 1.7 1.7 0 0 0-.961.093.5.5 0 0 0-.281.258q-.094.165.117.328.351.188.75.281h.023a.2.2 0 0 0 .094.024q.025.024.07.023.61.14 1.172.47.704.515.563 1.358-.188.798-.89 1.055a1.9 1.9 0 0 1-.587.14v.376q-.047.445-.515.492-.445-.047-.493-.492v-.422a11 11 0 0 1-1.007-.281q-.423-.187-.329-.657.188-.42.633-.304.048 0 .094.023.047 0 .094.024.398.14.797.234.609.07.937-.07a.5.5 0 0 0 .281-.282q.048-.21-.14-.351a2.2 2.2 0 0 0-.82-.305l-.141-.047-.024-.023A3.8 3.8 0 0 1 4.734 9.5q-.702-.469-.586-1.312.212-.774.915-1.055a3 3 0 0 1 .421-.117V6.64q.048-.47.493-.516.468.046.515.516' />
    </g>
    <defs>
      <clipPath id='3047c2a68ada16f4459d1d801dcc17e9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarCaptionBoldIcon);
export default ForwardRef;
