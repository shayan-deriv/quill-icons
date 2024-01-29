import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleSterlingRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10.156-4.375q-.625 0-1.015.43-.39.39-.43 1.015l.039 1.68h1.875q.585.039.625.625-.039.585-.625.625H14.75a6 6 0 0 1-.703 2.5h4.765q.587.039.625.625-.039.585-.625.625h-5.937a.61.61 0 0 1-.547-.312.67.67 0 0 1 .04-.665l.35-.507q.705-1.055.782-2.266h-.625q-.585-.039-.625-.625.039-.585.625-.625h.625l-.04-1.68q.04-1.133.782-1.914.742-.742 1.914-.781.626 0 1.172.273l.82.43q.508.313.274.82-.273.508-.82.274l-.82-.39a1.4 1.4 0 0 0-.626-.157' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSterlingRegularIcon);
export default ForwardRef;
