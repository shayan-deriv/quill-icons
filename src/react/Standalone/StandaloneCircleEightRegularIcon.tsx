import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleEightRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10.469-5q1.133.04 1.875.781.742.742.781 1.875-.04 1.211-.898 1.992 1.171.86 1.21 2.383-.039 1.25-.859 2.11-.86.82-2.11.859h-.937q-1.25-.039-2.11-.86-.819-.858-.858-2.109.039-1.523 1.21-2.383-.858-.78-.898-1.992.04-1.133.781-1.875.742-.742 1.875-.781zm-.938 4.063h.938q.586 0 .976-.43.43-.39.43-.977 0-.585-.43-.976a1.26 1.26 0 0 0-.976-.43h-.938q-.585 0-.976.43-.43.39-.43.976 0 .585.43.977.39.43.976.43m.938 1.25h-.938q-.742 0-1.21.507-.509.469-.508 1.211 0 .743.507 1.211.469.508 1.211.508h.938q.742 0 1.21-.508.51-.469.509-1.21 0-.743-.508-1.212-.469-.508-1.211-.508' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEightRegularIcon);
export default ForwardRef;
