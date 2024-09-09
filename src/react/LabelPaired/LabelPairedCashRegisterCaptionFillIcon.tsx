import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h5.25c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75H4.875v.75h5.086c.726 0 1.36.563 1.476 1.29l.516 3.491c.024.117.047.235.047.352V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14v-1.617c0-.117 0-.235.023-.328L.54 8.539c.117-.726.75-1.289 1.5-1.289h1.336V6.5H1.5a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75m.75 1.125A.385.385 0 0 0 1.875 5c0 .21.164.375.375.375H6A.385.385 0 0 0 6.375 5 .4.4 0 0 0 6 4.625zm-.75 9c0 .21.164.375.375.375h8.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-8.25a.385.385 0 0 0-.375.375m1.125-3.937a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563m2.813-.563a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M3.75 11.563A.555.555 0 0 0 4.313 11a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563m3.938-2.438a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M6 11.563A.555.555 0 0 0 6.563 11 .57.57 0 0 0 6 10.438a.555.555 0 0 0-.562.562c0 .328.234.563.562.563m3.938-2.438a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M8.25 11.563A.555.555 0 0 0 8.813 11a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563' />
    </g>
    <defs>
      <clipPath id='74b5615dfd6e22efa3b2d2d51448dce8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterCaptionFillIcon);
export default ForwardRef;
