import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.594 8.586a1.97 1.97 0 0 0 1.71-2.953 2.05 2.05 0 0 0-1.71-1.008 2 2 0 0 0-1.711 1.008 1.97 1.97 0 0 0 1.71 2.953m-1.969.422v4.5a.88.88 0 0 0 .867.867h4.5c-.445-.516-.703-1.219-.703-1.969 0-1.008.492-1.922 1.266-2.484L7.078 8.445a3.04 3.04 0 0 1-2.484 1.266c-.75 0-1.453-.258-1.969-.703m7.758 5.367a1.95 1.95 0 0 0 1.969-1.969 1.965 1.965 0 0 0-1.97-1.969q-.386 0-.702.141h-.024a1.97 1.97 0 0 0-1.242 1.828c0 1.102.89 1.969 1.969 1.969m-.75-4.969c.234-.07.492-.094.75-.094 1.71 0 3.117 1.383 3.117 3.094S12.094 15.5 10.383 15.5h-6.89A1.99 1.99 0 0 1 1.5 13.508v-6.89C1.5 4.905 2.883 3.5 4.594 3.5s3.093 1.406 3.093 3.117c0 .258-.023.516-.093.75zm1.125-3.726a.57.57 0 0 1 .562.562v2.18a.56.56 0 0 1-.351.515.54.54 0 0 1-.61-.117L8.18 6.64c-.21-.21-.21-.562 0-.796a.58.58 0 0 1 .798 0l1.218 1.218v-.82c0-.304.235-.562.563-.562m-.094 5.039h-.539v.234a.88.88 0 0 0-.61.844c0 .492.4.89.868.89a.32.32 0 0 1 .328.329c0 .164-.14.328-.328.328a.35.35 0 0 1-.328-.328v-.094h-.54v.094a.85.85 0 0 0 .61.82v.258h.54v-.235c.35-.14.608-.468.608-.843a.89.89 0 0 0-.89-.891.335.335 0 0 1-.328-.328c0-.188.164-.328.328-.328a.32.32 0 0 1 .328.328v.07h.562v-.07c0-.375-.257-.703-.609-.844zM4.242 5.023h-.445v.47h-.445v.444h.445v1.36h-.445v.445h.445v.446h.445v-.446h.469v.446h.445v-.446a.676.676 0 0 0 .657-.68.62.62 0 0 0-.165-.445.673.673 0 0 0-.046-.96.62.62 0 0 0-.446-.165v-.469h-.445v.47h-.469zm.914 1.805c.117 0 .211.117.211.234s-.094.235-.21.235h-.915v-.469zm0-.89c.117 0 .211.093.211.234a.21.21 0 0 1-.21.21h-.915v-.444z' />
    </g>
    <defs>
      <clipPath id='f84ac617c2a130964f1b645161bfc3b0__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpCaptionBoldIcon);
export default ForwardRef;
