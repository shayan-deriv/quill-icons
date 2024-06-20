import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 5.375h-2.25v2.25h2.25zM1.375 4.25h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 7.625v-2.25c0-.61.492-1.125 1.125-1.125m2.25 7.125h-2.25v2.25h2.25zm-2.25-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625v-2.25c0-.61.492-1.125 1.125-1.125m6-4.875v2.25h2.25v-2.25zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.25 7.625zm-4.312.938c0-.188.164-.375.375-.375h.374c.188 0 .376.187.376.375v.375c0 .21-.188.375-.376.375h-.374a.37.37 0 0 1-.376-.375zm.375 5.625h.374c.188 0 .376.187.376.374v.376c0 .21-.188.374-.376.374h-.374a.37.37 0 0 1-.376-.374v-.376c0-.187.165-.374.375-.374m5.624-5.626c0-.187.165-.375.375-.375h.376c.187 0 .374.188.374.375v.375c0 .211-.187.375-.374.375h-.376a.37.37 0 0 1-.374-.375zM6.25 10.625c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v1.5c0 .21-.187.375-.375.375h-.75a.37.37 0 0 1-.375-.375zM8.875 14c.188 0 .375.188.375.375 0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m1.5 0c.188 0 .375.188.375.375 0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='c515371b7789c9eec256ac2673895107__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeCaptionBoldIcon);
export default ForwardRef;
