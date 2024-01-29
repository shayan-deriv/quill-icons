import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeMoneyProtectionIcon = (
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
      <path d='M13.994 16.667c.366 0 .666-.3.666-.667s-.3-.667-.667-.667H12.66v-.666c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v.666h-.667c-.733 0-1.333.6-1.333 1.334V18c0 .733.6 1.333 1.333 1.333h2.667v1.334H9.993c-.366 0-.666.3-.666.666s.3.667.666.667h1.334v.667c0 .366.3.666.666.666s.667-.3.667-.666V22h.667c.733 0 1.333-.6 1.333-1.333v-1.334c0-.733-.6-1.333-1.333-1.333H10.66v-1.333z' />
      <path d='M20.474 9.667c-1.867-.454-6.394-1.64-8.107-2.78a.68.68 0 0 0-.74 0c-1.714 1.14-6.24 2.326-8.107 2.78A2 2 0 0 0 2 11.607v9.053c0 8.247 9.793 9.973 9.894 9.993.033 0 .073.007.106.007.034 0 .073 0 .107-.007.1-.013 9.893-1.746 9.893-9.993v-9.053c0-.927-.626-1.72-1.52-1.94zm.186 11c0 2.96-1.447 5.313-4.306 6.986-1.927 1.134-3.887 1.574-4.36 1.667-1.014-.2-8.667-1.96-8.667-8.653v-9.054c0-.306.206-.573.506-.646 2.254-.547 6.18-1.607 8.16-2.74 1.98 1.133 5.907 2.186 8.16 2.74.3.073.507.34.507.646zM26.327 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.654 0-3-1.347-3-3s1.346-3 3-3 3 1.346 3 3-1.347 3-3 3' />
      <path d='m26.854 4.86-.86.86-.194-.193a.664.664 0 1 0-.94.94l.667.666c.133.134.3.194.473.194.174 0 .34-.067.474-.194L27.807 5.8a.664.664 0 1 0-.94-.94z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMoneyProtectionIcon);
export default ForwardRef;
