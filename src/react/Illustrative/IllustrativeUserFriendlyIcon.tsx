import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeUserFriendlyIcon = (
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
      <path d='M13.44 21.333c0 .367.3.667.667.667H17.9c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-3.793c-.367 0-.667.3-.667.666' />
      <path d='M22.667 12h-1.334v-1.333A3.335 3.335 0 0 0 18 7.333h-4a3.32 3.32 0 0 0-3.073 2.054.7.7 0 0 0-.26-.054H9.333c-3.306 0-6 2.694-6 6v1.334c0 .366.3.666.667.666s.667-.3.667-.666v-1.334a4.67 4.67 0 0 1 4.666-4.666h1.334v2H10c-.367 0-.667.3-.667.666s.3.667.667.667h4c0 1.1-.9 2-2 2h-.667A3.335 3.335 0 0 0 8 19.333c0 1.1-.9 2-2 2-.367 0-.667.3-.667.667s.3.667.667.667a3.335 3.335 0 0 0 3.333-3.334c0-.866.56-1.6 1.334-1.88v3.88A3.335 3.335 0 0 0 14 24.667h4a3.334 3.334 0 0 0 3.333-3.334V20.12A1.99 1.99 0 0 1 22.667 22 3.335 3.335 0 0 0 26 25.333c.367 0 .667-.3.667-.666S26.367 24 26 24c-1.1 0-2-.9-2-2a3.335 3.335 0 0 0-3.333-3.333H20c-1.1 0-2-.9-2-2h4c.367 0 .667-.3.667-.667s-.3-.667-.667-.667h-.667v-2h1.334A4.67 4.67 0 0 1 27.333 18v1.333c0 .367.3.667.667.667s.667-.3.667-.667V18c0-3.307-2.694-6-6-6M18 15.333c-.733 0-1.333.6-1.333 1.334A3.335 3.335 0 0 0 20 20v1.333c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4A3.334 3.334 0 0 0 15.333 14c0-.733-.6-1.333-1.333-1.333h-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4.666z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeUserFriendlyIcon);
export default ForwardRef;
