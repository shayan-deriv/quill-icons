import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneScissorsRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M25.844 23.766c-.26.286-.547.312-.86.078l-5.937-5.04c-.287-.286-.313-.585-.078-.898.26-.26.547-.273.86-.039l5.937 5.04c.286.26.312.546.078.859M17.21 15.68l7.773-6.524c.313-.234.6-.208.86.078.234.313.208.6-.078.86l-11.602 9.804c.39.651.586 1.394.586 2.227-.026 1.25-.456 2.279-1.29 3.086-.806.833-1.835 1.263-3.085 1.289-1.25-.026-2.279-.456-3.086-1.29-.833-.806-1.263-1.835-1.289-3.085.026-1.25.456-2.279 1.29-3.086.806-.833 1.835-1.263 3.085-1.289 1.172.026 2.162.417 2.969 1.172l2.89-2.422-2.89-2.422c-.807.755-1.797 1.146-2.969 1.172-1.25-.026-2.279-.456-3.086-1.29-.833-.806-1.263-1.835-1.289-3.085.026-1.25.456-2.279 1.29-3.086.806-.833 1.835-1.263 3.085-1.289 1.25.026 2.279.456 3.086 1.29.833.806 1.263 1.835 1.289 3.085 0 .833-.195 1.576-.586 2.227zM10.375 14c1.172-.026 2.07-.547 2.695-1.562.573-1.042.573-2.084 0-3.126-.625-1.015-1.523-1.536-2.695-1.562-1.172.026-2.07.547-2.695 1.563-.573 1.041-.573 2.083 0 3.124.625 1.016 1.523 1.537 2.695 1.563m0 5c-1.172.026-2.07.547-2.695 1.563-.573 1.041-.573 2.083 0 3.125.625 1.015 1.523 1.536 2.695 1.562 1.172-.026 2.07-.547 2.695-1.562.573-1.042.573-2.084 0-3.125-.625-1.016-1.523-1.537-2.695-1.563' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneScissorsRegularIcon);
export default ForwardRef;
