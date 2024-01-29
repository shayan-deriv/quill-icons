import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleArrowDownLeftBoldIcon = (
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
    <path d='M16 8.375q-2.226 0-4.062 1.094-1.837 1.055-2.97 2.969A8.06 8.06 0 0 0 7.876 16.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968 1.835 1.094 4.062 1.094t4.063-1.094q1.836-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q18.226 8.377 16 8.376M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m2.5-5.625h-5.937q-.86-.078-.938-.937v-6.25q.078-.86.938-.938.858.078.937.938v3.984l5.273-5.274q.665-.546 1.329 0 .546.664 0 1.329L14.828 19H18.5q.859.078.938.938-.079.858-.938.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowDownLeftBoldIcon);
export default ForwardRef;
