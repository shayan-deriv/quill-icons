import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCambodiaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#0028A4' d='M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#E3001A' d='M24 4H0v8h24z' />
    <path fill='#0028A4' d='M2 0h20a2 2 0 0 1 2 2v2H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M9 5h.6l.6 1.2H9zm1.2 1.2h1.2v1.2h-1.2zM9 7.4h1.2v1.2H9zM7.8 8.6H9v1.2H7.8zm0 1.2H9V11H7.8zm-.6 0h.6V11H6.6zm3-1.2h2.4V11h-2.4zM15 5h-.6l-.6 1.2H15zm-1.2 1.2h-1.2v1.2h1.2zM15 7.4h-1.2v1.2H15zm1.2 1.2H15v1.2h1.2zm0 1.2H15V11h1.2zm.6 0h-.6V11h1.2zm-3-1.2h-1.2V11h1.2z'
      clipRule='evenodd'
    />
    <path
      fill='#F5DDE0'
      fillRule='evenodd'
      d='M10.2 7.4h1.2v1.2h-1.2zM9 8.6h1.2V11H9zm0-2.4h1.2v1.2H9zm-.6 1.2H9v1.2H7.8zm5.4 0h-1.2v1.2h1.2zM15 8.6h-1.2V11H15zm0-2.4h-1.2v1.2H15zm.6 1.2H15v1.2h1.2zm-3-1.2h-1.2v2.4h1.2z'
      clipRule='evenodd'
    />
    <path fill='#B4B4B4' fillRule='evenodd' d='M11.4 5h1.2v1.2h-1.2z' clipRule='evenodd' />
  </svg>
);
const ForwardRef = forwardRef(FlagCambodiaIcon);
export default ForwardRef;
