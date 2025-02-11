import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketSoftCommodityCottonIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#73D089'
      d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
    />
    <path
      fill='#fff'
      d='M18.94 17.835c-.956.605-1.666 1.409-2.148 2.082.281-.624.53-1.423.53-2.293 0-1.997-1.309-3.615-1.309-3.615s-1.308 1.618-1.308 3.615c0 .923.28 1.765.58 2.404-.48-.695-1.216-1.554-2.225-2.194-2.004-1.269-4.328-1.192-4.328-1.192s.924 2.135 2.927 3.404c1.385.876 2.922 1.11 3.74 1.172V24h1.202v-2.782c.818-.061 2.355-.296 3.74-1.172 2.003-1.27 2.926-3.404 2.926-3.404s-2.324-.076-4.327 1.193'
    />
    <path
      fill='#fff'
      d='M22.628 11.944a3.62 3.62 0 0 0-3.046-1.038 3.63 3.63 0 0 0-1.1-1.942A3.63 3.63 0 0 0 16.012 8c-.918 0-1.797.343-2.472.967a3.64 3.64 0 0 0-1.098 1.943 3.621 3.621 0 0 0-3.07 1.034 3.62 3.62 0 0 0-1.068 2.578c0 .545.12 1.072.345 1.552.273.023.606.063.977.132a2.86 2.86 0 0 1-.548-1.684 2.875 2.875 0 0 1 3.592-2.78l.443.114.039-.457a2.887 2.887 0 0 1 2.86-2.625c1.48 0 2.733 1.15 2.86 2.62l.04.452.44-.11a2.874 2.874 0 0 1 3.57 2.785c0 .63-.203 1.212-.548 1.685.371-.068.704-.109.977-.132.225-.48.345-1.007.345-1.552 0-.974-.38-1.89-1.068-2.578'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketSoftCommodityCottonIcon);
export default ForwardRef;
