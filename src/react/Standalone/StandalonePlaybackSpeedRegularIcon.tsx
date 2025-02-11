import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlaybackSpeedRegularIcon = (
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
    <path d='M24.875 16.5c0 4.766-3.555 8.71-8.125 9.297v-1.25c3.867-.586 6.875-3.985 6.875-8.047s-3.008-7.422-6.875-8.008v-1.25c4.57.586 8.125 4.531 8.125 9.258m-14.18-6.562-.898-.86a8.9 8.9 0 0 1 4.453-1.836v1.25a8 8 0 0 0-3.555 1.445m-1.758 1.796a7.63 7.63 0 0 0-1.484 3.516h-1.25a8.9 8.9 0 0 1 1.836-4.414zm0 9.57-.898.9a8.9 8.9 0 0 1-1.836-4.454h1.25a7.6 7.6 0 0 0 1.484 3.555m5.313 3.243v1.25a8.9 8.9 0 0 1-4.453-1.836l.898-.898a7.6 7.6 0 0 0 3.555 1.484m-.937-12.969c.195-.117.468-.078.664.04l6.25 4.374a.67.67 0 0 1 .273.508c0 .234-.117.43-.273.547l-6.25 4.375a.8.8 0 0 1-.665.039.69.69 0 0 1-.312-.586v-8.75c0-.234.117-.43.313-.547m.937 1.758v6.367l4.531-3.203z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlaybackSpeedRegularIcon);
export default ForwardRef;
