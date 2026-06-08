import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneListRegularIcon = (
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
    <path d='M7.875 10.875h1.25v-1.25h-1.25zm-1.25-1.562c0-.508.39-.938.938-.938h1.875a.95.95 0 0 1 .937.938v1.874c0 .547-.43.938-.937.938H7.562c-.546 0-.937-.39-.937-.937zm6.25.312h12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 6.25h12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 6.25h12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m-5-6.25v1.25h1.25v-1.25zm-.312-1.25h1.875a.95.95 0 0 1 .937.938v1.874c0 .547-.43.938-.937.938H7.562c-.546 0-.937-.39-.937-.937v-1.875c0-.508.39-.938.938-.938m.312 8.75h1.25v-1.25h-1.25zm-1.25-1.562c0-.508.39-.938.938-.938h1.875a.95.95 0 0 1 .937.938v1.875c0 .546-.43.937-.937.937H7.562c-.546 0-.937-.39-.937-.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneListRegularIcon);
export default ForwardRef;
