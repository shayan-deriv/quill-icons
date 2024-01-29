import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2LgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.125 8q-.586.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75Q7.461 8.04 6.875 8zm-1.875.625q.039-.781.547-1.328.546-.508 1.328-.547h3.75q.781.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zM3.125 18q-.586.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625zm-1.875.625q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.781.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zM16.875 8h-3.75q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625m-3.75-1.25h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.781.547-1.328.546-.508 1.328-.547m0 11.25q-.585.039-.625.625v3.75q.039.585.625.625h3.75q.585-.039.625-.625v-3.75q-.039-.585-.625-.625zm-1.875.625q.039-.78.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
    </g>
    <defs>
      <clipPath id='383ac4b58c5e8dfd43a535a626e9b0d0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2LgRegularIcon);
export default ForwardRef;
