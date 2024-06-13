import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 14V8H5.625A1.11 1.11 0 0 1 4.5 6.875V4.25h-3A.755.755 0 0 0 .75 5v9c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75m-.023-6.75c-.024-.047-.047-.117-.094-.164L5.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zM0 5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14zm1.5.375c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375m0 1.5c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375m3.375 2.344v.328c.188.023.375.047.54.094a.37.37 0 0 1 .28.445.37.37 0 0 1-.445.281 4.4 4.4 0 0 0-.773-.094.9.9 0 0 0-.563.118c-.14.07-.164.14-.164.21 0 .047 0 .094.14.165.165.093.4.14.704.234.258.07.586.164.843.305.282.14.54.422.563.843 0 .446-.258.727-.562.915-.165.093-.375.14-.563.187v.305c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.328a5.5 5.5 0 0 1-.727-.188c-.046-.023-.093-.023-.14-.047-.188-.047-.305-.258-.258-.469a.41.41 0 0 1 .469-.257c.07.023.117.046.164.07.328.094.586.164.867.164.234.023.445-.023.586-.094.117-.07.164-.164.164-.258 0-.046-.023-.117-.164-.187-.164-.094-.399-.164-.703-.234l-.024-.024c-.257-.07-.562-.14-.82-.281-.258-.14-.539-.399-.539-.82 0-.446.281-.727.563-.891.187-.094.374-.14.562-.164v-.328a.37.37 0 0 1 .375-.375.37.37 0 0 1 .375.375' />
    </g>
    <defs>
      <clipPath id='1f8d66ea81c0f2c60a30ab7edcaf35cf__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarCaptionRegularIcon);
export default ForwardRef;
