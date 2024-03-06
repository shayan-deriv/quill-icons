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
      <path d='M2.625 6h3.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-3.75q-.328.047-.375.375v3.75q-.093 1.032-1.125 1.125Q.095 13.407 0 12.375v-3.75Q.047 7.5.75 6.75 1.5 6.047 2.625 6m15 0h3.75q1.125.046 1.875.75.704.75.75 1.875v3.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-3.75q-.046-.328-.375-.375h-3.75q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125M2.25 23.625v3.75q.046.329.375.375h3.75q1.032.094 1.125 1.125Q7.407 29.907 6.375 30h-3.75Q1.5 29.954.75 29.25.047 28.5 0 27.375v-3.75q.095-1.03 1.125-1.125 1.032.094 1.125 1.125m21.75 0v3.75q-.046 1.125-.75 1.875-.75.704-1.875.75h-3.75q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125h3.75q.329-.046.375-.375v-3.75q.094-1.03 1.125-1.125 1.032.094 1.125 1.125M4.5 18a7.47 7.47 0 0 1 .984-3.75 7.8 7.8 0 0 1 2.766-2.766A7.64 7.64 0 0 1 12 10.5q1.97 0 3.75.984a7.8 7.8 0 0 1 2.766 2.766A7.47 7.47 0 0 1 19.5 18a7.47 7.47 0 0 1-.984 3.75 7.8 7.8 0 0 1-2.766 2.766A7.64 7.64 0 0 1 12 25.5a7.64 7.64 0 0 1-3.75-.984 7.8 7.8 0 0 1-2.766-2.766A7.47 7.47 0 0 1 4.5 18m6-1.875q-.093-1.03-1.125-1.125-1.03.095-1.125 1.125.095 1.032 1.125 1.125 1.032-.093 1.125-1.125m4.125 1.125q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125-1.03.095-1.125 1.125.095 1.032 1.125 1.125m-6.656 2.484q-.469.516-.047 1.032Q9.562 22.454 12 22.5q2.437-.047 4.078-1.734.422-.516-.047-1.032-.515-.468-1.031 0-1.172 1.22-3 1.266-1.781-.046-2.953-1.266-.563-.468-1.078-.047z' />
    </g>
    <defs>
      <clipPath id='1cfcc226df581b42dd06010240677c03__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderXlFillIcon);
export default ForwardRef;
