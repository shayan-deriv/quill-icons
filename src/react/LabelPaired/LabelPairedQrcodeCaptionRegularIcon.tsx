import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeCaptionRegularIcon = (
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
      <path d='M3.625 5h-2.25A.385.385 0 0 0 1 5.375v2.25c0 .21.164.375.375.375h2.25A.385.385 0 0 0 4 7.625v-2.25A.4.4 0 0 0 3.625 5m-2.25-.75h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 7.625v-2.25c0-.61.492-1.125 1.125-1.125M3.625 11h-2.25a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375h2.25A.385.385 0 0 0 4 13.625v-2.25A.4.4 0 0 0 3.625 11m-2.25-.75h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625v-2.25c0-.61.492-1.125 1.125-1.125m6-5.25A.385.385 0 0 0 7 5.375v2.25c0 .21.164.375.375.375h2.25A.385.385 0 0 0 10 7.625v-2.25A.4.4 0 0 0 9.625 5zm-1.125.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.25 7.625zm0 5.25c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375v1.594H10v-1.594c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.969c0 .21-.187.375-.375.375h-2.25a.37.37 0 0 1-.375-.375V11H7v3.563c0 .21-.187.374-.375.374a.37.37 0 0 1-.375-.374zM2.313 5.938h.374c.188 0 .376.187.376.375v.375c0 .21-.188.375-.376.375h-.374a.37.37 0 0 1-.376-.375v-.375c0-.188.165-.375.375-.375m-.376 6.375c0-.188.165-.376.375-.376h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376zm6.376-6.376h.374c.188 0 .376.188.376.375v.375c0 .211-.188.375-.376.375h-.374a.37.37 0 0 1-.376-.375v-.375c0-.187.165-.375.375-.375M7.75 14c0-.187.164-.375.375-.375H8.5c.188 0 .375.188.375.375v.375c0 .21-.187.375-.375.375h-.375a.37.37 0 0 1-.375-.375zm2.25-.375h.375c.188 0 .375.188.375.375v.375c0 .21-.187.375-.375.375H10a.37.37 0 0 1-.375-.375V14c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='bb9f6ff3e19cda959e78323a48cb71b3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeCaptionRegularIcon);
export default ForwardRef;
