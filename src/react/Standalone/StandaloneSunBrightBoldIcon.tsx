import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSunBrightBoldIcon = (
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
    <path d='M16.938 7.438v2.5q-.079.858-.938.937-.86-.079-.937-.937v-2.5q.078-.86.937-.938.859.078.938.938m6.132 3.32-1.758 1.758q-.663.546-1.328 0-.546-.665 0-1.328l1.758-1.758q.665-.547 1.328 0 .547.663 0 1.328M10.258 9.43l1.758 1.758q.546.663 0 1.328-.665.546-1.328 0L8.93 10.758q-.547-.665 0-1.328.663-.547 1.328 0m-3.32 6.133h2.5q.858.078.937.937-.079.859-.937.938h-2.5q-.86-.079-.938-.938.078-.86.938-.937m15.625 0h2.5q.858.078.937.937-.079.859-.937.938h-2.5q-.86-.079-.938-.938.078-.86.938-.937m-10.547 6.25-1.758 1.757q-.665.547-1.328 0-.547-.663 0-1.328l1.758-1.758q.663-.546 1.328 0 .546.665 0 1.328m9.297-1.329 1.757 1.758q.547.665 0 1.328-.663.547-1.328 0l-1.758-1.758q-.546-.663 0-1.328.665-.546 1.328 0m-4.375 2.578v2.5q-.079.86-.938.938-.86-.079-.937-.937v-2.5q.078-.86.937-.938.859.078.938.938M18.5 16.5q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.875 0q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 16 12.125q1.171 0 2.188.586 1.015.585 1.601 1.601.585 1.017.586 2.188 0 1.171-.586 2.188a4.3 4.3 0 0 1-1.602 1.601 4.3 4.3 0 0 1-2.187.586q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSunBrightBoldIcon);
export default ForwardRef;
