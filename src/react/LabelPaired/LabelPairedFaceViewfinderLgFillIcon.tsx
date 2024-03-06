import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderLgFillIcon = (
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
      <path d='M2.188 5.5h3.125q.859.078.937.938-.078.859-.937.937H2.188q-.274.039-.313.313v3.125q-.079.858-.937.937-.86-.079-.938-.937V7.687q.039-.937.625-1.562.626-.585 1.563-.625m12.5 0h3.124q.938.039 1.563.625.585.625.625 1.563v3.125q-.078.858-.937.937-.86-.079-.938-.937V7.687q-.039-.273-.312-.312h-3.125q-.86-.078-.938-.937.078-.86.938-.938M1.874 20.188v3.125q.039.273.313.312h3.125q.859.078.937.938-.078.858-.937.937H2.188q-.938-.039-1.563-.625Q.04 24.25 0 23.313v-3.125q.078-.86.938-.938.859.078.937.938m18.125 0v3.125q-.039.937-.625 1.562-.625.585-1.562.625h-3.125q-.86-.079-.938-.937.078-.86.938-.938h3.124q.274-.039.313-.312v-3.125q.078-.86.938-.938.858.078.937.938M3.75 15.5q0-1.68.82-3.125a6.5 6.5 0 0 1 2.305-2.305A6.37 6.37 0 0 1 10 9.25q1.64 0 3.125.82a6.5 6.5 0 0 1 2.305 2.305q.82 1.445.82 3.125t-.82 3.125a6.5 6.5 0 0 1-2.305 2.305q-1.485.82-3.125.82a6.37 6.37 0 0 1-3.125-.82 6.5 6.5 0 0 1-2.305-2.305 6.2 6.2 0 0 1-.82-3.125m5-1.562q-.078-.86-.937-.938-.86.078-.938.938.078.858.938.937.858-.079.937-.937m3.438.937q.858-.079.937-.937-.079-.86-.937-.938-.86.078-.938.938.078.858.938.937m-5.547 2.07q-.39.43-.04.86Q7.97 19.21 10 19.25q2.031-.04 3.398-1.445.352-.43-.039-.86-.429-.39-.859 0Q11.524 17.961 10 18q-1.485-.04-2.46-1.055-.47-.39-.9-.039z' />
    </g>
    <defs>
      <clipPath id='f3d2f8bcb799cffb7b6c7607310bbfbd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderLgFillIcon);
export default ForwardRef;
