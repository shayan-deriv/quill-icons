import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLanguage1pxIcon = (
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
    <g clipPath='url(#0e310818d34830cc45e605e53c20740a__a)'>
      <path
        fill='#333'
        d='m8 15.794-2.75-3.407H0V0h16v12.387h-5.25zm-7-4.44h4.75L8 14.143l2.25-2.787H15V1.032H1zM11 9.29H3V8.258h8zm2-2.58H3V5.677h10zm0-2.581H3V3.097h10z'
      />
    </g>
    <defs>
      <clipPath id='0e310818d34830cc45e605e53c20740a__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLanguage1pxIcon);
export default ForwardRef;
