import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMemoCircleCheckBoldIcon = (
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
    <path d='M7.25 8.375q-.585.039-.625.625v15q.039.585.625.625h8.594a7.1 7.1 0 0 0 1.797 1.836q-.195.039-.391.039h-10q-1.055-.039-1.758-.742Q4.79 25.054 4.75 24V9q.039-1.055.742-1.758T7.25 6.5h10q1.055.039 1.758.742.703.704.742 1.758v5.273a6.1 6.1 0 0 0-1.875.86V9q-.039-.585-.625-.625zM9.438 11.5h5.624q.86.078.938.938-.079.858-.937.937H9.436q-.858-.079-.937-.937.078-.86.938-.938m0 3.75h5.624q.86.078.938.938-.079.858-.937.937H9.436q-.858-.078-.937-.937.078-.86.938-.938m0 3.75h1.874q.86.078.938.938-.079.858-.937.937H9.437q-.858-.078-.937-.937.078-.86.938-.938m17.812 1.875a5.54 5.54 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.7 5.7 0 0 1-2.813.742 5.7 5.7 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07A5.54 5.54 0 0 1 16 20.875q0-1.524.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.7 5.7 0 0 1 2.813-.743q1.485 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07q.742 1.29.742 2.813m-3.008-1.68q-.43-.39-.86 0L21 21.54l-1.133-1.094q-.43-.39-.86 0-.39.43 0 .86l1.563 1.562q.43.39.86 0l2.812-2.812q.39-.43 0-.86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMemoCircleCheckBoldIcon);
export default ForwardRef;
