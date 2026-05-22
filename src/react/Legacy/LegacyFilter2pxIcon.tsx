import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFilter2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m2 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m3 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyFilter2pxIcon);
export default ForwardRef;
