import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyInfo2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333' clipPath='url(#9609822606755843cddd65659352a591__a)'>
      <path d='M8 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
      <path
        fillRule='evenodd'
        d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='9609822606755843cddd65659352a591__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyInfo2pxIcon);
export default ForwardRef;
