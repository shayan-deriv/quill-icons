import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.25q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.586-.039.625-.625m-2.5 0q.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64-.04 1.055-.937 1.64-.938.47-1.876 0Q.04 10.306 0 9.25m2.5 6.25q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.586-.039.625-.625m-2.5 0q.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64-.04 1.055-.937 1.64-.938.47-1.876 0Q.04 16.556 0 15.5m1.875 6.875q.586-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625m0-2.5q1.055.039 1.64.938.47.938 0 1.875-.585.898-1.64.937-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938M8.75 9.25q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.585-.039.625-.625m-2.5 0q.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64-.04 1.055-.937 1.64-.938.47-1.876 0-.897-.585-.937-1.64m1.875 6.875q.585-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625m0-2.5q1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938m.625 8.125q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.585-.039.625-.625m-2.5 0q.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64-.04 1.055-.937 1.64-.938.47-1.876 0-.897-.585-.937-1.64' />
    </g>
    <defs>
      <clipPath id='41042aed40d517455035c284dac2f224__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalLgRegularIcon);
export default ForwardRef;
