import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 6h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 8.25h-3.75a.37.37 0 0 0-.375.375v3.75A1.11 1.11 0 0 1 1.125 13.5C.469 13.5 0 13.031 0 12.375v-3.75C0 7.219 1.172 6 2.625 6m15 0h3.75C22.781 6 24 7.219 24 8.625v3.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-3.75a.4.4 0 0 0-.375-.375h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M2.25 23.625v3.75c0 .234.14.375.375.375h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 30h-3.75A2.62 2.62 0 0 1 0 27.375v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m21.75 0v3.75C24 28.828 22.781 30 21.375 30h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75a.37.37 0 0 0 .375-.375v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M4.5 18c0-2.672 1.406-5.11 3.75-6.469 2.297-1.36 5.156-1.36 7.5 0 2.297 1.36 3.75 3.797 3.75 6.469 0 2.719-1.453 5.156-3.75 6.516-2.344 1.359-5.203 1.359-7.5 0A7.46 7.46 0 0 1 4.5 18m6-1.875A1.14 1.14 0 0 0 9.375 15a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125m4.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 14.625 15a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125m-6.703 2.484c-.281.282-.281.75 0 1.078A5.78 5.78 0 0 0 12 22.5c1.594 0 3-.656 4.031-1.687.282-.329.282-.797 0-1.079-.328-.28-.797-.28-1.078 0A4 4 0 0 1 12 21c-1.172 0-2.25-.469-3-1.266-.281-.28-.75-.28-1.078 0' />
    </g>
    <defs>
      <clipPath id='48f0ebad77d2edfa2e13bb5693f800f7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderXlFillIcon);
export default ForwardRef;
