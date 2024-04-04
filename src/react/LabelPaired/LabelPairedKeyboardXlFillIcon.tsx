import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3m.75 3c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zM3 17.25v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75M3.75 21c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zm3.75-8.25v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75m.75 3.75c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zm-.75 5.25v1.5c0 .422.328.75.75.75h10.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75H8.25c-.422 0-.75.375-.75.75M12.75 12c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zM12 17.25v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75M17.25 12c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zm-.75 5.25v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75M21.75 12c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75zM21 17.25v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75m.75 3.75c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75z' />
    </g>
    <defs>
      <clipPath id='200cbe6f33d0656a06537cde8051c5ad__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlFillIcon);
export default ForwardRef;
