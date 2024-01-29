import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleNineRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10-3.75q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25M15.844 19q-1.524-.078-2.54-1.133-1.015-1.054-1.054-2.617.039-1.602 1.094-2.656Q14.398 11.539 16 11.5q1.602.039 2.656 1.094 1.055 1.054 1.094 2.656-.04 1.836-1.328 3.086l-3.242 3.008q-.469.351-.899-.04-.351-.468.04-.898z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleNineRegularIcon);
export default ForwardRef;
