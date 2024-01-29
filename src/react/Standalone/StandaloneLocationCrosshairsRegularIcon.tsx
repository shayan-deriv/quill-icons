import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLocationCrosshairsRegularIcon = (
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
    <path d='M16 6.5q.585.039.625.625v1.914q2.774.274 4.688 2.149 1.875 1.913 2.148 4.687h1.914q.585.039.625.625-.039.585-.625.625h-1.914q-.273 2.774-2.148 4.688-1.914 1.875-4.688 2.148v1.914q-.039.585-.625.625-.585-.039-.625-.625v-1.914q-2.773-.273-4.687-2.148-1.876-1.914-2.149-4.688H6.625Q6.04 17.086 6 16.5q.039-.585.625-.625h1.914q.274-2.773 2.149-4.687 1.913-1.876 4.687-2.149V7.125q.039-.585.625-.625m-6.25 10q0 1.68.82 3.125a6.5 6.5 0 0 0 2.305 2.305q1.485.82 3.125.82a6.37 6.37 0 0 0 3.125-.82 6.5 6.5 0 0 0 2.305-2.305q.82-1.445.82-3.125t-.82-3.125a6.5 6.5 0 0 0-2.305-2.305A6.37 6.37 0 0 0 16 10.25a6.37 6.37 0 0 0-3.125.82 6.5 6.5 0 0 0-2.305 2.305 6.2 6.2 0 0 0-.82 3.125m8.75 0q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.25 0q0-1.015.508-1.875A3.759 3.759 0 0 1 16 12.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.76 3.76 0 0 1-3.242-1.875 3.6 3.6 0 0 1-.508-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsRegularIcon);
export default ForwardRef;
