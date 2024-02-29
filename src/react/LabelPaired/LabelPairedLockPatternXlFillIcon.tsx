import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9c0-1.64 1.313-3 3-3 1.078 0 2.063.61 2.578 1.5h3.797C12.891 6.61 13.875 6 15 6c1.078 0 2.063.61 2.578 1.5h3.797C21.891 6.61 22.875 6 24 6c1.64 0 3 1.36 3 3 0 1.688-1.36 3-3 3-.281 0-.562 0-.797-.094L17.86 17.25c.094.234.141.516.141.75 0 1.688-1.36 3-3 3-.281 0-.562 0-.797-.094L9.61 25.5h2.766c.516-.89 1.5-1.5 2.625-1.5 1.078 0 2.063.61 2.578 1.5h3.797c.516-.89 1.5-1.5 2.578-1.5 1.688 0 3 1.36 3 3 0 1.688-1.312 3-3 3-1.078 0-2.062-.562-2.578-1.5h-3.797c-.515.938-1.5 1.5-2.625 1.5-1.078 0-2.062-.562-2.578-1.5H8.578C8.063 29.438 7.078 30 6 30c-1.687 0-3-1.312-3-3 0-1.64 1.313-3 3-3 .234 0 .516.047.75.14l5.344-5.343a2.2 2.2 0 0 1-.14-.797c0-1.64 1.358-3 3-3 .28 0 .562.047.796.14l4.594-4.64h-2.766c-.515.938-1.5 1.5-2.625 1.5-1.078 0-2.062-.562-2.578-1.5H8.578C8.063 11.438 7.078 12 6 12c-1.687 0-3-1.312-3-3m0 9c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0C8.39 20.063 9 19.078 9 18c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C3.563 15.984 3 16.969 3 18m18 0c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625 0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578' />
    </g>
    <defs>
      <clipPath id='f3ec48f71c01c4e0aa2325dda6f8ab23__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternXlFillIcon);
export default ForwardRef;
