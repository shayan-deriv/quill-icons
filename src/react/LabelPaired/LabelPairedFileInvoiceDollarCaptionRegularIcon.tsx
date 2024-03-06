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
      <path d='M8.25 14V8H5.625a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9q0 .328.21.54.212.21.54.21h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54m0-6.75a.6.6 0 0 0-.117-.164L5.414 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zM0 5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.656q.469 0 .797.328l2.719 2.719Q9 6.875 9 7.344V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14zm1.5.375q.023-.352.375-.375h1.5q.352.023.375.375-.023.352-.375.375h-1.5q-.352-.023-.375-.375m0 1.5q.023-.352.375-.375h1.5q.352.023.375.375-.023.352-.375.375h-1.5q-.352-.023-.375-.375m3.375 2.344v.304q.304.047.563.118.327.093.28.445-.116.328-.468.281a4.6 4.6 0 0 0-.75-.117q-.328 0-.586.117-.188.117-.164.235-.023.045.164.164.234.117.68.21l.023.024q.422.094.844.281.468.235.539.844-.047.68-.562.914a1.7 1.7 0 0 1-.563.188v.328q-.023.327-.375.375-.352-.048-.375-.375v-.352a8 8 0 0 1-.703-.164 1 1 0 0 1-.117-.047H3.28q-.328-.14-.258-.469.118-.327.47-.257.069.022.163.046.47.165.867.188.33 0 .563-.117.188-.094.164-.235.023-.093-.164-.21a3.7 3.7 0 0 0-.68-.235h-.07a3.5 3.5 0 0 1-.774-.281q-.492-.21-.562-.82.07-.68.586-.891.258-.14.539-.188V9.22q.046-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='37e5fa6135cdea8c04d62ac3e4eb3e30__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarCaptionRegularIcon);
export default ForwardRef;
