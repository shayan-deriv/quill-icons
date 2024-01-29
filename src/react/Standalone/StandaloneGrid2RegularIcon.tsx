import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGrid2RegularIcon = (
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
    <path d='M9.125 9q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625zm-1.875.625q.039-.781.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zM9.125 19q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625zm-1.875.625q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zM22.875 9h-3.75q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625m-3.75-1.25h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.781.547-1.328.546-.508 1.328-.547m0 11.25q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625zm-1.875.625q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGrid2RegularIcon);
export default ForwardRef;
