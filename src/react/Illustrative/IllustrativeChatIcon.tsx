import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeChatIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M28 12.667h-4c-.367 0-.667.3-.667.666s.3.667.667.667h4c.367 0 .667.3.667.667v8.666c0 .367-.3.667-.667.667h-2c-.367 0-.667.3-.667.667v.753l-1.22-1.22a.66.66 0 0 0-.473-.193H12a.67.67 0 0 1-.667-.667v-4c0-.367-.3-.667-.666-.667s-.667.3-.667.667v4c0 1.1.9 2 2 2h11.36l2.167 2.167A.67.67 0 0 0 26 27.7a.56.56 0 0 0 .253-.053.67.67 0 0 0 .414-.614V25.34H28c1.1 0 2-.9 2-2v-8.667c0-1.1-.9-2-2-2z' />
      <path d='M22 15.333V6.667c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8.666c0 1.1.9 2 2 2h1.333v1.694c0 .266.16.513.414.613a.66.66 0 0 0 .726-.14l2.167-2.167H20c1.1 0 2-.9 2-2M8.36 16a.7.7 0 0 0-.473.193l-1.22 1.22v-.753c0-.367-.3-.667-.667-.667H4a.67.67 0 0 1-.667-.666v-8.66C3.333 6.3 3.633 6 4 6h16c.367 0 .667.3.667.667v8.666c0 .367-.3.667-.667.667z' />
      <path d='M16.667 8.667h-10c-.367 0-.667.3-.667.666s.3.667.667.667h10c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666M13.333 12H6.667C6.3 12 6 12.3 6 12.667c0 .366.3.666.667.666h6.666c.367 0 .667-.3.667-.666S13.7 12 13.333 12' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeChatIcon);
export default ForwardRef;
