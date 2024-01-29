import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCameraRegularIcon = (
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
    <path d='M13.46 7.75h5.08q1.287.078 1.796 1.29l.39 1.21H23.5q1.055.039 1.758.742T26 12.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-10q.039-1.055.742-1.758T8.5 10.25h2.773l.43-1.21q.47-1.212 1.758-1.29m-.585 1.68-.547 1.64a.65.65 0 0 1-.586.43H8.5q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352h-3.242a.65.65 0 0 1-.586-.43l-.547-1.64a.65.65 0 0 0-.586-.43h-5.078a.65.65 0 0 0-.586.43M16 22.125q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 16 13.375q1.171 0 2.188.586 1.015.585 1.601 1.601.585 1.017.586 2.188 0 1.171-.586 2.188a4.3 4.3 0 0 1-1.602 1.601 4.3 4.3 0 0 1-2.187.586m-3.125-4.375q.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695-.04-1.758-1.562-2.695-1.563-.86-3.125 0-1.524.937-1.563 2.695' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCameraRegularIcon);
export default ForwardRef;
